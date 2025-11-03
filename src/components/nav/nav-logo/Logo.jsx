const Logo = ({ file }) => {

  const navLogo = {
    height: "2rem",
  }


  return (
    <a href="#">
      <img style={navLogo} src={file} alt="Nav Logo" />
    </a>
    
  );
}

export default Logo;