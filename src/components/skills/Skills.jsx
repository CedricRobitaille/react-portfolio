import Header from "./header/Header.jsx";
import SkillCollection from "./skill/SkillCollection.jsx";

const Skills = ({ skills }) => {

  const skillStyle = {
    maxWidth: "92rem",
    margin: "0 auto",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "4rem",
    justifyContent: "center",
    padding: "2rem"
  }

  const collectionStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "2rem"
  }

  return (
    <section style={skillStyle}>
      {skills.map((item, index) => (
        <article key={index} style={collectionStyle}>
          <Header title={item.category} />
          <SkillCollection skills={item.skills} />
        </article>
      ))}
    </section>
    
  )
}

export default Skills;