import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-48 h-full border border-gray-400 ml-[2px] absolute mt-24">
      <div className="w-48 flex justify-center items-center border-b-4 border-gray-400">
        <Link to="/">
          <h1 className="p-10 font-bold text-3xl text-cyan-400 ">Contact</h1>
        </Link>
      </div>

      <div className="w-48 flex justify-center items-center border-b-4 border-gray-400">
        <Link to="/maps">
          <h1 className="p-10 font-bold text-3xl text-cyan-400 ">
            Charts and Maps
          </h1>
        </Link>
      </div>

      <div className="w-48 flex justify-center items-center ">
        <h1 className="p-10 font-bold text-3xl text-cyan-400 ">SideBar</h1>
      </div>
    </div>
  );
};

export default Sidebar;
