import React, { ButtonHTMLAttributes } from 'react';
import Loading from '../Loading';

import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  icon?: JSX.Element,
  text?: string,
  loading?: boolean
}

const Button: React.FC<ButtonProps> = ({
  icon,
  text,
  loading,
  ...props
}) => {
  return (
    <Container
      hasIconAndText={!!icon && !!text}
      {...props}
    >
      {loading ?
        <Loading/>
        : <>{icon} {text}</>
      }
    </Container>
  );
}

export default Button;