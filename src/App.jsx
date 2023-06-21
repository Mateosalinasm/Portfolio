import { useState, useEffect } from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Navbar from './components/Navbar'

import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

let hasLogged = false;

function App() {
   useEffect(() => {
     if (!hasLogged) {
       console.log(
         "%cHi!%c\n\nWelcome to my developer portfolio!\nI'm excited you're here, and I can't wait to hear from you.\nI hope you like it! 🙌🏻",
         "color: #f59e0b; font-size: 20px",
         "color: initial; font-size: 14px"
       );
       hasLogged = true;
     }
   }, []);
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  )
}

export default App
