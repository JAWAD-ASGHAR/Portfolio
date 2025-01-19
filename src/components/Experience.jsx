import { useNavigate } from "react-router";
import BackButton from "./BackButton";

const Experience = () => {

    const navigate = useNavigate();

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
      <div className="mb-12 flex justify-between">
        <div>
          <h2 className="text-5xl font-bold">My Experience</h2>
          <p className="text-gray-400 mt-4 text-lg max-w-lg">
            Here are some of my work experiences where I've turned challenges
            into accomplishments, making things happen.
          </p>
        </div>
        <BackButton onClick={() => navigate('/')} />
      </div>

      {/* Experience List */}
      <div className="space-y-12">
        {experiences.map((item, index) => (
          <div
            key={index}
            className="flex justify-between border-t border-gray-700 pt-8"
          >
            {/* Left Content */}
            <div>
              <h3 className="text-2xl font-semibold">{item.company}</h3>
              <p className="text-gray-400 mt-2">{item.role}</p>
              <p className="text-gray-300 mt-4 max-w-lg">{item.description}</p>
            </div>

            {/* Duration */}
            <div className="text-gray-400 text-sm">{item.duration}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
