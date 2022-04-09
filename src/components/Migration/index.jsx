import { StaticImage } from 'gatsby-plugin-image'
import Heading3 from '../Heading3'
import SubSection from '../SubSection'
import ArrowRight from '../../inline-svg/arrow-right.svg'
import gatsbyLogo from '../../images/gatsby.svg'

const Migration = () => {
  return (
    <SubSection>
      <Heading3>Gatsbyへの移行は、イケテルシステムにお任せを！</Heading3>
      <div>
        <StaticImage src='../../images/wordpress.png' alt='WordPress' />
        <ArrowRight />
        <img src={gatsbyLogo} alt='Gatsby' />
      </div>
      <p>
        イケテルシステムは、WordPress製のサイトをGatsbyに移行するサービスを展開しています。<br />
        お気軽にご相談ください！
      </p>
    </SubSection>
  )
}

export default Migration
