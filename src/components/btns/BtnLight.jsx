const BtnLight = ({ items }) => {

  const btnLightStyle = {
    backgroundColor: "#ffffff",
    padding: ".6rem 1rem .65rem",
    display: "flex",
    flexDirection: "row",
    gap: ".5rem",
    borderRadius: "8px",
    boxShadow: "0px 4px 12px -4px rgba(0,0,0,.125)",
    border: "1px solid rgba(44,44,44,.125)",
    textDecoration: "none"
  }
  

  return (
    <a href={items.link} style={btnLightStyle}>
      {items.icon ? <img src={items.icon} alt="" /> : null }
      <p>{items.text}</p>
    </a>
  )
}

export default BtnLight;