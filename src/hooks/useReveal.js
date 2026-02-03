import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

export default function useReveal() {
  useEffect(() => {
    ScrollReveal().reveal(".box", { interval: 200 });
    ScrollReveal().reveal(".skills .bar", { delay: 400 });
  }, []);
}
