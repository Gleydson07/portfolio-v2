import React, { ButtonHTMLAttributes } from 'react';
import Loading from '../Loading';

import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  icon?: JSX.Element,
  text?: string,
  loading?: boolean,
  onClick: () => void
}

const Button: React.FC<ButtonProps> = ({
  icon,
  text,
  loading,
  onClick,
  ...props
}) => {
  return (
    <Container
      hasIconAndText={!!icon && !!text}
      onClick={onClick}
      {...props}
    >
      {loading ?
        <Loading/>
        : <>{icon} <span>{text}</span></>
      }
    </Container>
  );
}

export default Button;