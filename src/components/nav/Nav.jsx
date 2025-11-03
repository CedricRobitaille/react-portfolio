import Logo from "./nav-logo/Logo.jsx";
import NavList from "./nav-list/NavList.jsx";


const Nav = ({ items }) => {

  const navBarStyle = {
    backgroundColor: "#fbfeffff",
    display: "grid",
    alignItems: "center",
    gridTemplateColumns: "1fr auto",
    padding: ".5rem 2rem .5rem",
    boxShadow: "0px 8px 22px -6px rgba(126, 126, 126, 0.07)"
  }


  return (
    <nav style={navBarStyle}>
      <Logo file={items.logo} />
      <NavList links={items.links} />
    </nav>
  )
}

export default Nav;