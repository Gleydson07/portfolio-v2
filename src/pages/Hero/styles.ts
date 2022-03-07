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
    bottom: -225px;
    right: -225px;
    border-radius: 225px;
    width: 450px;
    height: 450px;

    background: var(--yellow-500);
  }

  @media(max-width: 1100px){

    .circle-yellow{
      position: absolute;
      bottom: -150px;
      right: -150px;
      border-radius: 150px;
      width: 300px;
      height: 300px;
    }
  }

  @media(max-width: 900px){

    .circle-yellow{
      position: absolute;
      bottom: -100px;
      right: -100px;
      border-radius: 100px;
      width: 200px;
      height: 200px;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  width: 100%;
  max-width: 1440px;

  padding: 0 var(--fontSize32);

  .presentation{

    h4{
      margin-top: var(--fontSize8);
      margin-bottom: 54px;
    }

    .cta-container{
      display: flex;

      margin-top: var(--fontSize32);

      a:first-child{
        margin-right: var(--fontSize16);
      }
    }
  }

  figure{
    max-width: 450px;
    height: 410px;

    margin-left: 2rem;

    svg{
      width: 100%;
      height: auto;
    }
  }

  @media(max-width: 1100px){
    figure{
      max-width: 350px;
      height: 310px;

      margin-left: 2rem;
      margin-top: 5rem;

      svg{
        width: 100%;
        height: auto;
      }
    }
  }

  @media(max-width: 900px){
    display: flex;
    flex-direction: column-reverse;
    justify-content: flex-end;
    margin-top: 70px;
    margin-left: 0;
    
    figure{
      max-width: 250px;
      height: 220px;

      margin-left: 2rem;

      svg{
        width: 100%;
        height: auto;
      }
    }

    .presentation{
      margin-top: 2rem;

      h4{
        font-size: 2rem;
        margin-bottom: 1.5rem;
      }

      > span:nth-child(3){
        font-size: 1.25rem;
      }
    }
  }
`;