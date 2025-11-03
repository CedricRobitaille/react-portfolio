import Logo from "./nav-logo/Logo.jsx";
import NavList from "./nav-list/NavList.jsx";


const Nav = ({ items }) => {

  const navBarStyle = {
    backgroundColor: "#1d1d1f",
    display: "grid",
    alignItems: "center",
    gridTemplateColumns: "1fr auto",
    padding: ".75rem 2rem .75rem"
  }


  return (
    <nav style={navBarStyle}>
      <Logo file={items.logo} />
      <NavList links={items.links} />
    </nav>
  )
}

export default Nav;