import React from "react";
import { MdArrowOutward } from "react-icons/md"; // Import the icon

const Work = () => {
  return (
    <div className="col-span-1 row-span-2 bg-orange-100 rounded-lg lg:p-0 pb-48 relative overflow-hidden">
      <div className="relative p-5 text-black">
        <div
          style={{ fontFamily: "Almarai, sans-serif" }}
          className="text-2xl pl-3 pt-1"
        >
          Work
        </div>
        <div
          style={{ fontFamily: "Almarai, sans-serif" }}
          className="text-xs text-gray-700 pl-3 italic"
        >
          Experiences and projects.
        </div>

        {/* Stacked rectangles */}
        <div className="mt-0 flex flex-col space-y-3 translate-y-8">
          <div className="h-9 w-9/12 bg-white rounded-3xl shadow-md mx-auto"></div>
          <div className="h-9 w-8/12 bg-white rounded-3xl shadow-md mx-auto"></div>
          <div className="h-9 w-7/12 bg-white rounded-3xl shadow-md mx-auto"></div>
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
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-orange-100 to-transparent pointer-events-none"></div>
    </div>
  );
};

export default Work;
