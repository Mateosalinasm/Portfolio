import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import "./home.css";
import About from "../components/About";
import Skills from "../components/Skills";
import Contact from "../components/Contact";

const Home = () => {
useEffect(() => {

    const tl = gsap.timeline();
  
    tl.fromTo(".name", { opacity: 0 }, { opacity: 1, duration: 2 })
      .fromTo(
        ".where, .creativity, .meets",
        { opacity: 0, x: "-10%" },
        { opacity: 1, x: "0", stagger: 0.7 }
      )
}, []);


  return (
    <div>
      <section id="home" className="h-screen mb-10">
        <div
          id="hero-text"
          className="flex-col flex justify-center -mt-24 h-screen"
        >
          <div className="text-mute-beige tracking-tighter text-5xl justify-center flex flex-col items-center px-24 -z-10">
            <div className="max-sm:leading-12">
              <h1 className="relative text-sm font-light tracking-[0.4em] mb-2 name max-sm:text-xxs max-sm:mb-0">
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
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects"></section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
