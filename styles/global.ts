import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  /* Reset */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    overflow-x: hidden;
    font-family: sans-serif;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
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
  /* Globals */
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.textColorBase};
  }

  button {
    all: unset;
  }
`;
