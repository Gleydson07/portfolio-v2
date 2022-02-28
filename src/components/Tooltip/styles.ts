import styled, { keyframes } from 'styled-components'

type PositionType  = "top" | "bottom" | "left" | "right";

interface TooltipProps {
  position: PositionType
}

const fadeIn = keyframes`
    from{
        opacity: 0
    }

    to{
        opacity: 1
    }
`

export const Container = styled.div<TooltipProps>`
    position: relative;

    .tooltip-box {
        position: absolute;
        display: none; 

        text-align: center;
        font-weight: 500;
        font-size: 0.875rem;
        padding: 0.25rem;
        
        white-space: nowrap;
        border-radius: 0.25rem;
        z-index: 50;

        color: var(--dark-200);
        background:  var(--dark-800);

        ${props => props.position === "left" ? "right: calc(100% + 10px); top: 50%; transform: translateY(-50%);" : ""}
        
        ${props => props.position === "right" ? "left: calc(100% + 10px); top: 50%; transform: translateY(-50%);" : ""}
        
        ${props => props.position === "top" ? "bottom: calc(100% + 10px); left: 50%; transform: translateX(-50%);" : ""}
        
        ${props => props.position === "bottom" ? "top: calc(100% + 10px); left: 50%; transform: translateX(-50%);" : ""}
    }

    .tooltip-box.visible {
        display: block;
        animation: ${fadeIn} 0.2s linear both;
    }

    .tooltip-arrow {
        position: absolute;
        border-width: 5px;
        border-style: solid;

        ${props => props.position === "left" ? `right: -15px; transform: translate(-50%); border-color: transparent transparent transparent var(--dark-800)` : ""};

        ${props => props.position === "right" ? `left: -5px; transform: translate(-50%); border-color: transparent var(--dark-800) transparent transparent; `: ""};

        ${props => props.position === "top" ? `left: 50%; bottom: -10px; transform: translate(-50%); border-color: var(--dark-800) transparent transparent transparent;` : ""};

        ${props => props.position === "bottom" ? `left: 50%; top: -10px; transform: translate(-50%); border-color: transparent transparent var(--dark-800) transparent;` : ""};
    }

    .tooltip-arrow.visible {
        display: block;
        animation: ${fadeIn} 0.2s linear both;
    }
`;