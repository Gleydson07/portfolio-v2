import React, { HTMLAttributes, useState } from 'react';
import Typography from '../../components/Typography';

import {
  SiReact,
  SiNextdotjs,
  SiFirebase,
  SiFigma,
  SiGit,
  SiAzuredevops,
  SiVisualstudiocode,
} from 'react-icons/si';

import {
  RiReactjsLine,
} from 'react-icons/ri'

import { 
  Container,
  Content
} from './styles';

interface SkillsProps extends HTMLAttributes<HTMLDivElement>{
}


export const Skills: React.FC<SkillsProps> = ({...props}) => {
  const [skillActive, setSkillActive] = useState('');
  
  const skillsDescription = [
    {
      id: "react",
      tool: "ReactJS",
      icon: <SiReact 
        size="4rem"
        onMouseEnter={() => setSkillActive("react")}
        onMouseLeave={() => setSkillActive("")}
      />,
      description: "Biblioteca criada pelo Facebook com foco na criação de interfaces de forma declarativa, eficiente e flexível.",
    },
    {
      id: "next",
      tool: "NextJS",
      icon: <SiNextdotjs 
        size="4rem"
        onMouseEnter={() => setSkillActive("next")}
        onMouseLeave={() => setSkillActive("")}
      />,
      description: "Next.js é uma estrutura da web de desenvolvimento front-end React de código aberto criada pela Vercel que permite funcionalidades como renderização do lado do servidor e geração de sites estáticos para aplicativos da web baseados em React.",
    },
    {
      id: "reactnative",
      tool: "React Native",
      icon: <RiReactjsLine 
        size="4rem"
        onMouseEnter={() => setSkillActive("reactnative")}
        onMouseLeave={() => setSkillActive("")}
      />,
      description: "React Native é uma biblioteca Javascript criada pelo Facebook. É usada para desenvolver aplicativos para os sistemas Android e iOS de forma nativa.",
    },
    {
      id: "firebase",
      tool: "Firebase",
      icon: <SiFirebase 
        size="4rem"
        onMouseEnter={() => setSkillActive("firebase")}
        onMouseLeave={() => setSkillActive("")}
      />,
      description: "Firebase é uma plataforma desenvolvida pelo Google para a criação de aplicativos móveis e da web.",
    },
    {
      id: "figma",
      tool: "Figma",
      icon: <SiFigma 
        size="4rem"
        onMouseEnter={() => setSkillActive("figma")}
        onMouseLeave={() => setSkillActive("")}
      />,
      description: "O Figma é uma ferramenta de UI online e gratuita, feita para criar, colaborar, prototipar e inspecionar.",
    },
    {
      id: "git",
      tool: "Git",
      icon: <SiGit 
        size="4rem"
        onMouseEnter={() => setSkillActive("git")}
        onMouseLeave={() => setSkillActive("")}
      />,
      description: "É um sistema de controle de versões distribuído, usado principalmente no desenvolvimento de software, mas pode ser usado para registrar o histórico de edições de qualquer tipo de arquivo.",
    },
    // {
    //   id: "azure",
    //   tool: "Azure",
    //   icon: <SiAzuredevops 
    //     size="4rem"
    //     onMouseEnter={() => setSkillActive("azure")}
    //     onMouseLeave={() => setSkillActive("")}
    //   />,
    //   description: "azure",
    // },
    // {
    //   id: "vscode",
    //   tool: "VS Code",
    //   icon: <SiVisualstudiocode
    //     size="4rem"
    //     onMouseEnter={() => setSkillActive("vscode")}
    //     onMouseLeave={() => setSkillActive("")}
    //   />,
    //   description: "vscode",
    // },
  ]

  return (
    <Container 
      id="skills"
      {...props}
    >
      <Content skillDescriptionVisibility={!!skillActive}>
        <Typography
          className='subtitle-medium'
          htmlElement='h2'
        >
          SKILLS
        </Typography>

        <div className='content'>
          {skillsDescription.map(item => (
            <div 
              key={item.id}
              className="tool-wrapper"
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
            >
              {skillsDescription.find(item => item.id === skillActive)?.description || ""}
            </Typography>
          </div>
          
        </div>
      </Content>
    </Container>
  );
}