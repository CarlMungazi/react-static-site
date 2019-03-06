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
  
  nav {
    width: 100%;
    background: #108db8;
  }
  
  nav a {
    color: white;
    padding: 1rem;
    display: inline-block;
  }
  
  .content {
    padding: 1rem;
  }
`

export default AppWrapper;