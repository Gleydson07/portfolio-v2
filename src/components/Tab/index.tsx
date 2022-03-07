import React, { MouseEvent, useState } from 'react';
import loadLangText from '../../utils/TextConvert';
import Typography from '../Typography';

import { Container, Content } from './styles';

interface TabProps {
  data: {
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
  const [currentTab, setCurrentTab] = useState(data[0].company.messageDefault.toLowerCase())
  
  const handleClickTab = (event: MouseEvent<HTMLButtonElement>) => {
    const target:any = event.target;
    setCurrentTab(target.id);
  }

  return (
    <Container>
      <aside>
        {data.map((item) => (
          <button
            id={item.company.messageDefault.toLowerCase()}
            key={item.company.messageDefault.toLowerCase()}
            className={`${currentTab === item.company.messageDefault.toLowerCase() ? "active" : ""}`}
            onClick={handleClickTab}
          >
            {loadLangText(item.company.id, item.company.messageDefault)}
          </button>
        ))}
      </aside>

      <Content>
        {data.map(item => 
          currentTab === item.company.messageDefault.toLowerCase() &&
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