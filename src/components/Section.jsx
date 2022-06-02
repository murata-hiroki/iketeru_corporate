import { css } from '@emotion/react'
import { mq } from '../styles/utils'

const Section = ({ children, className, id = null }) => {
  return (
    <div
      className={className}
      css={styles.section}
      id={id}
    >
      {children}
    </div>
  )
}

export default Section

const styles = {
  section: css`
    padding-top: 80px;
    padding-bottom: 80px;
    ${mq.sm} {
      padding-top: 50px;
      padding-bottom: 50px;
    }
  `
}
