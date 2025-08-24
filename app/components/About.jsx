"use client";

import { IoArrowBackOutline } from "react-icons/io5";
import { MdArrowOutward } from "react-icons/md";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Skills from "./Skills";
import BackButton from "./BackButton";

const About = () => {
  const router = useRouter();

  const handleResumeClick = () => {
    window.open("/resume.pdf", "_blank");
  };

  const Abouts = [
    {
      company: "Nexobe",
      role: "Software Developer",
      duration: "Sep 2024 - Present",
      description:
        "Developing SaaS tools focused on building scalable, efficient applications that deliver seamless user Abouts across our AI product suite.",
    },
    {
      company: "Gridship",
      role: "Software Engineer",
      duration: "Dec 2023 - Oct 2024",
      description:
        "Built scalable features for SMS marketing SaaS platform covering campaigns, surveys, automations, and integrations.. Collaborated across teams to deliver a seamless, engaging user About.",
    },
    {
      company: "Freelance",
      role: "Graphic Designer",
      duration: "Apr 2023 - Dec 2023",
      description:
        "Creating impactful designs, memorable logos, and clean, user-friendly web interfaces. Combining creativity with strategic design to help clients build visually engaging online Abouts.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white px-8 py-16 md:px-32 max-w-[90rem] mx-auto">
      {/* Section Heading */}
      <motion.div 
        className="mb-12 flex justify-between"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.h2 
            className="text-5xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            About Me
          </motion.h2>
          <motion.p 
            className="text-gray-400 mt-4 text-lg max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            I am a passionate and creative Web Developer with a love for
            beautiful and functional websites. I have experience working with a
            variety of web technologies and frameworks and I am always eager to
            learn new things and take on new challenges.
          </motion.p>
          <motion.button
            onClick={handleResumeClick}
            className="mt-6 text-white bg-gray-800/0 border border-gray-800 hover:bg-gray-800 py-2 px-4 rounded-md flex items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Resume{" "}
            <MdArrowOutward className="ml-2" size={20} color="white" />
          </motion.button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <BackButton onClick={() => router.push('/')}/>
        </motion.div>
      </motion.div>
      <motion.div 
        className="space-y-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <div className="border-t border-gray-700 pt-16">
          <Skills backButton={false} fullPage={false} />
        </div>
      </motion.div>
    </div>
  );
};

export default About;