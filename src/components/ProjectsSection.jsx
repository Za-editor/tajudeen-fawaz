import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaArrowRight } from "react-icons/fa";
import { useGSAP } from "@gsap/react";
import Button from "./Button";
import { Link } from "react-router-dom";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiMongodb,
  SiGit,
  SiGithub,
} from "react-icons/si";
import ScrollSlideInImage from "./ScrollFadeImage";

gsap.registerPlugin(ScrollTrigger);

const ProjectsSection = () => {
  const timelineData = [
    {
      title: "Zentrip",
      tags: ["Website Design", "Webflow Development", "Travel Agency"],
      link: "https://zentrip-io.vercel.app/",
      image: "/assets/zentrip.png",
      circleColor: "bg-indigo-900",
      active: true,
      techstack: [
        { icon: SiHtml5, color: "#E34F26" },
        { icon: SiTailwindcss, color: "#06B6D4" },
        { icon: SiJavascript, color: "#F7DF1E" },
      ],
    },
    {
      title: "AudioPhile",
      tags: ["Website Design", "Webflow Development", "Ecommerce"],
      link: "https://audiophile-seven-beryl.vercel.app/",
      image: "/assets/audioPhile.png",
      circleColor: "bg-purple-400",
      active: false,
      techstack: [
        { icon: SiHtml5, color: "#E34F26" },
        { icon: SiTailwindcss, color: "#06B6D4" },
        { icon: SiJavascript, color: "#F7DF1E" },
        { icon: SiReact, color: "#61DAFB" },
      ],
    },
    {
      title: "Silque",
      tags: ["Website Design", "Webflow Development", "Ecommerce"],
      link: "https://silque-9zns.vercel.app/",
      image: "/assets/silque.png",
      circleColor: "bg-purple-400",
      active: false,
      techstack: [
        { icon: SiHtml5, color: "#E34F26" },
        { icon: SiTailwindcss, color: "#06B6D4" },
        { icon: SiJavascript, color: "#F7DF1E" },
        { icon: SiReact, color: "#61DAFB" },
        { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      ],
    },
    {
      title: "Prime Haven",
      tags: ["Website Design", "Webflow Development", "Real Estate"],
      link: "https://prime-haven-gamma.vercel.app/",
      image: "/assets/primehaven.png",
      circleColor: "bg-purple-400",
      active: false,
      techstack: [
        { icon: SiHtml5, color: "#E34F26" },
        { icon: SiTailwindcss, color: "#06B6D4" },
        { icon: SiJavascript, color: "#F7DF1E" },
        { icon: SiReact, color: "#61DAFB" },
      ],
    },
    {
      title: "Flylo",
      tags: ["Website Design", "Webflow Development", "File Management"],
      link: "https://flylo-landing-page.vercel.app/",
      image: "/assets/flylo.png",
      circleColor: "bg-purple-400",
      active: false,
      techstack: [
        { icon: SiHtml5, color: "#E34F26" },
        { icon: SiTailwindcss, color: "#06B6D4" },
        { icon: SiJavascript, color: "#F7DF1E" },
        { icon: SiCss3, color: "#1572B6" },
      ],
    },
    {
      title: "Furnico",
      tags: ["Website Design", "Webflow Development", "Furniture"],
      link: "https://za-editor.github.io/Furnico/",
      image: "/assets/furnico.png",
      circleColor: "bg-purple-400",
      active: false,
      techstack: [
        { icon: SiHtml5, color: "#E34F26" },
        { icon: SiTailwindcss, color: "#06B6D4" },
        { icon: SiJavascript, color: "#F7DF1E" },
      ],
    },
  ];

  const textRef = useRef(null);
  const timelineLineRef = useRef(null);
  const progressRef = useRef(null);
  const circleRef = useRef(null);
  const informateRefs = useRef([]);

  useGSAP(() => {
    const text = textRef.current;
    if (!text) return;

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

  useGSAP(() => {
    const line = timelineLineRef.current;
    const progressLine = progressRef.current;
    const circle = circleRef.current;

    if (line && progressLine && circle) {
      const lineHeight = line.scrollHeight;

      gsap.set(progressLine, { height: 0 });
      gsap.set(circle, { y: 0 });

      ScrollTrigger.create({
        trigger: line,
        start: "top center",
        end: "bottom bottom",
        scrub: true,
        onUpdate: (self) => {
          const progress = self.progress;

          gsap.to(progressLine, {
            height: progress * lineHeight,
            ease: "none",
            overwrite: "auto",
          });

          gsap.to(circle, {
            y: progress * (lineHeight - circle.offsetHeight),
            ease: "none",
            overwrite: "auto",
          });
        },
      });
    }
  }, []);
  useGSAP(() => {}, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-x-0");
          } else {
            entry.target.classList.remove("opacity-100", "translate-x-0");
          }
        });
      },
      { threshold: 0.5 }
    );

    informateRefs.current.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="min-h-[100vh] mx-auto container overflow-hidden px-4 md:px-0">
      <div className="relative ">
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
            className="fill-none stroke-[#192f3d] stroke-[0.25px] font-extrabold text-[18rem]"
            vectorEffect="non-scaling-stroke"
            s
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

        <div className="text-center text-[#192f3d]">
          <p className="text-[2.9em] md:text-[4em] lg:text-[5.21em] my-4 font-bold text-gradient leading-[1.4] ">
            Featured Projects
          </p>
          <p className="text-[1.25em] md:text-[1.39em] text-[#192f3d] leading-[1.5]">
            A collection of solutions crafted with creativity and precision.
          </p>
          <p className="text-[1.25em] md:text-[1.39em] leading-[1.5] mt-5 text-gradient">
            Design. Develop. Deliver.
          </p>
        </div>

        <div className="w-full max-w-6xl mx-auto px-4 py-16">
          <div className="relative">
            <div
              ref={timelineLineRef}
              className="absolute left-0 md:left-1/2 top-0 h-full w-1 bg-gray-300 -translate-x-1/2"
            ></div>

            <div
              ref={progressRef}
              className="absolute left-0 md:left-1/2 top-0 w-1 bg-gradient -translate-x-1/2"
            ></div>

            <div
              ref={circleRef}
              className="absolute left-0 md:left-1/2 w-6 h-6 rounded-full border-4 border-[#e9e9e9] bg-gradient -translate-x-1/2"
            ></div>

            <div className="space-y-20 py-20 px-4">
              {timelineData.map((item, index) => (
                <div
                  ref={(el) => (informateRefs.current[index] = el)}
                  key={index}
                  className="grid grid-cols-1 md:grid-cols-2 gap-x-15 md:gap-x-30 gap-y-6 -translate-x-50 transition-all duration-700 ease-out opacity-0"
                >
                  <div className="text-left pr-4 timeline-text">
                    <h3 className="text-[2.5em] font-bold text-gradient">
                      {item.title}
                    </h3>
                    <div className="flex flex-wrap justify-start gap-2 my-3">
                      {item.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="text-sm bg-gray-200 text-gradient px-4 py-1 my-3 shadow-lg transition-all ease-in-out duration-300 cursor-pointer hover:scale-105"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-6 text-3xl my-4">
                      {item.techstack.map((tech, index) => {
                        const Icon = tech.icon;
                        return (
                          <Icon
                            key={index}
                            className="transition-transform duration-700 hover:scale-110 hover:-rotate-360 ease-in-out cursor-pointer"
                            style={{ color: tech.color }}
                          />
                        );
                      })}
                    </div>
                    <div className=" flex flex-wrap gap-4">
                      <Button
                        text={"About Project"}
                        className={
                          "inline-block mt-2 px-4 py-2 rounded-lg text-sm font-medium transition bg-gradient text-white hover:bg-gray-600 cursor-pointer"
                        }
                      />
                      <Link
                        to={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          text={"Live Version"}
                          className={
                            "inline-block mt-2 px-4 py-2 rounded-lg text-sm font-medium transition bg-gradient text-white hover:bg-gray-600 cursor-pointer"
                          }
                        />
                      </Link>
                    </div>
                  </div>

                  <div className="overflow-hidden rounded-lg w-fit cursor-pointer">
                    <ScrollSlideInImage
                      src={item.image}
                      alt={item.title}
                      className="transition-transform duration-700 scale-107 hover:scale-100"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex items-end text-lg justify-end  mr-5">
          <a href="#" className="group flex items-center  text-[#192f3d]">
            View More{" "}
            <FaArrowRight className="inline-block ml-2 bounce-arrow" />
          </a>

          <style>
            {`
      @keyframes bounceX {
        0%, 20%, 50%, 80%, 100% { transform: translateX(0);  }
        40% { transform: translateX(7px); transform: scale(1.3) }
        60% { transform: translateX(5px); }
      }
      .bounce-arrow {
        animation: bounceX 4s ease-in-out infinite;
      }
    `}
          </style>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
