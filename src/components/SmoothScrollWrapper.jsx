import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function SmoothScrollWrapper({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 2,
      smoothWheel: true,
      smoothTouch: false,
      easing: (t) => 1 - Math.pow(1 - t, 3),
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    const handleLinkClick = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (!target) return;

      const id = target.getAttribute("href");
      if (id && id.startsWith("#")) {
        const section = document.querySelector(id);
        if (section) {
          e.preventDefault();
          lenis.scrollTo(section, {
            offset: 0,
            duration: 2,
            easing: (t) => 1 - Math.pow(1 - t, 3),
          });
        }
      }
    };

    document.addEventListener("click", handleLinkClick);

    return () => {
      document.removeEventListener("click", handleLinkClick);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
