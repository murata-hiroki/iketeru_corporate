import GlobalStyles from '../../styles/GlobalStyles'
import EstimateSection from './EstimateSection'
import Faq from './Faq'
import Footer from './Footer'
import Hero from './Hero'
import Metatags from './Metatags'
import NewTechnologySection from './NewTechnologySection'
import TeamSection from './TeamSection'
import WPSection from './WPSection'

const Template = () => {
  return (
    <>
      <Metatags />
      <GlobalStyles />
      <Hero />
      <WPSection />
      <NewTechnologySection />
      <Faq />
      <EstimateSection />
      <TeamSection />
      <Footer />
    </>
  )
}

export default Template
