import * as styles from './styles.module.scss'
import { StaticImage } from 'gatsby-plugin-image'
import SubSection from '../SubSection'
import Heading3 from '../Heading3'

const Chief = () => {
  return (
    <SubSection>
      <Heading3>代表プロフィール</Heading3>
      <div className={styles.chief}>
        <div className={styles.media}>
          <div className={styles.image}>
            <StaticImage
              src='../../images/yuto-ono.jpg'
              alt='小野 優人'
              width={300}
              height={300}
            />
          </div>
          <p className={styles.name}>
            <span>代表</span>
            <span>小野 優人</span>
          </p>
        </div>
        <div className={styles.content}>
          <ul className={styles.history}>
            <li>Web制作会社で約3年間フロントエンドエンジニアを務める</li>
            <li>フリーランスとして独立、約1年間、Web開発業務を個人で請け負う</li>
            <li>IT企業にて、2年間CTO（最高技術責任者）を務める</li>
            <li className={styles.current}>
              独立、イケテルシステムを開業<br />
              質の高いWebサイトを構築する事業を展開
            </li>
          </ul>
        </div>
      </div>
    </SubSection>
  )
}

export default Chief
