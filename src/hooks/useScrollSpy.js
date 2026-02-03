import { useEffect } from "react";

export default function useScrollSpy() {
  useEffect(() => {
    const handler = () => {
      document.querySelectorAll("section").forEach(section => {
        const offset = section.offsetTop - 200;
        const height = section.offsetHeight;
        const top = window.scrollY;
        const id = section.getAttribute("id");

        if (top > offset && top < offset + height) {
          document.querySelectorAll(".navbar a").forEach(a => a.classList.remove("active"));
          document.querySelector(`.navbar a[href="#${id}"]`)?.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);
}
