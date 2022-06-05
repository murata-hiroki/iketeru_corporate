import Card from "../../common/Card"
import Cards from "../../common/Cards"
import Heading3 from "../../common/Heading3"
import SubSection from "../../common/SubSection"
import Icon1 from "../../../inline-svg/cons-icon1.svg"
import Icon2 from "../../../inline-svg/cons-icon2.svg"
import Icon3 from "../../../inline-svg/cons-icon3.svg"

const ConsOfWP = () => {
  return (
    <SubSection>
      <Heading3>WordPressの問題点</Heading3>
      <Cards>
        <Card icon={<Icon1 />} title="サイトスピードが遅い">
          <p>
            WordPressは、サイトにアクセスがあるたびに、PHPというプログラムが動き、画面に表示する情報（HTML）を構築する仕組みになっています。
          </p>
          <p>
            そのため、サーバーに負荷がかかりやすく、サイトの表示が遅くなりがちです。
          </p>
        </Card>
        <Card icon={<Icon2 />} title="セキュリティ面のリスク">
          <p>
            WordPressは、全ウェブサイトの中でも圧倒的なシェアを誇っています。
          </p>
          <p>そのため、ハッカーによる攻撃の対象になりやすいのです。</p>
          <p>
            実際、ハッカーの攻撃によりサイトの内容が改ざんされるなどのトラブルが後を絶ちません。
          </p>
        </Card>
        <Card icon={<Icon3 />} title="運用・管理が煩雑">
          <p>
            WordPressのセキュリティを守るためには、各種ソフトウェアの定期的なアップデートが必要になります。
          </p>
          <ul>
            <li>WordPress本体</li>
            <li>プラグイン</li>
            <li>PHP</li>
          </ul>
          <p>
            これらの更新を定期的にチェックし、アップデートを実施するのは、管理コストや労力がかかります。
          </p>
        </Card>
      </Cards>
    </SubSection>
  )
}

export default ConsOfWP
