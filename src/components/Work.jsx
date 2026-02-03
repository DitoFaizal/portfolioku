import React, { useEffect, useRef } from "react";
import "../styles/work.css";
import VanillaTilt from "vanilla-tilt";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptop} from "@fortawesome/free-solid-svg-icons";

const workData = [
    {
      company: "CV. Platinum Medica Jaya",
      position: "Web Developer (Internship)",
      duration: "2022 - 2023",
      description: [
        "Build a website-based employee attendance application using CodeIgniter.",
        "Build an application to simplify employee salary calculations based on website-based attendance."
      ],
    },
    {
      company: "CV. Inti Ahsan Teknologi",
      position: "Front-End Developer",
      duration: "2025 - Sekarang",
      description: [
        "Build an Etoya web application (PAB) using PHP, JS, Bootstrap, HTML.",
        "Build a ship dock and warehouse stock web application using PHP, JS, Bootstrap, HTML."
      ], 
    },
  ];

export default function Work() {
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
    <section id="work" className="work reveal">
      <h2 className="section-title"><FontAwesomeIcon icon={faLaptop} />Work <span className="highlight">Experience</span></h2>
      <div className="work-container">
        {workData.map((job, index) => (
        <div
        className="work-card tilt"
        key={index}
        ref={(el) => (tiltRefs.current[index] = el)}
      >
        <h3>{job.position}</h3>
        <span className="company">{job.company}</span>
        <span className="duration">{job.duration}</span>
        
        <ol className="work-description">
          {job.description.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ol>
      </div>
      
        ))}
      </div>
    </section>
  );
}
