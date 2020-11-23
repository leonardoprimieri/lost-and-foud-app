import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`


    :root {
        --primary-color:#C294D4;
        --secundary-color:#905FA1;
        --dark-purple: #814D95;
        --light-color: #ebebeb;
        --red-color: #e84118;
    }
    
  * {
    margin: 0;
    padding: 0;
    box-sizing:border-box;
    outline:0;
    border: 0; 
    font-family: 'Poppins', sans-serif;
  }

  body, html, #root {
    height: 100%;
  }

  input, button, textarea {
      font-family: 'Poppins', sans-serif;
  }

  a {
    text-decoration:none;
  }

`;
