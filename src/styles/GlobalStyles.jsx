import { Global, css } from '@emotion/react'
import { colors } from '../utilities/styleUtilities'

const GlobalStyles = () => {
  return <Global styles={styles} />
}

export default GlobalStyles

const styles = css`
  html {
    overflow-x: hidden;
  }

  body {
    font-family: "Helvetica Neue", "Helvetica", "Arial", "Verdana", "Roboto",
      "Hiragino Kaku Gothic ProN", "Hiragino Sans",
      "YuGothic", "Yu Gothic", "Meiryo", sans-serif;
    line-height: 1.6;
    box-sizing: border-box;
    color: ${colors.black};
  }

  * {
    margin: 0;
    padding: 0;
    font-size: inherit;
    font-weight: inherit;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }

  a {
    color: ${colors.purple};
    text-decoration: none;
  }
`
