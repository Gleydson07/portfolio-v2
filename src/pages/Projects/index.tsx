import React, { HTMLAttributes } from 'react';
import Typography from '../../components/Typography';

import {
  SiReact,
  SiStyledcomponents,
  SiFirebase,
  SiSass,
  SiMaterialui
} from 'react-icons/si'

import beepImg from '../../assets/imgs/projects/beep.png';
import pokemonImg from '../../assets/imgs/projects/pokemon.png';
import whatstheanswerImg from '../../assets/imgs/projects/whatstheanswer.png';

import { 
  Container,
  Content
} from './styles';
import CardProject from '../../components/CardProject';
import { useTheme } from '../../hooks/useTheme';

const projectsList = [
  {
    image: beepImg,
    title: "BEEP",
    description: {
      id: "app.projects.one.description",
      messageDefault: "Trabalho freelancer de desenvolvimento da interface de uma plataforma de acompanhamento e gestão financeira."
    },
    tools: [
      {
        icon: <SiReact/>,
        tooltip: "React",
      },
      {
        icon: <SiStyledcomponents/>,
        tooltip: "Styled-Components"
      }
    ],
  },
  {
    image: whatstheanswerImg,
    title: "Whats the answer?",
    description: {
      id: "app.projects.two.description",
      messageDefault: "Desafio proposto durante um processo seletivo para desenvolvedor frontend. Trata-se de um formulário de perguntas e respostas sobre assuntos diversos, ao fim temos um resumo das respostas."
    },
    tools: [
      {
        icon: <SiReact/>,
        tooltip: "React",
      },
      {
        icon: <SiMaterialui/>,
        tooltip: "Material UI",
      },      
    ],
    pageLink: "https://whatstheanswer.vercel.app/",
    githubLink: "https://github.com/Gleydson07/whats_the_answer",
  },
  {
    image: pokemonImg,
    title: "Pokemon Edu",
    description: {
      id: "app.projects.three.description",
      messageDefault: "É um game que tem como finalidade permitir que crianças possam práticar os ensinamentos adquiridos na escola de maneira lúdica usando a temática do jogo POKEMON."
    },
    tools: [
      {
        icon: <SiReact/>,
        tooltip: "React",
      },
      {
        icon: <SiFirebase/>,
        tooltip: "Firebase",
      },
      {
        icon: <SiSass/>,
        tooltip: "Sass",
      },
    ],
    pageLink: "https://pokemon-education.web.app/",
    githubLink: "https://github.com/Gleydson07/pokemon-edu",
  },
]
interface ProjectsProps extends HTMLAttributes<HTMLDivElement>{
}

export const Projects: React.FC<ProjectsProps> = ({...props}) => {
  const {theme} = useTheme();

  return (
    <Container 
      id="projects"
      theme={theme}
      {...props}
    >
      <Content theme={theme}>
        <Typography
          className='subtitle-medium'
          htmlElement='h2'
          translateId='app.projects.title'
          messageDefault='PROJECTS'
        />

        <div className='content'>
          {projectsList.map(item => (
            <CardProject
              key={item.title}
              image={item.image}
              title={item.title}
              translateId={item.description.id}
              messageDefault={item.description.messageDefault}
              tools={item.tools}
              pageLink={item.pageLink}
              githubLink={item.githubLink}
            />
          ))}
        </div>
      </Content>
    </Container>
  );
}