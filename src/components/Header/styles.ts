import styled, {css, keyframes} from 'styled-components';

interface StyleHeaderProps {
  openMenuBurger: boolean
}

const fillWidth = keyframes`
	0% {
		width: 0%;
	}

	100% {
		width: 100%;
	}
`

export const Container = styled.header<StyleHeaderProps>`
  position: fixed;
  top: 0;

  display: flex;
  align-items: center;
  
  width: 100%;
  min-height: 70px;
  z-index: 1;
  
  backdrop-filter: blur(5px);
  background: var(--dark-opacity);
  
  > div{
    display: flex;
    align-items: center;
    
    max-width: 1440px;
    width: 100%;
    height: 100%;
    
    margin: 0 auto;
    padding: 0 var(--fontSize32);

    span{
      font-size: var(--fontSize48);
      color: var(--white-400);

      margin-bottom: var(--fontSize8);

      strong{
        color: var(--yellow-500);
      }
    }

    nav{
      flex: 1;
      
      .wrapper{
        display: flex;
        align-items: center;
        justify-content: space-between;

        .flag-container{
          display: flex;
          align-items: flex-end;
  
          height: 25px;
          margin-left: 1.5rem;
  
          button{
            & + button{
              margin-left: 0.5rem;
            }
          }
        }
  
        ul{
          display: flex;
          list-style: none;
  
          li{
            display: list-item;
            text-align: -webkit-match-parent;
            padding: var(--fontSize8) var(--fontSize16);
  
            &:last-child{
              padding-right: 0;
            }
            
            a{
              color: var(--yellow-500);
              text-decoration: none;  
              width: 100%;
              
              &:hover:not(.active){
                &::after{
                  content: '';
                  display: block;
                  
                  width: 0;
                  height: var(--fontSize4);
                  margin-top: var(--fontSize4);
  
                  background: var(--dark-400);
                  border-radius: var(--fontSize4);
  
                  animation: ${fillWidth} 1500ms ease both;
                }
              }
      
              &.active{
                &::after{
                  content: '';
                  display: block;
                  
                  width: 0;
                  height: var(--fontSize4);
                  margin-top: var(--fontSize4);
  
                  background: var(--white-400);
                  border-radius: var(--fontSize4);
  
                  animation: ${fillWidth} 1500ms ease both;
                }
              }
            }
          }
        }
      }
    }

    .menu-burger-wrapper{
      display: none;
    }
  }

  @media(max-width: 1100px){
    top: 0;
    > div{
      span{
        font-size: var(--fontSize32);
      }

      .flag-container{
        max-height: 18px;
        margin-left: 2rem;
      }

    }
  }

  @media(max-width: 900px){    
    top: 0;
    > div{
      display: flex;
      justify-content: space-between;
      align-items: center;
      nav{
        position: fixed;
        top: 5rem;
        left: 0;      
        
        width: 100%;
        height: calc(100vh - 4.95rem);
        padding: 0;
        
        background: var(--dark-900);

        ${({ openMenuBurger }) => openMenuBurger 
        ? css`
            transition: all 0.3s;
            left: 0;
          ` 
          : css`
            transition: all 0.3s;
            left: 100%;
          `
        }

        .wrapper{
          display: flex;
          flex-direction: column-reverse;
          justify-content: flex-end;

          width: 100%;
          height: 100%;

          .flag-container{
            margin-top: 4rem;
            margin-left: 0;

            width: 100%;
            max-height: 20px;

            display: flex;
            flex-direction: row;
            justify-content: center;

            button{
              & + button{
                margin-left: 1rem;
              }
            }
          }
          
          ul{
            display: flex;
            flex-direction: column;
            align-self: flex-end;
            align-items: flex-end;
  
            li, li:last-child{
              padding: 0.5rem 2rem;
              width: fit-content;
              
              &:first-child{
                margin-top: 1.5rem;
              }
              
              a{
                display: block;
                font-size: 1.25rem;
                font-weight: 700;
                
                text-align: center;
                height: 2.25rem;
              }
            }
          }  
        }
      }

      .menu-burger-wrapper{
        display: block;
      }
       
    }
  }
`;
