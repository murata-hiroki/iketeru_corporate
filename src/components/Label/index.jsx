import * as styles from './styles.module.scss'

const Label = ({
  htmlFor,
  labelText,
  required = false,
  comment = null
}) => {
  return (
    <label htmlFor={htmlFor} className={styles.label}>
      {labelText}
      {required && <span className={styles.required}>必須</span>}
      {comment && <span className={styles.comment}>{comment}</span>}
    </label>
  )
}

export default Label
