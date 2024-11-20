import React from "react";
import backgroundImage from "../assets/Image2.JPG"; // Adjust the path as needed

const Header = () => {
  return (
    <div className="relative col-span-1 sm:col-span-2 sm:row-span-5 lg:row-span-4 bg-gray-800 rounded-lg overflow-hidden">
      <img
        src={backgroundImage}
        alt="Background"
        className="background-image"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tl from-transparent opacity-100 from-50% to-black"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent opacity-75 from-50% to-black"></div>

      <div className="relative p-5 text-white">
        <div
          style={{ fontFamily: "Almarai, sans-serif" }}
          className="pl-5 pt-5 sm:text-6xl text-5xl tracking-widest"
        >
          NISHIT
        </div>
        <div className="flex">
          <div
            style={{ fontFamily: "Almarai, sans-serif" }}
            className="pl-9 pr-3 sm:text-8xl text-7xl"
          >
            *
          </div>
          <div
            style={{ fontFamily: "Almarai, sans-serif" }}
            className="pl-1 sm:text-6xl tracking-widest text-5xl"
          >
            JAIN
          </div>
        </div>
      </div>

      {/* Location added to bottom-right */}
      <div
        className="absolute text-right bottom-6 right-8 text-white text-sm"
        style={{ fontFamily: "Almarai, sans-serif" }}
      >
        Dublin, Ireland
        <br />
        📍
        <i className="text-sm"> 53.3498° N, 6.2603° W</i>
      </div>
    </div>
  );
};

export default Header;
