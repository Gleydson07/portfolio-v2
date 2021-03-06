import React, { ButtonHTMLAttributes } from 'react';
import { useTheme } from '../../hooks/useTheme';
import Loading from '../Loading';

import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  icon?: JSX.Element,
  text?: string,
  name: string,
  loading?: boolean,
  onClick: () => void
}

const Button: React.FC<ButtonProps> = ({
  icon,
  text,
  name,
  loading,
  onClick,
  ...props
}) => {
  const {theme} = useTheme();

  return (
    <Container
      name={name}
      hasIconAndText={!!icon && !!text}
      theme={theme}
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