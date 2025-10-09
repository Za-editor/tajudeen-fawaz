import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiCss3,
  SiRedux,
  SiSass,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiExpress,
} from "react-icons/si";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const containerRef = useRef(null);
  const sectionsRef = useRef([]);
  const lineRef = useRef(null);

  const about = [
    {
      title: "Who is Fawaz?",
      text: "A curious mind turned frontend developer. I love bringing ideas to life through clean, interactive designs and smooth user experiences. What started as simple curiosity about how websites worked has grown into a full-blown passion for creating them.",
    },
    {
      title: "Professional Background",
      text: "I kicked off my journey with HTML and CSS, then found my groove in JavaScript, React, and Next.js. Since then, I’ve built projects focused on performance, usability, and great design.",
    },
    {
      title: "Relevant Skills",
      text: "I work mainly with React, TailwindCSS, GSAP, and Node.js and I’m always up for learning tools that make building better and faster.",
    },
    {
      title: "Values",
      text: "I’m all about clean code, thoughtful design, and making the web feel a little more human. Collaboration and attention to detail keep me grounded.",
    },
    {
      title: "Conclusion",
      text: "I’m constantly exploring, experimenting, and refining my craft. For me, development is more than code—it’s creating something people genuinely enjoy using.",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const panels = sectionsRef.current.filter(Boolean);

      setTimeout(() => {
        ScrollTrigger.matchMedia({
          "(min-width: 768px)": () => {
            gsap.set(panels, { yPercent: 100, autoAlpha: 0 });

            const tl = gsap.timeline({
              scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "+=5000",
                scrub: true,
                pin: true,
                anticipatePin: 1,
                invalidateOnRefresh: true,
              },
            });

            panels.forEach((panel) => {
              tl.to(panel, {
                yPercent: -50,
                autoAlpha: 1,
                duration: 0.8,
                ease: "power2.out",
              })
                .to({}, { duration: 0.5 })
                .to(panel, {
                  yPercent: -200,
                  autoAlpha: 0,
                  duration: 0.8,
                  ease: "power2.in",
                });
            });

            gsap.to(lineRef.current, {
              height: "100%",
              scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "bottom bottom",
                scrub: true,
              },
            });
          },

          "(max-width: 767px)": () => {
            gsap.set(panels, { clearProps: "all" });
            gsap.set(lineRef.current, { clearProps: "all" });
          },
        });

        gsap.to(".tech-icon", {
          y: 25,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
          duration: 0.8,
          stagger: 0.5,
        });

        ScrollTrigger.refresh();
      }, 300);
    }, containerRef);

    window.addEventListener("load", () => {
      ScrollTrigger.refresh();
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    document.body.style.overflow = "visible";
    return () => (document.body.style.overflow = "auto");
  }, []);

  return (
    <section className="container min-h-screen mx-auto py-16 overflow-visible px-4 md:px-0">
      <div
        ref={containerRef}
        className="relative overflow-visible will-change-transform"
        style={{ transform: "none" }}
      >
        <div className="flex flex-col items-center">
          <h2 className="text-[2.9em] md:text-[4em] lg:text-[5.21em] my-4 font-bold text-gradient leading-[1.4] text-center">
            Get to Know me
          </h2>
          <p className="text-[1.25em] md:text-[1.39em] text-[#192f3d] leading-[1.5] text-center max-w-2xl">
            I’m a frontend developer driven to build intuitive and efficient
            digital products.
          </p>
        </div>

        <div className="flex flex-col-reverse md:flex-row items-center justify-center lg:px-20">
          <div className="w-full md:w-1/2 flex flex-col justify-center text-gray-800 relative mt-10 md:mt-0">
            <div className="relative w-full md:h-[600px]">
              <div className="absolute left-2 md:left-10 top-0 bottom-0 w-[2px] bg-gray-200 min-h-full">
                <div
                  ref={lineRef}
                  className="absolute left-0 top-0 w-[2px] bg-gradient h-full"
                ></div>
              </div>

              <div className="relative h-auto md:h-full md:overflow-hidden">
                {about.map((item, i) => (
                  <div
                    key={i}
                    ref={(el) => (sectionsRef.current[i] = el)}
                    className="relative md:absolute md:left-16 md:right-0 md:top-1/2 md:-translate-y-1/2 pl-10 md:pl-14 mb-10 md:mb-0"
                  >
                    <div className="absolute left-1 md:-left-[1.8rem] w-3 h-3 rounded-full bg-gradient shadow-md top-2 md:top-auto"></div>

                    <div className="ml-0 md:ml-1">
                      <h3 className="text-lg md:text-2xl text-gradient font-semibold mb-3">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-base md:text-lg md:w-full lg:max-w-md leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full mt-50 md:mt-0 md:w-1/2 flex items-center justify-center md:sticky md:top-0 md:h-fit mb-10 md:mb-0">
            <div className="relative flex items-center justify-center">
              <div className="w-48 h-48 md:w-58 md:h-58 lg:w-100 lg:h-100 rounded-full flex items-center justify-center shadow-inner">
                <img src="/assets/avatar.png" alt="avatar" />
              </div>

              <span className="tech-icon absolute -top-20 left-1 md:-top-15 md:left-0 bg-yellow-100 text-yellow-500 p-2 rounded-md text-xl shadow-sm">
                <SiJavascript className="hover:scale-120 transition-all duration-500 ease-in-out hover:-rotate-360" />
              </span>
              <span className="tech-icon absolute -top-25 left-1/2 bg-cyan-100 text-cyan-500 p-2 rounded-md text-xl shadow-sm">
                <SiTailwindcss className="hover:scale-120 transition-all duration-500 ease-in-out hover:-rotate-360" />
              </span>
              <span className="tech-icon absolute top-10 -right-16 bg-sky-100 text-sky-500 p-2 rounded-md text-xl shadow-sm">
                <SiReact className="hover:scale-120 transition-all duration-500 ease-in-out hover:-rotate-360" />
              </span>
              <span className="tech-icon absolute -bottom-5 left-5 md:-bottom-10 md:left-10 bg-green-100 text-green-600 p-2 rounded-md text-xl shadow-sm">
                <SiNodedotjs className="hover:scale-120 transition-all duration-500 ease-in-out hover:-rotate-360" />
              </span>
              <span className="tech-icon absolute bottom-10 right-0 bg-blue-100 text-blue-600 p-2 rounded-md text-xl shadow-sm">
                <SiCss3 className="hover:scale-120 transition-all duration-500 ease-in-out hover:-rotate-360" />
              </span>
              <span className="tech-icon absolute bottom-40 -right-20 bg-purple-100 text-purple-500 p-2 rounded-md text-xl shadow-sm">
                <SiRedux className="hover:scale-120 transition-all duration-500 ease-in-out hover:-rotate-360" />
              </span>
              <span className="tech-icon absolute bottom-25 -left-20 md:bottom-40 md:-left-30 bg-pink-100 text-pink-500 p-2 rounded-md text-xl shadow-sm">
                <SiSass className="hover:scale-120 transition-all duration-500 ease-in-out hover:-rotate-360" />
              </span>
              <span className="tech-icon absolute bottom-10 -left-20 bg-indigo-100 text-indigo-600 p-2 rounded-md text-xl shadow-sm">
                <SiPostgresql className="hover:scale-120 transition-all duration-500 ease-in-out hover:-rotate-360" />
              </span>
              <span className="tech-icon absolute bottom-40 -left-10 md:bottom-70 md:-left-20 bg-green-100 text-green-500 p-2 rounded-md text-xl shadow-sm">
                <SiMongodb className="hover:scale-120 transition-all duration-500 ease-in-out hover:-rotate-360" />
              </span>
              <span className="tech-icon absolute -top-10 -right-0 bg-gray-100 text-gray-700 p-2 rounded-md text-xl shadow-sm">
                <SiExpress className="hover:scale-120 transition-all duration-500 ease-in-out hover:-rotate-360" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
