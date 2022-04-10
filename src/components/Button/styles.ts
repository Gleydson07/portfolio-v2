import styled, { css } from 'styled-components';

interface ButtonProps {
  hasIconAndText: boolean
}

export const Container = styled.button<ButtonProps>`
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
  box-shadow: 2px 1000px 1px ${({theme}) => 
    theme === "light" 
    ? css`var(--white-400)` 
    : css`var(--dark-900)`
  } inset;

  color: var(--yellow-500);

  span{
    font-size: 12px;
    font-weight: 700;
  }

  &:hover{
    filter: brightness(0.8);
  }
  
  svg{
    color: var(--yellow-500);
    ${({hasIconAndText}) => hasIconAndText && css`
      margin-right: var(--fontSize4);
    `}
  }
;
`