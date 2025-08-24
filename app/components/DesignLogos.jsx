"use client";

import { useState, useEffect } from "react";
import BackButton from "./BackButton";
import { useRouter } from "next/navigation";

const DesignLogos = ({ backButton = true }) => {
  const [allImagesLoaded, setAllImagesLoaded] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const router = useRouter();

  const projects = [
    { image: "/titus logo final.webp" },
    { image: "/Nexobe Logo.webp" },
    { image: "/titus logo orange.webp" },
    { image: "/Otteri Logo.webp" },
    { image: "/titus logo T.webp" },
    { image: "/Beel Logo.webp" },
    { image: "/Snap Photo Logo.webp" },
    { image: "/Bee Logo.webp" },
    { image: "/Nuqsaf Logo.webp" },
    { image: "/Treply Logo.webp" },
    { image: "/Zengrow Logo.webp" },
  ];

  useEffect(() => {
    const imagePromises = projects.map(
      (project) =>
        new Promise((resolve) => {
          const img = new Image();
          img.src = project.image;
          img.onload = resolve;
          img.onerror = resolve; // Resolve even if an image fails to load
        })
    );

    Promise.all(imagePromises).then(() => setAllImagesLoaded(true));
  }, [projects]);

  const openDialogHandler = (project) => {
    setSelectedProject(project);
    setOpenDialog(true);
  };

  const closeDialogHandler = () => {
    setOpenDialog(false);
    setSelectedProject(null);
  };

  return (
    <>
      <div className="min-h-screen bg-black text-white px-8 py-16 md:px-32">
        <div className="flex justify-between">
          <div>
            <h2 className="text-5xl font-bold">Branding Logos</h2>
            <p className="text-gray-400 mt-4 text-lg max-w-lg">
              A collection of branding logos designed to elevate brand identity
              and capture audience attention.
            </p>
          </div>
          {backButton === true && (
            <BackButton onClick={() => router.push("/projects/design")} />
          )}
        </div>

        <div className="columns-1 mt-12 sm:columns-2 lg:columns-3 gap-4">
          {!allImagesLoaded ? (
            // Skeleton loader
            <div className="space-y-4">
              {projects.map((_, index) => (
                <div
                  key={index}
                  className="w-full h-48 bg-gray-800 animate-pulse rounded-lg"
                ></div>
              ))}
            </div>
          ) : (
            // Display images once loaded
            projects.map((project, index) => (
              <div
                key={index}
                className="relative  hover:opacity-85 transition-all ease-in-out duration-300 group mb-4 overflow-hidden rounded-lg shadow-lg break-inside-avoid"
                style={{
                  pageBreakInside: "avoid",
                }}
              >
                <img
                  src={project.image}
                  loading="lazy"
                  alt={`Project ${index + 1}`}
                  className="w-full cursor-pointer h-auto object-cover object-center transition-opacity duration-700 ease-in-out opacity-0"
                  style={{ animation: "fadeIn 0.7s forwards" }}
                  onClick={() => openDialogHandler(project)}
                />
              </div>
            ))
          )}
        </div>
      </div>

      {/* Modal for viewing selected image */}
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
              className="absolute top-3 right-3 text-gray-600 text-2xl hover:text-gray-400 transition-all z-10"
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
                alt="Selected Project"
              />
            </div>
          </div>
        </div>
      )}

      <style>
        {`
        @keyframes fadeIn {
          to {
            opacity: 1;
          }
        }
      `}
      </style>
    </>
  );
};

export default DesignLogos;
