import { css } from "@emotion/react"

const Attention = ({ items }) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item} css={styles.item}>
          {item}
        </li>
      ))}
    </ul>
  )
}

export default Attention

const styles = {
  item: css`
    margin-top: 8px;
    list-style-type: none;
    text-indent: -1em;
    margin-left: 1em;
    font-size: 14px;

    &::before {
      content: "※";
    }
  `,
}
