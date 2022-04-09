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
            <section key={faqItem.q}>
              <h3>
                <IconQ />
                {faqItem.q}
              </h3>
              <p>
                <IconA />
                {faqItem.a}
              </p>
            </section>
          )}
        </div>
      </Container>
    </Section>
  )
}

export default Faq
