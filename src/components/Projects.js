import React from "react";
import { MdArrowOutward } from "react-icons/md"; // Import the icon

const Projects = () => {
  return (
    <div className="col-span-1 row-span-2 bg-orange-100 rounded-lg lg:p-0 pb-48 relative">
      <div className="relative p-5 text-black">
        <div
          style={{ fontFamily: "Almarai, sans-serif" }}
          className="text-2xl pl-3 pt-1"
        >
          Projects
        </div>
      </div>

      {/* Arrow icon in the top-right */}
      <div className="absolute top-6 right-5 text-black">
        <a
          href="#projects" // Add your desired link here
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-600"
        >
          <MdArrowOutward size={30} /> {/* Adjust size as needed */}
        </a>
      </div>
    </div>
  );
};

export default Projects;
