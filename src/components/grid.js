import React from "react";
import backgroundImage from "../assets/Image2.JPG"; // Adjust the path as needed
import spotifyLogo from "../assets/spotify.png"; // Adjust the path as needed
import NowPlaying from "./NowPlaying";
import "../index.css";

const Grid = () => {
  const marginStyle = {
    marginLeft: "calc(15vw - 100px)", // Adjust the formula as needed
    marginRight: "calc(15vw - 100px)",
  };

  return (
    <div
      style={marginStyle}
      className="grid h-full w-full p-2 pt-10 sm:p-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
    >
      <div className="relative col-span-1 sm:col-span-2 sm:row-span-5 g:p-0 pb-48 lg:row-span-3 bg-gray-800 rounded-lg overflow-hidden">
        <img
          src={backgroundImage}
          alt="Background"
          className="background-image"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tl from-transparent opacity-100 from-50% to-black"></div>

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
              className=" pl-1 sm:text-6xl tracking-widest text-5xl"
            >
              JAIN
            </div>
          </div>
        </div>
      </div>
      <NowPlaying />
      <div className="col-span-1 row-span-1 bg-orange-100 rounded-lg lg:p-0 pb-48">
        <div className="relative p-5 text-black">
          <div
            style={{ fontFamily: "Almarai, sans-serif" }}
            className="text-2xl pl-3 pt-1"
          >
            Projects
          </div>
        </div>
      </div>
      <div className="col-span-1 sm:col-span-2 sm:row-span-1 lg:row-span-10 bg-stone-800 rounded-lg lg:p-0 pb-96">
        <div className="relative p-5 text-white">
          <div
            style={{ fontFamily: "Almarai, sans-serif" }}
            className="sm:pl-6 sm:pt-3 lg:pl-8 lg:pt-4 sm:text-3xl text-2xl"
          >
            About Me
          </div>
        </div>
      </div>
      <div className="col-span-1 sm:col-span-2 lg:row-span-8 rounded-lg lg:p-0 pb-48 bg-orange-100">
        <div className="relative p-5 text-black">
          <div
            style={{ fontFamily: "Almarai, sans-serif" }}
            className="sm:pl-6 sm:pt-3 lg:pl-6 lg:pt-3 sm:text-3xl text-2xl"
          >
            Contact
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grid;
