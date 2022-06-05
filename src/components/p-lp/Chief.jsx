import { css } from "@emotion/react"
import { colors, mq } from "../../styles/utils"
import { StaticImage } from "gatsby-plugin-image"
import SubSection from "../common/SubSection"
import Heading3 from "../common/Heading3"

const Chief = () => {
  return (
    <SubSection>
      <Heading3>代表プロフィール</Heading3>
      <div css={styles.chief}>
        <div css={styles.media}>
          <div css={styles.image}>
            <StaticImage
              src="../../images/yuto-ono.jpg"
              alt="小野 優人"
              width={300}
              height={300}
            />
          </div>
          <p css={styles.name}>
            <span>代表</span>
            <span>小野 優人</span>
          </p>
        </div>
        <div css={styles.content}>
          <ul>
            <li css={styles.historyItem}>
              Web制作会社で約3年間フロントエンドエンジニアを務める
            </li>
            <li css={styles.historyItem}>
              フリーランスとして独立、約1年間、Web開発業務を個人で請け負う
            </li>
            <li css={styles.historyItem}>
              IT企業にて、2年間CTO（最高技術責任者）を務める
            </li>
            <li css={styles.historyCurrent}>
              独立、イケテルシステムを開業
              <br />
              質の高いWebサイトを構築する事業を展開
            </li>
          </ul>
        </div>
      </div>
    </SubSection>
  )
}

export default Chief

const historyItemBase = css`
  position: relative;
  list-style-type: none;
  padding: 0 0 30px 50px;
  font-size: 22px;
  ${mq.sm} {
    padding: 0 0 20px 35px;
    font-size: 16px;
  }
  &::before {
    content: "";
    position: absolute;
    z-index: 1;
    top: 5px;
    left: 0;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: ${colors.purple2};
    ${mq.sm} {
      top: 0;
    }
  }
`

const styles = {
  chief: css`
    ${mq.smUp} {
      display: flex;
    }
  `,

  media: css`
    flex: none;
    text-align: center;
  `,

  image: css`
    margin-bottom: 15px;
  `,

  name: css`
    font-size: 22px;
    font-weight: bold;
    span + span {
      margin-left: 20px;
    }
  `,

  content: css`
    margin-left: 80px;
    ${mq.lgDown} {
      margin-left: 30px;
    }
    ${mq.sm} {
      margin-left: 0;
      margin-top: 30px;
    }
  `,

  historyItem: css`
    ${historyItemBase};
    &::after {
      content: "";
      position: absolute;
      top: 20px;
      left: 11px;
      width: 2px;
      bottom: -10px;
      background-color: ${colors.gray};
    }
  `,

  historyCurrent: css`
    ${historyItemBase};
    &::before {
      background-color: ${colors.purple};
    }
  `,
}
