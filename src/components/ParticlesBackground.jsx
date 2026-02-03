import { useEffect } from "react";

export default function ParticlesBackground() {
  useEffect(() => {
    if (!window.particlesJS) return;

    window.particlesJS("particles-js", {
      particles: {
        number: { value: 80 },
        color: { value: "#ffae00" },
        shape: { type: "circle" },
        size: { value: 5, random: true },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#ffae00",
          opacity: 0.4,
          width: 1
        },
        move: { enable: true, speed: 6 }
      },
      interactivity: {
        events: {
          onhover: { enable: true, mode: "repulse" },
          onclick: { enable: true, mode: "push" }
        }
      },
      retina_detect: true
    });
  }, []);

  return <div id="particles-js" />;
}
