import React, { useState } from "react";
import { MdClose, MdNorthEast } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import Button from "../components/Button";

const Navbar = () => {
  const navitems = [
    "Home",
    "Projects",
    "About Me",
    "Contact Me",
    "Resume",
    "Blog",
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div >
      <nav className=" container mx-auto flex items-center justify-between py-[14px] md:py-[26px]">
        <div id="logo" className="flex items-center">
          <a href="/">
            <h1 className="font-bold text-3xl tracking-wide text-[#192f3d]">
              Za_editor
            </h1>
          </a>
        </div>
        <div id="nav-links " className="hidden lg:block">
          <ul className="flex gap-6">
            {navitems.map((item, index) => (
              <a
                key={index}
                href="#"
                className="group text-[#192f3d] text-[18px] font-medium hover:text-[#005f64] flex items-center gap-1"
              >
                <li className="flex items-center  ">
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
        <div id="contact" className="flex gap-5 items-center">
          <div className="hidden md:flex gap-5 items-center">
            <p className="text-[#192f3d] text-[18px] font-medium tracking-wide hover:text-[#005f64]">
              +234 810 5709 670
            </p>
            <Button
              text="Email Me"
              className="bg-[#192f3d] px-8 py-3 rounded-lg text-[#e9e9e9] font-medium text-lg hover:bg-[#005f64] transition-colors duration-500  ease-in-out cursor-pointer"
            />
          </div>
          <div
            className="p-3 bg-[#192f3d] rounded-lg hover:bg-[#005f64] cursor-pointer transition-all ease-in-out duration-700 block lg:hidden"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <RxHamburgerMenu className="text-white h-[24px] w-[24px] transition-transform duration-900 hover:rotate-180" />
          </div>
        </div>
      </nav>
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
      <div
        className={`absolute z-50  w-3/4 top-0 right-0 bg-white/10 backdrop-blur-sm h-full border-l border-white/20  transition-all duration-700 ${
          isOpen
            ? "translate-x-[0] opacity-100 "
            : "translate-x-[100%] opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-6 p-10">
          <MdClose
            className="h-[24px] w-[24px] transition-transform duration-900 hover:-rotate-180 self-end"
            onClick={() => setIsOpen((prev) => !prev)}
          />
          {navitems.map((item, index) => (
            <a
              key={index}
              href="#"
              className="group text-[#192f3d] text-[18px] font-medium hover:text-[#005f64] flex items-center gap-1"
            >
              <li className="flex items-center justify-between w-full">
                <span
                  className={`relative ${
                    item === "Home"
                      ? "after:w-full after:bg-[#005f64]"
                      : "after:w-0 after:bg-[#005f64]"
                  }  after:absolute after:left-0 after:bottom-0 after:h-[1px] after:transition-all after:duration-500 ease-in-out hover:after:w-full`}
                >
                  {item}
                </span>

                <span className="transform -translate-x-1 translate-y-1 opacity-0 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
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

export default Navbar;
