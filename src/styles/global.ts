import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body{
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    -webkit-font-smooting: antialised;
  }

  body, input, textarea, button{
        font: 400 1rem 'Nunito', sans-serif;
    }

`
