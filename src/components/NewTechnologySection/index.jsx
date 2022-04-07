import Section from '../Section'
import Container from '../Container'
import Heading2 from '../Heading2'
import Footnote from '../Footnote'

const NewTechnologySection = () => {
  return (
    <Section color='purple'>
      <Container>
        <Heading2>
          新時代の技術、Gatsby<Footnote />。
        </Heading2>
      </Container>
    </Section>
  )
}

export default NewTechnologySection
