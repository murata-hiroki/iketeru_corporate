import * as styles from './styles.module.scss'

const Section = ({ children, color }) => {
  const cls = color
    ? `${styles.section} ${styles[color]}`
    : styles.section
  return <div className={cls}>{children}</div>
}

export default Section
