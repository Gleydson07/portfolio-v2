import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  display: flex;
  justify-content: center;

  width: 100vw;
  overflow-x: hidden;
`;

export const Content = styled.div`  
  width: 100%;
  max-width: 1440px;

  margin: auto;
  padding: 0 var(--fontSize32);
  padding-top: 8rem;

  .content{
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    flex-wrap: wrap;

    margin: 3rem auto;
    max-width: 1200px;
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