import React from "react";
import Button from "../components/Button";
import { FaArrowRight, FaExternalLinkAlt } from "react-icons/fa";
import SwiperSlider from "../Utilities/SwiperSlider";

const SpecificProject = () => {
  return (
    <section className="container mx-auto min-h-screen py-[50px] md:py-[100px]">
      <div className="">
        <div className="mt-5 md:mt-10 flex flex-col md:flex-row items-center  gap-4">
          <div className="">
            <img
              src="https://picsum.photos/id/10/150/200"
              alt=""
              className="rounded-lg shadow-2xl"
            />
          </div>

          <div className="flex flex-col gap-2 md:gap-4 text-center md:text-start">
            <h1 className="text-[2.5em] font-bold text-gradient">Silque</h1>
            <p className="text-md  text-gradient   cursor-pointer ">
              Za_editor
            </p>
            <div className="text-sm md:text-lg text-gradient cursor-pointer">
              <span>Website Design </span>{" "}
              <span className="inline-block px-1 border-l-2 border-gray-400">
                Webflow Development
              </span>
              <span className="inline-block px-1 border-l-2 border-gray-400">
                Ecommerce
              </span>
            </div>
          </div>
        </div>
        <div className="w-full  text-center md:text-start flex flex-col items-center md:items-start md:w-2/5 mt-3 md:mt-5">
          <p className="text-gradient italic text-sm md:text-[15px]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa qui
            officia labore assumenda tempore non eius consequuntur repellat
            repudiandae consequatur.
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
        <div className="w-8/12 ">
          {/* ScreenShots Section */}
          <div className="text-gradient shadow-lg rounded-lg ">
            <div className="flex items-center justify-between px-5 py-5 border-b-3 border-gray-300">
              <p className="">Screenshots</p>
              <FaArrowRight className="text-gray-500 hover:scale-105 hover:shadow-2xl" />
            </div>
            <div className="mt-4 px-4 max-h-100">
              <SwiperSlider />
            </div>
          </div>
          {/* Descriptions Section */}
          <div className="text-gradient shadow-xl rounded-lg mt-5">
            <div className="flex items-center justify-between px-5 py-5 border-b-3 border-gray-300">
              <p className="">Description</p>
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
          {/* Features Section */}
          <div className="text-gradient shadow-xl rounded-lg mt-5">
            <div className="flex items-center justify-between px-5 py-5 border-b-3 border-gray-300">
              <p className="">Features</p>
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
        <div className="w-4/12">
          <div className="px-5 py-5 border-b-3 border-gray-300 flex gap-2 items-center  bg-gray-200 text-gradient shadow-xl rounded-lg  h-fit">
            <p className="text-xl">Discover More</p>
            <FaArrowRight className="text-gray-500 hover:scale-105 hover:shadow-2xl" />
                  </div>
                  <div className="mt-4">
                      
                  </div>
        </div>
      </div>
    </section>
  );
};

export default SpecificProject;
