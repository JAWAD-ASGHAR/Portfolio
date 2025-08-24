"use client";

import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const SmoothScroll = ({ children }) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 origin-left z-[9999]"
        style={{ scaleX }}
      />
      {children}
    </>
  );
};

export default SmoothScroll;
