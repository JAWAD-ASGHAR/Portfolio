import React, { useState, useRef, useEffect } from "react";
import { FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";
import { MdArrowOutward } from "react-icons/md";
import { IoMenu, IoClose } from "react-icons/io5";
import Tooltip from "./Tooltip";

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

const LoadingOverlay = () => (
  <div className="flex flex-col items-center justify-center h-full">
    {/* Animated Logo/Initial */}
    {/* <div className="relative w-24 h-24 mb-8">
      <div className="absolute inset-0 border-t-4 border-white rounded-full animate-spin"></div>
      <div className="absolute inset-2 bg-black flex items-center justify-center">
        <span className="text-white text-3xl font-bold">JA</span>
      </div>
    </div> */}
    
    {/* Name with typing animation */}
    <div className="overflow-hidden h-8 mb-2">
      <div className="animate-typewriter whitespace-nowrap text-white text-3xl">
        Jawad Asghar
      </div>
    </div>
    
    {/* Role with fade-in animation */}
    <div className="overflow-hidden h-6 mb-8">
      <div className="animate-fadeIn text-gray-400 text-sm tracking-widest uppercase">
        Designer / Developer
      </div>
    </div>
    
    {/* Loading Bar */}
    {/* <div className="w-48 h-1 bg-gray-800 rounded-full overflow-hidden">
      <div className="h-full bg-white animate-pulse"></div>
    </div> */}
  </div>
);

const handleResumeClick = () => {
  window.open("/resume.pdf", "_blank");
};

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const menuRef = useRef(null);

  useEffect(() => {
    // Preload the image
    const img = new Image();
    img.src = "/developer.webp";

    // Start loading sequence
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

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
      {/* Loading Overlay */}
      <div 
        className={`fixed inset-0 bg-black z-50 transform transition-transform duration-1000 ease-in-out ${
          loading ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <LoadingOverlay />
      </div>

      {/* Main Content */}
      <div
        className={`transition-opacity duration-1000 ${
          loading ? "opacity-0" : "opacity-100"
        }`}
      >
        {/* Background Section */}
        <div
          className="h-screen w-screen bg-cover bg-center bg-no-repeat transition-transform duration-1000 ease-out"
          style={{ 
            backgroundImage: "url('/developer.webp')",
            transform: loading ? 'scale(1.1)' : 'scale(1)'
          }}
        >
          <div className="pt-16 flex flex-col items-center">
            <h2 className="text-aliceblue text-2xl font-normal">
              Jawad Asghar
            </h2>
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
                <a
                  href={link.href}
                  className="text-white text-xl hover:opacity-80 transition-all"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.text}
                </a>
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
                <a href={link.href}>{link.text}</a>
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
      </div>
    </>
  );
};

export default Home;
