import { css } from "@emotion/react"
import { Link } from "gatsby"

const Header = () => {
  return (
    <header>
      <ul css={styles.ul}>
        <Li>
          <Link to={"/business"}>About</Link>
        </Li>
        <Li>
          <Link to={"/service"}>Service</Link>
        </Li>
        <Li>
          <Link to={"/works"}>Works</Link>
        </Li>
        <Li>
          <Link to={"/blog"}>Blog</Link>
        </Li>
      </ul>
    </header>
  )
}

const Li = ({ children }) => {
  return <li css={styles.li}>{children}</li>
}

export default Header

const styles = {
  ul: css`
    display: flex;
    width: 60%;
    list-style: none;
  `,
  li: css`
    font-family: Quicksand;
    font-size: 20px;
    padding: 17px 5px 17px 25px;
  `,
}
