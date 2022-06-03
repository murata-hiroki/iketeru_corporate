import { css } from '@emotion/react'
import ScrollButton from '../common/ScrollButton'
import { mq } from '../../styles/utils'

const Cta = ({ hideBtn = false }) => {
  if (hideBtn) {
    return null
  }

  return (
    <div css={styles.btnBox}>
      <ScrollButton target='estimate'>無料お見積もりはこちら</ScrollButton>
    </div>
  )
}

export default Cta

const styles = {
  btnBox: css`
    margin-top: 50px;
    text-align: center;
  `
}
