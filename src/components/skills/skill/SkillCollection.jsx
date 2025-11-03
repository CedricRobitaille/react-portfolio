import SkillCard from "./SkillCard.jsx"

const SkillCollection = ({ skills }) => {
  return (
    <div>
      {skills.map((skill, index) => (
        <SkillCard key={index} skill={skill} />
      ))}
    </div>
  )
}

export default SkillCollection;