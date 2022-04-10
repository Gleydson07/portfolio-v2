import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: relative;
  padding-top: 70px;

  width: 100%;
  min-height: 85vh;
  overflow: hidden;
  
  background: ${({theme}) => 
    theme === "light" 
    ? css`var(--white-400)` 
    : css`var(--dark-gradient)`
  };

  .circle-orange{
    position: absolute;
    bottom: 0;
    left: -150px;
    border-radius: 150px;
    width: 300px;
    height: 300px;

    background: var(--orange-700);
  }

  @media(max-width: 1100px){
    .circle-orange{
      position: absolute;
      bottom: 0;
      left: -100px;
      border-radius: 100px;
      width: 200px;
      height: 200px;
    }
  }

  @media(max-width: 900px){
    .circle-orange{
      position: absolute;
      bottom: 0;
      left: -60px;
      border-radius: 60px;
      width: 120px;
      height: 120px;
    }
  }
`;

export const Content = styled.div`  
  width: 100%;
  max-width: 1440px;

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
    display: flex;
    align-items: center;
    justify-content: space-between;
    
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
    h2{
      text-align: center;
    }

    .content{
      /* margin: 0; */
      /* margin-top: 1rem; */
    }
  }
`;