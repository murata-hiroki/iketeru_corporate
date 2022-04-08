const Attention = ({ items }) => {
  return (
    <ul>
      {items.map(item => <li key={item}>{item}</li>)}
    </ul>
  )
}

export default Attention
