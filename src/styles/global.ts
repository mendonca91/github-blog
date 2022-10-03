import { createGlobalStyle } from "styled-components";


export const GlobalStyles = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    ::-webkit-scrollbar {
      width: 0.45rem;
    }
    ::-webkit-scrollbar-track {
      background: ${({ theme }) => theme.baseBorder}
    }
    ::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.blue500};
      border-radius: 999px;
    }
  }
  body {
    background: ${({ theme }) => theme.baseBackground};
    color: ${({ theme }) => theme.baseText};
    -webkit-font-smoothing: antialiased;
  }
  body, input, textarea, button {
    font-size: 400;
    line-height: 160%;
  }
  ul {
    list-style: none;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  button {
    cursor: pointer;
  }
`;

