import "../css/about.css";
import Skills from "./skills";

const skillsArray = [
  {
    icon: "fab fa-dev",
    title: "Web Developer",
    descriptionText:
      "I like to code things from scratch, and enjoy bringing ideas to life in the browser.",
    listTitle: "Languages",
    list: ["Html", "CSS", "JS"],
    toolsTitle: "Dev Tools",
    tools: ["Bootstrap", "Codepen", "Github", "Gitlab"],
  },
  {
    icon: "fas fa-magic",
    title: "Web Designer",
    descriptionText:
      "I value simple content structure, clean design patterns, and thoughtful interactions.",
    listTitle: "Things I enjoy designing",
    list: ["UX", "UI", "Logos", "Apps"],
    toolsTitle: "Design Tools",
    tools: ["Figma", "Pen&Paper", "Webflow"],
  },
  {
    icon: "fas fa-bullhorn",
    title: "Digital Marketing",
    descriptionText:
      "I genuinely care about people, and love helping fellow designers work on their craft.",
    listTitle: "Skills",
    list: [
      "Affiliate Marketing",
      "SEO",
      "Email Marketing",
      "Costumer Service",
      "Paid Social Media",
    ],
    toolsTitle: "Digital Marketing Tools",
    tools: ["Google", "Instagram"],
  },
];

function About() {
  return (
    <div className="about-component">
      <h2>About</h2>
      <h3>Hi, I’m Paula. Nice to meet you.</h3>
      <div className="about-text-wrapper">
        <p>
          However, I'm at the beginning of my Web development journey,I'm
          quietly confident, naturally curious, and continuously working on
          improving my skills.
        </p>
        <p>
          Currently, I'm a student at the Digital Career Institute and following
          graduating I would like to gain my first experiences as a Front-end
          developer and Web designer.
        </p>
        <p>
          I'm interested in freelance and would be happy to work remotely for
          agencies,consult for startups, and collaborate with talented people to
          create digital products for both business and consumer use.
        </p>
      </div>
      <h3>Skills</h3>
      <div className="skills-card-wrapper">
        {skillsArray.map((skillsCardEl, index) => {
          return <Skills skillsCardEl={skillsCardEl} key={index} />;
        })}
      </div>
    </div>
  );
}

export default About;
