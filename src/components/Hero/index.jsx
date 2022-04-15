import * as styles from './styles.module.scss'
import HeroBG from '../HeroBG'
import ScrollButton from '../ScrollButton'

const Hero = () => {
  return (
    <div className={styles.outer}>
      <HeroBG />
      <div className={styles.inner}>
        <h1 className={styles.title}>
          まだWordPressを<br />ご利用の方、必見！！
        </h1>
        <p className={styles.catchcopy}>
          あなたのサイト、<br />
          もっと高速に、<br />
          もっとセキュリティを強固に。
        </p>
        <div className={styles.btnBox}>
          <ScrollButton target='estimate'>無料お見積もりはこちら</ScrollButton>
        </div>
      </div>
    </div>
  )
}

export default Hero
