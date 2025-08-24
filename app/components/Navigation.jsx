"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { IoMenu, IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
const pages = [
  { id: 1, href: "/about", text: "About" },
  { id: 2, href: "/projects", text: "Projects" },
  { id: 3, href: "/skills", text: "Skills" },
  { id: 4, href: "/experience", text: "Experience" },
  { id: 5, href: "/contact", text: "Contact" },
];

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Close menu if clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLinkClick = (href) => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <motion.div 
        className="fixed top-5 right-5 md:hidden z-50"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <motion.button
          onClick={() => setMenuOpen(!menuOpen)}
          className="bg-gray-900/80 backdrop-blur-sm text-white hover:bg-gray-800/90 transition-all duration-300 ease-in-out rounded-lg p-2 border border-gray-700/50"
          aria-label="Toggle menu"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <AnimatePresence mode="wait">
            {menuOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <IoClose size={24} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <IoMenu size={24} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            ref={menuRef}
            className="fixed top-0 right-0 h-screen bg-gray-900/95 backdrop-blur-md w-2/3 z-40 md:hidden border-l border-gray-700/50"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
          >
            <motion.div 
              className="flex justify-between items-center p-6 border-b border-gray-700/50 relative z-[9998]"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-white text-xl font-semibold">Menu</h2>
              <button
                onClick={(e) => {
                  console.log('Close button clicked!'); // Debug log
                  e.preventDefault();
                  e.stopPropagation();
                  setMenuOpen(false);
                }}
                className="bg-gray-800/50 text-white hover:bg-gray-700/70 transition-all duration-300 ease-in-out rounded-lg p-2 relative z-[9999] cursor-pointer"
                type="button"
                style={{ pointerEvents: 'auto' }}
              >
                <IoClose size={20} />
              </button>
            </motion.div>
            <motion.ul 
              className="flex flex-col items-center justify-center h-full gap-8 px-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {pages.map((link, index) => (
                <motion.li 
                  key={link.id}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="w-full"
                >
                  <Link
                    href={link.href}
                    className="text-white text-xl hover:text-blue-400 transition-all duration-300 block text-center py-3 px-4 rounded-lg hover:bg-gray-800/50"
                    onClick={() => handleLinkClick(link.href)}
                    prefetch={true}
                  >
                    {link.text}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Navigation */}
      <motion.div 
        className="fixed top-20 right-12 hidden md:block z-40"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <ul className="flex flex-col gap-1">
          {pages.map((link, index) => (
            <motion.li
              key={link.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
            >
              <Link href={link.href} prefetch={true}>
                <motion.div
                  className="hover:cursor-pointer text-white text-lg hover:opacity-80 duration-300 transition-all ease-in-out"
                  whileHover={{ x: 5, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleLinkClick(link.href)}
                >
                  {link.text}
                </motion.div>
              </Link>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </>
  );
};

export default Navigation;
