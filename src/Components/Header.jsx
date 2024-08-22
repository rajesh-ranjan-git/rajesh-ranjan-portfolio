import React from "react";
import { NavLink } from "react-router-dom";
import ToggleSwitch from "./ToggleSwitch";

const Header = () => {
  return (
    <>
      <header className="p-2 flex justify-between items-center text-center max-w-[100%] font-MontserratRegular">
        <div className="p-2 h-20 text-3xl cursor-pointer">
          <div className="flex justify-center items-center h-full hover:bg-slate-100 rounded-xl">
            <NavLink to="#">
              <code>&lt;</code>
              <span className="font-ProtestRevolution text-purple-900">
                Rajesh Ranjan
              </span>
              <code>/&gt;</code>
            </NavLink>
          </div>
        </div>
        <div className="h-20">
          <ul className="flex justify-between w-full h-full">
            <li className="p-2 h-full cursor-pointer">
              <div className="px-3 py-4 flex justify-center items-center w-full h-full hover:bg-slate-100 rounded-xl">
                <NavLink to="#skills">Skills</NavLink>
              </div>
            </li>
            <li className="p-2 h-full cursor-pointer">
              <div className="px-3 py-4 flex justify-center items-center w-full h-full hover:bg-slate-100 rounded-xl">
                <NavLink to="#workExperience">Work Experiences</NavLink>
              </div>
            </li>
            <li className="p-2 h-full cursor-pointer">
              <div className="px-3 py-4 flex justify-center items-center w-full h-full hover:bg-slate-100 rounded-xl">
                <NavLink to="#openSource">Open Source</NavLink>
              </div>
            </li>
            <li className="p-2 h-full cursor-pointer">
              <div className="px-3 py-4 flex justify-center items-center w-full h-full hover:bg-slate-100 rounded-xl">
                <NavLink to="#achievements">Achievements</NavLink>
              </div>
            </li>
            <li className="p-2 h-full cursor-pointer">
              <div className="px-3 py-4 flex justify-center items-center w-full h-full hover:bg-slate-100 rounded-xl">
                <NavLink to="#blogs">Blogs</NavLink>
              </div>
            </li>
            <li className="p-2 h-full cursor-pointer">
              <div className="px-3 py-4 flex justify-center items-center w-full h-full hover:bg-slate-100 rounded-xl">
                <NavLink to="#contact">Contact Me</NavLink>
              </div>
            </li>
            <li className="p-2 h-full cursor-pointer">
              <div className="px-3 py-4 flex justify-center items-center w-full h-full hover:bg-slate-100 rounded-xl">
                <ToggleSwitch />
              </div>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
