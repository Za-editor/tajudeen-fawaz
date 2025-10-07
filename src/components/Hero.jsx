import React from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import {
  HiArrowDown,
  HiDotsCircleHorizontal,
  HiPlusCircle,
} from "react-icons/hi";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/all";
import { FaDotCircle } from "react-icons/fa";

const Hero = () => {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    const heroSplit = new SplitText(".title", { type: "chars, words" });
    heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));
    gsap.from(heroSplit.words, {
      yPercent: 100,
      duration: 1,
      ease: "expo.out",
      stagger: 0.05,
    });

    gsap.from("p", {
      opacity: 0,
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
      delay: 2,
    });

    gsap.from(".arrowBtn ", {
      opacity: 0,
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
      delay: 3,
    });

    const path = document.querySelector("#diamond");
    const length = path.getTotalLength();

    gsap.set(path, {
      strokeDasharray: length,
      strokeDashoffset: length,
    });

    const tl = gsap.timeline({ repeat: -1, repeatDelay: 1, yoyo: true });

    tl.to(path, {
      strokeDashoffset: 0,
      duration: 3,
      ease: "power2.inOut",
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      })
      .to(
        "#diamond",
        { rotate: 45, scale: 1.4, transformOrigin: "center center" },
        0
      );
  });

  return (
    <div
      id="hero"
      className="h-screen container mx-auto flex items-center justify-center relative top-0 overflow-hidden"
    >
      <div className=" flex justify-center items-center">
        <svg
          className="diamond absolute 
             top-[18%] md:top-[15%] lg:top-[10%] 
             w-[716px] h-[716px] 
             md:w-[1000px] md:h-[1000px] 
             
             "
          viewBox="0 0 716 716"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="diamond"
            d="M358 1.41421 L606.586 250 L358 498.586 L109.414 250 Z"
            stroke="black"
            strokeWidth="1.5"
            fill="none"
            style={{ strokeOpacity: 0.1 }}
          />
        </svg>

        <div className="relative z-10 text-center font-semibold text-[#192f3d]">
          <p className="title text-[19px]">Hi, I'm Fawaz </p>
          <p className="title text-[30px] md:text-[35px] font-bold">
            A Frontend Developer <br />
            driven by Creativity and Precision.
          </p>
          <p className="text-gradient mt-4 text-sm">
            Love turning ideas into scalable solutions <br />
            that people enjoy using.
          </p>

          <div className="arrowBtn mx-auto mt-5 md:mt-10 relative w-10 h-10 flex items-center justify-center border border-[#192f3d] hover:border-none rounded-full overflow-hidden group cursor-pointer">
            <div className="absolute inset-0 bg-[#005764] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out [mask-image:radial-gradient(ellipse_at_center,black_70%,transparent_100%)]" />

            <HiArrowDown className="relative z-10 text-black group-hover:text-[#e9e9e9] transition-colors duration-500" />
          </div>
        </div>
      </div>
      <div className="arrowBtn absolute bottom-30 md:bottom-40 xl:bottom-30 right-0  mx-auto w-[35px] h-[55px] flex items-start justify-center border-1 border-[#192f3d] hover:border-none rounded-[50px] overflow-hidden group cursor-pointer">
        <div className="absolute inset-0 bg-[#005764] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out [mask-image:radial-gradient(ellipse_at_center,black_70%,transparent_100%)]" />

        <div className="relative z-10 w-[6px] h-[6px] bg-[#192f3d] rounded-full mt-3 animate-scroll group-hover:bg-[#e9e9e9] transition-colors duration-500" />
      </div>
    </div>
  );
};

export default Hero;
