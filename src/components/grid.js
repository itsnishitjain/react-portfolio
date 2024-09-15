import React from "react";
import backgroundImage from "../assets/image.jpeg"; // Adjust the path as needed
import spotifyLogo from "../assets/spotify.png"; // Adjust the path as needed
import "../index.css";

const Grid = () => {
  const marginStyle = {
    margin: "calc(15vw - 100px)", // Adjust the formula as needed
  };

  return (
    <div
      style={marginStyle}
      className="grid h-full w-full sm:p-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1vh"
    >
      <div className="relative col-span-1 sm:col-span-2 sm:row-span-5 lg:pb-64 pb-48 lg:row-span-2 bg-gray-800 rounded-xl overflow-hidden">
        <img
          src={backgroundImage}
          alt="Background"
          className="absolute inset-8 w-full h-full object-cover opacity-35 transform scale-110"
        />
        <div className="relative p-5 text-white">
          <div
            style={{ fontFamily: "Almarai, sans-serif" }}
            className="pl-10 pt-10 text-7xl tracking-widest"
          >
            NISHIT
          </div>
          <div className="flex">
            <div
              style={{ fontFamily: "Almarai, sans-serif" }}
              className="pl-12 text-9xl"
            >
              *
            </div>
            <div
              style={{ fontFamily: "Almarai, sans-serif" }}
              className="pl-6 text-7xl tracking-widest"
            >
              JAIN
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-1 row-span-1 bg-black rounded-xl lg:pb-36 pb-48">
        <div className="relative p-5 text-white flex items-center">
          <div
            style={{ fontFamily: "Almarai, sans-serif" }}
            className="text-2xl flex-grow pl-3 pt-2"
          >
            Now Playing
          </div>
          <img src={spotifyLogo} alt="Spotify Logo" className="w-9 h-9" />
        </div>
      </div>
      <div
        style={{
          backgroundImage: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
        }}
        className="col-span-1 row-span-1 bg-gray-800 rounded-xl lg:pb-36 pb-48"
      >
        <div className="relative p-5 text-black">
          <div
            style={{ fontFamily: "Almarai, sans-serif" }}
            className="text-3xl pl-3 pt-1"
          >
            Projects
          </div>
        </div>
      </div>
      <div
        style={{
          background: "linear-gradient(20deg, #09203f, #537895)",
        }}
        className="col-span-1 sm:col-span-2 sm:row-span-1 lg:row-span-2 bg-gray-800 rounded-xl lg:pb-10  pb-96"
      >
        <div className="relative p-5 text-white">
          <div
            style={{ fontFamily: "Almarai, sans-serif" }}
            className="pl-8 pt-6 text-4xl "
          >
            About Me
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundImage: "linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%)",
        }}
        className="col-span-1 sm:col-span-2 rounded-xl lg:pb-36 pb-48"
      >
        <div className="relative p-5 text-black">
          <div
            style={{ fontFamily: "Almarai, sans-serif" }}
            className="pl-6 pt-3 text-4xl "
          >
            Contact
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grid;