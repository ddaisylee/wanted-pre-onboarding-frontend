import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

export const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }

  html, body {
    font-family: 'Noto Sans KR', sans-serif;
    background-color: #fff;
  }
  
  input, textarea { 
    -moz-user-select: auto;
    -webkit-user-select: auto;
    -ms-user-select: auto;
    user-select: auto;
  }
  
  input:focus {
    outline: none;
  }
  
  button {
    border: none;
    background: none;
    padding: 0;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`
