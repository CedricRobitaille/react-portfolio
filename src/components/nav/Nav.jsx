import Logo from "./nav-logo/Logo.jsx";
import NavList from "./nav-list/NavList.jsx";


const Nav = ({ items }) => {

  const navBarStyle = {
    backgroundColor: "#f1f1f1",
    display: "grid",
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