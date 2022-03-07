import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 450px;
  height: auto;

  margin: 2rem 0;

  figure{
    width: 100%;
    height: 180px;
    
    img{
      width: 100%;
      height: auto;

      border-right: 4px solid transparent;
      border-radius: 0 0.25rem 0.25rem 0;
  
      background-image: var(--orange-gradient);
      box-shadow: 2px 1000px 1px var(--dark-800) inset;
    }
  }

  > strong{
    display: block;
    padding: 0.5rem 1rem;

    color: var(--white);
  }

  .wrapper{
    padding: 0 2rem;

    strong{
      color: var(--white-200);
    }

    p{
      display: block;
      margin-top: 1rem;
      margin-bottom: 0.5rem;

      color: var(--dark-300);
    }

    .tools-list{
      display: flex;
      margin-bottom: 1rem;

      > div{
        & + div{
          margin-left: 1rem;
        }
      }

      svg{
        height: 1.5rem;
        width: 1.5rem;

        color: var(--white-200);
      }
    }

    .call-to-actions{
      display: flex;
      align-items: center;

      width: 100%;

      a{
        & + a{
          margin-left: 1.5rem;
        }
      }
    }
  }

  @media(max-width: 1100px){
    max-width: 380px;

    figure{
      height: 150px;
    }
  }

  @media(max-width: 900px){
    max-width: 300px;

    figure{
      height: 120px;
    }
  }
`