import * as styles from './styles.module.scss'
import Button from '../Button'
import HeroBG from '../HeroBG'

const Hero = () => {
  return (
    <div className={styles.outer}>
      <HeroBG />
      <div className={styles.inner}>
        <h1 className={styles.title}>
          まだWordPressを<br />使っている方必見！！
        </h1>
        <p className={styles.catchcopy}>
          あなたのサイト、<br />
          もっと高速に、<br />
          もっとセキュリティを強固に。
        </p>
        <div className={styles.btnBox}>
          <Button>無料お見積もりはこちら</Button>
        </div>
      </div>
    </div>
  )
}

export default Hero
