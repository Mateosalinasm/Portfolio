import { Fragment, useEffect } from "react";
import { Disclosure,} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { motion } from 'framer-motion'
import { NavLink } from "react-router-dom";

const navigation = [
  { name: "Home", to: "/", current: true },
  { name: "About", to: "/about", current: false },
  { name: "Projects", to: "/projects", current: false },
  { name: "Contact", to: "/contact", current: false },
];

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-transparent">
      {({ open }) => (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4.5, duration: 0.9 }}
            className="mx-auto px-2 sm:px-2 "
          >
            <div className="relative flex h-16 items-center justify-between ">
              <div className="absolute inset-y-0 z-10 right-0 flex items-center sm:hidden">
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
              <div className="flex flex-1 fixed items-center w-full p-10 sm:items-stretch sm:justify-between">
                <div className="flex flex-shrink-0 items-center">
                  <div className="">
                    <NavLink
                      to="/"
                      className="text-mute-beige text-xl tracking-wide font-light max-sm:text-base max-sm:-left-6 relative"
                    >
                      Mateo
                    </NavLink>
                  </div>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.to}
                        className={({ isActive }) =>
                          `inline-flex items-center ${
                            isActive
                              ? "!text-amber-500"
                              : " text-mute-beige opacity-30"
                          } px-1 pt-1 text-lg font-light hover:opacity-100  hover:duration-200 hover:ease-in-out`
                        }
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <Disclosure.Panel className="sm:hidden">
            <div className="absolute space-y-1 right-0 px-2 pb-3 pt-2 ">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.to}
                  className={({ isActive }) =>
                    `items-center ${
                      isActive
                        ? "!text-amber-500"
                        : " text-mute-beige opacity-30 hover:opacity-100"
                    } block rounded-md px-3 py-2 text-base font-medium`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}


  // aria-current={item.current ? "page" : undefined}