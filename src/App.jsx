
import "./App.css";
let hasLogged = false;
import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Languages from "./components/Languages";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";


function App({navigation}) {
  useEffect(() => {
    if (!hasLogged) {
      console.log(
        "%c\nHey!%c\n\nWelcome to my developer portfolio.\n\nI'm delighted that you've taken the time to visit and I'm eagerly looking forward to hearing from you.\n\nThank you for stopping by, and I hope you enjoy exploring my work! 🙌🏻\n\nMateo\n",
        "color: #f59e0b; font-size: 20px",
        "color: initial; font-size: 14px"
      );
      hasLogged = true;
    }
  }, []);
  const navRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(".name", { opacity: 0 }, { opacity: 1, duration: 2 }).fromTo(
      ".where, .creativity, .meets",
      { opacity: 0, x: "-10%" },
      { opacity: 1, x: "0", stagger: 0.7 }
    );
  }, []);

  return (
    <div>
      <Navbar navRef={navRef} navigation={navigation} />
      <section id="home" className=" h-screen  content-section">
        <div
          id="hero-text"
          className="flex-col flex justify-center -mt-24 h-screen "
        >
          <div className="text-mute-beige tracking-tighter text-5xl justify-center flex flex-col items-center px-24 -z-10">
            <div className="max-sm:leading-12">
              <h1 className="relative text-sm font-light tracking-[0.4em] mb-2 name max-sm:text-xxs max-md:text-xxs max-sm:mb-0">
                MATEO SALINAS
              </h1>
              <div>
                <h1 className="max-w-2xl font-normal text-8xl leading-24 text-left where max-sm:text-[2.9rem] max-sm:leading-1 max-sm:-mt-0">
                  WHERE
                </h1>
                <div>
                  <h1 className="text-amber-500 font-normal max-w-2xl text-8xl leading-24 text-left creativity max-sm:leading-1 max-sm:text-[2.9rem] max-sm:mb-[10rem]">
                    CREATIVITY
                  </h1>
                </div>

                <h1 className="max-w-2xl font-normal text-8xl leading-24 text-left meets max-sm:text-[2.9rem] max-sm:leading-1 max-sm:-mt-0">
                  MEETS CODE
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="about" className=" pt-60 content-section">
        <About />
      </section>
      <section id="skills" className=" pt-60 content-section">
        <Skills />
        <Languages />
      </section>
      <section id="projects" className=" pt-[3.8rem] content-section">
        <Projects />
        {/* <ProjectTest/> */}
      </section>
      <section id="contact" className=" pt-60 content-section">
        <Contact />
      </section>
    </div>
  );
}

export default App;
