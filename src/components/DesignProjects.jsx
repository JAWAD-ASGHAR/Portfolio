import { IoArrowBackOutline } from "react-icons/io5";
import { MdArrowOutward } from "react-icons/md";
import { useNavigate } from "react-router";
import Tooltip from "./Tooltip";
import BackButton from "./BackButton";

const DesignProjects = ({ backButton = true }) => {
  const navigate = useNavigate();

  const projects = [
    {
      title: "Mobile App UI",
      description:
        "Designed a modern and user-friendly interface for a fitness tracking mobile app.",
      tools: "Figma, Adobe XD",
      link: "https://design.example.com/mobile-app",
    },
    {
      title: "Landing Page Design",
      description:
        "Created a sleek and responsive landing page design for a SaaS product.",
      tools: "Sketch, Figma",
      link: "https://design.example.com/landing-page",
    },
    {
      title: "E-commerce UX Redesign",
      description:
        "Revamped the user experience of an e-commerce website, improving navigation and user flow.",
      tools: "Figma, InVision",
      link: "https://design.example.com/ecommerce-ux",
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
        {backButton === true && (
          <BackButton />
        )}
      </div>
      <div className="mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-mainGray p-6 rounded-lg flex flex-col items-start"
            >
              <div className="mb-4 w-full flex justify-between">
                <div className="text-xl font-bold">{project.tools}</div>
                <Tooltip text="View Project" position="top">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center cursor-pointer hover:bg-gray-800 transition-all duration-300 ease-in-out border border-gray-700 rounded-full w-8 h-8"
                  >
                    <MdArrowOutward />
                  </a>
                </Tooltip>
              </div>

              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>

              <p className="text-gray-400 text-sm">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DesignProjects;
