import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  padding-top: 70px;

  width: 100%;
  min-height: 85vh;
  overflow-x: hidden;
  
  @media(max-width: 900px){
    margin-top: 2rem;
  }
`;

export const Content = styled.div`  
  width: 100%;
  max-width: 1440px;
  height: 100%;

  margin: auto;
  padding: 0 var(--fontSize32);

  .content{
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    flex-wrap: wrap;

    margin: 0 auto;
    margin-top: 5rem;
    max-width: 1200px;
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
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
  }
`;