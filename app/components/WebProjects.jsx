"use client";

import React, { useState } from "react";
import { MdArrowOutward, MdClose, MdInfo } from "react-icons/md";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
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
      title: "Otteri AI",
      description:
        "An all-in-one AI workspace that brings text, image, video, audio, and mind-mapping tools together under one seamless platform.",

      fullDescription: `Otteri.ai is a powerful AI platform designed to centralize the best of modern AI into a single, intuitive workspace. Built with Next.js and React, it enables users to create, explore, and innovate without needing multiple subscriptions or fragmented tools. 
    
    Key Technological Highlights:
    - Frontend Framework: Next.js and React for fast, dynamic user experience
    - Authentication: Secure user login and account management
    - AI Integrations: Access to multiple state-of-the-art AI models (GPT, Claude, LLaMA, image, video, audio, and music generators)
    - Visualization: Interactive mind maps powered by ReactFlow
    - Design: Clean, responsive UI built with Tailwind CSS
    
    Core Functionalities:
    - Chat with multiple AI models in one place
    - Generate and refine text content with advanced prompts
    - Create stunning images, videos, and audio using top AI engines
    - Build and expand mind maps for brainstorming and workflows
    - Summarize and interact with PDFs and other documents
    - Explore a prompt library and build custom AI bots
    - Team collaboration features with enterprise compliance options
    
    Otteri.ai is designed for creators, teams, and businesses who want **one subscription, one workspace, and endless AI possibilities.**`,
      tools:
        "Next.js, TypeScript, React, Supabase, Stripe, Chakra UI, ReactFlow, Tanstack Router, Redux Toolkit",
      link: "https://www.otteri.ai",
      video: "https://www.youtube.com/watch?v=iwfvXQmtdBk",
      poster: "/Otteri App Project.png",
      localVideo: "/Otteri App Project.mp4",
    },
    {
      title: "Treply So",
      description:
        "SMS Marketing and reply assistant using Twilio that helps professionals with campaigns, surveys and automation effortlessly.",

      fullDescription: `Treply is an intelligent communication tool designed to streamline how users respond across email, social platforms, and customer interactions. By combining the power of modern AI models with a simple, responsive interface, Treply ensures that every reply is fast, professional, and context-aware.
    
    Key Technological Highlights:
    - Frontend: React.js with responsive, modern UI
    - Styling: Tailwind CSS for clean, adaptive design
    - AI Integration: Multiple advanced language models for smart, personalized responses
    - Backend: Node.js with secure APIs for reliable request handling
    - State Management: Redux Toolkit for lightweight and efficient state handling
    - Database: MongoDB for scalable storage and user data management
    
    Core Functionalities:
    - Twilio integration for SMS marketing, surveys and automation
    - Tone adjustment (casual, formal, persuasive, etc.)
    - Multi-platform support to manage campaigns in one place
    - Secure authentication and profile management
    - Real-time generation for fast, fluid responses
    - Responsive design for use on any device
    
    Treply is built for creators, professionals, and teams who want to **communicate smarter, save time, and maintain a consistent voice across platforms.**`,
      tools:
        "React, Node.js, Twilio, Javascript, Go Lang, Stripe, Tailwind CSS, Redux Toolkit, Socket.IO, MongoDB",
      link: "https://treply.so/",
      video: "https://www.youtube.com/watch?v=1XgOGaXfMmo",
      poster: "/Treply App Project.png",
      localVideo: "/Treply App Project.mp4",
    },
    {
      title: "Snap Photo",
      description:
        "Transform your selfies into professional grade headshots in minutes with AI, no studio needed. Affordable and accessible for everyone.",

      fullDescription: `Snap.photo is your on-demand AI photography studio—turning ordinary selfies into polished, studio-quality headshots in just a few clicks. Whether for LinkedIn, team branding, or social profiles, get stunning, customizable results without the high cost or hassle of traditional photoshoots.
    
    Key Attraction Highlights:
    - Rapid AI-powered model creation: Upload 5–10 selfies and receive instant feedback while a personalized digital model is generated in 2–3 minutes
    - High-volume output: Generate over 100 professional headshots in varied styles, settings, and outfits
    - Tailored for professionals: Perfectly composed and lit headshots optimized for resumes, social media, and branding
    
    Why Snap.photo Stands Out:
    - Fast, affordable, and accessible—studio-grade results for a fraction of the cost
    - No scheduling, travel, or photographer required
    - Trusted by professionals, executives, teams, and photographers alike
    
    Pricing at a Glance:
    - **Basic – $29**: 290 credits
    - **Professional – $39**: 390 credits (most popular)
    - **Executive – $59**: 590 credits  
    Each image generation costs just 1 credit—with 150 credits allocated for fine-tuning your model
    
    Snap.photo is built for anyone who wants to **elevate their image, boost their presence, and save time—all with AI-powered ease.**`,
      tools:
        "React.js, Tailwind CSS, Node.js, Supabase, Stripe",
      link: "https://snap.photo/",
      video:
        "https://www.youtube.com/watch?v=fXSuZcNBiUQ",
      poster: "/Snap Photo App.png",
      localVideo: "/Snap Photo App.mp4",
    },
    {
      title: "Cloud Box",
      description:
        "A comprehensive cloud storage solution to provide users with a seamless, secure, and responsive file management experience.",
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
    <div className="min-h-screen bg-black text-white px-8 py-16 md:px-32 max-w-[90rem] mx-auto">
      <motion.div
        className="flex justify-between"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.h2
            className="text-5xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Web Projects
          </motion.h2>
          <motion.p
            className="text-gray-400 mt-4 text-lg max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Explore some of my featured web development projects, where I
            brought ideas to life with code and creativity.
          </motion.p>
        </motion.div>
        {backButton && (
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <BackButton onClick={() => router.push("/projects")} />
          </motion.div>
        )}
      </motion.div>
      <motion.div
        className="mt-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              className="bg-cardGray hover:bg-cardHover p-6 rounded-lg flex flex-col items-start border border-gray-700/30 shadow-lg"
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
                <source src={project.video} />
                <source src={project.localVideo} />
              </video>
              <div className="mb-4 w-full mt-4 flex justify-between items-center">
                <h3 className="text-xl font-semibold my-1">{project.title}</h3>
                <div className="flex items-center space-x-3">
                  <Tooltip text="View Details" position="top">
                    <MdInfo
                      onClick={() => openDetailsDialogHandler(project)}
                      size={26}
                      className="cursor-pointer text-gray-400 transition-all duration-300 ease-in-out hover:text-white"
                    />
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
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Video Dialog */}
      <AnimatePresence>
        {openVideoDialog && selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            onClick={closeDialogHandler}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <motion.div
              className="relative w-[90%] md:w-[600px] rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
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
                  background:
                    "linear-gradient(90deg, #FF7A5C, #FF5CD9, #5372FF)",
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
                  <source src={selectedProject.video} />
                  <source src={selectedProject.localVideo} />
                </video>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Details Dialog */}
      <AnimatePresence>
        {openDetailsDialog && selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            onClick={closeDialogHandler}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <motion.div
              className="relative w-[90%] md:w-[800px] max-h-[80vh] bg-cardGray rounded-lg overflow-hidden flex flex-col border border-gray-700/30 shadow-xl"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div className="bg-cardGray border-b border-b-gray-700 p-4 flex justify-between items-center">
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
                  <h3 className="text-xl font-semibold mb-2">
                    Project Overview
                  </h3>
                  <p className="text-gray-300">{selectedProject.description}</p>
                </div>

                <div className="mb-4">
                  <h3 className="text-xl font-semibold mb-2">
                    Technical Details
                  </h3>
                  <div className="bg-cardGray/50 p-4 rounded-lg text-gray-300 whitespace-pre-wrap border border-gray-700/30">
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
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default WebProjects;
