import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef, useState } from "react";
import Button from "./Button";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import EmailModal from "./EmailModal";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

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

     tl.fromTo(
       ".stagger-box",
       { x: -2000, opacity: 0 },
       {
         x: 0,
         opacity: 1,
         duration: 1,

         stagger: {
           amount: 1,
           grid: [2, 1],
           axis: "y",
           from: "end",
         },
       }
     );

    tl.to(lineRef.current, {
      y: 195,
      duration: 2,
      ease: "bounce.out",
      delay: 1,
    });

    tl.to(headerRef.current, {
      y: 190,
      duration: 2,
      ease: "bounce.out",
    });

   
  });

  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <section className="relative container mx-auto h-screen overflow-hidden flex flex-col px-4 md:px-0">
      <svg
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-auto  pointer-events-none -z-40"
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
            strokeOpacity: 0.15,
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
        <div onClick={toggleModal}>
          <Button
            text={"Email Me"}
            className="inline-block mt-2 px-6 py-3 rounded-2xl text-sm font-medium transition bg-gradient text-white hover:bg-gray-600 cursor-pointer"
          />
        </div>

        <p className="mt-6 text-[1.25em] md:text-[1.39em] text-gradient leading-[1.5] max-w-2xl tracking-wider">
          Or hit my socials
        </p>
        <div className="text-2xl md:text-3xl lg:text-4xl flex gap-3 md:gap-4 mt-6">
          <a
            href="#"
            className="transition ease-in-out cursor-pointer duration-300 hover:scale-110 "
          >
            <FaGithub className="stagger-box  " />
          </a>
          <a
            href="#"
            className="transition ease-in-out cursor-pointer duration-300 hover:scale-110 "
          >
            <FaLinkedin className="stagger-box transition-all duration-300 ease-in-out cursor-pointer duration-300 hover:scale-110 text-[#0A66C2] " />
          </a>
          <a
            href="#"
            className="transition ease-in-out cursor-pointer duration-300 hover:scale-110 "
          >
            <FaXTwitter className="stagger-box transition ease-in-out cursor-pointer duration-300 hover:scale-110" />
          </a>
          <a
            href="#"
            className="transition ease-in-out cursor-pointer duration-300 hover:scale-110 "
          >
            <FaInstagram className="stagger-box transition ease-in-out cursor-pointer duration-300 hover:scale-110 text-[#E1306C]" />
          </a>
        </div>
      </div>

      <EmailModal toggleModal={toggleModal} isOpen={isOpen} />
    </section>
  );
};

export default ContactMe;
