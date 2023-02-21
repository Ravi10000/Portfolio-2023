import "./skills.styles.scss";
import skills from "../../utils/skills";

export default function Skills() {
  return (
    <section className="skills-section">
      <h2>what do i work with</h2>
      <div className="skills-container">
        {skills.map((skill) => (
          <div className="skill" key={skill}>
            <img src={`/skills/${skill}`} alt="skill" />
          </div>
        ))}
      </div>
    </section>
  );
}
