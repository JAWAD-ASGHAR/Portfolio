"use client";

import { CiGlobe } from "react-icons/ci";
import { FaWordpressSimple } from "react-icons/fa";
import { IoArrowBackOutline } from "react-icons/io5";
import { MdArrowOutward, MdOutlineDesignServices } from "react-icons/md";
import { useRouter } from "next/navigation";
import Tooltip from "./Tooltip";
import BackButton from "./BackButton";

const Skills = ({ backButton = true, fullPage = true }) => {
    const router = useRouter();
  
    const skills = [
      {
        title: "Web Development",
        description:
          "Web Development involves creating websites and web applications that are both visually appealing and highly functional. It encompasses a variety of technologies, frameworks, and best practices to ensure a seamless user experience and efficient performance.",
        icon: <CiGlobe size={30} />,
        link: "/projects/web",
      },
      {
        title: "UI/UX Design",
        description:
          "UI/UX Design focuses on creating delightful user experiences through visually appealing and highly functional designs. This skill includes a variety of industry design tools and methods to enhance user satisfaction and usability ensuring sleek and modern practices.",
        icon: <MdOutlineDesignServices size={30} />,
        link: "/projects/design",
      },
      {
        title: "Wordpress Development",
        description:
          "Wordpress Development involves creating custom and optimized websites and applications using the popular Content Management System. This includes custom plugin development, theme development, and website optimization for efficient performance and security.",
        icon: <FaWordpressSimple size={30} />,
        link: "/projects/wordpress",
      },
    ];
  
    const content = (
      <>
        <div className="flex justify-between">
          <div>
            <h2 className="text-5xl font-bold">My Skills</h2>
            <p className="text-gray-400 mt-4 text-lg max-w-lg">
              Here are some of my skills where I&apos;ve turned knowledge into
              expertise, making things happen.
            </p>
          </div>
          {backButton === true && (
            <BackButton onClick={() => router.push('/')}/>
          )}
        </div>
        <div className="mt-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-mainGray p-6 rounded-lg flex flex-col items-start"
              >
                <div className="mb-4 w-full flex justify-between">
                  <div>{skill.icon}</div>
                  <Tooltip text="View Projects" position="top">
                    <div
                      onClick={() => router.push(skill.link)}
                      className="flex items-center justify-center cursor-pointer hover:bg-gray-800 transition-all duration-300 ease-in-out border border-gray-700 rounded-full w-8 h-8"
                    >
                      <MdArrowOutward />
                    </div>
                  </Tooltip>
                </div>
  
                <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
  
                <p className="text-gray-400 text-sm">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </>
    );

    if (fullPage) {
      return (
        <div className="min-h-screen bg-black text-white px-8 py-16 md:px-32">
          {content}
        </div>
      );
    }

    return <div className="w-full">{content}</div>;
  };

  export default Skills;