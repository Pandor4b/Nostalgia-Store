import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html, body {
    font-family: ${({ theme }) => theme.fonts.body || 'sans-serif'};
  }
  
  a {
    text-decoration: none;
    cursor: pointer;
  }
  
`;
