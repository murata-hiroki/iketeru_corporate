import * as styles from './styles.module.scss'

const Card = ({ icon, title, children }) => {
  return (
    <section>
      <div className={styles.icon}>{icon}</div>
      <h4 className={styles.title}>{title}</h4>
      <div className={styles.desc}>{children}</div>
    </section>
  )
}

export default Card
