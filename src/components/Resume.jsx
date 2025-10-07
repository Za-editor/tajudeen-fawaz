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
    <section className="container mx-auto overflow-hidden px-4 md:px-0">
      <div className="">
        <h2 className=" text-[2.9em] md:text-[4em] lg:text-[5.21em] my-4  font-bold text-gradient leading-[1.4] text-center">
          Resume
        </h2>
        <ul className="flex gap-2 md:gap-3 lg:gap-10 justify-center mx-4 text-xs md:text-lg lg:text-xl text-gradient  ">
          <li
            onClick={() => handleClick("Skills")}
            className={`px-2 py-2 md:px-5 lg:px-10 lg:py-3 border-x border-b border-gray-300 rounded-lg cursor-pointer transition-all duration-500 
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
            className={`px-2 py-2 md:px-5 lg:px-10 lg:py-3 border-x border-b border-gray-300 rounded-lg cursor-pointer transition-all duration-500 
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
            className={`px-2 py-2 md:px-5 lg:px-10 lg:py-3 border-x border-b border-gray-300 rounded-lg cursor-pointer transition-all duration-500 
      ${
        activeTab === "Education"
          ? "bg-gradient text-white"
          : "hover:bg-gradient hover:text-white"
      }`}
          >
            Education
          </li>
          <a
            href="/assets/fawaz.pdf"
            download="Fawaz"
            className=" px-2 py-2 md:px-5 lg:px-10 lg:py-3  border-x-1 border-gray-300 rounded-lg border-b-1 hover:bg-gradient hover:text-white duration-500 cursor-pointer flex items-center gap-2"
          >
            Download CV
          </a>
        </ul>
      </div>
      <div className="my-20 px-4 md:px-10 lg:px-50">
        <div className="relative">

          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full border-l-4 border-gray-300"></div>
          

          {data.map((item, index) => {
            const Icons = item.icon;
            return (
              <div
                key={index}
                className={`mb-6 md:mb-12 flex w-full relative ${
                  index % 2 === 0 ? "md:justify-end" : "md:justify-start"
                } md:items-center`}
              >

                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-5 w-5 h-5 bg-gradient rounded-full border-4 border-[#e9e9e9]"></div>
                


                <div
                  className={`
              shadow-sm p-5 md:w-5/12 lg:w-5/12 w-full
              
              hover:scale-[1.03] transition-all duration-500 cursor-pointer
              ${index % 2 === 0 ? "md:ml-auto md:mr-0" : "md:mr-auto md:ml-0"}
            `}
                >
                  {item.name && (
                    <p className="text-xl font-bold text-gradient">
                      {item.name}
                    </p>
                  )}
                  {item.icon && (
                    <Icons
                      className="text-xl mt-2 mb-2"
                      style={{ color: item.color }}
                    />
                  )}
                  {item.proficiency && (
                    <p className="text-lg text-gray-600">{item.proficiency}</p>
                  )}

                  {item.role && (
                    <>
                      <div className="flex justify-between font-xl font-bold text-gradient">
                        <p>{item.role}</p>
                        <p>{item.duration}</p>
                      </div>
                      <p className="text-sm text-gradient italic my-2">
                        {item.company}
                      </p>
                      <p className="text-gray-500">{item.description}</p>
                    </>
                  )}

                  {item.degree && (
                    <>
                      <div className="flex justify-between font-xl font-bold text-gradient">
                        <p>{item.degree}</p>
                        <p>{item.duration}</p>
                      </div>
                      <p className="text-sm text-gradient italic my-2">
                        {item.institution}
                      </p>
                    </>
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
