import * as styles from './styles.module.scss'

const Hero = () => {
  return (
    <div className={styles.outer}>
      <h1 className={styles.title}>
        まだWordPressを<br />使っている方必見！！
      </h1>
      <p className={styles.catchcopy}>
        あなたのサイト、<br />
        もっと高速に、<br />
        もっとセキュリティを強固に。
      </p>
    </div>
  )
}

export default Hero
