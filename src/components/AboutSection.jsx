import { useRef} from "react";
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
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const containerRef = useRef(null);
  const sectionsRef = useRef([]);
  const lineRef = useRef(null);

  const about = [
    {
      title: "Hi, Fawaz here!",
      text: "I’m a passionate frontend developer who enjoys turning complex problems into clean, elegant interfaces.",
    },
    {
      title: "Professional Background",
      text: "Started my journey with HTML and CSS, now building scalable apps using React, TypeScript, and Next.js.",
    },
    {
      title: "Relevant Skills",
      text: "Proficient in JavaScript, React, GSAP, TailwindCSS, Node.js, and API integration.",
    },
    {
      title: "Values",
      text: "Clean code, accessibility, performance, and creating experiences that delight users.",
    },
    {
      title: "Conclusion",
      text: "I’m constantly learning and exploring new technologies to improve how users experience the web.",
    },
  ];

  useGSAP(() => {
  


    const ctx = gsap.context(() => {
      const panels = sectionsRef.current.filter(Boolean);

      gsap.set(panels, { yPercent: 100, autoAlpha: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${panels.length * 1000}`,
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });

      panels.forEach((panel) => {
        tl.to(panel, {
          yPercent: 0,
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

      gsap.to(".tech-icon", {
        y: 25,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        duration: 0.8,
        stagger: 0.5,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="container mx-auto py-16 min-h-content overfloy-y-hidden">
      <div ref={containerRef} className="relative overflow-hidden ">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center">
            First, a bit about me
          </h2>
          <p className="text-lg text-gray-600 text-center max-w-2xl">
            I’m a frontend developer driven to build intuitive and efficient
            digital products.
          </p>
        </div>

   
        <div className="flex flex-col-reverse md:flex-row items-center justify-center px-4 lg:px-20">
   
          <div className="w-full md:w-1/2 flex flex-col justify-center text-gray-800 relative mt-10 md:mt-0">
            <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
              <div className="absolute left-6 md:left-10 top-0 bottom-0 w-[2px] bg-gray-200">
                <div
                  ref={lineRef}
                  className="absolute left-0 top-0 w-[2px] bg-gradient"
                ></div>
              </div>

              <div className="relative h-full">
                {about.map((item, i) => (
                  <div
                    key={i}
                    ref={(el) => (sectionsRef.current[i] = el)}
                    className="absolute left-12 md:left-16 right-0 top-1/2 transform -translate-y-1/2"
                  >
                    <div className="absolute -left-[2rem] w-4 h-4 rounded-full bg-gradient shadow-md"></div>
                    <div className="ml-4">
                      <h3 className="text-2xl font-semibold mb-3">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-base md:text-lg max-w-md leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

       
          <div className="w-full md:w-1/2 flex items-center justify-center md:sticky md:top-0 md:h-screen mb-10 md:mb-0 mt-50 md:mt-0">
            <div className="relative flex items-center justify-center">
              <div className="w-48 h-48 md:w-58 md:h-58 lg:w-100 lg:h-100 rounded-full flex items-center justify-center shadow-inner">
                <img src="/assets/avatar.png" alt="" />
              </div>

           
              <span className="tech-icon absolute -top-15 left-0 bg-yellow-100 text-yellow-500 p-2 rounded-md text-xl shadow-sm">
                <SiJavascript />
              </span>
              <span className="tech-icon absolute -top-25 left-1/2 bg-cyan-100 text-cyan-500 p-2 rounded-md text-xl shadow-sm">
                <SiTailwindcss />
              </span>
              <span className="tech-icon absolute top-10 -right-16 bg-sky-100 text-sky-500 p-2 rounded-md text-xl shadow-sm">
                <SiReact />
              </span>
              <span className="tech-icon absolute -bottom-10 left-10 bg-green-100 text-green-600 p-2 rounded-md text-xl shadow-sm">
                <SiNodedotjs />
              </span>
              <span className="tech-icon absolute bottom-10 right-0 bg-blue-100 text-blue-600 p-2 rounded-md text-xl shadow-sm">
                <SiCss3 />
              </span>
              <span className="tech-icon absolute bottom-40 -right-20 bg-purple-100 text-purple-500 p-2 rounded-md text-xl shadow-sm">
                <SiRedux />
              </span>
              <span className="tech-icon absolute bottom-40 -left-30 bg-pink-100 text-pink-500 p-2 rounded-md text-xl shadow-sm">
                <SiSass />
              </span>
              <span className="tech-icon absolute bottom-10 -left-20 bg-indigo-100 text-indigo-600 p-2 rounded-md text-xl shadow-sm">
                <SiPostgresql />
              </span>
              <span className="tech-icon absolute bottom-70 -left-20 bg-green-100 text-green-500 p-2 rounded-md text-xl shadow-sm">
                <SiMongodb />
              </span>
              <span className="tech-icon absolute -top-10 -right-0 bg-gray-100 text-gray-700 p-2 rounded-md text-xl shadow-sm">
                <SiExpress />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
