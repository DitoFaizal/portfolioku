import { useEffect, useState } from "react";
import skillsData from "../data/skills.json";

export default function Skills() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    setSkills(skillsData);
  }, []);

  return (
    <section id="skills" className="skills">
      <div className="container">
        {skills.map(skill => (
          <div className="bar" key={skill.name}>
            <div className="info">
              <img src={skill.icon} alt={skill.name} />
              <span>{skill.name}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
