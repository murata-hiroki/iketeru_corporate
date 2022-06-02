import Section from './common/Section'
import Container from './Container'
import Heading2 from './common/Heading2'
import ToFootnote from './ToFootnote'
import Sentence from './common/Sentence'
import ProsOfGatsby from './ProsOfGatsby'
import Seo from './Seo'
import Compare from './Compare'
import Migration from './Migration'
import Cta from './Cta'
import { colors } from '../styles/utils'

const NewTechnologySection = () => {
  return (
    <Section css={{ background: colors.purple3 }}>
      <Container>
        <Heading2>
          新時代の技術、Gatsby<ToFootnote />。
        </Heading2>
        <Sentence>
          <p>
            Gatsbyとは、高速なWebサイトを構築できるシステムの一つです。
            上記で説明したような、WordPressが抱える課題を解決できることから、今、注目されている新しい技術です。
          </p>
        </Sentence>
        <ProsOfGatsby />
        <Seo />
        <Compare />
        <Migration />
        <Cta />
      </Container>
    </Section>
  )
}

export default NewTechnologySection
