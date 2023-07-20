import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import "./home.css";
import About from "../components/About";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Languages from "../components/Languages";

import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import Projects from "../components/Projects";
import { Link } from "react-router-dom";

const navigation = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

function Navbar({ navRef, navigation }) {
  useEffect(() => {
    if (navRef.current) {
      const navigation = navRef.current;

      const contentSections = Array.from(
        document.getElementsByClassName("content-section")
      );

      const smoothScroll = (target) => {
        window.scrollTo({
          top: target.offsetTop,
          behavior: "smooth",
        });
      };

      const updateNavigation = () => {
        contentSections.forEach((section) => {
          const sectionName = section.id;
          const navigationMatch = navigation.querySelector(
            `a[href="#${sectionName}"]`
          );
          if (navigationMatch) {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const windowHeight = window.innerHeight;
            const scrollTop = window.scrollY;

            if (
              sectionTop - windowHeight / 2 < scrollTop &&
              sectionTop + sectionHeight - windowHeight / 2 > scrollTop
            ) {
              navigationMatch.classList.add("active-section");
            } else {
              navigationMatch.classList.remove("active-section");
            }
          }
        });
      };

      const handleClick = (event) => {
        event.preventDefault();
        const hash = event.target.hash;
        const targetId = hash ? hash.substring(1) : null;
        const target = document.getElementById(targetId);
        if (target) {
          smoothScroll(target);
        }
      };

      navigation.addEventListener("click", handleClick);
      window.addEventListener("scroll", updateNavigation);
      updateNavigation();

      return () => {
        navigation.removeEventListener("click", handleClick);
        window.removeEventListener("scroll", updateNavigation);
      };
    }
  }, [navRef]);
  return (
    <Disclosure as="nav" className="bg-transparent" ref={navRef}>
      {({ open }) => (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4.5, duration: 0.9 }}
            className="mx-auto px-2 sm:px-2"
          >
            <div className="relative flex h-16 items-center ">
              <div className="flex flex-1 fixed items-stretch w-screen justify-between  bg-[#1C1C1C] py-[1.05rem] px-10 bg-opacity-70 max-sm:bg-opacity-0 z-20 sm:items-stretch sm:justify-between">
                <div className="flex flex-shrink-0 items-center ">
                  <div className="">
                    <Link
                      to="#home"
                      className="text-mute-beige text-xl hover:text-mute-beige tracking-wide font-light max-sm:text-base max-sm:-left-8 relative "
                    >
                      Mateo
                    </Link>
                  </div>
                </div>
                <div className="flex relative max-sm:top-[24rem] left ">
                  <div className="flex gap-4 vertical">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={`inline-flex items-center px-1 pt-1 text-lg font-light text-mute-beige hover:opacity-100 hover:duration-200 hover:ease-in-out max-sm:text-sm`}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </Disclosure>
  );
}

const Home = () => {
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
};

export default Home;

// <a
//   key={item.name}
//   href={item.href}
//   className={`items-center ${
//     item.name.toLowerCase() === activeSection
//       ? "active-section"
//       : " text-mute-beige opacity-30"
//   } px-1 -mt-2 text-lg font-light hover:opacity-100 block pr-5 hover:duration-200 hover:ease-in-out`}
// >
//   {item.name}
// </a>;
