import React, { ReactNode, useState } from 'react';

import { Container } from './styles';

type PositionType  = "top" | "bottom" | "left" | "right";

interface TooltipProps {
  title: string,
  children: ReactNode,
  position?: PositionType
}

const Tooltip: React.FC<TooltipProps> = ({
  title,
  children,
  position = "bottom",
  ...rest
}) => {
  const [show, setShow] = useState(false);

  return (
    <Container position={position}>
      {title ? <div className={show ? 'tooltip-box visible' : 'tooltip-box'} aria-describedby={title}>
          {title}
          <span className="tooltip-arrow" />
      </div> : ""}
      <div
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        {...rest}
      >
          {children}
      </div>
    </Container>
  );
}

export default Tooltip;