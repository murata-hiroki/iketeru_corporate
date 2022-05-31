import { css } from '@emotion/react'
import { mq } from '../../utilities/styleUtilities'

const Sentence = ({ children, className }) => {
  return (
    <div css={styles.sentence} className={className}>
      {children}
    </div>
  )
}

export default Sentence

const styles = {
  sentence: css`
    font-size: 22px;
    line-height: 1.6;
    ${mq.sm} {
      font-size: 18px;
    }
    p {
      &:nth-of-type(n+2) {
        margin-top: 30px;
      }
    }
  `
}
