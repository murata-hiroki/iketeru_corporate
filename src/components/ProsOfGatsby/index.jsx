import SubSection from '../SubSection'
import Heading3 from '../Heading3'
import Cards from '../Cards'
import Sentence from '../Sentence'
import Marker from '../Marker'
import { cardListData } from './cardListData'

const ProsOfGatsby = () => {
  return (
    <SubSection>
      <Heading3>Gatsbyのメリット</Heading3>
      <Cards cards={cardListData} />
      <Sentence>
        <p>
          Gatsbyは、主に<Marker>海外で普及し始め</Marker>ており、
          インターネット事業者のホームページや、ビジネスニュースを配信するサイトなどで採用されています。
          いずれも、サイトの高速化に成功しています。
        </p>
        <p>
          日本では、まだ導入事例が少ないものの、着実に<Marker>導入事例が増え始め</Marker>ています。<br />
          いち早く新しい技術を導入し、<Marker>高速でセキュア</Marker>なサイトを構築しませんか？
        </p>
      </Sentence>
    </SubSection>
  )
}

export default ProsOfGatsby
