import styled, { keyframes } from 'styled-components';

const float = keyframes`
  0%{
    transform: translateY(0px);
  }
  50%{
    transform: translateY(-30px);
  }
  100%{
    transform: translateY(0px);
  }
`

export const Container = styled.div`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  min-height: 100vh;
  overflow: hidden;

  .circle-yellow{
    position: absolute;
    bottom: -200px;
    right: -200px;
    border-radius: 200px;
    width: 400px;
    height: 400px;

    z-index: -1;

    background: var(--yellow-500);
  }

  @media(max-width: 1440px){

    .circle-yellow{
      position: absolute;
      bottom: -170px;
      right: -170px;
      border-radius: 170px;
      width: 340px;
      height: 340px;
    }
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
  max-width: 1400px;

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
    max-width: 400px;
    height: 360px;

    margin-left: 2rem;

    transform: translateY(0px);
    animation: ${float} 5s ease-in-out infinite;

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
    align-items: center;
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
      text-align: center;

      h4{
        font-size: 2rem;
        margin-bottom: 1.5rem;
      }

      > span:nth-child(3){
        font-size: 1.25rem;
      }
    }

    .cta-container{
      display: flex;
      justify-content: center;
    }
  }
`;