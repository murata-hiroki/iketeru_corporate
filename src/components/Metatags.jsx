import Helmet from 'react-helmet'
import ogimg from '../images/ogp.jpg'
import favicon from '../images/favicon.png'

const title = 'まだWordPressをご利用の方、必見！ 高速なサイト作りは「イケテルシステム」におまかせ！'
const description = 'WordPressはすばらしいシステムですが、セキュリティリスクを抱えやすかったり、サイトの表示速度が遅くなりやすかったりといったデメリットがあります。Gatsbyに乗り換えることにより、高速でセキュアなサイトを構築することができます！ しかも、サーバー費用無料！ Gatsbyへの移行は、Web開発のプロフェッショナル集団、イケテルシステムにお任せください！'
const host = 'https://lp.iketeru-system.com'
const canonicalUrl = `${host}/`

const Metatags = () => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <link rel='canonical' href={canonicalUrl} />
      <link rel='icon' type='image/png' href={favicon} />
      <meta property='og:url' content={canonicalUrl} />
      <meta property='og:type' content='website' />
      <meta property='og:image' content={`${host}${ogimg}`} />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
    </Helmet>
  )
}

export default Metatags
