import Nav from "./components/nav/Nav.jsx"
import Profile from "./components/profile/Profile.jsx"
import Skills from "./components/skills/Skills.jsx"
import Projects from "./components/projects/Projects.jsx"


const dataSet = {
  logo: "./images/logo.svg",
  author: {
    name: "Cedric Robitaille",
    description: "I Make HOLY SH*T Web Solutions for Bold and Daring Clients!",
    pfp: "./images/pfp.jpg",
  },
  navLinks: [
    { text: "Portfolio", link: "https://cedricrobitaille.ca" },
    { text: "Github", link: "https://github.com/CedricRobitaille" },
    { text: "LinkedIn", link: "https://www.linkedin.com/in/cedricrobitaille/" },
  ],
  mySkills: [
    {
      category: "Development",
      skills: [
        {
          name: "HTML",
          comfort: "10",
          example: "#",
        },
        {
          name: "CSS",
          comfort: "10",
          example: "#",
        },
        {
          name: "JS",
          comfort: "9",
          example: "#",
        },
        {
          name: "React",
          comfort: "-12",
          example: "#",
        },
      ]
    },
    {
      category: "Design",
      skills: [
        {
          name: "Figma",
          comfort: "10",
          example: "#",
        },
        {
          name: "Illustrator",
          comfort: "10",
          example: "#",
        },
        {
          name: "Photoshop",
          comfort: "9",
          example: "#",
        },
        {
          name: "InDesign",
          comfort: "11",
          example: "#",
        },
        {
          name: "After Effects",
          comfort: "9",
          example: "#",
        },
      ]
    }
  ],
  projects: [
    {
      name: "Pokemon Colosseum",
      link: "#",
      overview: "Created a Pokemon battle app featuring an intuitive Pokedex and team-building system using HTML, CSS, JavaScript, and the PokeAPI to deliver an engaging, game-like experience."
    },
    {
      name: "Flogrid",
      link: "http://18.221.96.129:3001/",
      overview: "Created a Kanban-board styled Project Management System using the MEN Stack, featuring user authentication and a full CRUD featureset, giving users the power to manage tasks as they need.",
    },
  ],
  addLinks: {
    calendly: { text: "Let's Connect", link: "https://calendly.com/contact-cedricrobitaille/30min", icon: "./icons/message-circle.svg"
    }
  }
}


const App = () => {
  const docStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "4rem",
    backgroundColor: "#fbfeffff",
    marginBottom: "2rem",
  }

  const navItems = { logo: dataSet.logo, links: dataSet.navLinks }
  const headerItems = { author: dataSet.author, cta: dataSet.addLinks.calendly, scndLink: dataSet.navLinks[0]}

  return (
    <main style={docStyle}>
      <Nav items={navItems} />
      <Profile items={headerItems} />
      <Skills skills={dataSet.mySkills} />
      <Projects projects={dataSet.projects}/>
    </main>
  )
}

export default App