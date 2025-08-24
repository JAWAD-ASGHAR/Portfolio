"use client";

import React from "react";
import { IoArrowBackOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import BackButton from "./BackButton";

const Contact = () => {

    const router = useRouter();

  return (
    <div className="min-h-screen bg-black text-white px-8 py-16 md:px-32">
      <motion.div 
        className="flex justify-between"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.h1 
            className="text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Get In Touch
          </motion.h1>
          <motion.p 
            className="text-gray-400 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Have a project in mind or just want to say hello? Feel free to reach
            out!
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <BackButton onClick={() => router.push('/')} />
        </motion.div>
      </motion.div>

      <motion.div 
        className="space-y-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        {/* Email Section */}
        <motion.div 
          className="border-t border-gray-700 pt-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-2xl font-semibold">
            Email
          </h2>
          <p className="text-gray-400 mt-2">Drop me an email anytime.</p>
          <a
            href="mailto:connect.jawadasghar@gmail.com"
            className="text-blue-400 mt-4 inline-block hover:underline"
          >
            connect.jawadasghar@gmail.com
          </a>
        </motion.div>

        {/* Social Links Section */}
        <motion.div 
          className="border-t border-gray-700 pt-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <h2 className="text-2xl font-semibold">
            Social Links
          </h2>
          <p className="text-gray-400 mt-2">
            You can also find me on the following platforms:
          </p>
          <div className="flex flex-col md:flex-row md:gap-6 mt-4">
            <a
              href="https://www.linkedin.com/in/jawad-a-dev/"
              target="_blank"
              rel="noreferrer"
              className="text-blue-400 hover:underline"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/JAWAD-ASGHAR"
              target="_blank"
              rel="noreferrer"
              className="text-blue-400 hover:underline"
            >
              GitHub
            </a>
            <s className="text-blue-400 cursor-not-allowed">
              <div className="text-blue-400">Twitter</div>
            </s>
          </div>
        </motion.div>

        {/* Location Section */}
        <motion.div 
          className="border-t border-gray-700 pt-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h2 className="text-2xl font-semibold">
            Location
          </h2>
          <p className="text-gray-400 mt-2">I'm currently based in:</p>
          <p className="text-white my-2">Karachi, Pakistan</p>
          <a
            href="https://www.google.com/maps/place/Karachi,+Karachi+City,+Sindh/@25.1932024,67.1554619,10z/data=!3m1!4b1!4m6!3m5!1s0x3eb33e06651d4bbf:0x9cf92f44555a0c23!8m2!3d24.8607343!4d67.0011364!16zL20vMDRjam4?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoJLDEwMjExMjM0SAFQAw%3D%3D"
            target="_blank"
            rel="noreferrer"
            className="text-blue-400 hover:underline"
          >
            View
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;
