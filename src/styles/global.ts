import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html, body {
    font-family: ${({ theme }) => theme.fonts.body || 'sans-serif'};
    background-color: ${({ theme }) => theme.colors.cream || '#f5f5f5'};
    color: ${({ theme }) => theme.colors.darkText || '#333'};
  }
  
  a {
    text-decoration: none;
    cursor: pointer;
  }
  
`;
