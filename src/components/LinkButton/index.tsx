import React, { AnchorHTMLAttributes } from 'react';
import Loading from '../Loading';

import { Container } from './styles';

interface LinkButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement>{
  icon?: JSX.Element,
  text?: string,
  loading?: boolean,
  target?: "_blank" | "_self" | "_parent" | "_top",
  link: string,
}

const LinkButton: React.FC<LinkButtonProps> = ({
  icon,
  text,
  loading,
  link,
  target = "_blank",
  ...props
}) => {
  return (
    <Container
      hasIconAndText={!!icon && !!text}
      href={link}
      target={target}
      {...props}
    >
      {loading ?
        <Loading/>
        : <>{icon} {text}</>
      }
    </Container>
  );
}

export default LinkButton;