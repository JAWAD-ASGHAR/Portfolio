"use client";

import React, { useState } from "react";
import { MdArrowOutward, MdClose, MdInfo } from "react-icons/md";
import { useRouter } from "next/navigation";
import Tooltip from "./Tooltip";
import BackButton from "./BackButton";

const WebProjects = ({ backButton = true }) => {
  const router = useRouter();
  const [openVideoDialog, setOpenVideoDialog] = useState(false);
  const [openDetailsDialog, setOpenDetailsDialog] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openVideoDialogHandler = (project) => {
    setSelectedProject(project);
    setOpenVideoDialog(true);
  };

  const closeDialogHandler = () => {
    setOpenVideoDialog(false);
    setOpenDetailsDialog(false);
    setSelectedProject(null);
  };

  const openDetailsDialogHandler = (project) => {
    setSelectedProject(project);
    setOpenDetailsDialog(true);
  };

  const projects = [
    {
      title: "Cloud Box",
      description:
        "A comprehensive full-stack cloud storage solution designed to provide users with a seamless, secure, and responsive file management experience.",
      fullDescription: `Cloud Storage App represents a cutting-edge cloud storage platform built using modern web technologies. By leveraging Next.js, React, and cloud services like Supabase and Firebase, the application delivers a powerful solution for personal and professional file storage needs.
  
  Key Technological Highlights:
  - Frontend Framework: Next.js and React for dynamic, high-performance application
  - Authentication: Secure user login with NextAuth
  - Database & Storage: Integrated Supabase and Firebase for real-time data sync
  - Styling: Responsive design with Tailwind CSS and DaisyUI
  - Date Handling: Precise management using Moment.js
  
  Core Functionalities:
  - Secure user registration and authentication
  - Intuitive file upload, download, and management
  - Real-time data synchronization across devices
  - Responsive design for desktop and mobile platforms`,
      tools:
        "Next.js, React, Supabase, Firebase, Moment.js, Tailwind CSS, DaisyUI",
      link: "https://github.com/JAWAD-ASGHAR/Cloud-Box-Storage",
      video:
        "https://ijskvyyvlqmbxhopukvj.supabase.co/storage/v1/object/public/Portfolio%20Videos/Cloud%20Box%20Project.mp4?t=2024-12-17T12%3A01%3A04.647Z",
      poster: "/Poster Cloudbox Web.png",
      localVideo: "/Cloud Box Project.mp4",
    },
    {
      title: "Tik Talk",
      description:
        "A modern real-time communication platform showcasing advanced full-stack development and real-time messaging capabilities.",
      fullDescription: `Tik Talk is a cutting-edge real-time chat application that demonstrates the power of modern web technologies in creating seamless communication experiences.
  
  Technical Architecture:
  - Frontend: React.js with responsive UI
  - State Management: Zustand for efficient state handling
  - Styling: Tailwind CSS and ShadCN for adaptive design
  - Backend: Node.js with robust API architecture
  - Real-Time Communication: Socket.IO for instant messaging
  - Database: MongoDB for scalable data storage
  
  Key Technical Highlights:
  - Real-time, bidirectional communication with Socket.IO
  - Responsive, mobile-friendly user interface
  - Scalable backend development
  - Elegant state management
  - Secure and interactive communication platform
  
  Core Functionalities:
  - Instant, real-time messaging
  - User authentication and profile management
  - Cross-device responsive design
  - Efficient and smooth state management`,
      tools:
        "React.js, Zustand, Tailwind CSS, ShadCN, Node.js, Socket.IO, MongoDB",
      link: "https://github.com/JAWAD-ASGHAR/Tik-Talk-Chat-App",
      video:
        "https://ijskvyyvlqmbxhopukvj.supabase.co/storage/v1/object/public/Portfolio%20Videos/Tik%20Talk%20Project.mp4",
      poster: "/Poster Tiktalk Web.png",
      localVideo: "/Tik Talk Project.mp4",
    },
    {
      title: "NPM Dummy Dump",
      description:
        "A versatile Node.js utility package for generating comprehensive dummy data, streamlining development and testing processes.",
      fullDescription: `Dummy Dump is a robust Node.js package developed to solve a critical challenge in software development and testing: the need for quick, realistic, and easily generated dummy data.
  
  Technical Overview:
  - Core Technology: Node.js-based utility package
  - Primary Purpose: Automated generation of realistic dummy data
  - Key Features:
    - Multiple data type generators (users, orders, products)
    - Highly customizable and extensible
    - Easy integration with existing Node.js projects
  
  Key Innovations:
  - Flexible system generating complex, contextually appropriate dummy data
  - Modular functions allowing granular or comprehensive data generation
  - Robust data generation logic with multiple customization options
  
  Key Functionalities:
  - Generate complete user profiles with realistic personal information
  - Create mock order and product datasets
  - Provide granular data generation methods
  - Support rapid prototyping and testing scenarios
  
  The package demonstrates advanced JavaScript skills, understanding of data generation strategies, and the ability to create developer-friendly tools that solve real-world programming challenges.`,
      tools: "Node.js, NPM Packaging",
      link: "https://www.npmjs.com/package/dummy-dump",
      video:
        "https://ijskvyyvlqmbxhopukvj.supabase.co/storage/v1/object/public/Portfolio%20Videos/Dummy%20Dump%20Npm.mp4",
      poster: "/Poster Dummy Dump Web.png",
      localVideo: "/Dummy Dump Npm.mp4",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white px-8 py-16 md:px-32">
      <div className="flex justify-between">
        <div>
          <h2 className="text-5xl font-bold">Web Projects</h2>
          <p className="text-gray-400 mt-4 text-lg max-w-lg">
            Explore some of my featured web development projects, where I
            brought ideas to life with code and creativity.
          </p>
        </div>
        {backButton && <BackButton onClick={() => router.push("/projects")} />}
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
                onClick={() => openVideoDialogHandler(project)}
              >
                <source src={project.video}/>
                <source src={project.localVideo} />
              </video>
              <div className="mb-4 w-full mt-4 flex justify-between items-center">
                <h3 className="text-xl font-semibold my-1">{project.title}</h3>
                <div className="flex items-center space-x-2">
                  <Tooltip text="View Details" position="top">
                    <button
                      onClick={() => openDetailsDialogHandler(project)}
                      className="flex items-center justify-center cursor-pointer hover:bg-gray-800 transition-all duration-300 ease-in-out border border-gray-700 rounded-full w-8 h-8"
                    >
                      <MdInfo />
                    </button>
                  </Tooltip>
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
              </div>
              <p className="text-gray-400 text-sm">{project.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Video Dialog */}
      {openVideoDialog && selectedProject && (
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
              className="absolute top-3 right-3 text-white text-2xl hover:text-gray-400 transition-all z-10"
            >
              &times;
            </button>

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
                <source src={selectedProject.localVideo} />
              </video>
            </div>
          </div>
        </div>
      )}

      {/* Details Dialog */}
      {openDetailsDialog && selectedProject && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={closeDialogHandler}
        >
          <div
            className="relative w-[90%] md:w-[800px] max-h-[80vh] bg-mainGray rounded-lg overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-mainGray border-b border-b-gray-800 p-4 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-white">
                {selectedProject.title}
              </h2>
              <div className="flex gap-4">
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center cursor-pointer hover:bg-gray-800 transition-all duration-300 ease-in-out border border-gray-700 rounded-full w-8 h-8"
                >
                  <MdArrowOutward />
                </a>
                <div
                  onClick={closeDialogHandler}
                  className="flex items-center justify-center cursor-pointer hover:bg-gray-800 transition-all duration-300 ease-in-out border border-gray-700 rounded-full w-8 h-8"
                >
                  <MdClose />
                </div>
              </div>
            </div>

            <div className="p-6 overflow-y-auto">
              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-2">Project Overview</h3>
                <p className="text-gray-300">{selectedProject.description}</p>
              </div>

              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-2">
                  Technical Details
                </h3>
                <div className="bg-black/20 p-4 rounded-lg text-gray-300 whitespace-pre-wrap">
                  {selectedProject.fullDescription
                    .split("\n\n")
                    .map((paragraph, index) => (
                      <p key={index} className="mb-2">
                        {paragraph}
                      </p>
                    ))}
                </div>
              </div>

              <div className="mt-4 flex justify-start items-center">
                <span className="text-sm text-gray-400">
                  Tools: {selectedProject.tools}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WebProjects;
