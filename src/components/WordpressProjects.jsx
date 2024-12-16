import { IoArrowBackOutline } from "react-icons/io5";
import { MdArrowOutward } from "react-icons/md";
import { useNavigate } from "react-router";
import Tooltip from "./Tooltip";

const WordpressProjects = ({ backButton = true }) => {
  const navigate = useNavigate();

  const projects = [
    {
      title: "Corporate Website",
      description:
        "Developed a custom WordPress website for a corporate client with dynamic content and advanced SEO optimization.",
      tools: "WordPress, Elementor, Yoast SEO",
      link: "https://wordpress.example.com/corporate",
    },
    {
      title: "Blog Platform",
      description:
        "Built a modern blog platform with a custom theme and features like social sharing and comments.",
      tools: "WordPress, Gutenberg, Custom PHP",
      link: "https://wordpress.example.com/blog",
    },
    {
      title: "E-commerce Store",
      description:
        "Created an e-commerce website using WooCommerce with custom payment gateway integration.",
      tools: "WordPress, WooCommerce, Advanced Custom Fields",
      link: "https://wordpress.example.com/store",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white px-8 py-16 md:px-32">
      <div className="flex justify-between">
        <div>
          <h2 className="text-5xl font-bold">WordPress Projects</h2>
          <p className="text-gray-400 mt-4 text-lg max-w-lg">
            Discover some of my WordPress projects, from blogs to custom
            e-commerce solutions.
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

export default WordpressProjects;
