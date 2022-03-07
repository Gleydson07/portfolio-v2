import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  display: flex;
  justify-content: center;

  width: 100vw;
  height: 100vh;
  overflow: hidden;

  .circle-yellow{
    position: absolute;
    top: -225px;
    right: -225px;
    border-radius: 225px;
    width: 450px;
    height: 450px;

    background: var(--yellow-500);
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

export const Content = styled.div`  
  width: 100%;
  max-width: 1440px;

  margin: auto;
  padding: 0 var(--fontSize32);

  .content{
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin: 3rem auto;
    max-width: 1200px;

    figure{
      width: 225px;
      height: auto;

      margin-right: 2rem;
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
    margin: auto;

    a{        
      svg{
        color: var(--white);

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
      font-size: 1.5rem;
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
    .content{
      display: flex;
      flex-direction: column;

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
  }
`;