import styled, { css } from 'styled-components';

interface ButtonProps {
  hasIconAndText: boolean,
  theme: string
}

export const Container = styled.a<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 135px;
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

  text-decoration: none;

  span{
    display: block;
    font-size: 12px;
    font-weight: 700;

    white-space: nowrap;

    ${({hasIconAndText}) => hasIconAndText && css`
      padding-left: var(--fontSize4);
    `}
  }

  &:hover{
    filter: brightness(0.95);
  }
  
  svg{
    display: block;
    color: var(--yellow-500);    
  }

  @media(max-width: 900px){
    max-width: 120px;
    max-height: 38px;
  }
;
`