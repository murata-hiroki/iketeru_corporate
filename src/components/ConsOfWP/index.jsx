import Cards from '../Cards'
import Heading3 from '../Heading3'
import SubSection from '../SubSection'
import { cardListData } from './cardListData'

const ConsOfWP = () => {
  return (
    <SubSection>
      <Heading3>WordPressの問題点</Heading3>
      <Cards cards={cardListData} />
    </SubSection>
  )
}

export default ConsOfWP
