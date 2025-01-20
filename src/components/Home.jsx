import React, { useState, useRef, useEffect } from "react";
import { FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";
import { MdArrowOutward } from "react-icons/md";
import { IoMenu, IoClose } from "react-icons/io5"; // Menu icons
import Tooltip from "./Tooltip";
import { Link } from "react-router";

const pages = [
  { id: 1, href: "/about", text: "About" },
  { id: 2, href: "/projects", text: "Projects" },
  { id: 3, href: "/skills", text: "Skills" },
  { id: 4, href: "/experience", text: "Experience" },
  { id: 5, href: "/contact", text: "Contact" },
];

const socials = [
  {
    id: 1,
    href: "https://github.com/JAWAD-ASGHAR",
    icon: <TbBrandGithubFilled color="black" />,
    text: "GitHub",
  },
  {
    id: 2,
    href: "https://www.linkedin.com/in/jawad-a-dev/",
    icon: <FaLinkedin color="black" />,
    text: "LinkedIn",
  },
  { id: 3, href: "#", icon: <FaTwitter color="black" />, text: "Twitter" },
  {
    id: 4,
    href: "mailto:connect.jawadasghar@gmail.com",
    icon: <FaEnvelope color="black" />,
    text: "Email",
  },
];

const handleResumeClick = () => {
  window.open("/resume.pdf", "_blank");
};

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Close menu if clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {/* Background Section */}
      <div
        className="h-screen w-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/developer.webp')" }}
      >
        <div className="pt-16 flex flex-col items-center">
          <h2 className="text-aliceblue text-2xl font-normal">Jawad Asghar</h2>
          <h1 className="text-aliceblue text-3xl xl:text-6xl md:text-6xl lg:text-6xl font-bold mt-6 text-center">
            Designer / Developer
          </h1>
        </div>

        {/* Resume Button for Mobile */}
        <div className="absolute top-48 left-1/2 transform -translate-x-1/2 md:hidden">
          <button
            onClick={handleResumeClick}
            className="text-white transition-all duration-300 ease-in-out hover:bg-gray-800/90 bg-gray-800 py-2 px-4 rounded-md flex items-center"
          >
            View Resume{" "}
            <MdArrowOutward className="ml-2" size={20} color="white" />
          </button>
        </div>
      </div>

      {/* Navigation Menu */}
      <div className="fixed top-5 right-5 md:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white hover:opacity-80 transition-all duration-300 ease-in-out"
        >
          {menuOpen ? <IoClose size={30} /> : <IoMenu size={30} />}
        </button>
      </div>

      {/* Menu Items */}
      <div
        ref={menuRef}
        className={`fixed top-0 right-0 h-screen bg-gray-900/95 w-2/3 z-50 transform transition-transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="flex justify-between items-center p-4">
          <h2 className="text-white text-xl">Menu</h2>
          <button
            onClick={() => setMenuOpen(false)}
            className="text-white hover:opacity-80 transition-all duration-300 ease-in-out"
          >
            <IoClose size={30} />
          </button>
        </div>
        <ul className="flex flex-col items-center justify-center h-full gap-6">
          {pages.map((link) => (
            <li key={link.id}>
              <Link
                to={link.href}
                className="text-white text-xl hover:opacity-80 transition-all"
                onClick={() => setMenuOpen(false)} // Close menu on link click
              >
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Desktop Navigation */}
      <div className="fixed top-20 right-12 hidden md:block">
        <ul className="flex flex-col gap-1">
          {pages.map((link) => (
            <li
              className="hover:cursor-pointer text-lg hover:opacity-80 hover:translate-x-1 duration-300 transition-all ease-in-out"
              key={link.id}
            >
              <Link to={link.href}>{link.text}</Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Resume Button for Desktop */}
      <div className="fixed bottom-5 left-12 hidden md:block">
        <button
          onClick={handleResumeClick}
          className="text-white transition-all duration-300 ease-in-out hover:bg-gray-800/90 bg-gray-800 py-2 px-4 rounded-md flex items-center"
        >
          View Resume{" "}
          <MdArrowOutward className="ml-2" size={20} color="white" />
        </button>
      </div>

      {/* Social Icons */}
      <div className="fixed bottom-5 right-12 hidden md:flex gap-3">
        {socials.map((social) => (
          <Tooltip key={social.id} text={social.text}>
            <li
              onClick={(e) => {
                if (social.href === "#") {
                  e.preventDefault();
                } else {
                  window.open(social.href, "_blank");
                }
              }}
              className={`h-10 rounded-full justify-center items-center flex w-10 bg-white ${
                social.href === "#"
                  ? "cursor-not-allowed"
                  : "hover:cursor-pointer"
              } hover:opacity-80 duration-300 transition-all ease-in-out`}
            >
              {social.icon}
            </li>
          </Tooltip>
        ))}
      </div>

      {/* Social Icons for Mobile */}
      <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 md:hidden">
        <ul className="flex gap-4">
          {socials.map((social) => (
            <li
              key={social.id}
              onClick={(e) => {
                if (social.href === "#") {
                  e.preventDefault();
                } else {
                  window.open(social.href, "_blank");
                }
              }}
              className={`h-10 rounded-full justify-center items-center flex w-10 bg-white ${
                social.href === "#"
                  ? "cursor-not-allowed"
                  : "hover:cursor-pointer"
              } hover:opacity-80 duration-300 transition-all ease-in-out`}
            >
              {social.icon}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Home;
