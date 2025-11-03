import Nav from "./components/nav/Nav.jsx"


const dataSet = {
  logo: "./assets/logo.svg",
  author: {
    name: "Cedric",
    description: "Making HOLY SH*T Web Solutions for Bold and Daring Clients",
    pfp: "./assets/pfp.jpg",
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
          name: "Adobe Illustrator",
          comfort: "10",
          example: "#",
        },
        {
          name: "Adobe Photoshop",
          comfort: "9",
          example: "#",
        },
        {
          name: "Adobe InDesign",
          comfort: "11",
          example: "#",
        },
        {
          name: "Adobe After Effects",
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
      link: "Created a Kanban-board styled Project Management System using the MEN Stack, featuring user authentication and a full CRUD featureset, giving users the power to manage tasks as they need.",
    },
  ]
}


const App = () => {
  const navItems = { logo: dataSet.logo, links: dataSet.navLinks }
  return (
    <div>
      <Nav items={navItems} />
    </div>
  )
}

export default App