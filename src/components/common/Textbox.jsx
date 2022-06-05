import { css } from "@emotion/react"
import { colors, mq } from "../../styles/utils"

const Textbox = ({
  id,
  name,
  placeholder,
  multiLine = false,
  registerReturn,
}) => {
  if (!multiLine) {
    return (
      <input
        type="text"
        id={id}
        name={name}
        css={inputStyle}
        placeholder={placeholder}
        {...registerReturn}
      />
    )
  } else {
    return (
      <textarea
        id={id}
        name={name}
        css={textareaStyle}
        placeholder={placeholder}
        {...registerReturn}
      />
    )
  }
}

export default Textbox

const inputStyle = css`
  width: 100%;
  padding: 15px;
  border-radius: 0;
  border: 1px solid ${colors.black};
  font-size: 22px;
  line-height: 1.6;
  font-family: inherit;
  ${mq.sm} {
    padding: 10px;
    font-size: 18px;
  }
`

const textareaStyle = css`
  ${inputStyle};
  height: 300px;
`
