import React, { HTMLAttributes } from 'react';
import Typography from '../../components/Typography';

import { 
  Container,
  Content
} from './styles';

interface ProjectsProps extends HTMLAttributes<HTMLDivElement>{
}

export const Projects: React.FC<ProjectsProps> = ({...props}) => {
  return (
    <Container 
      id="projects"
      {...props}
    >
      <Content>
        <Typography
          className='subtitle-medium'
          htmlElement='h2'
        >
          Projetos
        </Typography>

        <div className='content'>
          
        </div>
      </Content>
    </Container>
  );
}