import React, { HTMLAttributes } from 'react';
import Tab from '../../components/Tab';
import Typography from '../../components/Typography';
import { useTheme } from '../../hooks/useTheme';

import { 
  Container,
  Content
} from './styles';

interface ExperienceProps extends HTMLAttributes<HTMLDivElement>{
}

const tabContent = [
  {
    id: 1,
    company: {
      id: "app.experience.one.company",
      messageDefault: "E-Confi"
    },
    work: {
      position: {
        id: "app.experience.one.position",
        messageDefault: "Desenvolvedor web front-end",
      },
      descriptions: [
        {
          id: "app.experience.one.description-one",
          messageDefault: "Criar aplicações com interfaces responsivas, códigos bem estruturados, eficientes e testáveis, fazendo uso das melhores práticas de desenvolvimento de software. Integrar dados através do consumo de serviços back-end, ferramentas de monitoramento de erros, Headless CMS, criar e manter documentação das funcionalidades desenvolvidas, entre outros."
        },
        {
          id: "app.experience.one.description-two",
          messageDefault: "Ferramentas mais usadas: ReactJS, NextJs, Typescript."
        }        
      ],
      date: {
        id: "app.experience.one.date",
        messageDefault: "09/08/2021 - 09/05/2022"
      },
    },
  },
  // {
  //   id: 2,
  //   company: {
  //     id: "app.experience.two.company",
  //     messageDefault: "Trinus Co"
  //   },
  //   work: {
  //     position: {
  //       id: "app.experience.two.position",
  //       messageDefault: "Desenvolvedor full-stack",
  //     },
  //     descriptions: [
  //       {
  //         id: "app.experience.two.description-one",
  //         messageDefault: "Desenvolvimento de interfaces front-end e back-end baseados na stack Javascript, aplicando princípios de desenvolvimento SOLID, testes unitário e de integração, além das melhores práticas de clean code."
  //       },
  //       {
  //         id: "app.experience.two.description-two",
  //         messageDefault: "Ferramentas mais usadas: ReactJS, NextJs, Typescript, Prismic, NodeJS, Prisma, NestJS, Express."
  //       }        
  //     ],
  //     date: {
  //       id: "app.experience.two.date",
  //       messageDefault: "06/06/2022 - Atualmente"
  //     },
  //   },
  // },
]

export const Experience: React.FC<ExperienceProps> = ({...props}) => {
  const {theme} = useTheme();

  return (
    <Container  
      id="experience" 
      theme={theme}
      {...props}
    >
      <span className='circle-orange'></span>
      <Content theme={theme}>
        <Typography
          className='subtitle-medium'
          htmlElement='h2'
          translateId='app.experience.title'
          messageDefault='EXPERIÊNCIA'
        />

        <div className='content'>
          <Tab
            data={tabContent}
          />
        </div>
      </Content>

    </Container>
  );
}