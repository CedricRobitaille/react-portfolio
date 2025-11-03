import SkillCard from "./SkillCard.jsx"

const SkillCollection = ({ skills }) => {

  const collectionStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "1rem",
    justifyContent: "center"
  }

  return (
    <div style={collectionStyle}>
      {skills.map((skill, index) => (
        <SkillCard key={index} skill={skill} />
      ))}
    </div>
  )
}

export default SkillCollection;