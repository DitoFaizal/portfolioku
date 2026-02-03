import React, { useEffect, useRef } from "react";
import projects from "../data/projects.json";
import "../styles/projects.css";
import VanillaTilt from "vanilla-tilt";
import useScrollReveal from "../hooks/useScrollReveal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode} from "@fortawesome/free-solid-svg-icons";

export default function Projects() {
  useScrollReveal();
  const tiltRefs = useRef([]);

  useEffect(() => {
    if (tiltRefs.current.length) {
      VanillaTilt.init(tiltRefs.current, { max: 15, speed: 400, glare: true, "max-glare": 0.3 });
    }
  }, []);

  return (
    <section className="projects reveal" id="projects">
      <h2 className="projects-title"><FontAwesomeIcon icon={faLaptopCode} />My <span className="highlight">Projects</span></h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card tilt" key={index} ref={(el) => (tiltRefs.current[index] = el)}>
            <img src={`/assets/images/projects/${project.image}.jpg`} alt={project.name} />
            <div className="project-content">
              <h3>{project.name}</h3>
              <p>{project.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
