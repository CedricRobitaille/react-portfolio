import ProjectCard from "./projectCard/ProjectCard";

const Projects = ({ projects }) => {

  const projectsStyle = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: "2rem",
    justifyContent: "center",
  }

  const sectionStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
    alignItems: "center",
    maxWidth: "88rem",
    width: "100%",
    margin: "0 auto",
  }
  
  const headerStyle = {
    textAlign: "center",
    fontSize: "1.75rem",
    fontWeight: "400",
  }

  return (
    <section style={sectionStyle}>
      <h2 style={headerStyle}>Projects</h2>
      <div style={projectsStyle}>
        {projects.map((project, index) => (
          <ProjectCard project={project} key={index} />
        ))}
      </div>
    </section>
    
  )
}

export default Projects;