import * as styles from './styles.module.scss'
import Card from '../Card'

const Cards = ({ cards }) => {
  return (
    <div className={styles.cards}>
      {cards.map(card =>
        <div key={card.title} className={styles.cardBox}>
          <Card
            icon={card.icon}
            title={card.title}
            desc={card.desc}
          />
        </div>
      )}
    </div>
  )
}

export default Cards
