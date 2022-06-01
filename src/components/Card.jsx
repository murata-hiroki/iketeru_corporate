import { css } from '@emotion/react'
import { mq } from '../utilities/styleUtilities'

const Card = ({ icon, title, children }) => {
  return (
    <section>
      <div css={styles.icon}>{icon}</div>
      <h4 css={styles.title}>{title}</h4>
      <div css={styles.desc}>{children}</div>
    </section>
  )
}

export default Card

const styles = {
  icon: css`
    margin-bottom: 20px;
    text-align: center;
    ${mq.sm} {
      margin-bottom: 10px;
    }
  `,

  title: css`
    margin-bottom: 20px;
    font-size: 26px;
    font-weight: bold;
    text-align: center;
    ${mq.sm} {
      margin-bottom: 10px;
      font-size: 22px;
    }
  `,

  desc: css`
    font-size: 16px;
    ul {
      margin-left: 1.5em;
    }
  `
}
