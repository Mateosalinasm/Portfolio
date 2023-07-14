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
import ProjectTest from "../components/projectsTest";
// import { NavLink } from "react-router-dom";

const navigation = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

function Navbar({ navRef, navigation }) {
  // const [isActive, setIsActive] = useState(navigation[0].href);
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
              // if (sectionName === navigationMatch) {
              //   setIsSection4Active(true);
              // } else {
              //   setIsSection4Active(false);
              // }
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
            className="mx-auto px-2 sm:px-2 "
          >
            <div className="relative flex h-16 items-center justify-between ">
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 max-sm:fixed max-sm:right-3 text-mute-beige hover:opacity-80 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-mute-beige">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 fixed items-center w-full bg-[#1C1C1C] top-0 py-4 px-10  bg-opacity-70 z-20  sm:items-stretch sm:justify-between">
                <div className="flex flex-shrink-0 items-center">
                  <div className="">
                    <Link
                      to="#home"
                      className="text-mute-beige text-xl hover:text-mute-beige tracking-wide font-light max-sm:text-base max-sm:-left-6 relative"
                    >
                      Mateo
                    </Link>
                  </div>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={`inline-flex items-center px-1 pt-1 text-lg font-light text-mute-beige"
        hover:opacity-100 hover:duration-200 hover:ease-in-out`}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <Disclosure.Panel className="sm:hidden">
            <div className="absolute space-y-1 right-0 px-2 pb-3 pt-2 ">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`inline-flex items-center
      px-1 pt-1 text-lg font-light text-mute-beige
hover:opacity-100 hover:duration-200 hover:ease-in-out`}
                >
                  <span className="rect nav-style"></span>
                  <span className="circle nav-style"></span>
                  {item.name}
                </a>
              ))}
            </div>
          </Disclosure.Panel>
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
          className="flex-col flex justify-center -mt-24 h-screen"
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
