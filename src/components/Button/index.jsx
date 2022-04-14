import * as styles from './styles.module.scss'

const Button = ({
  children,
  type = 'link',
  href = null,
  onClick = null,
  disabled = false
}) => {
  if (type === 'submit') {
    return (
      <button type='submit' className={styles.btn} disabled={disabled}>
        {children}
      </button>
    )
  } else {
    return (
      <a href={href} className={styles.btn} onClick={onClick}>
        {children}
      </a>
    )
  }
}

export default Button
