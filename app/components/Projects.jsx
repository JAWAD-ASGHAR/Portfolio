"use client";

import { CiGlobe } from "react-icons/ci";
import { FaWordpressSimple } from "react-icons/fa";
import { IoArrowForward } from "react-icons/io5";
import { MdOutlineDesignServices } from "react-icons/md";
import { useRouter } from "next/navigation";
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
      <div className="flex justify-between">
        <div>
          <h2 className="text-5xl font-bold">My Projects</h2>
          <p className="text-gray-400 mt-4 text-lg max-w-lg">
            Here are some of my projects where I&apos;ve turned knowledge into
            expertise, making things happen.
          </p>
        </div>
        {backButton === true && (
          <BackButton onClick={() => router.push('/')}/>
        )}
      </div>
      <div className="mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {project.map((option, index) => (
            <div
              key={index}
              onClick={() => router.push(option.link)}
              className="hover:cursor-pointer hover:bg-mainGray/80 transition-all duration-300 ease-in-out bg-mainGray p-6 rounded-lg flex flex-col items-start"
            >
              <div className="mb-4 w-full flex justify-between">
                <div>{option.icon}</div>
                <IoArrowForward />
              </div>

              <h3 className="text-xl font-semibold mb-2">{option.title}</h3>

              <p className="text-gray-400 text-sm">{option.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
