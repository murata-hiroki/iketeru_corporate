import * as styles from './styles.module.scss'
import { Children } from 'react'

const Cards = ({ children }) => {
  return (
    <div className={styles.cards}>
      {Children.map(children, child =>
        <div className={styles.cardBox}>
          {child}
        </div>
      )}
    </div>
  )
}

export default Cards
