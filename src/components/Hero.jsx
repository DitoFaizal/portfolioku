import { useEffect, useRef } from "react";
import TypedText from "./TypedText";
import "../styles/hero.css";
import VanillaTilt from "vanilla-tilt";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faArrowDown } from "@fortawesome/free-solid-svg-icons";

export default function Hero() {
  const imageRef = useRef(null);

  useEffect(() => {
    if (imageRef.current) {
      VanillaTilt.init(imageRef.current, {
        max: 15,
        speed: 400,
        glare: true,
        "max-glare": 0.25,
        scale: 1.05,   // efek zoom halus
      });
    }

    return () => {
      if (imageRef.current?.vanillaTilt) {
        imageRef.current.vanillaTilt.destroy();
      }
    };
  }, []);

  return (
    <section id="home" className="hero reveal">
      <div className="hero-container">
        <div className="hero-content">
          <h1>
            Hi There, <br />
            I'm <span className="highlight">Dito Faizal Afif</span>
          </h1>

          <h3>
            I Am Into <span className="typing"><TypedText /></span>
          </h3>

          <p>
            I Am A Dedicated Front-end Developer Passionate About Creating Innovative Web Applications.
            I Strive To Build User-Friendly Solutions And Continuously Enhance My Skills.
          </p>

          <a href="#about" className="btn-primary">
            About Me <FontAwesomeIcon icon={faArrowDown} />
          </a>

          <div className="socials">
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
            <a href="https://github.com" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="https://wa.me/6289618881072" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faWhatsapp} /></a>
            <a href="mailto:ditofaizal182@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></a>
          </div>
        </div>

        <div className="hero-image">
          <img
            ref={imageRef}
            src="/assets/images/fotoku.jpeg"
            alt="Avatar"
          />
        </div>
      </div>
    </section>
  );
}
