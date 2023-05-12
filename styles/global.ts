import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  /* Reset */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
 
  /* NextJS */
  html {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100%;
    overflow-x: hidden;
  }

  body {
    font-family: sans-serif;
    width: 100vw;
    display: flex;
    flex: 1;
    background-color: ${({ theme }) => theme.backgroundBase};
    color: ${({ theme }) => theme.textColorBase};

     /* scrollbar */
  &::-webkit-scrollbar {
    width: .4rem;
    background: inherit;
    border: none;
  }
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.textColorBase};
    border-radius: 6px;
  }
  }
  #__next {
    flex: 1;
  }
  /* Globals */
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.textColorBase};
  }
`;
