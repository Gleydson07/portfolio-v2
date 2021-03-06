import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`

  :root{
    --dark-gradient: linear-gradient(90deg, #091124 46.35%, #202D3A 100%);
    --orange-gradient: linear-gradient(180deg, #FFB802 0%, #FA741B 100%);
    --dark-opacity: #09122580;
    --dark-900: #091225;
    --dark-800: #1F2B45;
    --dark-700: #252532;
    --dark-400: #202D3A;
    --dark-300: #3e4568;
    --dark-200: #888A8F;
    --white-200: #c0c0c0;
    --white-400: #F7F7F7;
    --white: #FFFFFF;
    --yellow-500: #FFB802;
    --orange-700: #C85000;
    --transparent: transparent;
    --fontSize4: 0.25rem;
    --fontSize8: 0.5rem;
    --fontSize16: 1rem;
    --fontSize24: 1.5rem;
    --fontSize32: 2rem;
    --fontSize48: 3rem;
    --fontSize72: 4.5rem;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    @media(max-width: 1080px) {
      font-size: 93.75%;
    }
    @media(max-width: 720px) {
      font-size: 87.5%;
    }
    @media(max-width: 600px) {
      font-size: 81.25%;
    }

    scroll-behavior: smooth;
  }

  body{
    font-family: 'Inter', sans-serif;

    -webkit-font-smoothing: antialiased;

    overflow-x: hidden;

    &::-webkit-scrollbar { 
      position: absolute;
      display: visible;
    }
    
    &::-webkit-scrollbar-thumb {
      background-color: var(--dark-900); 
      border-radius: 4px; 
      border: 1px solid var(--dark-400);
    }
    
    &::-webkit-scrollbar-track {
      background: var(--dark-800); 
    }
    
    &::-webkit-scrollbar-track-piece{
      background: transparent;
    }
  }

  body, input, textarea, button{
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    color: var(--white);
  }

  h1, h2, h3, h4, h5, h6 {
    color: var(--white);
  }

  button{
    cursor: pointer;
  }

  [disabled]{
    opacity: 0.6;
    cursor: not-allowed;
  }
`