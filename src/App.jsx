import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import ParticlesBackground from "./components/ParticlesBackground";
import Work from "./components/Work";
import Skill from "./components/Myskill";
import Academic from "./components/Academic";
import ScrollTop from "./components/ScrollTop";

import Footer from "./components/Footer";
import "./styles/global.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Academic />
      <Skill />
      <Work />
      <Projects />
      <Footer />
      <ParticlesBackground />
      <ScrollTop />
    </>
  );
}

export default App;
