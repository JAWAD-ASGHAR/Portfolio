import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./components/Home";
import Experience from "./components/Experience";
import About from "./components/About";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import React from "react";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/skills"
            element={
              <div className="min-h-screen bg-black text-white px-8 py-16 md:px-32">
                <Skills />
              </div>
            }
          />
          <Route
            path="/projects"
            element={
              <div className="min-h-screen bg-black text-white px-8 py-16 md:px-32">
                <Projects />
              </div>
            }
          />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
