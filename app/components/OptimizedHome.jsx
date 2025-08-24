"use client";

import React, { useState, useRef, useEffect, memo } from "react";
import { FaLinkedin, FaXTwitter, FaEnvelope } from "react-icons/fa6";
import { TbBrandGithubFilled } from "react-icons/tb";
import { MdArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";
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
  { id: 3, href: "https://x.com/jawadasghar86", icon: <FaXTwitter color="black" />, text: "X" },
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
      <motion.div 
        className="fixed bottom-5 left-0 right-0 md:hidden flex justify-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <ul className="flex gap-4">
          {socials.map((social, index) => (
            <motion.li
              key={social.id}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
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
            </motion.li>
          ))}
        </ul>
      </motion.div>
    );
  }

  return (
    <motion.div 
      className="fixed bottom-5 right-12 hidden md:flex gap-3"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
    >
      {socials.map((social, index) => (
        <motion.li
          key={social.id}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
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
        </motion.li>
      ))}
    </motion.div>
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
        <motion.div 
          className="pt-16 flex flex-col items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2 
            className="text-aliceblue text-2xl font-normal"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Jawad Asghar
          </motion.h2>
          <motion.h1 
            className="text-aliceblue text-3xl xl:text-6xl md:text-6xl lg:text-6xl font-bold mt-6 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Designer / Developer
          </motion.h1>
        </motion.div>

        {/* Resume Button for Mobile */}
        <motion.div 
          className="pt-16 flex flex-col items-center md:hidden"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <motion.button
            onClick={handleResumeClick}
            className="text-white transition-all duration-300 ease-in-out hover:bg-gray-800/90 bg-gray-800 py-2 px-4 rounded-md flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Resume{" "}
            <MdArrowOutward className="ml-2" size={20} color="white" />
          </motion.button>
        </motion.div>
      </div>

      {/* Navigation */}
      <Navigation />

      {/* Resume Button for Desktop */}
      <motion.div 
        className="fixed bottom-5 left-12 hidden md:block"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <motion.button
          onClick={handleResumeClick}
          className="text-white transition-all duration-300 ease-in-out hover:bg-gray-800/90 bg-gray-800 py-2 px-4 rounded-md flex items-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View Resume{" "}
          <MdArrowOutward className="ml-2" size={20} color="white" />
        </motion.button>
      </motion.div>

      {/* Social Icons */}
      <SocialIcons socials={socials} />
      <SocialIcons socials={socials} isMobile={true} />
    </>
  );
};

export default memo(OptimizedHome);
