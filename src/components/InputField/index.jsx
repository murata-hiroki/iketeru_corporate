import * as styles from './styles.module.scss'
import Label from '../Label'
import Textbox from '../Textbox'

const InputField = ({
  labelText,
  comment = null,
  required = false,
  id,
  placeholder = null,
  multiLine = false,
  registerReturn,
  error = null
}) => {
  return (
    <>
      <Label
        htmlFor={id}
        labelText={labelText}
        required={required}
        comment={comment}
      />
      <Textbox
        id={id}
        placeholder={placeholder}
        multiLine={multiLine}
        registerReturn={registerReturn}
      />
      {error && <p className={styles.error}>{error.message}</p>}
    </>
  )
}

export default InputField
