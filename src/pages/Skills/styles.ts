import styled, { css } from 'styled-components';

interface SkillsProps {
  skillDescriptionVisibility: boolean,
  theme: string
}

interface SkillsThemeProps {
  theme: string
}

export const Container = styled.div<SkillsThemeProps>`
  position: relative;
  padding-top: 70px;

  width: 100%;
  min-height: 85vh;
  overflow: hidden;
  
  background: ${({theme}) => 
    theme === "light" 
    ? css`var(--white-400)` 
    : css`var(--dark-gradient)`
  };
  
  @media(max-width: 900px){
    margin-top: 2rem;
  }
`;

export const Content = styled.div<SkillsProps>`  
  width: 100%;
  max-width: 1440px;
  height: 100%;

  margin: 0 auto;
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
    justify-content: space-around;

    margin: auto;
    margin-top: 10rem;
    max-width: 1200px;

    flex-wrap: wrap;
    flex-basis: 4;

    & + .content{
      margin-top: 6rem;
    }

    svg{
      color: var(--dark-200);
      transition: all 0.2s;
    }

    .tool-wrapper{
      width: 120px;

      text-align: center;
      margin-bottom: 2rem;

      svg, strong{
        color: ${({theme}) => 
          theme === "light" 
          ? css`var(--dark-800)` 
          : css`var(--dark-200)`
        };
      }

      strong{
        display: block;
        text-align: center;
      }

      &:hover{
        svg, strong{
          color: var(--yellow-500);
        }
      }
    }
  }

  .skill-description-wrapper{
    max-width: 600px;
    min-height: 10rem;
    
    margin: 0 auto;
    margin-top: 4rem;

    transition: all 0.2s;    
    
    .skill-description{
      visibility: ${({skillDescriptionVisibility}) => skillDescriptionVisibility ? "visible" : "hidden"};

      display: flex;
      flex-direction: column;
      justify-content: center;

      min-width: 100%;
      min-height: auto;

      padding: 1rem;

      border-radius: 0 0.25rem 0.25rem 0;
      background: var(--dark-800);

      border-right: 4px solid transparent;

      background-image: var(--orange-gradient);
      box-shadow: 2px 1000px 1px ${({theme}) => theme === "light" 
        ? css`var(--white)`
        : css`var(--dark-800)`
      } inset;

      h6{
        color: ${({theme}) => 
          theme === "light" 
          ? css`var(--dark-800)` 
          : css`var(--white)`
        };
      }

      span{
        display: block;
        margin: 1rem;

        text-align: justify;
        text-indent: 1rem;

        color: var(--dark-200);
      }
    }
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
      margin-top: 4rem;
    }

    .skill-description-wrapper{
      margin-top: 1rem;
    }
  }
`;