import { css } from '@emotion/react'
import { colors, textHoverEffect } from '../utilities/styleUtilities'

const wpUrl = 'https://wordpressfoundation.org/'
const gatsbyUrl = 'https://www.gatsbyjs.com/'

const Footnote = () => {
  return (
    <ul>
      <li css={styles.item}>
        「WordPress」は、
        <a href={wpUrl} target='_blank' rel='noopener noreferrer'>
          WordPress Foundation
        </a>
        の商標です。
      </li>
      <li css={styles.item}>
        「Gatsby」は、
        <a href={gatsbyUrl} target='_blank' rel='noopener noreferrer'>
          Gatsby, Inc.
        </a>
        のプロダクトです。
      </li>
    </ul>
  )
}

export default Footnote

const styles = {
  item: css`
    list-style-type: none;
    text-indent: -1em;
    margin-left: 1em;
    font-size: 14px;
    &::before {
      content: '※';
    }
    a {
      margin: 0 0.2em;
      color: ${colors.purple2};
      ${textHoverEffect};
    }
  `
}
