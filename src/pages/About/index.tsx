import React, { HTMLAttributes } from 'react';
import Typography from '../../components/Typography';

import meImg from '../../assets/imgs/about/me6.png'

import {
  FaGithub,
  FaLinkedinIn,
  FaWhatsapp
} from 'react-icons/fa'

import {
  SiGmail
} from 'react-icons/si'

import { 
  Container,
  Content
} from './styles';
import { useTheme } from '../../hooks/useTheme';

interface AboutProps extends HTMLAttributes<HTMLDivElement>{
}

export const About: React.FC<AboutProps> = ({...props}) => {
  const {theme} = useTheme();

  return (
    <Container 
      id="about"
      theme={theme}
      {...props}
    >
      <Content theme={theme} >
        <Typography
          className='subtitle-medium'
          htmlElement='h2'
          translateId='app.about.title'
          messageDefault='SOBRE MIM'
        />

        <div className='content'>
          <figure>
            <img src={meImg} alt="me" />
          </figure>
          <div className='description-container'>
            <Typography
              className='phrase'
              htmlElement='p'
              translateId='app.about.paragraph-one'
              messageDefault='Me considero um entusiasta de tecnologia e seus impactos em nosso cotidiano, gosto de buscar desafios e me colocar fora da zona de conforto. Tenho formação em Sistemas de Informação e sou pós-graduado em Engenharia de Software, estou sempre em busca de novos aprendizados nas mais diversas áreas de conhecimento, pois acredito que o conhecimento é fundamental para o sucesso.'
            />
            
            <Typography
              className='phrase'
              htmlElement='p'
              translateId='app.about.paragraph-two'
              messageDefault='Ao passo que aprimoro minhas habilidades e amplio meu conhecimento, percebo que o aprendizado é um processo prazeroso e infinito de constante evolução.'
            />

          </div>
        </div>

        <div className='social-medias'>
          <a href="https://www.linkedin.com/in/gsantosdev/" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn size="2rem" aria-label="socialmedia-linkedin"/>
          </a>
          <a href="https://github.com/Gleydson07" target="_blank" rel="noopener noreferrer">
            <FaGithub size="2rem" aria-label="socialmedia-github"/>
          </a>
          <a href="https://api.whatsapp.com/send?phone=558281114246&text=Ol%C3%A1!!" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp size="2rem" aria-label="socialmedia-whatsapp"/>
          </a>
          <a href="mailto:https://mail.google.com/mail/u/0/?fs=1&to=gassantos.dev@gmail.com&su=Ol%C3%A1!%20fala%20aqui%20qual%20assunto%20legal%20que%20vamos%20tratar.&body=Aqui%20voc%C3%AA%20pode%20descrever%20melhor%20sua%20mensagem,%20pode%20ser%20uma%20pergunta,%20uma%20sugest%C3%A3o,%20um%20convite%20para%20um%20caf%C3%A9%20%F0%9F%98%80&tf=cm" target="_blank" rel="noopener noreferrer">
            <SiGmail size="2rem" aria-label="socialmedia-gmail"/>
          </a>

        </div>
      </Content>

      <span className='circle-yellow'></span>
    </Container>   
  );
}