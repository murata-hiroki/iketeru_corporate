import * as styles from './styles.module.scss'

const wpUrl = 'https://wordpressfoundation.org/'
const gatsbyUrl = 'https://www.gatsbyjs.com/'

const Footnote = () => {
  return (
    <ul className={styles.footnote}>
      <li>
        「WordPress」は、
        <a href={wpUrl} target='_blank' rel='noopener noreferrer'>
          WordPress Foundation
        </a>
        の商標です。
      </li>
      <li>
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
