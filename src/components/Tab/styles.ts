import styled, { css } from 'styled-components';

interface TabProps {
  theme: string;
}

export const Container = styled.div<TabProps>`
  display: flex;
  justify-content: space-between;
  min-height: 400px;
  width: 1200px;
  
  aside{
    min-width: 200px;
    margin-right: 2rem;
    
    button{      
      width: 100%;
      max-height: 45px;
      padding: 0.5rem;
      
      border: none;
      border-left: 4px solid var(--dark-800);
      border-radius: 0.25rem 0 0 0.25rem;

      ${({theme}) => theme === "light" 
        ? css`
          opacity: 0.4;
          background: var(--white);
          box-shadow: 2px 1000px 1px var(--white-400) inset, rgba(149, 157, 165, 0.2) 0px 8px 24px;
        `
        : css`
          background: var(--dark-900);
          box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
        `
      };

      color: var(--dark-800);
      font-weight: 700;

      text-align: start;

      & + button{
        margin-top: 0.25rem;
      }

      &.active{        
        opacity: 1;
        border-left: 4px solid transparent;
        background-image: var(--orange-gradient);

        ${({theme}) => theme === "light" 
          ? css`
            color: var(--dark-800);
            box-shadow: 2px 1000px 1px var(--white) inset, rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
          `
          : css`
            color: var(--white);
            box-shadow: 2px 1000px 1px var(--dark-800) inset, rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
          `
        }; 
      }
    }
  }

  @media(max-width: 900px){
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 0 1rem;

    aside{
      display: flex;
      width: 100%;

      margin-right: 0;
      margin-bottom: 1rem;

      button{
        margin-right: 0.5rem;
        width: fit-content;
      }
    }
  }
`

export const Content = styled.div<TabProps>`
  background: var(--dark-800);
  width: 100%;
  max-width: 800px;
  overflow: hidden;

  border-radius: 0 0.25rem 0.25rem 0;

  border-right: 4px solid transparent;

  background-image: var(--orange-gradient);

  ${({theme}) => theme === "light" 
    ? css`
      color: var(--dark-800);
      box-shadow: 2px 1000px 1px var(--white) inset, rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
    `
    : css`
      color: var(--white);
      box-shadow: 2px 1000px 1px var(--dark-800) inset, rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    `
  }; 

  section{
    height: 100%;
    padding: 2rem;

    h4, p{
      color: ${({theme}) => 
        theme === "light" 
        ? css`var(--dark-900)` 
        : css`var(--white-400)`
      };
    }

    h4{
      margin-bottom: 1rem;
    }

    .description-container{
      width: 100%;
      text-indent: 1.5rem;


      span{
        display: block;
        text-align: justify;

        color: var(--dark-200);

        &+span{
          margin-top: 0.5rem;
        }
      }
    }

    .company-container{
      display: flex;
      align-items: center;
      justify-content: space-between;

      margin-bottom: 1.5rem;
    }
  }
`