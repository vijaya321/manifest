import React from 'react'
import ReactDOM from 'react-dom'
import { createGlobalStyle } from "styled-components";

import App from './App'
import Header from "./components/Header";

const GlobalStyle = createGlobalStyle`
  html,
  body {
    margin: 0;
    padding: 0;
  }
  body {
    font-family: Roboto, sans-serif;
  }
`;


ReactDOM.render(  
    <>
    <GlobalStyle />
    <App />
    </>,
   document.querySelector('#root'));