import Btn from "../btns/Btn.jsx"
import BtnLight from "../btns/BtnLight.jsx"

const Profile = ({ items }) => {
  const profileStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
    width: "100%",
    maxWidth: "72rem",
    margin: "0 auto",
    padding: "2rem",
    fontFamily: "Oranienbaum, serif",
    fontWeight: "400",
    fontStyle: "normal",
  }

  const fontStyle = {
    fontFamily: "Oranienbaum, serif",
    fontWeight: "400",
    fontStyle: "normal",
    fontSize: "3rem",
    maxWidth: "28rem"
  }

  const imgStyle = {
    height: "3.5rem",
    border: "4px solid #fff",
    borderRadius: "10px",
    boxShadow: "0px 6px 24px -2px rgba(0,0,0,.2)",
    transform: "rotate(4deg)"
  }

  const nameStyle = {
    display: "flex",
    flexDirection: "row",
    gap: "1rem",
    alignItems: "end"
  }

  const ctaStyle = {
    display: "flex",
    flexDirection: "row",
    gap: ".75rem"
  }


  return (
    <header style={profileStyle}>
      <div style={nameStyle}>
        <img src={items.author.pfp} alt="Profile Picture" style={imgStyle} />
        <p style={fontStyle}>{items.author.name}</p>
      </div>
      <h2 style={fontStyle}>{items.author.description}</h2>
      <div style={ctaStyle}>
        <Btn items={items.cta} />
        <BtnLight items={items.scndLink} />
      </div>
    </header>
    
  )
}

export default Profile;