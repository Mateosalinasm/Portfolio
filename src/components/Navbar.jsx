
import React, {  useEffect } from "react";
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

function Navbar({ navRef}) {
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

export default Navbar
// import { Fragment, useEffect } from "react";
// import { Disclosure,} from "@headlessui/react";
// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
// import { motion } from 'framer-motion'
// import { NavLink } from "react-router-dom";

// const navigation = [
//   { name: "Home", to: "/", current: true },
//   { name: "About", to: "/about", current: false },
//   { name: "Projects", to: "/projects", current: false },
//   { name: "Contact", to: "/contact", current: false },
// ];

// export default function Navbar() {
//   return (
//     <Disclosure as="nav" className="bg-transparent">
//       {({ open }) => (
//         <>
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 4.5, duration: 0.9 }}
//             className="mx-auto px-2 sm:px-2 "
//           >
//             <div className="relative flex h-16 items-center justify-between ">
//               <div className="absolute inset-y-0 z-50 right-0 flex items-center sm:hidden">
//                 {/* Mobile menu button*/}
//                 <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 max-sm:fixed max-sm:right-3 text-mute-beige hover:opacity-80 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-mute-beige">
//                   <span className="sr-only">Open main menu</span>
//                   {open ? (
//                     <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
//                   ) : (
//                     <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
//                   )}
//                 </Disclosure.Button>
//               </div>
//               <div className="flex flex-1 fixed items-center z-50 w-full p-10 sm:items-stretch sm:justify-between">
//                 <div className="flex flex-shrink-0 items-center">
//                   <div className="">
//                     <NavLink
//                       to="/"
//                       className="text-mute-beige text-xl tracking-wide font-light max-sm:text-base max-sm:-left-6 relative"
//                     >
//                       Mateo
//                     </NavLink>
//                   </div>
//                 </div>
//                 <div className="hidden sm:ml-6 sm:block">
//                   <div className="flex space-x-4 z-50">
//                     {navigation.map((item) => (
//                       <NavLink
//                         key={item.name}
//                         to={item.to}
//                         className={({ isActive }) =>
//                           `inline-flex items-center ${
//                             isActive
//                               ? "!text-amber-500"
//                               : " text-mute-beige opacity-30"
//                           } px-1 pt-1 text-lg font-light hover:opacity-100  hover:duration-200 hover:ease-in-out z-50`
//                         }
//                       >
//                         {item.name}
//                       </NavLink>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </motion.div>

//           <Disclosure.Panel className="sm:hidden">
//             <div className="absolute space-y-1 right-0 px-2 pb-3 pt-2 ">
//               {navigation.map((item) => (
//                 <NavLink
//                   key={item.name}
//                   to={item.to}
//                   className={({ isActive }) =>
//                     `items-center ${
//                       isActive
//                         ? "!text-amber-500"
//                         : " text-mute-beige opacity-30 hover:opacity-100"
//                     } block rounded-md px-3 py-2 text-base font-medium`
//                   }
//                 >
//                   {item.name}
//                 </NavLink>
//               ))}
//             </div>
//           </Disclosure.Panel>
//         </>
//       )}
//     </Disclosure>
//   );
// }

//   // aria-current={item.current ? "page" : undefined}
