import React, { useEffect, useRef } from "react";

const CursorFollower = () => {
  const ballRef = useRef(null);
  const target = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const moveHandler = (e) => {
      target.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", moveHandler);

    const animate = () => {
      const ease = 0.08; 
      pos.current.x += (target.current.x - pos.current.x) * ease;
      pos.current.y += (target.current.y - pos.current.y) * ease;

      if (ballRef.current) {
        ballRef.current.style.transform = `translate3d(${
          pos.current.x - 12
        }px, ${pos.current.y - 12}px, 0)`;
      }

      requestAnimationFrame(animate);
    };

    animate();
    return () => window.removeEventListener("mousemove", moveHandler);
  }, []);

  return (
    <div
      ref={ballRef}
      className="fixed top-0 left-0 w-4 h-4 rounded-full bg-[#005f64] pointer-events-none z-[9999] animate-pulse shadow-lg"
    />
  );
};

export default CursorFollower;
