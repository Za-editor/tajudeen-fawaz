import React, { useEffect, useState } from "react";
import { MdClose, MdNorthEast } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import Button from "../components/Button";
import ToggleSwitch from "../components/ToggleSwitch";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  useGSAP(() => {
    gsap.from("#logo", {
      opacity: 0,
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
      delay: 1,
    });
  });

  const navitems = ["Home", "Projects", "About Me", "Resume", "Contact Me"];

  const [isOpen, setIsOpen] = useState(false);
      const location = useLocation();
      const isHome = location.pathname === "/";

  const toggleSideBar = () => {
    setIsOpen((prev) => !prev);
  };

  const checkState = () => {
    setIsOpen(false);
  };
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <div
        className={` w-full fixed z-1000 ${
          isScrolled ? "backdrop-blur-[3px] fixed" : ""
        }`}
      >
        <nav className="container mx-auto flex items-center justify-between py-[14px] md:py-[26px] px-4 md:px-0 ">
          <div id="logo" className="flex items-center">
            <a href="/">
              <h1 className="text-gradient font-bold text-3xl tracking-wide transition-all duration-300 ease-in-out hover:animate-pulse">
                Xa_Plug
              </h1>
            </a>
          </div>

          <ToggleSwitch
            isOn={isOpen}
            onToggle={toggleSideBar}
            label="Enable Notifications"
            onText="ON"
            offText="OFF"
          />
        </nav>
      </div>
      {isOpen && (
        <div className="fixed inset-0 z-40 blur-lg pointer-events-auto"></div>
      )}
      <div
        className={`fixed z-40 w-full md:w-3/4  lg:w-2/4 top-0 right-0 bg-[#e9e9e9] md:rounded-l-[50px] backdrop-blur-sm h-full border-l border-white/20  transition-all duration-700 delay-400 ${
          isOpen
            ? "translate-x-[0] opacity-100 "
            : "translate-x-[100%] opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-8 p-10 mt-30">
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
                onClick={checkState}
                key={index}
                href={linkTarget}
                className="group text-[#192f3d] text-[18px] font-medium hover:text-[#005f64] flex items-center gap-1"
              >
                <li className="flex items-center justify-between w-full uppercase">
                  <span
                    className={`relative text-xl  md:text-2xl ${
                      item === "Home"
                        ? "after:w-full after:bg-[#005f64]"
                        : "after:w-0 after:bg-[#005f64]"
                    }  after:absolute after:left-0 after:bottom-0 after:h-[1px] after:transition-all after:duration-500 ease-in-out hover:after:w-full`}
                  >
                    {item}
                  </span>

                  <span className=" transform -translate-x-1 translate-y-1 opacity-0 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                    <MdNorthEast className="h-[11px]" />
                  </span>
                </li>
              </a>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
