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

      button:first-child{
        margin-right: var(--fontSize16);
      }
    }
  }
`;