import React from "react";
import { Link } from "react-router-dom";
import ToggleSwitch from "./ToggleSwitch";

const Header = () => {
  return (
    <>
      <header>
        <div className="flex justify-between items-center text-center align-middle">
          <div className="p-3 w-[15%] h-20 text-3xl cursor-pointer">
            <div className="flex justify-center items-center w-full h-full hover:bg-slate-100 rounded-xl">
              <Link>&lt; Rajesh Ranjan /&gt;</Link>
            </div>
          </div>
          <div className="w-[60%] h-20">
            <ul className="flex justify-between w-full h-full">
              <li className="p-3 w-full h-full cursor-pointer">
                <div className="flex justify-center items-center w-full h-full hover:bg-slate-100 rounded-xl">
                  <Link to="#">Skills</Link>
                </div>
              </li>
              <li className="p-3 w-full h-full cursor-pointer">
                <div className="flex justify-center items-center w-full h-full hover:bg-slate-100 rounded-xl">
                  <Link to="#">Work Experience</Link>
                </div>
              </li>
              <li className="p-3 w-full h-full cursor-pointer">
                <div className="flex justify-center items-center w-full h-full hover:bg-slate-100 rounded-xl">
                  <Link to="#">Open Source</Link>
                </div>
              </li>
              <li className="p-3 w-full h-full cursor-pointer">
                <div className="flex justify-center items-center w-full h-full hover:bg-slate-100 rounded-xl">
                  <Link to="#">Achievements</Link>
                </div>
              </li>
              <li className="p-3 w-full h-full cursor-pointer">
                <div className="flex justify-center items-center w-full h-full hover:bg-slate-100 rounded-xl">
                  <Link to="#">Blogs</Link>
                </div>
              </li>
              <li className="p-3 w-full h-full cursor-pointer">
                <div className="flex justify-center items-center w-full h-full hover:bg-slate-100 rounded-xl">
                  <Link to="#">Contact Me</Link>
                </div>
              </li>
              <li className="p-3 w-full h-full cursor-pointer">
                <div className="flex justify-center items-center w-full h-full hover:bg-slate-100 rounded-xl">
                  <ToggleSwitch />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
