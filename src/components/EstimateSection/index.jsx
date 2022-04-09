import Container from '../Container'
import Cta from '../Cta'
import Heading2 from '../Heading2'
import Section from '../Section'

const EstimateSection = () => {
  return (
    <Section color='purple'>
      <Container>
        <Heading2>無料お見積りはこちらから</Heading2>
        <Cta hideBtn />
      </Container>
    </Section>
  )
}

export default EstimateSection
