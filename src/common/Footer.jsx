import React, { useEffect, useState } from "react";
import { MdNorthEast } from "react-icons/md";
import { FaCog } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import EmailModal from "../components/EmailModal";

const Footer = () => {
  const navitems = ["Home", "Projects", "About Me",  "Resume","Contact Me"];

  const socials = ["Github", "Linkedin", "Twitter", "Instagram"];

    const location = useLocation();
    const isHome = location.pathname === "/";

    const toggleModal = () => {
      setIsOpen((prev) => !prev);
    };

    useEffect(() => {
      window.addEventListener("openEmailModal", toggleModal);

      return () => {
        window.removeEventListener("openEmailModal", toggleModal);
      };
    }, []);
    const [isOpen, setIsOpen] = useState(false);


  return (
    <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-y-6 md:gap-y-0 py-6 px-4 border-t-2 border-gray-300 overflow-y-hidden">
      <div id="nav-links" className="text-center md:text-left">
        <ul className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-6">
          {navitems.map((item, index) => {
            const sectionId = item.toLowerCase().replace(/\s+/g, "");
            const isProjects = sectionId === "projects";

            const linkTarget = isProjects
              ? "/projects"
              : isHome
              ? `#${sectionId}`
              : `/#${sectionId}`;
            return (
              <a
                key={index}
                href={linkTarget}
                className="group text-[#192f3d] text-[13px] md:text-[14px] font-medium hover:text-[#005f64] flex items-center gap-1"
              >
                <li className="flex items-center uppercase">
                  <span
                    className={`relative ${
                      item === "Home"
                        ? "after:w-full after:bg-[#005f64]"
                        : "after:w-0 after:bg-[#005f64]"
                    } after:absolute after:left-0 after:bottom-0 after:h-[1px] after:transition-all after:duration-500 ease-in-out hover:after:w-full`}
                  >
                    {item}
                  </span>
                  <span className="transform -translate-x-1 translate-y-1 opacity-0 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                    <MdNorthEast className="h-[11px]" />
                  </span>
                </li>
              </a>
            );
          })}
        </ul>
      </div>
      <a href="/#aboutme">
        <div className="flex items-center gap-2 group relative cursor-pointer">
          <span className="uppercase tracking-wider font-light text-sm md:text-base">
            Creator
            <span className="text-[#192f3d] text-[16px] md:text-[18px] font-medium hover:text-[#005f64] ml-2">
              FAWAZ
            </span>
          </span>

          <FaCog
            className="
            opacity-0 group-hover:-translate-x-2 
            group-hover:opacity-100 group-hover:animate-spin 
            transition-all duration-700 ease-in-out
            text-lg md:text-xl text-[#192f3d]
          "
          />
        </div>
      </a>

      <div className="text-center md:text-right">
        <ul className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-6">
          {socials.map((item, index) => {
            const url =
              item === "Github"
                ? "https://github.com/Za-editor"
                : item === "Linkedin"
                ? "https://www.linkedin.com/in/fawas-tajudeen-a50763111/"
                : item === "Twitter"
                ? "https://x.com/zaa_editor"
                : item === "Instagram"
                ? "https://www.instagram.com/iam_fawa_z"
                : "#";
            return (
              <a
                key={index}
                href={url}
                target="_blank"
                className="group text-[#192f3d] text-[13px] md:text-[14px] font-medium hover:text-[#005f64] flex items-center gap-1"
              >
                <li className="flex items-center uppercase">
                  <span
                    className={`relative after:w-0 after:bg-[#005f64] after:absolute after:left-0 after:bottom-0 after:h-[1px] after:transition-all after:duration-500 ease-in-out hover:after:w-full`}
                  >
                    {item}
                  </span>
                  <span className="transform -translate-x-1 translate-y-1 opacity-0 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                    <MdNorthEast className="h-[11px]" />
                  </span>
                </li>
              </a>
            );
          })}
        </ul>
      </div>
      <EmailModal toggleModal={toggleModal} isOpen={isOpen} />
    </div>
  );
};

export default Footer;
