import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import Button from "./Button";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ContactMe = () => {
  const textRef = useRef(null);
  const lineRef = useRef(null);
  const headerRef = useRef(null);

  useGSAP(() => {
    const text = textRef.current;
    if (!text) return;

    const length = text.getComputedTextLength();

    gsap.set(text, {
      strokeDasharray: length,
      strokeDashoffset: length,
      fill: "none",
      stroke: "#192f3d",
      strokeWidth: 1,
    });

    gsap.to(text, {
      strokeDashoffset: 0,
      duration: 4,
      ease: "power1.out",
      repeat: -1,
      yoyo: true,
    });
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: headerRef.current,
    start: "top top",
    once: true, 
  },
});


tl.to(lineRef.current, {
  y: 200,
  duration: 2,
  ease: "bounce.out",
  delay: 1,
});

tl.to(headerRef.current, {
  y: 195,
  duration: 2,
  ease: "bounce.out",
});
  });

  return (
    <section className="relative container mx-auto h-screen overflow-hidden flex flex-col">
      <svg
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-auto z-0"
        viewBox="0 0 1000 300"
        preserveAspectRatio="xMidYMid meet"
      >
        <text
          ref={textRef}
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="250"
          fontWeight="800"
          style={{
            paintOrder: "stroke",
            strokeLinejoin: "round",
            strokeLinecap: "round",
            strokeOpacity: 0.2,
          }}
        >
          FAWAZ
        </text>
      </svg>

      <div className=" flex flex-col items-center">
        <h2
          ref={headerRef}
          className="text-[2.9em] md:text-[4em] lg:text-[5.21em] mt-10 font-bold text-gradient leading-[1.4] text-center relative z-10 "
        >
          Let's work together
        </h2>
        <div ref={lineRef} className="h-[6px] w-1/15 bg-gradient"></div>
      </div>

      <div className="flex flex-1 flex-col justify-center items-center text-center relative ">
        <p className="text-[1.25em] md:text-[1.39em] text-gradient leading-[1.5] max-w-2xl tracking-wider mb-6">
          Looking for a modern, powerful website for your business or yourself?
          I’d love to help you create it.
        </p>
        <Button
          text={"Email Me"}
          className="inline-block mt-2 px-6 py-3 rounded-2xl text-sm font-medium transition bg-gradient text-white hover:bg-gray-600 cursor-pointer"
        />
        <p className="mt-6 text-[1.25em] md:text-[1.39em] text-gradient leading-[1.5] max-w-2xl tracking-wider">
          Or hit my socials
        </p>
      </div>
    </section>
  );
};

export default ContactMe;
