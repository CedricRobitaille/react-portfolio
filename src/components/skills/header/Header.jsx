const Header = ({ title }) => {

  const titleStyle = {
    textAlign: "center",
    fontSize: "1.75rem",
    fontWeight: "400",
  }

  return (
    <h3 style={titleStyle}>{title}</h3>
  )
}

export default Header;