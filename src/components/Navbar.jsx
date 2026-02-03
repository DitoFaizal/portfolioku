import { useEffect, useState } from "react";
import useScrollSpy from "../hooks/useScrollSpy";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  useScrollSpy();

  useEffect(() => {
    const onScroll = () => setOpen(false);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header>
      <div id="menu" onClick={() => setOpen(!open)} className={open ? "fa-times" : ""}></div>
      <nav className={`navbar ${open ? "nav-toggle" : ""}`}>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#academic">Academic</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#work">Work</a></li>
          <li><a href="#projects">Projects</a></li>
        </ul>
      </nav>
    </header>
  );
}
 