import { useState } from "react";
import BackButton from "./BackButton";

const DesignUI = ({ backButton = true }) => {

  const [openDialog, setOpenDialog] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openDialogHandler = (project) => {
    setSelectedProject(project);
    setOpenDialog(true);
  };

  const closeDialogHandler = () => {
    setOpenDialog(false);
    setSelectedProject(null);
  };

  const projects = [
    {
      image: "/Fitness White.webp",
    },
    {
      image: "/Beel UI.webp",
    },
    {
      image: "/AI Answer.webp",
    },
    {
      image: "/Otteri Dash.webp",
    },
    {
      image: "/Otteri Ext Dash.webp",
    },
    {
      image: "/Nuqsaf Dash.webp",
    },
    {
      image: "/Treply Campaignn Page.webp",
    },
    {
      image: "/Email Template.webp",
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-black text-white px-8 py-16 md:px-32">
        <div className="flex justify-between">
          <div>
            <h2 className="text-5xl font-bold">UI Design</h2>
            <p className="text-gray-400 mt-4 text-lg max-w-lg">
              A collection of UI designs for various ideas and projects,
              showcasing my skills in creating clean and modern interfaces.
            </p>
          </div>
          {backButton === true && <BackButton />}
        </div>

        <div className="columns-1 mt-12 sm:columns-2 lg:columns-3 gap-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative group mb-4 overflow-hidden rounded-lg shadow-lg break-inside-avoid"
              style={{ pageBreakInside: "avoid" }} // Inline CSS to enhance layout control
            >
              <img
                src={project.image}
                alt={`Project ${index + 1}`}
                className="w-full h-auto object-cover hover:opacity-80 transition-all duration-300 ease-out cursor-pointer" // Ensures images maintain their aspect ratio
                onClick={() => openDialogHandler(project)}
              />
            </div>
          ))}
        </div>
      </div>

      {openDialog && selectedProject && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={closeDialogHandler}
        >
          <div
            className="relative w-[90%] md:w-[600px] rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeDialogHandler}
              className="absolute top-3 right-3 text-black text-2xl hover:text-gray-400 transition-all z-10"
            >
              &times;
            </button>

            <div
              className="w-full h-auto flex items-center justify-center"
              style={{
                background: "linear-gradient(90deg, #FF7A5C, #FF5CD9, #5372FF)",
              }}
            >
              <img
                className="w-full max-h-[80vh] h-auto object-contain"
                src={selectedProject.image}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DesignUI;
