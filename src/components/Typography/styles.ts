import { createGlobalStyle } from 'styled-components';

const baseTitle = `
  font-family: Inter, sans-serif;
  font-style: normal;
  line-height: 1.5;
  color: #FFFFFF; 
  margin: 0px;
`

export const TypographyStyle = createGlobalStyle`
  .title{
    ${baseTitle};
    font-weight: 700;
    font-size: 3rem;
  }

  .subtitle{
    ${baseTitle};
    font-weight: 500;
    font-size: 2.25rem;
  }

  .subtitle-medium{
    ${baseTitle};
    font-weight: 500;
    font-size: 1.5rem;
  }

  .paragraph{
    ${baseTitle};
    font-weight: 400;
    font-size: 1rem;
  }

  .text{
    ${baseTitle};
    font-weight: 700;
    font-size: 1rem;
  }

  .tag{
    ${baseTitle};
    font-weight: 500;
    font-size: 0.875rem;
  }
`