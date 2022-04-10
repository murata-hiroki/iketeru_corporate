import * as styles from './styles.module.scss'
import Container from '../Container'
import Footnote from '../Footnote'

const Footer = () => {
  return (
    <footer id='footer' className={styles.footer}>
      <Container>
        <Footnote />
        <p>© 2022 イケテルシステム</p>
      </Container>
    </footer>
  )
}

export default Footer
