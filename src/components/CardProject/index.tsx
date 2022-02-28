import React from 'react';
import LinkButton from '../LinkButton';
import Typography from '../Typography';
import Tooltip from '../Tooltip';

import {
  SiGithub,
} from 'react-icons/si'

import {
  HiOutlineLink,
} from 'react-icons/hi'

import { Container } from './styles';

interface CardProjectProps {
  image: string,
  title: string,
  description: string,
  tools: {
    icon: JSX.Element,
    tooltip: string,
  }[],
  pageLink?: string,
  githubLink?: string,
}

const linkIcon = <HiOutlineLink/>;
const githubIcon = <SiGithub/>;

const CardProject: React.FC<CardProjectProps> = ({
  image,
  title,
  description,
  tools,
  pageLink,
  githubLink,
}) => {

  return (
    <Container>
      <figure>
        <img src={image} alt={title} loading='lazy'/>
      </figure>
      
      <Typography
        className='subtitle-small'
        htmlElement='strong'
      >
        {title}
      </Typography>

      <div className='wrapper'>
        <Typography
          className='tag'
          htmlElement='strong'
        >
          {description}
        </Typography>

        <Typography
          className='paragraph'
          htmlElement='p'
        >
          Tecnologias usadas
        </Typography>

        <div className='tools-list'>
          {tools.map(item => (
            <Tooltip title={item.tooltip}>{item.icon}</Tooltip>
          ))}
        </div>

        <div className='call-to-actions'>
          {pageLink ? <LinkButton
            icon={linkIcon}
            text="Visitar"
            link={pageLink}
            target="_blank"
          /> : ""}

          {githubLink ? <LinkButton
            icon={githubIcon}
            text="Github"
            link={githubLink}
            target="_blank"
          /> : ""}
        </div>
      </div>

    </Container>
  );
}

export default CardProject;