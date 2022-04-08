import Icon1 from '../../images/pros-icon1.svg'
import Icon2 from '../../images/pros-icon2.svg'
import Icon3 from '../../images/pros-icon3.svg'

const cardListData = [
  {
    icon: <Icon1 />,
    title: '高速',
    desc: (
      <>
        <p>GatsbyはWordPressと違い、事前にサイトに表示する情報（HTML）をビルドする方式です。</p>
        <p>サーバー上でプログラムを実行する必要がないため、高速にサイトを表示することができます。</p>
      </>
    )
  },
  {
    icon: <Icon2 />,
    title: 'セキュリティの向上',
    desc: (
      <>
        <p>Gatsbyはサーバー上でプログラムを実行しません。そのため、ハッカーにとっては攻撃しにくいという特徴があります。</p>
        <p>もちろん100%安全とは言い切れませんが、WordPressと比べると、格段にセキュリティリスクが低いと言えます。</p>
      </>
    )
  },
  {
    icon: <Icon3 />,
    title: 'サーバーコストの削減',
    desc: (
      <>
        <p>Gatsbyはサーバー上でPHPなどのプログラムを実行する必要がありません。そのため、一般的なレンタルサーバーではなく、必要最低限の機能を備えたホスティングサービスを利用することができます。</p>
        <p>アクセスの多いサイトでなければ、無料枠で利用可能です。</p>
      </>
    )
  }
]

export default cardListData
