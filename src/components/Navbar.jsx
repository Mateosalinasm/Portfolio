import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { Disclosure } from "@headlessui/react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const navigation = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

function Navbar({ navRef }) {
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
            <div className="relative flex h-16 items-center">
              <div className="fixed max-sm:bg-[#1C1C1C] max-sm:bg-opacity-70 w-screen z-50 h-[2.5rem] top-0 flex items-center">
                <Link
                  to="#home"
                  className="text-mute-beige text-xl hover:text-mute-beige tracking-wide font-light max-sm:text-base hidden relative max-sm:block pl-2"
                >
                  Mateo
                </Link>
              </div>
              <div className="flex flex-1 fixed items-stretch w-screen justify-between bg-[#1C1C1C] py-[1.05rem] px-10 bg-opacity-70 max-sm:bg-opacity-0 z-20 sm:items-stretch sm:justify-between">
                <div className="flex flex-shrink-0 items-center ">
                  <div className="">
                    <Link
                      to="#home"
                      className="text-mute-beige text-xl hover:text-mute-beige tracking-wide font-light max-sm:text-base max-sm:-left-8 relative max-sm:hidden"
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

export default Navbar;
