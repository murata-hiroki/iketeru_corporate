import * as styles from './styles.module.scss'

const Card = ({ icon, title, desc }) => {
  return (
    <section>
      <div className={styles.icon}>{icon}</div>
      <h4 className={styles.title}>{title}</h4>
      <div className={styles.desc}>{desc}</div>
    </section>
  )
}

export default Card
