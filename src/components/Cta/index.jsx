import * as styles from './styles.module.scss'
import { StaticImage } from 'gatsby-plugin-image'
import Button from '../Button'

const Cta = ({ hideBtn = false }) => {
  return (
    <div>
      <div className={styles.pcBanner}>
        <StaticImage
          src='../../images/banner.png'
          alt='創業キャンペーン実施中！ 通常価格¥100,000〜 → 先着3件限定 ¥30,000〜！'
          width={1000}
          height={437}
        />
      </div>
      <div className={styles.spBanner}>
        <StaticImage
          src='../../images/banner-sp.png'
          alt='創業キャンペーン実施中！ 通常価格¥100,000〜 → 先着3件限定 ¥30,000〜！'
        />
      </div>
      {hideBtn || (
        <div className={styles.btnBox}>
          <Button>無料お見積もりはこちら</Button>
        </div>
      )}
    </div>
  )
}

export default Cta
