import * as styles from './styles.module.scss'

const Alert = ({ children, status }) => {
  return (
    <p className={`${styles.alert} ${styles[status]}`}>
      {children}
    </p>
  )
}

export default Alert
