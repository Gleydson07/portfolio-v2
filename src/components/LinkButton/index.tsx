import React, { AnchorHTMLAttributes } from 'react';
import loadLangText from '../../utils/TextConvert';
import Loading from '../Loading';

import { Container } from './styles';

interface LinkButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement>{
  icon?: JSX.Element,
  text?: string,
  translateId?: string,
  messageDefault?: string,
  loading?: boolean,
  target?: "_blank" | "_self" | "_parent" | "_top",
  link: string,
}

const LinkButton: React.FC<LinkButtonProps> = ({
  icon,
  text,
  loading,
  translateId,
  messageDefault,
  link,
  target = "_blank",
  ...props
}) => {
  return (
    <Container
      hasIconAndText={(!!icon && !!text) || (!!icon && !!translateId)}
      href={link}
      target={target}
      {...props}
    >
      {loading ?
        <Loading/>
        : 
        <>
          {icon} 
          <span>
            {translateId && messageDefault 
              ? loadLangText(translateId, messageDefault) 
              : text
            }
          </span>
        </>
      }
    </Container>
  );
}

export default LinkButton;