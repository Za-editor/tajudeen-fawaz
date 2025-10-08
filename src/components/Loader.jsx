import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

function Loader() {
  const linesRef = useRef([]);
  const textRef = useRef(null);

  useGSAP(() => {
    const lines = linesRef.current;
    if (!lines || lines.length === 0) return;

    const middle = lines[2];
    const others = [lines[1], lines[3], lines[0], lines[4]];
    const textEl = textRef.current;

    gsap.set(lines, { yPercent: -120, opacity: 0 });

    if (textEl) {
      gsap.set(textEl, {
        stroke: "url(#textGradient)",
        fill: "transparent",
        strokeWidth: 3,
        opacity: 0,
      });
    }

    const tl = gsap.timeline();

    tl.to(middle, {
      yPercent: 0,
      opacity: 1,
      duration: 2,
      ease: "power2.out",

      onComplete: () => {
        if (textEl) {
          const len =
            typeof textEl.getComputedTextLength === "function"
              ? textEl.getComputedTextLength()
              : 500;

          gsap.set(textEl, {
            strokeDasharray: len,
            strokeDashoffset: len,
          });

          const textTl = gsap.timeline({ defaults: { ease: "power2.inOut" } });

          textTl
            .to(textEl, {
              opacity: 1,
              strokeDashoffset: 0,
              duration: 3,
              
            })
            .to(textEl, {
              fill: "url(#textGradient)",
              stroke: "transparent",
              strokeWidth: 0,
              duration: 3,
             
            });
           "-=1.5";
        }
      },
    });

    tl.to(others, {
      yPercent: 0,
      opacity: 1,
      duration: 2,
      ease: "power2.out",
      stagger: 0.2,
    });

    tl.to(others, {
      yPercent: 150,
      opacity: 0,
      duration: 2,
      ease: "power2.in",
      stagger: 0.2,
    });

    tl.to(
      middle,
      {
        yPercent: 150,
        opacity: 0,
        duration: 2,
        ease: "power2.in",
      },
      tl.to(".loader", {
        xPercent: -100,
        opacity: 0,
        duration: 2,
        ease: "power2.inOut",
      })
    );
  }, []);

  return (
    <div className="loader relative w-full h-screen overflow-hidden bg-black">
      <div className="absolute inset-0 grid grid-cols-5 justify-between z-0">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            ref={(el) => (linesRef.current[i] = el)}
            className="bg-gradient w-[50px] md:w-[100px] lg:w-[200px] h-full mx-auto"
          />
        ))}
      </div>

      <div className="absolute inset-0 flex items-center justify-center z-[999] pointer-events-none">
        <svg
          viewBox="0 0 800 200"
          className="w-[20rem] md:w-[40rem]"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#005f64" />
              <stop offset="100%" stopColor="#192f3d" />
            </linearGradient>
          </defs>
          <text
            ref={textRef}
            x="50%"
            y="50%"
            dominantBaseline="middle"
            textAnchor="middle"
            fontSize="200"
            fontWeight="700"
            letterSpacing="-6"
          >
            Xa_Plug
          </text>
        </svg>
      </div>
    </div>
  );
}

export default Loader;
