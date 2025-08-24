"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { IoMenu, IoClose } from "react-icons/io5";

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

  return (
    <>
      {/* Mobile Menu Button */}
      <div className="fixed top-5 right-5 md:hidden z-50">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white hover:opacity-80 transition-all duration-300 ease-in-out"
          aria-label="Toggle menu"
        >
          {menuOpen ? <IoClose size={30} /> : <IoMenu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`fixed top-0 right-0 h-screen bg-gray-900/95 w-2/3 z-40 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="flex justify-between items-center p-4">
          <h2 className="text-white text-xl">Menu</h2>
          <button
            onClick={() => setMenuOpen(false)}
            className="text-white hover:opacity-80 transition-all duration-300 ease-in-out"
          >
            <IoClose size={30} />
          </button>
        </div>
        <ul className="flex flex-col items-center justify-center h-full gap-6">
          {pages.map((link) => (
            <li key={link.id}>
              <Link
                href={link.href}
                className="text-white text-xl hover:opacity-80 transition-all duration-300"
                onClick={() => setMenuOpen(false)}
                prefetch={true}
              >
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Desktop Navigation */}
      <div className="fixed top-20 right-12 hidden md:block z-40">
        <ul className="flex flex-col gap-1">
          {pages.map((link) => (
            <li
              className="hover:cursor-pointer text-lg hover:opacity-80 hover:translate-x-1 duration-300 transition-all ease-in-out"
              key={link.id}
            >
              <Link href={link.href} prefetch={true}>
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navigation;
