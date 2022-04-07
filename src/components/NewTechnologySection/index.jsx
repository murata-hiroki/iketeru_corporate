import Section from '../Section'
import Container from '../Container'
import Heading2 from '../Heading2'
import ToFootnote from '../ToFootnote'

const NewTechnologySection = () => {
  return (
    <Section color='purple'>
      <Container>
        <Heading2>
          新時代の技術、Gatsby<ToFootnote />。
        </Heading2>
      </Container>
    </Section>
  )
}

export default NewTechnologySection
