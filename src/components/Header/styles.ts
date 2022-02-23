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

  background: var(--dark-gradient);
  
  div{
    width: 1440px;
    height: 100%;

    margin: 0 auto;
    padding: 0 2rem;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

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
