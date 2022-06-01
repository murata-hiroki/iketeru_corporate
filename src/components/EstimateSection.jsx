import { colors } from '../utilities/styleUtilities'
import Container from './Container'
import Cta from './Cta'
import EstimateForm from './EstimateForm'
import Heading2 from './Heading2'
import Section from './Section'

const EstimateSection = () => {
  return (
    <Section id='estimate' css={{ background: colors.purple3 }}>
      <Container>
        <Heading2>無料お見積りはこちらから</Heading2>
        <Cta hideBtn />
        <EstimateForm />
      </Container>
    </Section>
  )
}

export default EstimateSection
