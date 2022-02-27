import React, { HTMLAttributes } from 'react';
import Tab from '../../components/Tab';
import Typography from '../../components/Typography';

import { 
  Container,
  Content
} from './styles';

interface AboutProps extends HTMLAttributes<HTMLDivElement>{
}

const tabContent = [
  {
    company: "E-Confi",
    work: {
      position: "Desenvolvedor web front-end",
      descriptions: [
        "Criar aplicações com interfaces responsivas, criar códigos bem estruturados, eficientes e testáveis, fazendo uso das melhores práticas de desenvolvimento de software. Integrar dados através do consumo de serviços back-end, criar e manter documentação dos softwares desenvolvidos, entre outros.",

        "Ferramentas mais usadas: ReactJS, NextJs, Typescript."
      ],
      date: {
        initial: "09/08/2021",
        final: "Atual"
      }
    },
  },
]

export const Experience: React.FC<AboutProps> = ({...props}) => {
  return (
    <Container 
      id="experience"
      {...props}
    >
      <Content>
        <Typography
          className='subtitle'
          htmlElement='h2'
        >
          EXPERIÊNCIA
        </Typography>

        <div className='content'>
          <Tab
            data={tabContent}
          />
        </div>
      </Content>
    </Container>
  );
}