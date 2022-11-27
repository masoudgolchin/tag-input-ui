import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body {
    height: 100%;
  }
  
  body {
    background: #F3F3F3;
    font: normal .875rem 'Noto Sans', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;