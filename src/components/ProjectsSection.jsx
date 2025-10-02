import React, {  useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const ProjectsSection = () => {
  const textRef = useRef(null);

  useGSAP(() => {
    const text = textRef.current;
    const length = text.getComputedTextLength(); 

    gsap.set(text, {
      strokeDasharray: length,
      strokeDashoffset: length,
      fill: "transparent",
      stroke: "#192f3d", 
      strokeWidth: 1,
    });

    gsap.to(text, {
      strokeDashoffset: 0,
      duration: 6,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1, 
    });
  });

  return (
    <section className="min-h-[100vh] relative">
      <svg
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-auto"
        viewBox="0 0 1400 400"
      >
        <text
          ref={textRef}
          x="50%"
          y="50%"
          dy=".35em"
          textAnchor="middle"
          class="fill-none stroke-[#192f3d] stroke-[0.25px] font-extrabold text-[18rem]"
          vector-effect="non-scaling-stroke"
          style={{
            paintOrder: "stroke",
            strokeLinejoin: "round",
            strokeLinecap: "round",
            strokeOpacity: 0.08,
          }}
        >
          FAWAZ
        </text>
      </svg>

      <div className="text-center text-[#192f3d] ">
        <p className="text-[3.21em] md:text-[5.21em] font-bold text-[#192f3d] leading-[1.4] ">
          Works.
        </p>
        <p className="text-[1.25em] md:text-[1.39em] text-[#192f3d] leading-[1.5]">
          Overview of Projects I have Worked on
        </p>
        <p className="text-[1.25em] md:text-[1.39em] leading-[1.5] text-gradient">
          What do you Think
        </p>
      </div>
    </section>
  );
};

export default ProjectsSection;
