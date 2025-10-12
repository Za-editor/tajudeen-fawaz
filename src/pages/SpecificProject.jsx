import React, { useContext, useEffect, useState } from "react";
import Button from "../components/Button";
import { FaArrowRight, FaExternalLinkAlt } from "react-icons/fa";
import SwiperSlider from "../Utilities/SwiperSlider";
import { useParams } from "react-router-dom";
import { DataContext } from "../../context/Data";

const SpecificProject = () => {
  const { products } = useContext(DataContext);
  const { name } = useParams();
  const [project, setProject] = useState();

  useEffect(() => {
    if (Array.isArray(products)) {
      setProject(products.find((item) => item.name === name));
    }
  }, [products, name]);

  if (!project) {
    return <p className="text-center mt-10">Loading project...</p>;
  }
  console.log(project.images);
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
            <Button
              text={"Live Version"}
              className={
                "inline-block mt-2 px-4 py-2 rounded-lg text-sm font-medium transition bg-gradient text-white hover:bg-gray-600 cursor-pointer"
              }
            />
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
              <p className="text-gradient  text-sm md:text-[17px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                sed praesentium mollitia?
              </p>
              <ol className="mt-4 list-disc list-inside text-gray-500 flex flex-col gap-2">
                {project.description.map((desc, index) => (
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
            <div className="py-4 px-4 max-h-100">
              <p className="text-gradient  text-sm md:text-[17px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                sed praesentium mollitia? Sapiente nemo nihil, quia, voluptatem
                ad eaque minima incidunt cumque, explicabo minus dolor eos odit
                fugiat suscipit ratione.
              </p>
              <ol className="mt-4">
                <li>Lorem ipsum dolor sit amet.</li>
                <li>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Odit, quia.
                </li>
                <li>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Odit, quia.
                </li>
              </ol>
              <ol className="mt-4">
                <li>Lorem ipsum dolor sit amet.</li>
                <li>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Odit, quia.
                </li>
                <li>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Odit, quia.
                </li>
              </ol>
            </div>
          </div>
        </div>
        <div className="w-full md:w-4/12">
          <div className="px-5 py-5 border-b-3 border-gray-300 flex gap-2 items-center  bg-gray-200 text-gradient shadow-xl rounded-lg  h-fit">
            <p className="">Discover More</p>
            <FaArrowRight className="text-gray-500 hover:scale-105 hover:shadow-2xl" />
          </div>
          <div className="mt-4 flex gap-4 py-4 px-4 hover:bg-gray-200 hover:shadow-lg transition-all ease-in-out duration-300 cursor-pointer">
            <div className="w-[80px]  rounded-lg">
              <img
                className="rounded-lg"
                src="https://picsum.photos/id/10/150/200"
                alt=""
              />
            </div>
            <div className="flex flex-col">
              <p className="text-xl text-gradient">Zentrip</p>
              <p className="text-sm bg-gray-200 text-gradient px-4 py-1 my-3 shadow-lg transition-all ease-in-out duration-300 cursor-pointer hover:scale-105">
                Webflow
              </p>
            </div>
          </div>
          <div className="mt-4 flex gap-4 py-4 px-4 hover:bg-gray-200 hover:shadow-lg transition-all ease-in-out duration-300 cursor-pointer">
            <div className="w-[80px]  rounded-lg">
              <img
                className="rounded-lg"
                src="https://picsum.photos/id/10/150/200"
                alt=""
              />
            </div>
            <div className="flex flex-col">
              <p className="text-xl text-gradient">Zentrip</p>
              <p className="text-sm bg-gray-200 text-gradient px-4 py-1 my-3 shadow-lg transition-all ease-in-out duration-300 cursor-pointer hover:scale-105">
                Webflow
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecificProject;
