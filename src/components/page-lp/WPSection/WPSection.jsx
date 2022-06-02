import Container from '../../common/Container'
import Heading2 from '../../common/Heading2'
import Section from '../../common/Section'
import Sentence from '../../common/Sentence'
import ToFootnote from '../../ToFootnote'
import ConsOfWP from './ConsOfWP'
import Large from '../../common/Large'
import Marker from '../../common/Marker'

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
        <ConsOfWP />
        <Sentence css={{ marginTop: '64px', textAlign: 'center' }}>
          <p>速度面やセキュリティ面で不安のあるWordPress、あなたは使い続けますか？</p>
          <p>
            それでもWordPressを使い続けたいという方は<br />
            <Large><Marker>ここから先は読む必要はありません</Marker></Large>
          </p>
        </Sentence>
      </Container>
    </Section>
  )
}

export default WPSection
