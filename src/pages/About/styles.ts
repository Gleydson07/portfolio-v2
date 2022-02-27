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
     
      &:not(:first-child){
        margin-left: 2.5rem;
      }
    }
  }
`;