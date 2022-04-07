import { StaticImage } from 'gatsby-plugin-image'
import * as styles from './styles.module.scss'
import Button from '../Button'

const Hero = () => {
  return (
    <div className={styles.outer}>
      <StaticImage src='../../images/hero-bg.png' className={styles.bg} />
      <StaticImage src='../../images/hero-left.png' className={styles.figureLeft} />
      <StaticImage
        src='../../images/hero-right.png'
        className={styles.figureRight}
        placeholder='tracedSVG'
      />
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
