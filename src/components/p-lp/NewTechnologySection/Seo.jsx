import Heading3 from '../../common/Heading3'
import SubSection from '../../common/SubSection'
import Sentence from '../../common/Sentence'
import Marker from '../../common/Marker'
import Attention from '../../common/Attention'

const Seo = () => {
  return (
    <SubSection>
      <Heading3>サイトの高速化はSEO対策にも有効</Heading3>
      <Sentence>
        <p>
          Googleは2021年から、ウェブサイトの表示スピードを、検索ランキングの指標の1つとして導入しました。
          したがって、サイトを高速化することにより、<Marker>検索順位に良い影響</Marker>を与えることが期待できます。<br />
          Gatsbyへの移行で、サイトを高速化しませんか？
        </p>
      </Sentence>
      <Attention
        items={[
          '必ず検索順位が上がることを保証するものではありません'
        ]}
      />
    </SubSection>
  )
}

export default Seo
