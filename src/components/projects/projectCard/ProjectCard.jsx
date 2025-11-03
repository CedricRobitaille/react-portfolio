import Btn from "../../btns/Btn.jsx";

const ProjectCard = ({ project }) => {

  const buttonContent = {
    link: [project.link] ,
    icon: "",
    text: "Check It Out!"
  }

  const cardStyle = {
    width: "calc(50% - 5rem)",
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
    alignItems: "center",
    padding: "2rem",
    borderRadius: "16px",
    boxShadow: "0px 12px 26px -4px rgba(0,0,0,.125)"
  }

  const headerStyle = {
    fontSize: "1.75rem",
    color: "#0d4b74ff"
  }

  return (
    <article style={cardStyle}>
      <h3 style={headerStyle}>{project.name}</h3>
      <p>{project.overview}</p>
      <Btn items={buttonContent} />
    </article>
  )
}

export default ProjectCard;