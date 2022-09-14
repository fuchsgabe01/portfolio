import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

//removes all default
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  p,
  h1,
  h2,
  h3 {
  color: black;

  }
  body {
    font-family: "Lato", sans-serif;
    font-family: "Nunito Sans", sans-serif;
  }
  h3,
  h4 {
    font-weight: 400;
    color: rgb(0, 0, 0);
  }
  
  .App {
    background-color: #141414;
  }
  

`;
export default GlobalStyle;
