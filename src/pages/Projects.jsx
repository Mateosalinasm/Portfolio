import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { gsap } from "gsap";
import Test from "../components/Test";
const Projects = () => {
  //  const { scrollY } = useScroll();
  //  const scale = useTransform(scrollY, [0, window.innerHeight], [1, 2]);

  // gsap.to("#second #smallBox", {
  //   scrollTrigger: {
  //     trigger: "#second",
  //     start: "top 50%",
  //     pin: true,
  //     scrub: 2
  //   },
  //   x: 600
  // })
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5 }}
    >
      <Test />
    </motion.div>
  );
};

export default Projects;

{
  /* <div className="main">
        <div className="section"></div>
        <div id="second" className="section">
          <div id="smallBox" style={{scale}}></div>
        </div>
        <div className="section"></div>
      </div> */
}
