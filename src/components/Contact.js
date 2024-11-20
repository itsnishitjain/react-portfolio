import React from "react";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { FaFacebook, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa"; // Import social icons

const Contact = () => {
  return (
    <div className="col-span-1 sm:col-span-2 lg:row-span-2 rounded-lg lg:p-0 pb-48 bg-orange-100 relative">
      {/* Small invitation text in the top-left */}
      <div
        className="absolute top-6 left-8 text-black text-base"
        style={{ fontFamily: "Almarai, sans-serif" }}
      >
        Have some questions?
      </div>

      {/* Messenger icon in the top-right */}
      <div className="absolute top-6 right-8 text-black">
        <a
          href="mailto:nijain@tcd.ie" // Replace with your email
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoPaperPlaneOutline size={30} /> {/* Adjust size as needed */}
        </a>
      </div>

      {/* Social media icons in the bottom-right */}
      <div className="absolute bottom-6 right-8 flex space-x-4 text-black">
        <a
          href="https://linkedin.com/in/itsnishitjain" // Replace with your LinkedIn profile link
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={27} />
        </a>
        <a
          href="https://github.com/itsnishitjain" // Replace with your GitHub profile link
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-800"
        >
          <FaGithub size={27} />
        </a>
        <a
          href="https://instagram.com/itsnishitjain" // Replace with your Instagram profile link
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={27} />
        </a>
      </div>

      {/* Positioning the main "Contact" text */}
      <div
        className="absolute bottom-5 left-8 text-black"
        style={{ fontFamily: "Almarai, sans-serif" }}
      >
        <div className="sm:text-3xl text-2xl">Contact Me</div>
      </div>
    </div>
  );
};

export default Contact;
