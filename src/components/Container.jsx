import { css } from '@emotion/react'
import { mq, PC_PADDING, PC_WIDTH, SP_PADDING } from '../utilities/styleUtilities'

const Container = ({ children }) => {
  return <div css={styles.container}>{children}</div>
}

export default Container

const styles = {
  container: css`
    ${mq.lg} {
      width: ${PC_WIDTH}px;
      margin-left: auto;
      margin-right: auto;
    }
    ${mq.lgDown} {
      padding-left: ${PC_PADDING}px;
      padding-right: ${PC_PADDING}px;
    }
    ${mq.sm} {
      padding-left: ${SP_PADDING}px;
      padding-right: ${SP_PADDING}px;
    }
  `
}
