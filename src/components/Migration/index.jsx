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
    </SubSection>
  )
}

export default Migration
