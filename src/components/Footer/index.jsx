import * as styles from './styles.module.scss'
import Container from '../Container'
import Footnote from '../Footnote'
import logo from '../../images/logo.svg'

const Footer = () => {
  return (
    <footer id='footer'>
      <div className={styles.upper}>
        <Container>
          <div className={styles.upperInner}>
            <Footnote />
            <p className={styles.copyright}>
              © 2022 イケテルシステム
            </p>
          </div>
        </Container>
      </div>
      <div className={styles.lower}>
        <img src={logo} alt='イケテルシステム' />
      </div>
    </footer>
  )
}

export default Footer
