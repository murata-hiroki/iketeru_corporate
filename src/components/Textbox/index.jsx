import * as styles from './styles.module.scss'

const Textbox = ({
  id,
  name,
  placeholder,
  multiLine = false,
  registerReturn
}) => {
  if (!multiLine) {
    return (
      <input
        type='text'
        id={id}
        name={name}
        className={styles.input}
        placeholder={placeholder}
        {...registerReturn}
      />
    )
  } else {
    return (
      <textarea
        id={id}
        name={name}
        className={styles.textarea}
        placeholder={placeholder}
        {...registerReturn}
      />
    )
  }
}

export default Textbox
