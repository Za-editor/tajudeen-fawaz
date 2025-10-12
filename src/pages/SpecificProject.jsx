import React, { useContext, useEffect, useState } from "react";
import Button from "../components/Button";
import { FaArrowRight, FaCss3Alt, FaExternalLinkAlt, FaHtml5, FaNodeJs, FaReact, FaGithub } from "react-icons/fa";
import {SiExpress, SiJavascript, SiMongodb, SiRedux, SiTailwindcss} from "react-icons/si"
import SwiperSlider from "../Utilities/SwiperSlider";
import { Link, useParams } from "react-router-dom";
import { DataContext } from "../../context/Data";

const SpecificProject = () => {


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
  const { products } = useContext(DataContext);
  const { name } = useParams();

  const [project, setProject] = useState();
  const [more, setMore] = useState([]);
  const [landingPages, setLandingPages] = useState([]);
  const [fullWebsites, setFullWebsites] = useState([]);
  const [sideProjects, setSideProjects] = useState([]);

  useEffect(() => {
    if (Array.isArray(products)) {
      setProject(products.find((item) => item.name === name));
      setLandingPages(products.filter((p) => p.category === "Landing Page"));
      setFullWebsites(products.filter((p) => p.category === "Full Website"));
      setSideProjects(products.filter((p) => p.category === "Side Projects"));
    }
  }, [products, name]);

  useEffect(() => {
    if (!project) return;

    if (project.category === "Landing Page") {
      setMore(sideProjects);
    } else if (project.category === "Full Website") {
      setMore(landingPages);
    } else if (project.category === "Side Projects") {
      setMore(fullWebsites);
    }
  }, [project, landingPages, fullWebsites, sideProjects]);

  if (!project) {
    return (
      <p className="text-center mt-10 text-gray-500">Loading project...</p>
    );
  }

  return (
    <section className="container mx-auto min-h-screen py-[50px] md:py-[100px]">
      <div className="">
        <div className="mt-5 md:mt-10 flex flex-col md:flex-row items-center  gap-4">
          <div className="">
            <img
              src={project.images.main}
              alt=""
              className="rounded-lg shadow-2xl"
            />
          </div>

          <div className="flex flex-col gap-2 md:gap-4 text-center md:text-start">
            <h1 className="text-[2.5em] font-bold text-gradient">
              {project.name}
            </h1>
            <p className="text-md  text-gradient   cursor-pointer ">
              Za_editor
            </p>
            <div className="text-sm md:text-lg text-gradient cursor-pointer">
              <span>Website Design </span>{" "}
              <span className="inline-block px-1 border-l-4 border-gray-300">
                Webflow Development
              </span>
              <span className="inline-block px-1 border-l-4 border-gray-300">
                Ecommerce
              </span>
            </div>
          </div>
        </div>
        <div className="w-full  text-center md:text-start flex flex-col items-center md:items-start md:w-2/5 mt-3 md:mt-5">
          <p className="text-gradient italic text-sm md:text-[15px]">
            {project.miniDescription}
          </p>
          <div className="flex gap-4 items-center">
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                text={"Live Version"}
                className={
                  "inline-block mt-2 px-4 py-2 rounded-lg text-sm font-medium transition bg-gradient text-white hover:bg-gray-600 cursor-pointer"
                }
              />
            </a>
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                text={
                  <div className="flex items-center gap-2">
                    GitHub <FaGithub />
                  </div>
                }
                className={
                  "inline-block mt-2 px-4 py-2 rounded-lg text-sm font-medium transition bg-gradient text-white hover:bg-gray-600 cursor-pointer"
                }
              />
            </a>
            <FaExternalLinkAlt className="text-gray-500 hover:scale-105 hover:shadow-2xl " />
          </div>
        </div>
      </div>
      <div className=" mt-10 flex flex-col md:flex-row gap-[10px] md:gap-[20px] w-full ">
        <div className="w-full md:w-8/12">
          {/* ScreenShots Section */}
          <div className="text-gradient shadow-lg rounded-lg ">
            <div className="flex items-center justify-between px-5 py-5 border-b-3 border-gray-300">
              <p className="">Screenshots</p>
              <FaArrowRight className="text-gray-500 hover:scale-105 hover:shadow-2xl" />
            </div>
            <div className="mt-4 px-4 max-h-100">
              <SwiperSlider images={project.images.screenshots} />
            </div>
          </div>
          {/* Descriptions Section */}
          <div className="text-gradient shadow-xl rounded-lg mt-5">
            <div className="flex items-center justify-between px-5 py-5 border-b-3 border-gray-300">
              <p className="">Description</p>
            </div>
            <div className="py-4 px-4 max-h-100">
              <p className="text-gradient  text-sm md:text-[17px]">
                {project.miniDescription}
              </p>
              <ol className="mt-4 list-disc list-inside text-gray-500 flex flex-col gap-2">
                {project.description.map((desc, index) => (
                  <li key={index}>{desc}</li>
                ))}
              </ol>
            </div>
          </div>
          {/* Features Section */}
          <div className="text-gradient shadow-xl rounded-lg mt-5">
            <div className="flex items-center justify-between px-5 py-5 border-b-3 border-gray-300">
              <p className="">Features</p>
            </div>
            <div className="py-4 px-4 max-h-100">
              <ol className="mt-4 list-disc list-inside text-gray-500 flex flex-col gap-2">
                {project.features.map((desc, index) => (
                  <li key={index}>{desc}</li>
                ))}
              </ol>
            </div>
          </div>
          {/* Tech Stack Section */}
          <div className="text-gradient shadow-xl rounded-lg mt-5">
            <div className="flex items-center justify-between px-5 py-5 border-b-3 border-gray-300">
              <p className="">Tech Stack</p>
            </div>
            <div className="flex flex-wrap gap-4 px-4 py-5">
              {project.techStack.map((tech, i) => {
                const techData = techIcons[tech] || { name: tech };
                return (
                  <div
                    key={i}
                    className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 transition-all shadow-sm px-3 py-2 rounded-lg"
                  >
                    {techData.icon && <span>{techData.icon}</span>}
                    <span className="text-gray-700 font-medium">
                      {techData.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="w-full md:w-4/12">
          <Link to={"/project"} className="cursor-pointer">
            <div className="px-5 py-5 border-b-3 border-gray-300 flex gap-2 items-center  bg-gray-200 text-gradient shadow-xl rounded-lg  h-fit">
              <p className="">Discover More</p>
              <FaArrowRight className="text-gray-500 hover:scale-105 hover:shadow-2xl" />
            </div>
          </Link>
          {more.map((item, i) => (
            <Link to={`/project/${item.name}`}>
              <div
                key={i}
                className="mt-4 flex gap-4 py-4 px-4 hover:bg-gray-200 hover:shadow-lg transition-all ease-in-out duration-300 cursor-pointer"
              >
                <div className="w-[80px]    rounded-lg">
                  <img
                    className="rounded-lg h-full"
                    src={item.images.main}
                    alt=""
                  />
                </div>
                <div className="flex flex-col">
                  <p className="text-xl text-gradient font-medium">
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

export default SpecificProject;
