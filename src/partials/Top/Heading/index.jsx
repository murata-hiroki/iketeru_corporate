import * as styles from './styles.module.scss'
import { StaticImage } from 'gatsby-plugin-image'

export const Heading = () => {
  return (
    <Container>
      <div>
        <h1>まだWordpressを使っている方必見!!</h1>
        <div>
          <p>あなたのサイト、もっと高速に、もっとセキュリティを強固に。</p>
        </div>
      </div>
      <div>
        <StaticImage src='../../../images/freepik--Device--inject-118.png' />
      </div>
      <div>
        <StaticImage src='../../../images/freepik--Device--inject-187.png' />
      </div>
    </Container>
  )
}

const Container = ({ children, className }) => {
  return <div className={className ?? styles.Container}>{children}</div>
}
