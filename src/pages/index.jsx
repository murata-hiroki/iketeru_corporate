import '../scss/globals.scss'
import Hero from '../components/Hero'
import NewTechnologySection from '../components/NewTechnologySection'
import Faq from '../components/Faq'
import EstimateSection from '../components/EstimateSection'
import WPSection from '../components/WPSection'

const Page = () => {
  return (
    <>
      <Hero />
      <WPSection />
      <NewTechnologySection />
      <Faq />
      <EstimateSection />
    </>
  )
}

export default Page
