const Label = ({
  htmlFor,
  labelText,
  required = false,
  comment = null
}) => {
  return (
    <label htmlFor={htmlFor}>
      {labelText}
      {required && <span>必須</span>}
      {comment && <span>{comment}</span>}
    </label>
  )
}

export default Label
