import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  min-height: 400px;
  width: 1200px;
  
  aside{
    min-width: 200px;
    margin-right: 2rem;
    
    button{      
      width: 100%;
      max-height: 45px;
      padding: 0.5rem;
      
      border: none;
      border-left: 4px solid var(--dark-800);
      border-radius: 0.25rem 0 0 0.25rem;

      background: transparent;
      color: var(--dark-800);
      font-weight: 700;

      text-align: start;

      &.active{
        background: var(--dark-800);
        color: var(--white);

        border-left: 4px solid transparent;

        background-image: var(--orange-gradient);
        box-shadow: 2px 1000px 1px var(--dark-800) inset;
      }
    }
  }

  @media(max-width: 900px){
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 0 1rem;

    aside{
      display: flex;
      width: 100%;

      margin-right: 0;
      margin-bottom: 1rem;

      button{
        margin-right: 0.5rem;
        width: fit-content;
      }
    }
  }
`

export const Content = styled.div`
  background: var(--dark-800);
  width: 100%;
  max-width: 800px;
  overflow: hidden;

  border-radius: 0 0.25rem 0.25rem 0;

  border-right: 4px solid transparent;

  background-image: var(--orange-gradient);
  box-shadow: 2px 1000px 1px var(--dark-800) inset;

  section{
    height: 100%;
    padding: 2rem;

    h4{
      margin-bottom: 1rem;
    }

    .description-container{
      width: 100%;
      text-indent: 1.5rem;

      span{
        display: block;
        text-align: justify;

        color: var(--dark-200);

        &+span{
          margin-top: 0.5rem;
        }
      }
    }

    .company-container{
      display: flex;
      align-items: center;
      justify-content: space-between;

      margin-bottom: 1.5rem;
    }

  }
`