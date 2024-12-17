import React from "react";

const pages = [
  { id: 1, href: "/about", text: "About" },
  { id: 2, href: "/projects", text: "Projects" },
  { id: 3, href: "/skills", text: "Skills" },
  { id: 4, href: "/experience", text: "Experience" },
  { id: 5, href: "/contact", text: "Contact" },
];

import { FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";
import Tooltip from "./Tooltip";
import { MdArrowOutward } from "react-icons/md";


const handleResumeClick = () => {
  window.open("/resume.pdf", "_blank");
};


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

const Home = () => {
  return (
    <>
      <div
        className="h-screen w-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/developer.webp')" }}
      >
        <div className="pt-16 flex flex-col items-center">
          <h2 className="text-aliceblue text-2xl font-normal">Jawad Asghar</h2>
          <h1 className="text-aliceblue text-6xl font-bold mt-6">
            Designer / Developer
          </h1>
        </div>
      </div>

      <div className="fixed top-20 right-12">
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

      <div className="fixed bottom-5 left-12">
        <button
          onClick={handleResumeClick}
          className="text-white transition-all duration-300 ease-in-out hover:bg-gray-800/90 bg-gray-800 py-2 px-4 rounded-md flex items-center"
        >
          View Resume{" "}
          <MdArrowOutward className="ml-2" size={20} color="white" />
        </button>
      </div>

      <div className="fixed bottom-5 right-12">
        <ul className="flex gap-3">
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
                key={social.id}
              >
                {social.icon}
              </li>
            </Tooltip>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Home;
