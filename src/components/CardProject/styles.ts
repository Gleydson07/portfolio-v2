import styled, { css } from 'styled-components'

interface CardProjectTheme {
  theme: string;
}

export const Container = styled.div<CardProjectTheme>`
  display: flex;
  flex-direction: column;

  max-width: 450px;
  min-height: 450px;

  margin: 1rem 0;
  padding-bottom: 1rem;
  border-radius: 0 0.5rem 0 0;

  background: ${({theme}) => 
    theme === "light" 
    ? css`var(--white)` 
    : css`var(--dark-800)`
  };
  
  ${({theme}) => theme === "light" 
    ? css`box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;` 
    : css`box-shadow: rgba(0, 0, 0, 0.1) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;`
  }

  figure{
    width: 100%;
    height: 180px;
    
    img{
      width: 100%;
      height: 100%;

      border-right: 4px solid transparent;
      border-radius: 0 0.25rem 0.25rem 0;
  
      background-image: var(--orange-gradient);
      box-shadow: 2px 1000px 1px var(--dark-800) inset;
    }
  }

  > strong{
    display: block;
    padding: 0.5rem 1rem;

    color: ${({theme}) => 
      theme === "light" 
      ? css`var(--dark-800)` 
      : css`var(--yellow-500)`
    };
  }

  .wrapper{
    padding: 0 2rem;

    strong{
      color: var(--white-200);
    }

    p{
      display: block;
      margin-top: 1rem;
      margin-bottom: 0.5rem;

      color: ${({theme}) => 
        theme === "light" 
        ? css`var(--dark-300)` 
        : css`var(--white-400)`
      };
    }

    .tools-list{
      display: flex;
      margin-bottom: 1rem;

      > div{
        & + div{
          margin-left: 1rem;
        }
      }

      svg{
        height: 1.5rem;
        width: 1.5rem;

        color: var(--white-200);
      }
    }

    .call-to-actions{
      display: flex;
      align-items: center;

      width: 100%;

      a{
        & + a{
          margin-left: 1.5rem;
        }
      }
    }
  }

  @media(max-width: 1100px){
    max-width: 380px;

    figure{
      height: 150px;
    }
  }

  @media(max-width: 900px){
    max-width: 300px;

    figure{
      height: 120px;
    }
  }
`