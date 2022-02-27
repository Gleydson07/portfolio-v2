import styled, { keyframes } from 'styled-components';

const ldsring = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`


export const Container = styled.div`
  display: inline-block;
  position: relative;
  width: var(--fontSize32);
  height: var(--fontSize32);

  > div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: var(--fontSize24);
    height: var(--fontSize24);
    margin: 4px;
    border: 2px solid var(--yellow-500);
    border-radius: 50%;
    animation: ${ldsring} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: var(--yellow-500) transparent transparent transparent;
  }

  > div:nth-child(1) {
    animation-delay: -0.45s;
  }

  > div:nth-child(2) {
    animation-delay: -0.3s;
  }

  > div:nth-child(3) {
    animation-delay: -0.15s;
  }

`