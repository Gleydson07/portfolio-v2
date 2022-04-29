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
import { useTheme } from '../../hooks/useTheme';

interface CardProjectProps {
  image: string,
  title: string,
  translateId: string,
  messageDefault: string,
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
  translateId,
  messageDefault,
  tools,
  pageLink,
  githubLink
}) => {
  const {theme} = useTheme();

  return (
    <Container theme={theme}>
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
          translateId={translateId}
          messageDefault={messageDefault}
        />

        <Typography
          className='paragraph'
          htmlElement='p'
          translateId="app.projects.title-used-technology"
          messageDefault="Tecnologias usadas"
        />

        <div className='tools-list'>
          {tools.map(item => (
            <Tooltip key={item.tooltip} title={item.tooltip}>{item.icon}</Tooltip>
          ))}
        </div>

        <div className='call-to-actions'>
          {pageLink ? <LinkButton
            name="visit"
            icon={linkIcon}
            translateId='app.projects.visit-button'
            messageDefault="Visitar"
            link={pageLink}
            target="_blank"
          /> : ""}

          {githubLink ? <LinkButton
            name="github"
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