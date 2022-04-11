import * as styles from './styles.module.scss'

const Sentence = ({ children, center = false }) => {
  const cls = center
    ? `${styles.sentence} ${styles.center}`
    : styles.sentence
  return <div className={cls}>{children}</div>
}

export default Sentence
