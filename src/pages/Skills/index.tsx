import React, { HTMLAttributes, useState } from 'react';
import Typography from '../../components/Typography';

import {
  SiReact,
  SiNextdotjs,
  SiFirebase,
  SiFigma,
  SiGit,
} from 'react-icons/si';

import {
  RiReactjsLine,
} from 'react-icons/ri'

import { 
  Container,
  Content
} from './styles';
import { useTheme } from '../../hooks/useTheme';

interface SkillsProps extends HTMLAttributes<HTMLDivElement>{
}

export const Skills: React.FC<SkillsProps> = ({...props}) => {
  const {theme} = useTheme();
  const [skillActive, setSkillActive] = useState('');
  
  const skillsDescription = [
    {
      id: "react",
      translateId: "app.skills.react",
      tool: "ReactJS",
      icon: <SiReact size="4rem"/>,
      messageDefault: "Biblioteca criada pelo Facebook com foco na criação de interfaces de forma declarativa, eficiente e flexível.",
    },
    {
      id: "next",
      translateId: "app.skills.next",
      tool: "NextJS",
      icon: <SiNextdotjs size="4rem"/>,
      messageDefault: "Next.js é uma estrutura da web de desenvolvimento front-end React de código aberto criada pela Vercel que permite funcionalidades como renderização do lado do servidor e geração de sites estáticos para aplicativos da web baseados em React.",
    },
    {
      id: "reactnative",
      translateId: "app.skills.reactnative",
      tool: "React Native",
      icon: <RiReactjsLine size="4rem"/>,
      messageDefault: "React Native é uma biblioteca Javascript criada pelo Facebook. É usada para desenvolver aplicativos para os sistemas Android e iOS de forma nativa.",
    },
    {
      id: "firebase",
      translateId: "app.skills.firebase",
      tool: "Firebase",
      icon: <SiFirebase size="4rem"/>,
      messageDefault: "Firebase é uma plataforma desenvolvida pelo Google para a criação de aplicativos móveis e da web.",
    },
    {
      id: "figma",
      translateId: "app.skills.figma",
      tool: "Figma",
      icon: <SiFigma size="4rem"/>,
      messageDefault: "O Figma é uma ferramenta de UI online e gratuita, feita para criar, colaborar, prototipar e inspecionar.",
    },
    {
      id: "git",
      translateId: "app.skills.git",
      tool: "Git",
      icon: <SiGit size="4rem"/>,
      messageDefault: "É um sistema de controle de versões distribuído, usado principalmente no desenvolvimento de software, mas pode ser usado para registrar o histórico de edições de qualquer tipo de arquivo.",
    }
  ]

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