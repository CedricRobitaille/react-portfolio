const navListStyle = {
  display: "flex",
  gap: "2rem",
}

const NavList = ({ links }) => {

  const navListStyle = {
    listStyleType: "none",
    display: "flex",
    gap: "1rem"
  }

  const navLink = {
    color: "#f1f1f1",
    textDecoration: "none",
    fontSize: "1.125rem"
  }


  return (
    <ul style={navListStyle}>
      {links.map((link, index) => (
        <li key={index}> <a href={link.link} style={navLink}> {link.text} </a> </li>
      ))}
    </ul>
  );
}

export default NavList;