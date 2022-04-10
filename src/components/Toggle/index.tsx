import React, { useState } from 'react';

import {
  BsMoon,
  BsSun,
} from 'react-icons/bs'
import { Container, ButtonToggle } from './styles';

type toggleSize = "small" | "medium" | "large";

interface ToggleProps {
  iconLeft?: JSX.Element;
  iconRight?: JSX.Element;
  size?: toggleSize;
  colorButton?:string,
  colorBoard?:string,
  currentToggle: boolean,
  onClick: () => void;
}

const Toggle: React.FC<ToggleProps> = ({
  iconLeft = <BsSun/>, 
  iconRight = <BsMoon/>, 
  size = "medium",
  colorButton = "#FFB802",
  colorBoard = "#202D3A",
  currentToggle,
  onClick
}) => {

  const handleToggle = () => {
    onClick();
  }

  return (
    <Container 
      size={size}
      colorButton={colorButton}
      colorBoard={colorBoard}
    >
        <div>
          {iconLeft}
          <ButtonToggle
            currentStaste={currentToggle}
            size={size}
            colorButton={colorButton}
            colorBoard={colorBoard}
            onClick={handleToggle}
          >
            {currentToggle ? iconLeft : iconRight}
          </ButtonToggle>
          {iconRight}
        </div>
    </Container>
  );
}

export default Toggle;