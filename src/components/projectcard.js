import "../css/projectcard.css";

function ProjectCard(props) {
  return (
    <div
      className="project-card-component"
      style={{ backgroundImage: `url(${props.projectsCardEl.projectImgPath})` }}
    >
      <h4>{props.projectsCardEl.projectTitle}</h4>
    </div>
  );
}

export default ProjectCard;
