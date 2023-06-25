import React from "react";
import { delay, motion } from "framer-motion";
import AboutTest from "../components/AboutTest";

const About = () => {
  const transitionVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        delay: 1,
        duration: 1.5,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <motion.div
      variants={transitionVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 1 }}
    >
      <img
        className="absolute w-128 left-1/3 top-52 rounded-full opacity-60 grayscale"
        src="/photos/_MG_7046.jpg"
        alt=""
      />
      {/* <h2 className="text-white opacity-0" ref={ref}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis repellat expedita, ut nisi veritatis reiciendis. Unde vel dicta eaque recusandae omnis eos modi officiis nemo, numquam, aliquam illo consectetur praesentium?</h2> */}
    </motion.div>
  );
};

export default About;

// x: "200%", y: "-140%",
