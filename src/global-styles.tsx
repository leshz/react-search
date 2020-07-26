import { createGlobalStyle, keyframes } from "styled-components";

export const gradient = keyframes`
0% {
  background-position: 0% 50%;
}
50% {
  background-position: 100% 50%;
}
100% {
  background-position: 0% 50%;
}`;

export const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0; 
    box-sizing:border-box;
    font-weight: normal;
    outline:none;
  }
  :root{
    --black: #003049; 
    --white:#FDFFFC;
    --orange:#F77F00;
    --red:#D62828;
    --yellow:#FCBF49;
    --lemon:#EAE2B7;
    --gray:#cac9c8;
  }
  li{
    list-style: none;
  }
  html,body{
    font-family: sans-serif;
    color:var(--black);
  }

  html{
    background-image: linear-gradient(120deg, #fccb90 0%, #d57eeb 100%);
    background-size: 100% 100%;
    min-height:100vh;
    animation: ${gradient} 20s ease infinite;
  }
`;
