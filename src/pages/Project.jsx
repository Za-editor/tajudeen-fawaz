import React, { useContext, useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import Button from "../components/Button";
import { DataContext } from "../../context/Data";
import { Link } from "react-router-dom";
import {
  FaCss3Alt,
  FaExternalLinkAlt,
  FaHtml5,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import {
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiRedux,
  SiTailwindcss,
} from "react-icons/si";

const Project = () => {
  const { products } = useContext(DataContext);

  const [landingPages, setLandingPages] = useState([]);
  const [fullWebsites, setFullWebsites] = useState([]);
  const [sideProjects, setSideProjects] = useState([]);

   const techIcons = {
      Html: {
        icon: <FaHtml5 className="text-orange-500 text-2xl" />,
        name: "HTML",
      },
      Css: {
        icon: <FaCss3Alt className="text-blue-500 text-2xl" />,
        name: "CSS",
      },
      JavaScript: {
        icon: <SiJavascript className="text-yellow-400 text-2xl" />,
        name: "JavaScript",
      },
      Tailwind: {
        icon: <SiTailwindcss className="text-cyan-400 text-2xl" />,
        name: "Tailwind CSS",
      },
      React: {
        icon: <FaReact className="text-blue-400 text-2xl" />,
        name: "React",
      },
      NodeJs: {
        icon: <FaNodeJs className="text-green-500 text-2xl" />,
        name: "Node.js",
      },
      Express: {
        icon: <SiExpress className="text-gray-500 text-2xl" />,
        name: "Express",
      },
      MongoDb: {
        icon: <SiMongodb className="text-green-600 text-2xl" />,
        name: "MongoDB",
      },
      Redux: {
        icon: <SiRedux className="text-purple-500 text-2xl" />,
        name: "Redux",
      },
    };

  useEffect(() => {
    if (Array.isArray(products)) {
      setLandingPages(products.filter((p) => p.category === "Landing Page"));
      setFullWebsites(products.filter((p) => p.category === "Full Website"));
      setSideProjects(products.filter((p) => p.category === "Side Projects"));
    }
  }, [products]);

  return (
    <section className="container mx-auto min-h-screen py-[50px] md:py-[100px] px-4">
      <div className="grid grid-cols-3 md:grid-cols-5 grid-rows-16 md:grid-rows-7 gap-4 md:gap-6">
        {fullWebsites.map((project, index) => (
          <div
            key={index}
            className={`relative group overflow-hidden bg-gray-300 rounded-2xl ${project.layout}`}
          >
            <Link to={`${project.name}`}>
              {/* Image */}
              <img
                src={project.images.main}
                alt={project.title}
                className="w-full h-full object-cover scale-110 md:group-hover:scale-100 ease-in-out duration-500 cursor-pointer"
              />

              <div
                className="
                absolute inset-0 flex flex-col items-center justify-center 
                bg-black/50 text-center px-4
                opacity-100 md:opacity-0 md:group-hover:opacity-100 
                transition-all duration-700 z-10
              "
              >
                <p className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {project.name}
                </p>

                <div className="flex flex-wrap gap-4">
                  {project.techStack.map((tech, i) => {
                    const techData = techIcons[tech] || { name: tech };
                    return (
                      <div
                        key={i}
                        className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 transition-all shadow-sm px-3 py-2 rounded-lg"
                      >
                        {techData.icon && (
                          <span className="text-xs">{techData.icon}</span>
                        )}
                      </div>
                    );
                  })}
                </div>

                <Button
                  text="See details"
                  className="inline-block mt-2 px-4 py-2 rounded-lg text-sm font-medium transition bg-gradient text-white hover:bg-gray-600 cursor-pointer z-20"
                />
              </div>
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="w-full">
          <div className="px-5 py-5 border-b-4 border-gray-300 flex gap-2 items-center bg-gray-200 text-gradient shadow-xl rounded-lg h-fit">
            <p>Landing Pages</p>
            <FaArrowRight className="text-gray-500 hover:scale-110 transition-transform" />
          </div>

          {landingPages.map((item, index) => (
            <Link to={`${item.name}`}>
              <div
                key={index}
                className="mt-4 flex gap-4 py-4 px-4 hover:bg-gray-200 hover:shadow-lg transition-all ease-in-out duration-300 cursor-pointer rounded-lg"
              >
                <div className="w-[80px] rounded-lg overflow-hidden">
                  <img
                    className="rounded-lg object-cover w-full h-full"
                    src={item.images.main}
                    alt={item.name}
                  />
                </div>
                <div className="flex flex-col">
                  <p className="text-xl text-gradient font-semibold">
                    {item.name}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    {item.techStack.map((tech, i) => {
                      const techData = techIcons[tech] || { name: tech };
                      return (
                        <div
                          key={i}
                          className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 transition-all shadow-sm px-3 py-2 rounded-lg"
                        >
                          {techData.icon && <span className="">{techData.icon}</span>}
                          <span className="text-gray-500 text-xs font-medium">
                            {techData.name}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="w-full">
          <div className="px-5 py-5 border-b-4 border-gray-300 flex gap-2 items-center bg-gray-200 text-gradient shadow-xl rounded-lg h-fit">
            <p>Side Projects</p>
            <FaArrowRight className="text-gray-500 hover:scale-110 transition-transform" />
          </div>

          {sideProjects.map((item, index) => (
            <Link to={`${item.name}`}>
              <div
                key={index}
                className="mt-4 flex gap-4 py-4 px-4 hover:bg-gray-200 hover:shadow-lg transition-all ease-in-out duration-300 cursor-pointer rounded-lg"
              >
                <div className="w-[80px] rounded-lg overflow-hidden">
                  <img
                    className="rounded-lg object-cover w-full h-full"
                    src={item.images.main}
                    alt={item.name}
                  />
                </div>
                <div className="flex flex-col">
                  <p className="text-xl text-gradient font-semibold">
                    {item.name}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    {item.techStack.map((tech, i) => {
                      const techData = techIcons[tech] || { name: tech };
                      return (
                        <div
                          key={i}
                          className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 transition-all shadow-sm px-3 py-2 rounded-lg"
                        >
                          {techData.icon && <span>{techData.icon}</span>}
                          <span className="text-gray-500 text-xs font-medium">
                            {techData.name}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
