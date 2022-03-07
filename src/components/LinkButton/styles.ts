import styled, { css } from 'styled-components';

interface StyleButtonProps {
  hasIconAndText: boolean
}

export const Container = styled.a<StyleButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  min-width: 135px;
  max-height: 46px;
  padding: 0.875rem;

  border: 2px solid transparent;
  border-radius: var(--fontSize4);

  background-image: var(--orange-gradient);
  background-origin: border-box;
  box-shadow: 2px 1000px 1px var(--dark-900) inset;

  color: var(--yellow-500);

  text-decoration: none;

  span{
    display: block;
    font-size: 12px;

    ${({hasIconAndText}) => hasIconAndText && css`
      padding-left: var(--fontSize4);
    `}
  }

  &:hover{
    filter: brightness(0.8);
  }
  
  svg{
    display: block;
    color: var(--yellow-500);    
  }
;
`