const SkillCard = ({ skill }) => {

  const cardStyle = {
    padding: "1.5rem",
    width: "100%",
    maxWidth: "8rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "1rem",
    backgroundColor: "#fff",
    boxShadow: "0px 4px 12px -4px rgba(0,0,0,.1)",
    borderRadius: "12px",

  }

  const headerStyle = {
    fontSize: "1.125rem",
    color: "#1e3a61ff"
  }

  const comfortStyle = {
    color: "#00000088"
  }

  return (
    <a href={skill.example} style={cardStyle}>
      <h4 style={headerStyle}>{skill.name}</h4>
      <p style={comfortStyle}>Comfort: {skill.comfort}</p>
    </a>
  )
}

export default SkillCard;