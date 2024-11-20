import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaGitAlt,
  FaPython,
  FaJava,
} from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";

const About = () => {
  return (
    <div className="col-span-1 sm:col-span-2 sm:row-span-1 lg:row-span-4 bg-stone-800 rounded-lg lg:p-0 pb-96">
      <div className="relative p-5 text-white">
        <div
          style={{ fontFamily: "Almarai, sans-serif" }}
          className="sm:pl-6 sm:pt-3 lg:pl-4 lg:pt-4 sm:text-3xl text-2xl"
        >
          About Me
        </div>
        <p className="mt-5 mr-6 sm:text-base text-md sm:pl-6 lg:pl-4">
          Currently a second-year Computer Science student at Trinity College
          Dublin, I'm passionate about interdisciplinary research, particularly
          integrating technology with music. I usually spend my time developing
          software applications to solve problems I find interesting, but when
          I’m not coding, you can find me exploring niche music genres and
          learning math rock on the guitar. <br />
          <br />
          lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum
          dolor sit amet,You can find my resume, <u>here</u>
        </p>

        <div className="mt-8 sm:pl-6 lg:pl-0">
          <p className="mt-5 sm:text-base text-md sm:pl-6 lg:pl-4"></p>
        </div>

        {/* Tech Stack Section */}
        <div className="mt-8 sm:pl-6 lg:pl-4">
          <div
            style={{ fontFamily: "Almarai, sans-serif" }}
            className="sm:text-2xl text-2xl"
          >
            Tech Stack
          </div>
          <div className="mt-3 grid grid-cols-9 gap-4">
            <FaHtml5 size={35} />
            <FaReact size={35} />
            <FaJsSquare size={35} />
            <SiTailwindcss size={35} />
            <FaGitAlt size={35} />
            <TbBrandCpp size={35} />
            <FaJava size={35} />
            <FaPython size={35} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
