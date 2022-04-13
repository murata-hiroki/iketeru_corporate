const Textbox = ({
  id,
  name,
  placeholder,
  multiLine = false,
  onChange,
  value,
  ...props
}) => {
  if (!multiLine) {
    return (
      <input
        type='text'
        id={id}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        {...props}
      />
    )
  } else {
    return (
      <textarea
        id={id}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        {...props}
      />
    )
  }
}

export default Textbox
