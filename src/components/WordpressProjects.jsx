import React, { useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import { useNavigate } from "react-router";
import Tooltip from "./Tooltip";
import BackButton from "./BackButton";

const WordpressProjects = ({ backButton = true }) => {
  const navigate = useNavigate();
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
      title: "Otteri Ai",
      description:
        "An AI-powered Chrome extension plugin landing site with a clean and beautiful design to attract and convert customers.",
      link: "https://otteri.ai/",
      video: "https://ijskvyyvlqmbxhopukvj.supabase.co/storage/v1/object/public/Portfolio%20Videos/Otteri%20Wordpress%20Site.mp4",
      poster: "/Poster Otteri Wordpress.png",
      localVideo: "/Otteri Wordpress Site.mp4"
    },
    {
      title: "Treply So",
      description:
        "An SMS marketing SaaS platform landing site with a clean design to effectively convey a clear message to customers.",
      link: "https://treply.so/",
      video: "https://ijskvyyvlqmbxhopukvj.supabase.co/storage/v1/object/public/Portfolio%20Videos/Treply%20Wordpress%20Site.mp4",
      poster: "/Poster Treply Wordpress.png",
      localVideo: "/Treply Wordpress Site.mp4"
    },
    {
      title: "Nuqsaf Banking",
      description:
        "America's first online Islamic banking landing site, featuring a clean and modern design to showcase the platform's features.",
      link: "https://nuqsaf.com/",
      video: "https://ijskvyyvlqmbxhopukvj.supabase.co/storage/v1/object/public/Portfolio%20Videos/Nuqsaf%20Wordpress%20Site.mp4",
      poster: "/Poster Nuqsaf Wordpress.png",
      localVideo: "/Nuqsaf Wordpress Site.mp4"
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white px-8 py-16 md:px-32">
      <div className="flex justify-between">
        <div>
          <h2 className="text-5xl font-bold">WordPress Projects</h2>
          <p className="text-gray-400 mt-4 text-lg max-w-lg">
            Some of my WordPress projects, with happy clients and successful
            launches.
          </p>
        </div>
        {backButton && <BackButton onClick={() => navigate('/projects')}/>}
      </div>
      <div className="mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-mainGray p-6 rounded-lg flex flex-col items-start"
            >
              <video
                className="w-full h-auto cursor-pointer hover:opacity-80 transition-opacity"
                playsInline
                muted
                loop
                autoPlay
                poster={project.poster}
                type="video/mp4"
                onClick={() => openDialogHandler(project)}
              >
                <source src={project.video}/>
                <source src={project.localVideo}/>
              </video>
              <div className="mb-4 w-full mt-4 flex justify-between">
                <h3 className="text-xl font-semibold my-1">{project.title}</h3>
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
              <p className="text-gray-400 text-sm">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
      {openDialog && selectedProject && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={closeDialogHandler}
        >
          {/* Overlay Content */}
          <div
            className="relative w-[90%] md:w-[600px] rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeDialogHandler}
              className="absolute top-3 right-3 text-white text-2xl hover:text-gray-400 transition-all z-10"
            >
              &times;
            </button>

            {/* Video with Gradient Background */}
            <div
              className="w-full h-auto flex items-center justify-center"
              style={{
                background: "linear-gradient(90deg, #FF7A5C, #FF5CD9, #5372FF)",
              }}
            >
             <video
                className="w-full h-auto"
                playsInline
                controls
                muted
                loop
                autoPlay
                type="video/mp4"
              >
                <source src={selectedProject.video}/>
                <source src={selectedProject.localVideo}/>
              </video>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WordpressProjects;