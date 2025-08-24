"use client";

import { CiGlobe } from "react-icons/ci";
import { FaWordpressSimple } from "react-icons/fa";
import { IoArrowForward } from "react-icons/io5";
import { MdOutlineDesignServices } from "react-icons/md";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import BackButton from "./BackButton";

const Projects = ({ backButton = true }) => {
  const router = useRouter();

  const project = [
    {
      title: "Web Development",
      description:
        "A collection of web development projects that showcase my skills and experience.",
      icon: <CiGlobe size={30} />,
      link: "/projects/web",
    },
    {
      title: "Design",
      description:
        "A collection of design projects that showcase my skills and experience.",
      icon: <MdOutlineDesignServices size={30} />,
      link: "/projects/design",
    },
    {
      title: "Wordpress Development",
      description:
        "A collection of Wordpress development projects that showcase my skills and experience.",
      icon: <FaWordpressSimple size={30} />,
      link: "/projects/wordpress",
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
            My Projects
          </motion.h2>
          <motion.p 
            className="text-gray-400 mt-4 text-lg max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Here are some of my projects where I&apos;ve turned knowledge into
            expertise, making things happen.
          </motion.p>
        </motion.div>
        {backButton === true && (
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <BackButton onClick={() => router.push('/')}/>
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

export default Projects;
