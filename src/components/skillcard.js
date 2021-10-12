import "../css/skillcard.css";

function SkillCard(props) {
  return (
    <div className="skill-card-component">
      <i className={props.skillsCardEl.icon}></i>
      <h4>{props.skillsCardEl.title}</h4>
      <div>
        <p>{props.skillsCardEl.descriptionText}</p>
        <h5>{props.skillsCardEl.listTitle}:</h5>
        <div>
          {props.skillsCardEl.list.map((listEl, index) => {
            return <p key={index}>{listEl}</p>;
          })}
        </div>
        <h5>{props.skillsCardEl.toolsTitle}:</h5>
        <div>
          {props.skillsCardEl.tools.map((toolsEl, index) => {
            return <p key={index}>{toolsEl}</p>;
          })}
        </div>
      </div>
    </div>
  );
}

export default SkillCard;
