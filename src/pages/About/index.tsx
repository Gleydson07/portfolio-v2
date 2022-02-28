import React, { HTMLAttributes } from 'react';
import Typography from '../../components/Typography';

import me2Img from '../../assets/imgs/me2.png'

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

interface AboutProps extends HTMLAttributes<HTMLDivElement>{
}

export const About: React.FC<AboutProps> = ({...props}) => {
  return (
    <Container 
      id="about"
      {...props}
    >
      <Content>
        <Typography
          className='subtitle-medium'
          htmlElement='h2'
        >
          SOBRE MIM
        </Typography>

        <div className='content'>
          <figure>
            <img src={me2Img} alt="me" />
          </figure>
          <div className='description-container'>
            <Typography
              className='phrase'
              htmlElement='p'
            >
              Formado em Sistemas de informação em 2018 e atualmente pós-graduando em Engenharia de Software, sempre me considerei um entusiasta de tecnologia e seus impactos na sociedade. Gosto de desafios e busco 
              frequentemente me colocar fora da zona de conforto.
            </Typography>
            
            <Typography
              className='phrase'
              htmlElement='p'
            >
              Ao passo que aprimoro minhas habilidades e amplio meu conhecimento, percebo que o aprendizado é um processo prazeroso e infinito de constante evolução.
            </Typography>

          </div>
        </div>

        <div className='social-medias'>
          <a href="https://www.linkedin.com/in/gsantosdev/" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn size="2rem" color="white"/>
          </a>
          <a href="https://github.com/Gleydson07" target="_blank" rel="noopener noreferrer">
            <FaGithub size="2rem" color="white"/>
          </a>
          <a href="https://api.whatsapp.com/send?phone=558281114246&text=Ol%C3%A1!!" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp size="2rem" color="white"/>
          </a>
          <a href="mailto:https://mail.google.com/mail/u/0/?fs=1&to=gassantos.dev@gmail.com&su=Ol%C3%A1!%20fala%20aqui%20qual%20assunto%20legal%20que%20vamos%20tratar.&body=Aqui%20voc%C3%AA%20pode%20descrever%20melhor%20sua%20mensagem,%20pode%20ser%20uma%20pergunta,%20uma%20sugest%C3%A3o,%20um%20convite%20para%20um%20caf%C3%A9%20%F0%9F%98%80&tf=cm" target="_blank" rel="noopener noreferrer">
            <SiGmail size="2rem" color="white"/>
          </a>

        </div>
      </Content>

      <span className='circle-yellow'></span>
    </Container>
  );
}