import React, { HTMLAttributes } from 'react';

import Button from '../../components/Button';
import Typography from '../../components/Typography';

import {FiDownload} from 'react-icons/fi'
import { svgDevCommiting } from '../../assets/svgs/hero';

import { 
  Container,
  Content
} from './styles';

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
          >
            Olá, meu nome é
          </Typography>

          <Typography 
            className='title' 
            htmlElement='h4'
          >
            Gleydson Albuquerque
          </Typography>

          <Typography 
            className='subtitle-medium' 
            htmlElement='span'
          >
            Desenvolvedor front-end web.
          </Typography>   

          <div className='cta-container'>
            <Button 
              loading={false}
              icon={<FiDownload size="1rem"/> }
              text="Download CV"
            />

            <Button 
              text="Entre em contato"
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