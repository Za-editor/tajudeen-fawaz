// src/components/ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const scrollToHash = () => {
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };

    if (hash) {

      const timeout = setTimeout(scrollToHash, 400); 
      return () => clearTimeout(timeout);
    } else {
      scrollToHash();
    }
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
