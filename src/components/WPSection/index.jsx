import Container from '../Container'
import Heading2 from '../Heading2'
import Section from '../Section'
import ToFootnote from '../ToFootnote'

const WPSection = () => {
  return (
    <Section>
      <Container>
        <Heading2>
          WordPress<ToFootnote />の時代は終わった。
        </Heading2>
      </Container>
    </Section>
  )
}

export default WPSection
