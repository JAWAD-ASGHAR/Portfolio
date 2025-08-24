"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import BackButton from "./BackButton";

const Experience = () => {

    const router = useRouter();

  const experiences = [
    {
      company: "Nexobe",
      role: "Software Developer",
      duration: "Sep 2024 - Present",
      description:
        "Developing SaaS tools focused on building scalable, efficient applications that deliver seamless user experiences across our AI product suite.",
    },
    {
      company: "Gridship",
      role: "Software Engineer",
      duration: "Dec 2023 - Oct 2024",
      description:
        "Built scalable features for SMS marketing SaaS platform covering campaigns, surveys, automations, and integrations.. Collaborated across teams to deliver a seamless, engaging user experience.",
    },
    {
      company: "Freelance",
      role: "Graphic Designer",
      duration: "Apr 2023 - Dec 2023",
      description:
        "Creating impactful designs, memorable logos, and clean, user-friendly web interfaces. Combining creativity with strategic design to help clients build visually engaging online experiences.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white px-8 py-16 md:px-32">
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
            My Experience
          </motion.h2>
          <motion.p 
            className="text-gray-400 mt-4 text-lg max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Here are some of my work experiences where I&apos;ve turned challenges
            into accomplishments, making things happen.
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

      {/* Experience List */}
      <motion.div 
        className="space-y-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        {experiences.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30, x: -20 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
            className="flex justify-between border-t border-gray-700 pt-8"
          >
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
            >
              <h3 className="text-2xl font-semibold">
                {item.company}
              </h3>
              <p className="text-gray-400 mt-2">{item.role}</p>
              <p className="text-gray-300 mt-4 max-w-lg">{item.description}</p>
            </motion.div>

            {/* Duration */}
            <motion.div 
              className="text-gray-400 text-sm"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
            >
              {item.duration}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Experience;
