const SkillCard = ({ skill }) => {
  return (
    <a href={skill.example}>
      <h4>{skill.name}</h4>
      <p>Comfort: {skill.comfort}</p>
    </a>
  )
}

export default SkillCard;