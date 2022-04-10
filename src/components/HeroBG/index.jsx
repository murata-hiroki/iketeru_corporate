import { StaticImage } from 'gatsby-plugin-image'
import * as styles from './styles.module.scss'

const HeroBG = () => {
  return (
    <>
      <div className={styles.bg}>
        <StaticImage
          src='../../images/hero-bg.png'
          loading='eager'
          placeholder='none'
          layout='fullWidth'
          style={{ height: '100%' }}
        />
      </div>
      <div className={styles.left}>
        <StaticImage
          src='../../images/hero-left.png'
          loading='eager'
          placeholder='none'
          layout='fixed'
          width={280}
          height={184}
        />
      </div>
      <div className={styles.right}>
        <StaticImage
          src='../../images/hero-right.png'
          loading='eager'
          placeholder='none'
          layout='fixed'
          width={354}
          height={282}
        />
      </div>
    </>
  )
}

export default HeroBG
