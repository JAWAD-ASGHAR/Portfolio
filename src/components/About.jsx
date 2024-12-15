import { IoArrowBackOutline } from "react-icons/io5";
import { MdArrowOutward } from "react-icons/md";
import { useNavigate } from "react-router";
import Skills from "./Skills";

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
            className="mt-6 text-white bg-gray-800/0 transition-all duration-300 ease-in-out border border-gray-800 hover:bg-gray-800 py-2 px-4 rounded-md flex items-center"
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