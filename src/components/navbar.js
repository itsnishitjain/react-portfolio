import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-orange-100 text-black rounded-xl px-4">
      <div className="navbar-start">
        <a href="../" className="btn btn-ghost normal-case text-xl">
          Nishit Jain
        </a>
      </div>

      {/* Hidden on screens smaller than 640px */}
      <div className="navbar-center hidden sm:flex flex-1 justify-end">
        <ul className="menu menu-horizontal px-1 space-x-2">
          <li>
            <a>Work</a>
          </li>
          <li>
            <a
              href="mailto:nijain@tcd.ie" // Replace with your email
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact
            </a>
          </li>
          <li>
            <a href="/NishitJain_CV.pdf">Resume</a>
          </li>
        </ul>
      </div>

      {/* Hamburger Menu for screens smaller than 640px */}
      <div className="navbar-end sm:hidden flex justify-end w-full">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-orange-100 rounded-box w-52 z-20"
          >
            <li>
              <a>Projects</a>
            </li>
            <li>
              <a
                href="mailto:nijain@tcd.ie" // Replace with your email
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact
              </a>
            </li>
            <li>
              <a>Resume</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
