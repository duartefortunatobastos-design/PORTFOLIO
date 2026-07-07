import { useEffect, useState } from "react";

const SECTION_IDS = ["about", "story", "work", "skills", "sports", "contact"] as const;

export function useScrollSpy() {
  const [activeId, setActiveId] = useState<string>("top");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 24);

      const offset = window.innerHeight * 0.35;
      let current = "top";

      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= offset) {
          current = id;
        }
      }

      setActiveId(current);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return { activeId, scrolled };
}
