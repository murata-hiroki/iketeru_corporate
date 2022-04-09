const Textbox = ({
  id,
  name,
  placeholder,
  multiLine = false
}) => {
  if (!multiLine) {
    return (
      <input
        type='text'
        id={id}
        name={name}
        placeholder={placeholder}
      />
    )
  } else {
    return (
      <textarea
        id={id}
        name={name}
        placeholder={placeholder}
      />
    )
  }
}

export default Textbox
