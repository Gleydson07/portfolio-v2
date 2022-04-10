import styled, {css, keyframes} from 'styled-components';

interface HeaderProps {
  openMenuBurger: boolean,
  theme: string
}

const fillWidth = keyframes`
	0% {
		width: 0%;
	}

	100% {
		width: 100%;
	}
`

export const Container = styled.header<HeaderProps>`
  position: fixed;
  top: 0;

  display: flex;
  align-items: center;
  
  width: 100%;
  height: 70px;
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

            &.toggle-item{
              display: flex;
              justify-content: center;
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
    > div{
      display: flex;
      justify-content: space-between;
      align-items: center;

      nav{
        position: fixed;
        top: 4.65rem;
        left: 0;      
        
        width: 100%;
        height: calc(100vh - 4.65rem);
        padding: 0;
        
        background: ${({theme}) => theme === "light" 
          ? css`var(--white-400)`
          : css`var(--dark-900)`
        };

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
            width: 100%;
            
            li, li:last-child{
              padding: 0.5rem 2rem;
              width: 100%;
              
              &:first-child{
                margin-top: 1.5rem;
              }
              
              a{
                display: block;
                font-size: 1.25rem;
                font-weight: 700;
                width: fit-content;
                
                text-align: center;
                height: 2.25rem;

                margin: 0 auto;
              }

              &.toggle-item{
                margin-top: 4rem;
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

  @media(max-width: 720px){
    > div{
      nav{
        top: 5rem;
        height: calc(100vh - 5rem);
      }
    }
  }

  @media(max-width: 600px){
    > div{
      nav{
        top: 5.4rem;
        height: calc(100vh - 5.4rem);
      }
    }
  }
`;
