import React from "react";
import { MdNorthEast } from "react-icons/md";
import {FaCog} from "react-icons/fa"

const Footer = () => {

    const navitems = [
      "Home",
      "Projects",
      "About Me",
      "Contact Me",
      "Resume",

  ];
  
  const socials = [
    "Github",
    "Linkedin",
    "Twitter",
    "Instagram"
  ]
  return (
    <div className="container mx-auto flex justify-between">
      <div id="nav-links " className="">
        <ul className="flex gap-6">
          {navitems.map((item, index) => (
            <a
              key={index}
              href="#"
              className="group text-[#192f3d] text-[14px] font-medium hover:text-[#005f64] flex items-center gap-1"
            >
              <li className="flex items-center uppercase  ">
                <span
                  className={`relative ${
                    item === "Home"
                      ? "after:w-full after:bg-[#005f64]"
                      : "after:w-0 after:bg-[#005f64]"
                  }  after:absolute after:left-0 after:bottom-0 after:h-[1px] after:transition-all after:duration-500 ease-in-out hover:after:w-full`}
                >
                  {item}
                </span>

                <span className=" transform -translate-x-1 translate-y-1 opacity-0  group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                  <MdNorthEast className="h-[11px]" />
                </span>
              </li>
            </a>
          ))}
        </ul>
      </div>
      <div className="flex items-center gap-2 group relative overflow-hidden cursor-pointer">
        <span className="uppercase tracking-wider font-light">
          Created by
          <span className="text-[#192f3d] text-[18px] font-medium hover:text-[#005f64] ml-2">
            FAWAZ
          </span>
        </span>

        {/* Cog Icon */}
        <FaCog
          className="
            left-1 opacity-0
            group-hover: group-hover:-translate-x-2 
            group-hover:opacity-100 
            group-hover:animate-spin 
            transition-all duration-800 ease-in-out
            text-xl text-[#192f3d]
          "
        />
      </div>
      <div>
        <ul className="flex gap-6">
          {socials.map((item, index) => (
            <a
              key={index}
              href="#"
              className="group text-[#192f3d] text-[14px] font-medium hover:text-[#005f64] flex items-center gap-1"
            >
              <li className="flex items-center uppercase  ">
                <span
                  className={`relative ${
                    item === "Home"
                      ? "after:w-full after:bg-[#005f64]"
                      : "after:w-0 after:bg-[#005f64]"
                  }  after:absolute after:left-0 after:bottom-0 after:h-[1px] after:transition-all after:duration-500 ease-in-out hover:after:w-full`}
                >
                  {item}
                </span>

                <span className=" transform -translate-x-1 translate-y-1 opacity-0  group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                  <MdNorthEast className="h-[11px]" />
                </span>
              </li>
            </a>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Footer;
