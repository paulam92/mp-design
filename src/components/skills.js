import "../css/skills.css";

function Skills(props) {
  return (
    <div className="skills-component">
      <i className={props.skillsCardEl.icon}></i>
      <p>{props.skillsCardEl.title}</p>
      <p>{props.skillsCardEl.description}</p>
      <p>{props.skillsCardEl.listTitle}</p>
      <div>
        {props.skillsCardEl.list.map((listEl, index) => {
          return <p key={index}>{listEl}</p>;
        })}
      </div>
      <p>{props.skillsCardEl.toolsTitle}</p>
      <div>
        {props.skillsCardEl.tools.map((toolsEl, index) => {
          return <p key={index}>{toolsEl}</p>;
        })}
      </div>
    </div>
  );
}

export default Skills;
