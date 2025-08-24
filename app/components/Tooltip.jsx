"use client";

import React, { useState } from "react";

const Tooltip = ({ children, text, position = "top" }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseEnter = () => setIsVisible(true);
  const handleMouseLeave = () => setIsVisible(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Wrapped Content */}
      {children}

      {/* Tooltip Text */}
      {isVisible && (
        <div
          className={`absolute whitespace-nowrap bg-gray-800 text-white text-sm px-2 py-1 rounded-md shadow-lg z-10 ${
            position === "top" ? "bottom-full mb-2 left-1/2 -translate-x-1/2" : ""
          } ${
            position === "bottom" ? "top-full mt-2 left-1/2 -translate-x-1/2" : ""
          } ${
            position === "left" ? "right-full mr-2 top-1/2 -translate-y-1/2" : ""
          } ${
            position === "right" ? "left-full ml-2 top-1/2 -translate-y-1/2" : ""
          }`}
        >
          {text}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
