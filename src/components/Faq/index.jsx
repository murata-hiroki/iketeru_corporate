import Container from '../Container'
import Heading2 from '../Heading2'
import Section from '../Section'
import { faqList } from './faqList'

const Faq = () => {
  return (
    <Section>
      <Container>
        <Heading2>よくあるご質問</Heading2>
        <div>
          {faqList.map(faqItem =>
            <section key={faqItem.q}>
              <h3>{faqItem.q}</h3>
              <p>{faqItem.a}</p>
            </section>
          )}
        </div>
      </Container>
    </Section>
  )
}

export default Faq
