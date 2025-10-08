import { useEffect, useRef } from "react";

export default function ScrollSlideInImage({ src, alt }) {
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current.classList.add("opacity-100", "translate-x-0");
        } else {
          ref.current.classList.remove("opacity-100", "translate-x-0");
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="opacity-0 -translate-x-20 transition-all duration-700 ease-out"
    >
      <img
        src={src}
        alt={alt}
        className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-500"
      />
    </div>
  );
}
