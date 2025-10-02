import React, { useEffect } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { HiArrowDown } from "react-icons/hi";

const Hero = () => {

      useGSAP(() => {
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
      });
  useEffect(() => {
    const path = document.querySelector("#diamond");
    const length = path.getTotalLength();



 
    gsap.set(path, {
      strokeDasharray: length,
      strokeDashoffset: length, 
    });

    const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

    tl.to(path, {
      strokeDashoffset: 0,
      duration: 3,
      ease: "power2.inOut",
    })
      .to(path, { duration: 1 }) 
      .to(path, {
        strokeDashoffset: -length,
        duration: 3,
        ease: "power2.inOut",
      });
  }, []);

  return (
    <div className="min-h-[90vh] container mx-auto flex items-center justify-center relative">
      <div className=" flex justify-center items-center">
        <svg
          className="absolute top-[5%] md:top-[10%]    w-[716px] h-[716px] md:w-[1000px] md:h-[1000px]"
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

        <div className="relative z-10 text-center text-[#192f3d]">
          <p className="text-[19px]">Hi, I'm Fawaz </p>
          <p className="text-[30px] md:text-[35px] font-bold">
            A Frontend Developer <br />
            driven by Creativity and Precision.
          </p>
          <p className="mt-4 text-sm">
            Love turning ideas into scalable solutions <br />
            that people enjoy using.
          </p>

          <div className="arrowBtn mx-auto mt-5 md:mt-10 relative w-10 h-10 flex items-center justify-center border border-[#192f3d] hover:border-none rounded-full overflow-hidden group cursor-pointer">
            <div className="absolute inset-0 bg-[#005764] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out [mask-image:radial-gradient(ellipse_at_center,black_70%,transparent_100%)]" />

            <HiArrowDown className="relative z-10 text-black group-hover:text-[#e9e9e9] transition-colors duration-500" />
          </div>
        </div>
      </div>
      <div className=" arrowBtn absolute bottom-5 right-0 mx-auto mt-5 md:mt-10  w-10 h-10 flex items-center justify-center border border-[#192f3d] hover:border-none rounded-full overflow-hidden group cursor-pointer">
        <div className="absolute inset-0 bg-[#005764] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out [mask-image:radial-gradient(ellipse_at_center,black_70%,transparent_100%)]" />

        <HiArrowDown className="relative z-10 text-black group-hover:text-[#e9e9e9] transition-colors duration-500" />
      </div>
    </div>
  );
};

export default Hero;
