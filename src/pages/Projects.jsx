import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const welcomeRef = useRef(null);

  useEffect(() => {
    const welcomeEl = welcomeRef.current;
    const oPos = welcomeEl.getBoundingClientRect();
    const zoomPoint = {
      x: oPos.left + oPos.width / 2,
      y: oPos.top + oPos.height / 2,
    };

    gsap.fromTo(
      welcomeEl,
      {
        scale: 1,
        transformOrigin: `${zoomPoint.x}px ${zoomPoint.y}px`,
      },
      {
        scale: 10,
        transformOrigin: `${zoomPoint.x}px ${zoomPoint.y}px`,
        ease: "none",
        scrollTrigger: {
          trigger: welcomeEl,
          start: "center center",
          end: "bottom top",
          scrub: true,
          markers: true
        },
      }
    );
  }, []);

  return (
    <div style={{ height: "200vh", overflow: "hidden", position: "relative" }}>
      <h1
        ref={welcomeRef}
        style={{
          fontSize: "10vw",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        Welcome
      </h1>
    </div>
  );
};

export default Projects;

// import React from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { gsap } from "gsap";
// import Test from "../components/Test";
// const Projects = () => {
//   //  const { scrollY } = useScroll();
//   //  const scale = useTransform(scrollY, [0, window.innerHeight], [1, 2]);

//   // gsap.to("#second #smallBox", {
//   //   scrollTrigger: {
//   //     trigger: "#second",
//   //     start: "top 50%",
//   //     pin: true,
//   //     scrub: 2
//   //   },
//   //   x: 600
//   // })
//   return (
//     <motion.div
//       initial={{ opacity: 0, scale: 0.9 }}
//       animate={{ opacity: 1, scale: 1 }}
//       exit={{ opacity: 0, scale: 0.9 }}
//       transition={{ duration: 0.5 }}
//     >
//       <Test />
//     </motion.div>
//   );
// };

// export default Projects;

// {
//   /* <div className="main">
//         <div className="section"></div>
//         <div id="second" className="section">
//           <div id="smallBox" style={{scale}}></div>
//         </div>
//         <div className="section"></div>
//       </div> */
// }
