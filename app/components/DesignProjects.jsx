"use client";

import { IoArrowForward } from "react-icons/io5";
import { useRouter } from "next/navigation";
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
      <div className="flex justify-between">
        <div>
          <h2 className="text-5xl font-bold">Design Projects</h2>
          <p className="text-gray-400 mt-4 text-lg max-w-lg">
            Explore some of my featured design projects, showcasing creativity
            and usability across various platforms.
          </p>
        </div>
        {backButton === true && <BackButton onClick={() => router.push('/projects')} />}
      </div>
      <div className="mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {project.map((option, index) => (
            <div
              key={index}
              onClick={() => router.push(option.link)}
              className="hover:cursor-pointer hover:bg-cardHover transition-all duration-300 ease-in-out bg-cardGray p-6 rounded-lg flex flex-col items-start border border-gray-700/30 shadow-lg"
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

export default DesignProjects;
