import styled, { css } from 'styled-components';

interface ProjectsProps {
  theme: string;
}

export const Container = styled.div<ProjectsProps>`
  position: relative;
  padding-top: 70px;

  width: 100%;
  min-height: 85vh;
  overflow-x: hidden;

  background: ${({theme}) => 
    theme === "light" 
    ? css`var(--white-400)` 
    : css`var(--dark-gradient)`
  };
  
  @media(max-width: 900px){
    margin-top: 2rem;
  }
`;

export const Content = styled.div<ProjectsProps>`  
  width: 100%;
  max-width: 1440px;
  height: 100%;

  margin: auto;
  padding: 0 var(--fontSize32);

  h2{
    color: ${({theme}) => 
      theme === "light" 
      ? css`var(--dark-900)` 
      : css`var(--white-400)`
    };
  }

  .content{
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    flex-wrap: wrap;

    margin: 0 auto;
    margin-top: 5rem;
    max-width: 1200px;
  }

  @media(max-width: 1100px){
    h2{
      font-size: var(--fontSize24);
    }
  }

  @media(max-width: 900px){
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    .content{
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
  }
`;