import React, { HTMLAttributes, useEffect, useState } from 'react';
import Typography from '../../components/Typography';

import {
  SiReact,
  SiNextdotjs,
  SiFirebase,
  SiFigma,
  SiGit,
} from 'react-icons/si'

import {
  RiReactjsLine,
} from 'react-icons/ri'

import { 
  Container,
  Content
} from './styles';

interface SkillsProps extends HTMLAttributes<HTMLDivElement>{
}

const skillsDescription = [
  {
    id: "react",
    tool: "ReactJS",
    description: "Biblioteca criada pelo Facebook com foco na criação de interfaces de forma declarativa, eficiente e flexível."
  },
  {
    id: "next",
    tool: "NextJS",
    description: "Next.js é uma estrutura da web de desenvolvimento front-end React de código aberto criada pela Vercel que permite funcionalidades como renderização do lado do servidor e geração de sites estáticos para aplicativos da web baseados em React."
  },
  {
    id: "reactnative",
    tool: "React Native",
    description: "React Native é uma biblioteca Javascript criada pelo Facebook. É usada para desenvolver aplicativos para os sistemas Android e iOS de forma nativa."
  },
  {
    id: "firebase",
    tool: "Firebase",
    description: "Firebase é uma plataforma desenvolvida pelo Google para a criação de aplicativos móveis e da web."
  },
  {
    id: "figma",
    tool: "Figma",
    description: "O Figma é uma ferramenta de UI online e gratuita, feita para criar, colaborar, prototipar e inspecionar."
  },
  {
    id: "git",
    tool: "Git",
    description: "É um sistema de controle de versões distribuído, usado principalmente no desenvolvimento de software, mas pode ser usado para registrar o histórico de edições de qualquer tipo de arquivo."
  },
  {
    id: "azure",
    tool: "Azure",
    description: "azure"
  },
  {
    id: "vscode",
    tool: "VS Code",
    description: "vscode"
  },
]

export const Skills: React.FC<SkillsProps> = ({...props}) => {
  const [skillActive, setSkillActive] = useState('');

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
          <SiReact 
            size="4rem" 
            onMouseEnter={() => setSkillActive("react")}
            onMouseLeave={() => setSkillActive("")}
          />
          <SiNextdotjs 
            size="4rem" 
            onMouseEnter={() => setSkillActive("next")}
            onMouseLeave={() => setSkillActive("")}
          />
          <RiReactjsLine 
            size="4rem" 
            onMouseEnter={() => setSkillActive("reactnative")}
            onMouseLeave={() => setSkillActive("")}
          />
          <SiFirebase 
            size="4rem" 
            onMouseEnter={() => setSkillActive("firebase")}
            onMouseLeave={() => setSkillActive("")}
          />
          <SiFigma 
            size="4rem" 
            onMouseEnter={() => setSkillActive("figma")}
            onMouseLeave={() => setSkillActive("")}
          />
          <SiGit 
            size="4rem" 
            onMouseEnter={() => setSkillActive("git")}
            onMouseLeave={() => setSkillActive("")}
          />
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