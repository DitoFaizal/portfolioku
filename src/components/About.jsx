import React, { useRef, useEffect } from "react";
import useScrollReveal from "../hooks/useScrollReveal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "../styles/about.css";
import VanillaTilt from "vanilla-tilt";

export default function About() {
  useScrollReveal();
  const tiltRef = useRef(null);

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, { max: 13, speed: 400, glare: true, "max-glare": 0.3 });
    }
  }, []);

  return (
    <section className="about reveal" id="about">
      <h2 className="about-title"><FontAwesomeIcon icon={faUser} /> About <span className="highlight">Me</span></h2>
      <div className="about-container">
        <div className="about-image" ref={tiltRef}>
          <img src="/assets/images/Aku.jpeg" alt="Dito Faizal Afif" />
        </div>
        <div className="about-content">
          <p className="about-text">
            I am a passionate <span className="highlight">Frontend Web Developer</span> who enjoys creating <span className="highlight">modern, responsive</span> and visually appealing web applications using <span className="highlight">React</span> and contemporary web technologies. I focus on writing <span className="highlight">clean code</span>, implementing <span className="highlight">smooth animations</span>, and building <span className="highlight">user-friendly interfaces</span> that deliver great user experience.
          </p>
        </div>
      </div>
    </section>
  );
}
