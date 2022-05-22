import { smoothScrollTo } from '../utilities/scroll'

const AnchorLink = ({ children, target }) => {
  const handleClick = e => {
    smoothScrollTo(target)
    e.preventDefault()
  }

  return <a href={`#${target}`} onClick={handleClick}>{children}</a>
}

export default AnchorLink
