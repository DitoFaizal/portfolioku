import React, { useEffect, useRef } from "react";
import "../styles/myskill.css";
import VanillaTilt from "vanilla-tilt";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faHtml5, faCss3Alt, faJs, faPhp, faGithub } from "@fortawesome/free-brands-svg-icons";
import { SiCplusplus, SiSupabase  } from "react-icons/si"; 


const skills = [
  { name: "React", icon: faReact },
  { name: "C++", icon: SiCplusplus },
  { name: "HTML, CSS & JS", icon: [faHtml5, faCss3Alt, faJs] }, 
  { name: "PHP & MySQL", icon: [faPhp, faGithub] } 
];

export default function MySkill() {
  const tiltRefs = useRef([]);

  useEffect(() => {
    if (tiltRefs.current.length) {
      VanillaTilt.init(tiltRefs.current, {
        max: 15,
        speed: 400,
        glare: true,
        "max-glare": 0.3,
      });
    }
  }, []);

  return (
    <section id="skills" className="myskill reveal">
      <h2 className="section-title">  <SiSupabase size={28} style={{ marginRight: "-3px", color: "#ffffff" }} /> My <span className="highlight">Skills</span> </h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div
            className="skill-card tilt"
            key={index}
            ref={(el) => (tiltRefs.current[index] = el)}
          >
            {/* Jika skill.icon array */}
            {Array.isArray(skill.icon) ? (
              <div className="skill-icons">
                {skill.icon.map((ic, i) => (
                  <FontAwesomeIcon icon={ic} size="3x" key={i} style={{ margin: "0 5px", color: "#ffae00" }} />
                ))}
              </div>
            ) : typeof skill.icon === "function" ? (
              <skill.icon size={38} color="#ffae00" />
            ) : (
              <FontAwesomeIcon icon={skill.icon} size="4x" style={{ color: "#ffae00" }} />
            )}

            <h3>{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
