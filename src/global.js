import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    width: 100wv;
    padding-right: {ScrollBarWidth}px;
  }
  *, *::after, *::before {
    box-sizing: border-box;
  }
  body {
    text-rendering: optimizeLegibility;
  }
  `