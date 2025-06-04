import React from "react";
import HeaderBox from "./Header";
import NowPlayingBox from "./NowPlaying";
import WorkBox from "./Work";
import AboutMeBox from "./About";
import ContactBox from "./Contact";
import "../index.css";

const Grid = () => {
  const marginStyle = {
    marginLeft: "calc(15vw - 100px)", // Adjust the formula as needed
    marginRight: "calc(15vw - 100px)",
  };

  return (
    <div
      style={marginStyle}
      className="grid h-full w-full p-2 pt-10 sm:p-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg: grid-rows-6 gap-4"
    >
      <HeaderBox />
      <NowPlayingBox />
      <WorkBox />
      <AboutMeBox />
      <ContactBox />
    </div>
  );
};

export default Grid;
