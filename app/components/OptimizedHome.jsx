"use client";

import React, { useState, useRef, useEffect, memo } from "react";
import { FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";
import { MdArrowOutward } from "react-icons/md";
import Tooltip from "./Tooltip";
import Navigation from "./Navigation";

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

// Memoized social icons component
const SocialIcons = memo(({ socials, isMobile = false }) => {
  if (isMobile) {
    return (
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
                social.href === "#" ? "cursor-not-allowed" : "hover:cursor-pointer"
              } hover:opacity-80 duration-300 transition-all ease-in-out`}
            >
              <Tooltip text={social.text}>
                {social.icon}
              </Tooltip>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div className="fixed bottom-5 right-12 hidden md:flex gap-3">
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
            social.href === "#" ? "cursor-not-allowed" : "hover:cursor-pointer"
          } hover:opacity-80 duration-300 transition-all ease-in-out`}
        >
          <Tooltip text={social.text}>
            {social.icon}
          </Tooltip>
        </li>
      ))}
    </div>
  );
});

SocialIcons.displayName = 'SocialIcons';

const OptimizedHome = () => {
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

      {/* Navigation */}
      <Navigation />

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
      <SocialIcons socials={socials} />
      <SocialIcons socials={socials} isMobile={true} />
    </>
  );
};

export default memo(OptimizedHome);
