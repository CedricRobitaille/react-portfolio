import Header from "./header/Header.jsx";
import SkillCollection from "./skill/SkillCollection.jsx";

const Skills = ({ items }) => {

  const skillStyle = {
    maxWidth: "72rem",
    margin: "0 auto",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    justifyContent: "center",
  }

  return (
    <section style={skillStyle}>
      {items.map((item, index) => (
        <article key={index}>
          <Header title={item.category} />
          <SkillCollection skills={item.skills} />
        </article>
      ))}
    </section>
    
  )
}

export default Skills;