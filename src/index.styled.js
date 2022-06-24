import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Inter;
  }
  body{
    min-height: 100vh;
    min-width: 100vw;
  }
`;

export default GlobalStyle;
