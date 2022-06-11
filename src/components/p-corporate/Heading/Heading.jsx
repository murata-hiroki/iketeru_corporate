import { css } from "@emotion/react"
import { Link } from "gatsby"

const Heading = () => {
  return (
    <div css={styles.container}>
      <h1>Gatsbyへの移行で周りのサイトに差をつける</h1>
      <h2>あなたのサイト、 もっと高速に、 もっとセキュリティを強固に</h2>
      <h2 className="jamhead-text">
        <span>― </span>Jamstack &amp; ヘッドレスCMS<span> ―</span>
      </h2>
      <Link to={"/lp"}>詳しく知る</Link>
    </div>
  )
}

export default Heading

const styles = {
  container: css`
    padding: 80px 0 100px;
    text-align: center;
  `,
}
