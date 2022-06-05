import { smoothScrollTo } from "../../utils/scroll"
import Button from "./Button"

const ScrollButton = ({ children, target }) => {
  const handleClick = (e) => {
    smoothScrollTo(target)
    e.preventDefault()
  }

  return (
    <Button href={`#${target}`} onClick={handleClick}>
      {children}
    </Button>
  )
}

export default ScrollButton
