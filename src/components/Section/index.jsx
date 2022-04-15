import * as styles from './styles.module.scss'

const Section = ({ children, color, id = null }) => {
  const cls = color
    ? `${styles.section} ${styles[color]}`
    : styles.section
  return <div className={cls} id={id}>{children}</div>
}

export default Section
