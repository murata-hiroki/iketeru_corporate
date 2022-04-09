import { StaticImage } from 'gatsby-plugin-image'
import Button from '../Button'

const Cta = ({ hideBtn = false }) => {
  return (
    <div>
      <StaticImage
        src='../../images/banner.png'
        alt='創業キャンペーン実施中！ 通常価格¥100,000〜 → 先着3件限定 ¥30,000〜！'
      />
      {hideBtn || (
        <div>
          <Button>無料お見積もりはこちら</Button>
        </div>
      )}
    </div>
  )
}

export default Cta
