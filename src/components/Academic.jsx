import React, { useEffect, useRef } from "react";
import "../styles/academic.css";
import VanillaTilt from "vanilla-tilt";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap} from "@fortawesome/free-solid-svg-icons";

const academicData = [
  {
    school: "Semarang University",
    degree: "Bachelor Degree of Informatics Engineer",
    duration: "2019 - 2024",
    description: "Focus on Web Application and Internet of Things."
  },
  {
    school: "SMA Negeri 14 Semarang",
    degree: "Social Class (IPS)",
    duration: "2016 - 2019",
    description: "Study history, geography and economics."
  }
];

export default function Academic() {
  const tiltRefs = useRef([]);

  useEffect(() => {
    if (tiltRefs.current.length) {
      VanillaTilt.init(tiltRefs.current, {
        max: 15,
        speed: 400,
        glare: true,
        "max-glare": 0.3
      });
    }
  }, []);

  return (
    <section id="academic" className="academic reveal">
      <h2 className="section-title"><FontAwesomeIcon icon={faGraduationCap} />Academic <span className="highlight">Background</span></h2>
      <div className="academic-container">
        {academicData.map((item, index) => (
          <div
            className="academic-card tilt"
            key={index}
            ref={(el) => (tiltRefs.current[index] = el)}
          >
            <h3>{item.degree}</h3>
            <span className="school">{item.school}</span>
            <span className="duration">{item.duration}</span>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
