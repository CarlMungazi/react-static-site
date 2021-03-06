import { createGlobalStyle } from 'styled-components';

const AppWrapper = createGlobalStyle`
  * {
    box-sizing: border-box;
    text-size-adjust: none;
  }

  body {
    margin: 0;
    font-family: 'avenir next', avenir, sans-serif;
    font-size: 16px;
    line-height: 1.6;
    color: #444;
    background: #fbfbfb;
  }

  a {
    text-decoration: none;
    color: #108db8;
    font-weight: bold;
  }
  
  img {
    max-width: 100%;
  }
`

export default AppWrapper;