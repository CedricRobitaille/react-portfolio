const navListStyle = {
  display: "flex",
  gap: "2rem",
}

const NavList = ({ links }) => {
  return (
    <ul style={navListStyle}>
      {links.map((link, index) => {
        <li key={index}> <a href={link.link}> {link.text} </a> </li>
      })}
    </ul>
  );
}

export default NavList;