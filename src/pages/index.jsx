import '../scss/globals.scss'
import Hero from '../components/Hero'
import NewTechnologySection from '../components/NewTechnologySection'
import Faq from '../components/Faq'
import EstimateSection from '../components/EstimateSection'
import WPSection from '../components/WPSection'
import TeamSection from '../components/TeamSection'

const Page = () => {
  return (
    <>
      <Hero />
      <WPSection />
      <NewTechnologySection />
      <Faq />
      <EstimateSection />
      <TeamSection />
    </>
  )
}

export default Page
