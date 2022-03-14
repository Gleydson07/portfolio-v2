import React, { HTMLAttributes } from 'react';

import Typography from '../../components/Typography';

import { svgDevCommiting } from '../../assets/svgs/hero';

import {FiDownload} from 'react-icons/fi';
import { 
  Container,
  Content
} from './styles';
import LinkButton from '../../components/LinkButton';
import Button from '../../components/Button';

interface HeroProps extends HTMLAttributes<HTMLDivElement>{
}

export const Hero: React.FC<HeroProps> = ({...props}) => {
  
  return (
    <Container 
      id="home"
      {...props}
    >
      <Content>
        <section className='presentation'>
          <Typography 
            className='paragraph' 
            htmlElement='span'
            translateId='app.hero.hello'
            messageDefault='Olá, meu nome é'
          />

          <Typography 
            className='title' 
            htmlElement='h4'
          >
            Gleydson Albuquerque
          </Typography>

          <Typography 
            className='subtitle-small' 
            htmlElement='span'
            translateId='app.hero.work'
            messageDefault='Desenvolvedor front-end.'
          />  

          <div className='cta-container'>
            <LinkButton 
              loading={false}
              icon={<FiDownload size="1rem"/>}
              translateId="app.hero.downloadCV"
              messageDefault="Baixar CV"
              link={"pdf/gleydson-cv.pdf"}
              download
            />

            <LinkButton 
              translateId="app.hero.contact"
              messageDefault="Entre em contato"
              link={"https://api.whatsapp.com/send?phone=558281114246&text=Ol%C3%A1!!"}
            />

            <Button
              loading={false}
              disabled={false}
              text="testing"
              icon={<FiDownload size="1rem"/>}
              onClick={() => console.log("teste")}
            />
          </div>
        </section>

        <figure>
          {svgDevCommiting}
        </figure>
      </Content>

      <span className='circle-yellow'></span>
    </Container>
  );
}