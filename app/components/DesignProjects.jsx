"use client";

import { IoArrowForward } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import BackButton from "./BackButton";
import { TbBrand4Chan } from "react-icons/tb";
import { DiIllustrator } from "react-icons/di";
import { BsWindowFullscreen } from "react-icons/bs";

const DesignProjects = ({ backButton = true }) => {
  const router = useRouter();

  const project = [
    {
      title: "Branding Logos",
      description:
        "A collection of branding logos designed to elevate brand identity and capture audience attention.",
      icon: <TbBrand4Chan size={30} />,
      link: "/projects/design/logos",
    },
    {
      title: "Illustrations",
      description:
        "Creative illustrations that bring concepts to life through artistic expression and visual storytelling.",
      icon: <DiIllustrator size={30} />,
      link: "/projects/design/illustrations",
    },
    {
      title: "UI Design",
      description:
        "Innovative UI designs focused on enhancing user experience and creating intuitive digital interfaces.",
      icon: <BsWindowFullscreen size={30} />,
      link: "/projects/design/ui",
    },
  ];

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
          <motion.h2 
            className="text-5xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Design Projects
          </motion.h2>
          <motion.p 
            className="text-gray-400 mt-4 text-lg max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Explore some of my featured design projects, showcasing creativity
            and usability across various platforms.
          </motion.p>
        </motion.div>
        {backButton === true && (
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <BackButton onClick={() => router.push('/projects')} />
          </motion.div>
        )}
      </motion.div>
      <motion.div 
        className="mt-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {project.map((option, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              onClick={() => router.push(option.link)}
              className="hover:cursor-pointer hover:bg-cardHover bg-cardGray p-6 rounded-lg flex flex-col items-start border border-gray-700/30 shadow-lg"
            >
              <div className="mb-4 w-full flex justify-between">
                <div>{option.icon}</div>
                <IoArrowForward />
              </div>

              <h3 className="text-xl font-semibold mb-2">{option.title}</h3>

              <p className="text-gray-400 text-sm">{option.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default DesignProjects;
