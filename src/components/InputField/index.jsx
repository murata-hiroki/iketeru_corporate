import Label from '../Label'
import Textbox from '../Textbox'

const InputField = ({
  labelText,
  comment = null,
  required = false,
  id,
  name,
  placeholder = null,
  multiLine = false
}) => {
  return (
    <div>
      <Label
        htmlFor={id}
        labelText={labelText}
        required={required}
        comment={comment}
      />
      <Textbox
        id={id}
        name={name}
        placeholder={placeholder}
        multiLine={multiLine}
      />
    </div>
  )
}

export default InputField
