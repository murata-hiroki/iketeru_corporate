import * as styles from './styles.module.scss'
import Container from '../Container'
import Heading2 from '../Heading2'
import Section from '../Section'
import { faqList } from './faqList'
import IconQ from '../../inline-svg/icon-q.svg'
import IconA from '../../inline-svg/icon-a.svg'

const Faq = () => {
  return (
    <Section>
      <Container>
        <Heading2>よくあるご質問</Heading2>
        <div>
          {faqList.map(faqItem =>
            <section key={faqItem.q} className={styles.item}>
              <h3 className={styles.title}>
                <span className={styles.textInner}>
                  <IconQ className={styles.iconQ} />
                  {faqItem.q}
                </span>
              </h3>
              <p className={styles.answer}>
                <span className={styles.textInner}>
                  <IconA className={styles.iconA} />
                  {faqItem.a}
                </span>
              </p>
            </section>
          )}
        </div>
      </Container>
    </Section>
  )
}

export default Faq
