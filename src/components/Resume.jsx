import React, { useState } from "react";
import { MdDownload } from "react-icons/md";
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
  SiHtml5,
} from "react-icons/si";

const Resume = () => {
  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Lagos",
      duration: "2018 - 2022",
    },
    {
      degree: "Frontend Web Development Certification",
      institution: "FreeCodeCamp / TechStudio Academy",
      duration: "2022",
    },
    {
      degree: "High School Diploma",
      institution: "Queens College, Lagos",
      duration: "2012 - 2018",
    },
  ];

  const experience = [
    {
      role: "Frontend Developer",
      company: "Freelance / Self-Employed",
      duration: "2023 - Present",
      description:
        "Developed modern, responsive websites and web apps with React, Tailwind, and GSAP animations. Focused on user experience and performance optimization.",
    },
    {
      role: "Web Developer Intern",
      company: "TechStudio Academy",
      duration: "2022 - 2023",
      description:
        "Collaborated on several real-world projects, building dynamic UIs, integrating REST APIs, and participating in code reviews.",
    },
    {
      role: "Junior Developer",
      company: "Creative Minds Hub",
      duration: "2021 - 2022",
      description:
        "Assisted in the development of landing pages and corporate websites using HTML, CSS, and JavaScript. Implemented reusable UI components.",
    },
  ];

  const skills = [
    {
      name: "JavaScript",
      proficiency: "Advanced",
      icon: SiJavascript,
      color: "#F7DF1E",
    },
    { name: "React", proficiency: "Advanced", icon: SiReact, color: "#61DAFB" },
    {
      name: "Node.js",
      proficiency: "Intermediate",
      icon: SiNodedotjs,
      color: "#68A063",
    },
    {
      name: "Express.js",
      proficiency: "Intermediate",
      icon: SiExpress,
      color: "#000000",
    },
    {
      name: "Tailwind CSS",
      proficiency: "Advanced",
      icon: SiTailwindcss,
      color: "#38BDF8",
    },
    { name: "HTML5", proficiency: "Advanced", icon: SiHtml5, color: "#E34F26" },
  ];

    const [data, setData] = useState(skills);
    const [activeTab, setActiveTab] = useState("Skills");
    
    const handleClick = (section) => { 
        setActiveTab(section)
        if (section === "Skills") setData(skills);
        else if (section === "Experience") setData(experience);
        else if (section === "Education") setData(education);
    }

  return (
    <section className="container mx-auto">
      <div className="">
        <h2 className="text-[2.9em] my-4 md:text-[5.21em] font-bold text-gradient leading-[1.4] text-center">
          Resume
        </h2>
        <ul className="flex gap-10 justify-center mx-4 text-xl text-gradient  ">
          <li
            onClick={() => handleClick("Skills")}
            className={`px-10 py-3 border-x border-b border-gray-300 rounded-lg cursor-pointer transition-all duration-500 
      ${
        activeTab === "Skills"
          ? "bg-gradient text-white"
          : "hover:bg-gradient hover:text-white"
      }`}
          >
            Skills
          </li>

          <li
            onClick={() => handleClick("Experience")}
            className={`px-10 py-3 border-x border-b border-gray-300 rounded-lg cursor-pointer transition-all duration-500 
      ${
        activeTab === "Experience"
          ? "bg-gradient text-white"
          : "hover:bg-gradient hover:text-white"
      }`}
          >
            Experience
          </li>

          <li
            onClick={() => handleClick("Education")}
            className={`px-10 py-3 border-x border-b border-gray-300 rounded-lg cursor-pointer transition-all duration-500 
      ${
        activeTab === "Education" ? "bg-gradient text-white"
          : "hover:bg-gradient hover:text-white"
      }`}
          >
            Education
          </li>
          <a
            href="/assets/fawaz.pdf"
            download="Fawaz"
            className="px-10 py-3  border-x-1 border-gray-300 rounded-lg border-b-1 hover:bg-gradient hover:text-white duration-500 cursor-pointer flex items-center gap-2"
          >
            Download CV <MdDownload className="text-xl" />
          </a>
        </ul>
      </div>
      <div class="my-20 px-50">
        <div class="relative">
          <div class="absolute left-1/2 transform -translate-x-1/2 h-full border-l-4 border-gray-300"></div>
          {data.map((data, index) => {
            const Icons = data.icon;
            return (
              <div
                class={`mb-12 flex ${
                  index % 2 === 0 ? "justify-end" : "justify-start"
                }  w-full relative `}
              >
                <div class="absolute left-1/2 transform -translate-x-1/2 top-5 w-5 h-5 bg-gradient rounded-full border-4 border-[#e9e9e9]"></div>
                <div class="shadow-sm p-5 w-5/12 hover:scale-110 transition-all duration-500 cursor-pointer">
                  {data.name && (
                    <p class="text-xl font-bold text-gradient ">{data.name}</p>
                  )}
                  {data.icon && (
                    <Icons
                      class={`text-xl mt-2 mb-2`}
                      style={{ color: data.color }}
                    />
                  )}
                  {data.proficiency && (
                    <p class="text-lg text-gray-600">{data.proficiency}</p>
                  )}
                  {data.role && (
                    <div className="">
                      <div className="flex justify-between font-xl font-bold text-gradient">
                        <p>{data.role}</p>
                        <p>{data.duration}</p>
                      </div>
                      <p className="text-sm text-gradient italic my-2">
                        {data.company}
                      </p>
                      <p className="text-gray-500">{data.description}</p>
                    </div>
                  )}

                  {data.degree && (
                    <div className="">
                      <div className="flex justify-between font-xl font-bold text-gradient">
                        <p>{data.degree}</p>
                        <p>{data.duration}</p>
                      </div>
                      <p className="text-sm text-gradient italic my-2">
                        {data.institution}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Resume;
