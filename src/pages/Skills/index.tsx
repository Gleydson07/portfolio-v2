import React, { HTMLAttributes, useState } from 'react';
import Typography from '../../components/Typography';

import {
  SiReact,
  SiNextdotjs,
  SiFirebase,
  SiFigma,
  SiPostgresql,
  SiMicrosoftsqlserver,
  SiNestjs,
  SiNodedotjs,
} from 'react-icons/si';

import { 
  Container,
  Content
} from './styles';
import { useTheme } from '../../hooks/useTheme';

interface SkillsProps extends HTMLAttributes<HTMLDivElement>{
}

const ICON_SIZE = "4rem";

const skillsDescription = [
  {
    id: "react",
    translateId: "app.skills.react",
    tool: "ReactJS",
    icon: <SiReact size={ICON_SIZE}/>,
    messageDefault: "Biblioteca criada pelo Facebook com foco na criação de interfaces de forma declarativa, eficiente e flexível.",
  },
  {
    id: "next",
    translateId: "app.skills.next",
    tool: "NextJS",
    icon: <SiNextdotjs size={ICON_SIZE}/>,
    messageDefault: "Next.js é uma estrutura da web de desenvolvimento front-end React de código aberto criada pela Vercel que permite funcionalidades como renderização do lado do servidor e geração de sites estáticos para aplicativos da web baseados em React.",
  },
  {
    id: "firebase",
    translateId: "app.skills.firebase",
    tool: "Firebase",
    icon: <SiFirebase size={ICON_SIZE}/>,
    messageDefault: "Firebase é uma plataforma desenvolvida pelo Google para a criação de aplicativos móveis e da web.",
  },
  {
    id: "figma",
    translateId: "app.skills.figma",
    tool: "Figma",
    icon: <SiFigma size={ICON_SIZE}/>,
    messageDefault: "O Figma é uma ferramenta de UI online e gratuita, feita para criar, colaborar, prototipar e inspecionar.",
  },
  {
    id: "nodejs",
    translateId: "app.skills.nodejs",
    tool: "NodeJS",
    icon: <SiNodedotjs size={ICON_SIZE}/>,
    messageDefault: "Node.js é um software de código aberto, multiplataforma, baseado no interpretador V8 do Google e que permite a execução de códigos JavaScript fora de um navegador web.",
  },
  {
    id: "nestjs",
    translateId: "app.skills.nestjs",
    tool: "NestJS",
    icon: <SiNestjs size={ICON_SIZE}/>,
    messageDefault: "NestJS é um framework Node.js de código aberto destinado ao desenvolvimento de aplicativos do lado do servidor.",
  },
  {
    id: "postgres",
    translateId: "app.skills.postgres",
    tool: "Postgres",
    icon: <SiPostgresql size={ICON_SIZE}/>,
    messageDefault: "PostgreSQL é um sistema gerenciador de banco de dados objeto relacional, desenvolvido como projeto de código aberto",
  },
  {
    id: "sqlserver",
    translateId: "app.skills.sqlserver",
    tool: "SQL Server",
    icon: <SiMicrosoftsqlserver size={ICON_SIZE}/>,
    messageDefault: "O Microsoft SQL Server é um sistema gerenciador de Banco de dados relacional mantido pela Microsoft",
  },
]

export const Skills: React.FC<SkillsProps> = ({...props}) => {
  const {theme} = useTheme();
  const [skillActive, setSkillActive] = useState('');

  return (
    <Container 
      id="skills"
      theme={theme}
      {...props}
    >
      <Content 
        skillDescriptionVisibility={!!skillActive} 
        theme={theme}
      >
        <Typography
          className='subtitle-medium'
          htmlElement='h2'
          translateId='app.skills.title'
          messageDefault='HABILIDADES'
        />

        <div className='content'>
          {skillsDescription.map(item => (
            <div 
              key={item.id}
              className="tool-wrapper"
              onMouseEnter={() => setSkillActive(item.id)}
              onMouseLeave={() => setSkillActive("")}
            >
              {item.icon}
              <Typography 
                className='text'
                htmlElement='strong'
              >
                {item.tool}
              </Typography>
            </div>
          ))}
        </div>

        <div className='skill-description-wrapper'>
          <div className='skill-description'>
            <Typography
              className='phrase'
              htmlElement='h6'
            >
              {skillsDescription.find(item => item.id === skillActive)?.tool || ""}
            </Typography>

            <Typography
              className='tag'
              htmlElement='span'
              translateId={skillsDescription.find(item => item.id === skillActive)?.translateId}
              messageDefault={skillsDescription.find(item => item.id === skillActive)?.messageDefault}
            />
          </div>
          
        </div>
      </Content>
    </Container>
  );
}