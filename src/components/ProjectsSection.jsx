import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

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
    },
    {
      title: "AudioPhile",
      tags: ["Website Design", "Webflow Development", "Ecommerce"],
      link: "#",
      image: "/assets/audioPhile.png",
      circleColor: "bg-purple-400",
      active: false,
    },
    {
      title: "Silque",
      tags: ["Website Design", "Webflow Development", "Ecommerce"],
      link: "#",
      image: "/assets/silque.png",
      circleColor: "bg-purple-400",
      active: false,
    },
    {
      title: "Prime Haven",
      tags: ["Website Design", "Webflow Development", "Real Estate"],
      link: "#",
      image: "/assets/primehaven.png",
      circleColor: "bg-purple-400",
      active: false,
    },
    {
      title: "Flylo",
      tags: ["Website Design", "Webflow Development", "File Management"],
      link: "#",
      image: "/assets/flylo.png",
      circleColor: "bg-purple-400",
      active: false,
    },
    {
      title: "Furnico",
      tags: ["Website Design", "Webflow Development", "Furniture"],
      link: "#",
      image: "/assets/furnico.png",
      circleColor: "bg-purple-400",
      active: false,
    },
  ];

  const textRef = useRef(null);
  const timelineLineRef = useRef(null);
  const progressRef = useRef(null);
  const circleRef = useRef(null);

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
      const lineHeight = line.offsetHeight;

      gsap.set(progressLine, { height: 0 });
      gsap.set(circle, { y: 0 });

      ScrollTrigger.create({
        trigger: line,
        start: "top center",
        end: "bottom center",
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
          className="fill-none stroke-[#192f3d] stroke-[0.25px] font-extrabold text-[18rem]"
          vectorEffect="non-scaling-stroke"
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
                key={index}
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
              >
                <div className="md:col-span-1 text-left pr-6 timeline-text">
                  <h3 className={`text-[2.5em] font-bold text-gradient `}>
                    {item.title}
                  </h3>
                  <div className="flex flex-wrap justify-start gap-2 my-3">
                    {item.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-sm bg-gray-200 text-gradient px-3 py-1 "
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={item.link}
                    className={`inline-block mt-2 px-4 py-2 rounded-lg text-sm font-medium transition bg-gradient text-white hover:bg-indigo-700 `}
                  >
                    See This Project
                  </a>
                </div>

                <div className="md:col-span-1"></div>

                <div className="md:col-span-1 hover:scale-105 transition-transform duration-300 cursor-pointer">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="rounded-lg shadow-md transition"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
