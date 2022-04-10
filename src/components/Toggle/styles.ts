import styled from 'styled-components';

type toggleSize = "small" | "medium" | "large";

interface ToggleSizeProps {
  size: toggleSize;
  colorButton:string,
  colorBoard:string,
};

interface ToggleProps {
  currentStaste: boolean;
  size: toggleSize;
  colorButton:string,
  colorBoard:string,
}

const toggleSize = {
  small: {
    width: "48px",
    height: "16px",
    buttonSize: "24px",
    imageBoard: "12px",
    imageButton: "16px"
  },
  medium: {
    width: "60px",
    height: "20px",
    buttonSize: "28px",
    imageBoard: "16px",
    imageButton: "20px"
  },
  large: {
    width: "68px",
    height: "24px",
    buttonSize: "32px",
    imageBoard: "20px",
    imageButton: "24px"
  }
}

export const Container = styled.div<ToggleSizeProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  
  width: ${({size}) => toggleSize[size].width};
  
  > div{
    display: flex;
    justify-content: space-between;
    align-items: center;
  
    width: 100%;
    height: ${({size}) => toggleSize[size].height};

    border-radius: 1rem;
    padding: 0.25rem;
    background: ${({colorBoard}) => colorBoard};
    border: 1px solid ${({colorBoard}) => colorBoard};

    > svg{
      color: ${({colorButton}) => colorButton};
      height: ${({size}) => toggleSize[size].imageBoard};
      width: ${({size}) => toggleSize[size].imageBoard};
    }
  }
`

export const ButtonToggle = styled.button<ToggleProps>`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;

  height: ${({size}) => toggleSize[size].buttonSize};
  width: ${({size}) => toggleSize[size].buttonSize};

  border-radius: 2rem;
  border: 2px solid ${({colorButton}) => colorButton};
  box-shadow: 0.5rem 0.25rem 0.25rem #00000030;

  transition: left 0.75s;
  
  left: ${({currentStaste, size}) => currentStaste ? "0" : `calc(100% - ${toggleSize[size].buttonSize})`};
  background-color: ${({colorButton}) => colorButton};
  margin: ${({currentStaste}) => currentStaste ? "-1px" : `1px`};;
  
  svg{
    height: ${({size}) => toggleSize[size].imageButton};
    width: ${({size}) => toggleSize[size].imageButton};
    color: ${({colorBoard}) => colorBoard};
  }
`