import React, { ButtonHTMLAttributes } from 'react';
import Tooltip from '../Tooltip';

import { Container } from './styles';

interface FlagButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  name: string,
  image: string,
  tooltip?: string
}

const FlagButton: React.FC<FlagButtonProps> = ({
  name,
  image,
  tooltip,
  ...props
}) => {
  return (
    <Container {...props} name={name}>
      <Tooltip title={tooltip || ""}>
        <img src={image} alt="" loading='lazy'/>
      </Tooltip>
    </Container>
  );
}

export default FlagButton;