import SubSection from '../SubSection'
import Heading3 from '../Heading3'
import Cards from '../Cards'
import cardListData from './cardListData'

const ProsOfGatsby = () => {
  return (
    <SubSection>
      <Heading3>Gatsbyのメリット</Heading3>
      <Cards cards={cardListData} />
    </SubSection>
  )
}

export default ProsOfGatsby
