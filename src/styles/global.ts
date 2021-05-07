import { createGlobalStyle } from 'styled-components'
import theme from '../styles/theme'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: ${theme.colours.grey[100]};
    color: ${theme.colours.grey[800]};
    font-family: 'Paytone One', sans-serif;
  }
  html{
    scroll-behavior: smooth;
  }
`
