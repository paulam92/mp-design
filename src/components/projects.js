import "../css/projects.css";
import ProjectCard from "./projectcard.js";

const projectsDataArray = [
  {
    projectImgPath: "/image/project1.jpg",
    projectTitle: "Javascript games",
    projectDescription: "Here can you find all my games in Javascript",
    websiteUrlTitle: "Javascript projects",
    websiteUrlLink: "https://github.com/paulam92/Javascript-Project",
    repositoryUrlTitle: "Javascript-projects",
    repositoryUrlLink: "https://github.com/paulam92/Javascript-Project",
  },
  {
    projectImgPath: "/image/project2.jpg",
    projectTitle: "Portfolio project",
    projectDescription: "This is my first portfolio website",
    websiteUrlTitle: "portfolio-website",
    websiteUrlLink: "https://github.com/paulam92/Portfolio-Website",
    repositoryUrlTitle: "portfolio-website",
    repositoryUrlLink: "https://github.com/paulam92/Portfolio-Website",
  },
  {
    projectImgPath: "/image/project3.jpg",
    projectTitle: "Discord clone",
    projectDescription:
      "This is a demo version of Discord with React-redux and Firebase",
    websiteUrlTitle: "Discord clone",
    websiteUrlLink: "https://github.com/paulam92/Discord-clone",
    repositoryUrlTitle: "Discord-clone",
    repositoryUrlLink: "https://github.com/paulam92/Discord-clone",
  },
];

function Projects() {
  return (
    <div className="projects-component">
      <h2>Projects</h2>
      <div className="project-cards-wrapper">
        {projectsDataArray.map((projectsCardEl, index) => {
          return <ProjectCard projectsCardEl={projectsCardEl} key={index} />;
        })}
      </div>
    </div>
  );
}

export default Projects;
