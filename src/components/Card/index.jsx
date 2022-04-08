const Card = ({ icon, title, desc }) => {
  return (
    <section>
      <div>{icon}</div>
      <h4>{title}</h4>
      <div>{desc}</div>
    </section>
  )
}

export default Card
