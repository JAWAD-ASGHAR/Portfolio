import { CiGlobe } from "react-icons/ci";
import { FaWordpressSimple } from "react-icons/fa";
import { IoArrowBackOutline } from "react-icons/io5";
import { MdArrowOutward, MdOutlineDesignServices } from "react-icons/md";
import { useNavigate } from "react-router";
import Tooltip from "./Tooltip";

const About = () => {
  const navigate = useNavigate();

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
    <div className="min-h-screen bg-black text-white px-8 py-16 md:px-32">
      {/* Section Heading */}
      <div className="mb-12 flex justify-between">
        <div>
          <h2 className="text-5xl font-bold">About Me</h2>
          <p className="text-gray-400 mt-4 text-lg max-w-lg">
            I am a passionate and creative Web Developer with a love for
            beautiful and functional websites. I have experience working with a
            variety of web technologies and frameworks and I am always eager to
            learn new things and take on new challenges.
          </p>
          <button
            onClick={handleResumeClick}
            className="mt-6 text-white bg-gray-800/0 transition-all duration-300 ease-in-out border border-gray-800 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 py-2 px-4 rounded-md flex items-center"
          >
            View Resume{" "}
            <MdArrowOutward className="ml-2" size={20} color="white" />
          </button>
        </div>
        <button
          onClick={() => navigate("/")}
          className="h-16 w-16 justify-center items-center rounded-full bg-gray-600 hover:bg-gray-700 transition-all duration-300 ease-in-out flex"
        >
          <IoArrowBackOutline size={30} color="white" />
        </button>
      </div>
      <div className="space-y-12">
        <div className="flex justify-between border-t border-gray-700 pt-16">
          <Skills backButton={false} />
        </div>
      </div>
    </div>
  );
};

export default About;

const Skills = ({ backButton = true }) => {
  const navigate = useNavigate();

  const skills = [
    {
      title: "Web Development",
      description:
        "Web Development involves creating websites and web applications that are both visually appealing and highly functional. It encompasses a variety of technologies, frameworks, and best practices to ensure a seamless user experience and efficient performance.",
      icon: <CiGlobe size={30} />,
      link: "/web-projects",
    },
    {
      title: "UI/UX Design",
      description:
        "UI/UX Design focuses on creating delightful user experiences through visually appealing and highly functional designs. This skill includes a variety of industry design tools and methods to enhance user satisfaction and usability ensuring sleek and modern practices.",
      icon: <MdOutlineDesignServices size={30} />,
      link: "/design-projects",
    },
    {
      title: "Wordpress Development",
      description:
        "Wordpress Development involves creating custom and optimized websites and applications using the popular Content Management System. This includes custom plugin development, theme development, and website optimization for efficient performance and security.",
      icon: <FaWordpressSimple size={30} />,
      link: "/wordpress-projects",
    },
  ];

  return (
    <div>
      <div className="flex justify-between">
        <div>
          <h2 className="text-5xl font-bold">My Skills</h2>
          <p className="text-gray-400 mt-4 text-lg max-w-lg">
            Here are some of my skills where I've turned knowledge into
            expertise, making things happen.
          </p>
        </div>
        {backButton === true && (
          <button
            onClick={() => navigate("/")}
            className="h-16 w-16 justify-center items-center rounded-full bg-gray-600 hover:bg-gray-700 transition-all duration-300 ease-in-out flex"
          >
            <IoArrowBackOutline size={30} color="white" />
          </button>
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
                    onClick={() => navigate(skill.link)}
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
    </div>
  );
};