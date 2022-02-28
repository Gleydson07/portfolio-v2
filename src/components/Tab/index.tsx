import React, { MouseEvent, useState } from 'react';
import Typography from '../Typography';

import { Container, Content } from './styles';

interface TabProps {
  data: {
    company: string,
    work: {
      position: string,
      descriptions: string[],
      date: {
        initial: string,
        final?: string
      }
    }
  }[]
}

const Tab: React.FC<TabProps> = ({
  data
}) => {
  const [currentTab, setCurrentTab] = useState(data[0].company.toLowerCase())
  
  const handleClickTab = (event: MouseEvent<HTMLButtonElement>) => {
    const target:any = event.target;
    setCurrentTab(target.id);
  }

  return (
    <Container>
      <aside>
        {data.map((item) => (
          <button
            id={item.company.toLowerCase()}
            key={item.company.toLowerCase()}
            className={`${currentTab === item.company.toLowerCase() ? "active" : ""}`}
            onClick={handleClickTab}
          >
            {item.company}
          </button>
        ))}
      </aside>

      <Content>
        {data.map(item => 
          currentTab === item.company.toLowerCase() &&
            <section key={item.company}>
              <Typography
                className='subtitle-small'
                htmlElement='h4'
              >
                {item.work.position}
              </Typography>

              <div className='company-container'>
                <Typography
                  className='tag'
                  htmlElement='p'
                >
                  {item.company}
                </Typography>

                <Typography
                  className='tag'
                  htmlElement='p'
                >
                  {`${item.work.date.initial} ${item.work.date.final ? ` - ${item.work.date.final}` : ""}`}
                </Typography>
              </div>
              
              <div className='description-container'>
                {item.work.descriptions.map(item => (
                  <Typography
                    key={item}
                    className='phrase'
                    htmlElement='span'
                  >
                    {item}
                  </Typography>
                ))}
              </div>
            </section>
        )}
      </Content>
    </Container>
  );
}

export default Tab;