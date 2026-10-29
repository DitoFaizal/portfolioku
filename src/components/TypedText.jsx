import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function TypedText() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "frontend development",
        "web development",
        "technical support",
      ],
      loop: true,
      typeSpeed: 50,
      backSpeed: 25,
      backDelay: 500,
    });

    return () => typed.destroy();
  }, []);

  return <span ref={el} className="typing-text"></span>;
}
