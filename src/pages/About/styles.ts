import styled, { css } from 'styled-components';

interface AboutProps {
  theme: string;
}

export const Container = styled.div<AboutProps>`
  position: relative;
  padding-top: 70px;

  width: 100%;
  min-height: auto;
  overflow: hidden;

  background: ${({theme}) => 
    theme === "light" 
    ? css`var(--white-400)` 
    : css`var(--dark-gradient)`
  };

  .circle-yellow{
    position: absolute;
    top: -200px;
    right: -200px;
    border-radius: 200px;
    width: 400px;
    height: 400px;

    background: var(--yellow-500);
  }
  
  @media(max-width: 1440px){
    .circle-yellow{
      position: absolute;
      top: -170px;
      right: -170px;
      border-radius: 170px;
      width: 340px;
      height: 340px;
    }
  }
  
  @media(max-width: 1100px){
    .circle-yellow{
      position: absolute;
      top: -150px;
      right: -150px;
      border-radius: 150px;
      width: 300px;
      height: 300px;
    }
  }

  @media(max-width: 900px){
    .circle-yellow{
      position: absolute;
      top: -100px;
      right: -100px;
      border-radius: 100px;
      width: 200px;
      height: 200px;
    }
  }
`;

export const Content = styled.div<AboutProps>`  
  width: 100%;
  height: 100%;
  max-width: 1440px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

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
    margin: 0 auto;
    margin-top: 12rem;
    max-width: 1200px;
    height: 100%;
    
    display: flex;
    justify-content: space-around;
    align-items: center;

    p{
      color: ${({theme}) => 
        theme === "light" 
        ? css`var(--dark-900)` 
        : css`var(--white-400)`
      };
    }

    figure{
      width: 225px;
      height: 225px;

      margin-right: 2rem;

      img{
        width: 100%;
        height: 100%;
      }
    }

    .description-container{
      max-width: 900px;
      
      p{
        text-indent: 1.5rem;
        text-align: justify;
      }

      p:not(:first-child){
        margin-top: 1rem;
      }
    }

  }

  .social-medias{
    display: flex;
    justify-content: space-between;
    align-items: center;

    max-width: 400px;
    height: 100px;
    margin: auto;

    a{        
      svg{
        color: ${({theme}) => 
          theme === "light" 
          ? css`var(--dark-800)` 
          : css`var(--white-400)`
        };

        transition: all 0.2s;

        &:hover{
          color: var(--yellow-500);
        }
      }
     
      &:not(:first-child){
        margin-left: 2.5rem;
      }
    }
  }

  @media(max-width: 1100px){
    h2{
      font-size: var(--fontSize24);
    }

    .content{
      figure{
        min-width: 180px;
        min-height: 180px;

        img{
          width: 100%;
          height: auto;
        }
      }

      p{
        font-size: 1rem;
      }
    }
  }

  @media(max-width: 900px){
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2{
      text-align: center;

      margin-bottom: 2rem;
    }

    .content{
      display: flex;
      flex-direction: column;
      margin: 2rem auto;

      figure{
        min-width: 120px;
        width: 120px;
        min-height: 120px;
        height: 120px;

        margin: 0;
        padding: 0;

        img{
          width: 100%;
          height: auto;
        }
        margin-bottom: 2rem;
      }
    }

    .social-medias{
      margin-top: 3rem;
    }
  }
`;