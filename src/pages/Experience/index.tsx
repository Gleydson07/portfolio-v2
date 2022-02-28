import React, { HTMLAttributes } from 'react';
import Tab from '../../components/Tab';
import Typography from '../../components/Typography';

import { 
  Container,
  Content
} from './styles';

interface ExperienceProps extends HTMLAttributes<HTMLDivElement>{
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
  {
    company: "AglSolutions",
    work: {
      position: "Desenvolvedor web front-end",
      descriptions: [
        "Desenvolvimento de uma solução que envolve o mercado financeiro, permitindo que seus clientes possam tomar decisões de acordo com os dados fornecidos. ",

        "Ferramentas mais usadas: ReactJS, Typescript, Styled-Components."
      ],
      date: {
        initial: "Freelancer",
      }
    },
  },
]

export const Experience: React.FC<ExperienceProps> = ({...props}) => {
  return (
    <Container  
      id="experience"
      {...props}
    >
      <Content>
        <Typography
          className='subtitle-medium'
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

      <span className='circle-orange'></span>
    </Container>
  );
}