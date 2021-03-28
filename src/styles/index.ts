import { ThemeType } from './theme'
import { createGlobalStyle } from 'styled-components'

interface IGlobalStyleProps {
  theme: ThemeType
}

export const GlobalStyle = createGlobalStyle<IGlobalStyleProps>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  
  body{
    font-family: ${(props) => props.theme.font.fontFamily};
    font-size: 62.5%; 
  }

`
