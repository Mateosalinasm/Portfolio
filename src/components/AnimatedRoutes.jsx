import React from "react";

import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects"
import Contact from "../pages/Contact"
import Navbar from "./Navbar";
import SocialLinks from "./SocialLinks";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Navbar />
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <SocialLinks key={null} />
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
