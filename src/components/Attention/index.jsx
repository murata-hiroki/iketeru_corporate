import * as styles from './styles.module.scss'

const Attention = ({ items }) => {
  return (
    <ul className={styles.attention}>
      {items.map(item => <li key={item}>{item}</li>)}
    </ul>
  )
}

export default Attention
