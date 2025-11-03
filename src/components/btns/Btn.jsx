const Btn = ({ items }) => {

  const btnStyle = {
    backgroundColor: "#fc7334ff",
    padding: ".6rem 1rem .65rem",
    display: "flex",
    flexDirection: "row",
    gap: ".5rem",
    borderRadius: "8px",
    boxShadow: "0px 8px 12px -2px #92675655",
    textDecoration: "none",
  }

  const btnColor = {
    color: "#fff",
    textDecoration: "none",
    whiteSpace: "nowrap"
  }

  return (
    <a href={items.link} style={btnStyle}>
      { items.icon && <img src={items.icon} alt="" /> }
      <p style={btnColor}>{items.text}</p>
    </a>
  )
}

export default Btn;