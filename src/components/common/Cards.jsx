import { css } from '@emotion/react'
import { Children } from 'react'
import { mq } from '../../styles/utils'

const Cards = ({ children }) => {
  return (
    <div css={styles.cards}>
      {Children.map(children, child =>
        <div css={styles.cardBox}>
          {child}
        </div>
      )}
    </div>
  )
}

export default Cards

const styles = {
  cards: css`
    ${mq.smUp} {
      display: flex;
      justify-content: space-between;
    }
  `,

  cardBox: css`
    ${mq.smUp} {
      width: 30%;
    }
    ${mq.sm} {
      &:nth-of-type(n+2) {
        margin-top: 50px;
      }
    }
  `
}
