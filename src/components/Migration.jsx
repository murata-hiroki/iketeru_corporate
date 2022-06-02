import { css } from '@emotion/react'
import { StaticImage } from 'gatsby-plugin-image'
import Heading3 from './common/Heading3'
import SubSection from './common/SubSection'
import ArrowRight from '../inline-svg/arrow-right.svg'
import gatsbyLogo from '../images/gatsby.svg'
import { colors, mq } from '../styles/utils'

const Migration = () => {
  return (
    <SubSection>
      <Heading3>Gatsbyへの移行は、イケテルシステムにお任せを！</Heading3>
      <div css={styles.figure}>
        <div css={styles.wp}>
          <StaticImage
            src='../images/wordpress.png'
            alt='WordPress'
            width={400}
            height={83}
            placeholder='none'
          />
        </div>
        <div css={styles.arrow}>
          <ArrowRight />
        </div>
        <div css={styles.gatsby}>
          <img src={gatsbyLogo} alt='Gatsby' />
        </div>
      </div>
      <p css={styles.desc}>
        イケテルシステムは、WordPress製のサイトをGatsbyに移行するサービスを展開しています。<br />
        お気軽にご相談ください！
      </p>
    </SubSection>
  )
}

export default Migration

const logoStyle = css`
  padding: 15px;
  background-color: ${colors.white};
  text-align: center;
  ${mq.smUp} {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44%;
    height: 200px;
  }
`

const styles = {
  figure: css`
    ${mq.smUp} {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  `,

  wp: logoStyle,

  gatsby: css`
    ${logoStyle},
    img {
      max-width: 100%;
    }
  `,

  arrow: css`
    text-align: center;
    ${mq.smUp} {
      width: 7.1%;
    }
    ${mq.sm} {
      padding: 15px 0;
    }
    svg {
      max-width: 100px;
      ${mq.sm} {
        transform: rotate(90deg);
      }
    }
  `,

  desc: css`
    margin-top: 60px;
    margin-bottom: 80px;
    font-size: 22px;
    text-align: center;
    ${mq.sm} {
      margin-top: 30px;
      font-size: 18px;
    }
  `
}
