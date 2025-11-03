const Logo = ({ file }) => {

  const navLogo = {
    height: "2rem",
    padding: ".75rem",
    backgroundColor: "#333",
    borderRadius: "8px",
    transform: "rotate(-2deg)"
  }


  return (
    <a href="#">
      <img style={navLogo} src={file} alt="Nav Logo" />
    </a>
    
  );
}

export default Logo;