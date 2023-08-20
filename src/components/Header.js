import React from "react";

const Header = ({ title }) => {
  return (
    <div className="w-screen h-24 bg-emerald-300 flex justify-center items-center relative">
      <h1 className="text-3xl font-extrabold">{title}</h1>
    </div>
  );
};

export default Header;
