import '../scss/globals.scss'
import Hero from '../components/Hero'
import NewTechnologySection from '../components/NewTechnologySection'
import Faq from '../components/Faq'
import EstimateSection from '../components/EstimateSection'
import WPSection from '../components/WPSection'
import TeamSection from '../components/TeamSection'
import Footer from '../components/Footer'
import Metatags from '../components/Metatags'

const Page = () => {
  return (
    <>
      <Metatags />
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

export default Page
