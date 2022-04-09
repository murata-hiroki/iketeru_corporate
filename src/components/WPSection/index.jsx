import Container from '../Container'
import Heading2 from '../Heading2'
import Section from '../Section'
import Sentence from '../Sentence'
import ToFootnote from '../ToFootnote'

const WPSection = () => {
  return (
    <Section>
      <Container>
        <Heading2>
          WordPress<ToFootnote />の時代は終わった。
        </Heading2>
        <Sentence>
          <p>
            WordPressは、ホームページを簡単に作成することができるすばらしいシステムです。<br />
            ここまでWebが普及したのは、WordPressの貢献によるところが大きいでしょう。<br />
            しかし、近年、WordPressのセキュリティに対する不安や、スピード面での課題が問題視されるようになってきました。
          </p>
        </Sentence>
      </Container>
    </Section>
  )
}

export default WPSection
