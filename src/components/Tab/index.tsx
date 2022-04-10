import React, { MouseEvent, useState } from 'react';
import { useTheme } from '../../hooks/useTheme';
import loadLangText from '../../utils/TextConvert';
import Typography from '../Typography';

import { Container, Content } from './styles';

interface TabProps {
  data: {
    id: number,
    company: {
      id: string,
      messageDefault: string
    },
    work: {
      position: {
        id: string,
        messageDefault: string
      },
      descriptions: {
        id: string,
        messageDefault: string
      }[],
      date: {
        id: string,
        messageDefault: string
      }
    }
  }[]
}

const Tab: React.FC<TabProps> = ({
  data
}) => {
  const {theme} = useTheme();
  const [currentTab, setCurrentTab] = useState(String(data[0].id))
  
  const handleClickTab = (event: MouseEvent<HTMLButtonElement>) => {
    const target:any = event.target;
    setCurrentTab(target.id);
  }

  return (
    <Container theme={theme}>
      <aside>
        {data.map((item) => (
          <button
            id={String(item.id)}
            key={String(item.id)}
            className={`${currentTab === String(item.id) ? "active" : ""}`}
            onClick={handleClickTab}
          >
            {loadLangText(item.company.id, item.company.messageDefault)}
          </button>
        ))}
      </aside>

      <Content theme={theme}>
        {data.map(item => 
          currentTab === String(item.id) &&
            <section key={item.company.id}>
              <Typography
                className='subtitle-small'
                htmlElement='h4'
                translateId={item.work.position.id}
                messageDefault={item.work.position.messageDefault}
              />

              <div className='company-container'>
                <Typography
                  className='tag'
                  htmlElement='p'
                  translateId={item.company.id}
                  messageDefault={item.company.messageDefault}
                />

                <Typography
                  className='tag'
                  htmlElement='p'
                  translateId={item.work.date.id}
                  messageDefault={item.work.date.messageDefault}
                />
              </div>
              
              <div className='description-container'>
                {item.work.descriptions.map(item => (
                  <Typography
                    key={item.id}
                    className='phrase'
                    htmlElement='span'
                    translateId={item.id}
                    messageDefault={item.messageDefault}
                  />
                ))}
              </div>
            </section>
        )}
      </Content>
    </Container>
  );
}

export default Tab;