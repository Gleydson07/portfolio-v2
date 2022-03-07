import styled, {keyframes} from 'styled-components';

const fill = keyframes`
	0% {
		width: 0%;
	}

	100% {
		width: 100%;
	}
`

export const Container = styled.header`
  position: fixed;
  width: 100%;
  height: 70px;
  z-index: 1;
  
  backdrop-filter: blur(5px);
  
  > div{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    
    max-width: 1440px;
    width: 100%;
    height: 100%;
    
    margin: 0 auto;
    padding: 0 2rem;

    .logo-container{
      display: flex;
      justify-content: center;
      align-items: center;
      
      .flag-container{
        display: flex;
        align-items: flex-end;

        height: 25px;
        margin-left: 2rem;

        button{
          & + button{
            margin-left: 0.5rem;
          }
        }
      }
    }

    
    span{
      font-size: var(--fontSize48);
      color: var(--white-400);

      margin-bottom: var(--fontSize8);

      strong{
        color: var(--yellow-500);
      }
    }

    nav{
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

                animation: ${fill} 1500ms ease both;
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

                animation: ${fill} 1500ms ease both;
              }
            }
          }
        }
      }
    }
  }
`;
