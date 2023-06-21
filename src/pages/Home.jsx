import React, { useState, useEffect, useRef } from "react";
import { delay, motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./home.css";

const Home = () => {
  // const [visible, setVisible] = useState(false);
  // const controls = useAnimation();

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           setVisible(true);
  //           observer.unobserve(entry.target);
  //         }
  //       });
  //     },
  //     {
  //       threshold: 0.5,
  //     }
  //   );

  //   if (ref.current) {
  //     observer.observe(ref.current);
  //   }

  //   return () => {
  //     if (ref.current) {
  //       observer.unobserve(ref.current);
  //     }
  //   };
  // }, []);

  // useEffect(() => {
  //   if (visible) {
  //     controls.start("visible");
  //   }
  // }, [controls, visible]);

  // const applyColorToLetters = (text) => {
  //   return text.split("").map((letter, index) => (
  //     <motion.span
  //       key={index}
  //       initial={{ color: "hsl(0, 0%, 100%)" }}
  //       animate={controls}
  //       variants={{
  //         visible: {
  //           color: "hsl(195, 100%, 70%)",
  //           transition: { delay: index * 0.05, duration: 0.5 },
  //         },
  //       }}
  //     >
  //       {letter}
  //     </motion.span>
  //   ));
  // };
  const { ref, inView: colorChange, entry } = useInView();

  return (
    <div>
      <div className="flex-col flex justify-center">
        <div className="text-mute-beige tracking-tighter font-bold text-5xl justify-center mt-40 flex flex-col items-center">
          {/* <h1>Frontend Developer</h1> */}
          <motion.h1
            initial={{
              // x: "-10%",
              opacity: 0,
            }}
            animate={{
              // x: 0,
              opacity: 1,
            }}
            transition={{ delay: 1, duration: 0.9 }}
            className="relative -left-50 text-base font-extralight tracking-widest mb-2"
          >
            MATEO SALINAS
          </motion.h1>
          <div>
            <motion.h1
              initial={{
                x: "-10%",
                opacity: 0,
              }}
              animate={{
                x: 0,
                opacity: 1,
              }}
              transition={{ delay: 2, duration: 0.9 }}
              className="max-w-2xl font-extrabold text-8xl leading-24 text-left"
            >
              WHERE
            </motion.h1>

            <motion.h1
              initial={{
                x: "-10%",
                opacity: 0,
              }}
              animate={{
                x: 0,
                opacity: 1,
              }}
              transition={{ delay: 2.7, duration: 0.9 }}
              className="text-amber-500 max-w-2xl font-extrabold text-8xl leading-24 text-left"
            >
              CREATIVITY
            </motion.h1>

            <motion.h1
              initial={{
                x: "-10%",
                opacity: 0,
              }}
              animate={{
                x: 0,
                opacity: 1,
              }}
              transition={{ delay: 3.4, duration: 0.9 }}
              className="max-w-2xl font-extrabold text-8xl leading-24 text-left"
            >
              MEETS CODE
            </motion.h1>
          </div>
          {/* <img
            className="absolute w-screen mt-50 -z-10 bg-cover opacity-20 sepia"
            src="/photos/_MG_7046.jpg"
            alt=""
          /> */}
          {/* <h2 className="text-white opacity-0" ref={ref}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis repellat expedita, ut nisi veritatis reiciendis. Unde vel dicta eaque recusandae omnis eos modi officiis nemo, numquam, aliquam illo consectetur praesentium?</h2> */}
        </div>
      </div>
    </div>
  );
};

export default Home;



  //  <motion.h1
  //           initial={{
  //             // x: "-10%",
  //             opacity: 0,
  //           }}
  //           animate={{
  //             // x: 0,
  //             opacity: 1,
  //           }}
  //           transition={{ delay: 1, duration: 0.9 }}
  //           className="relative -left-50 text-base font-extralight tracking-widest mb-2"
  //         >
  //           MATEO SALINAS
  //         </motion.h1>
  //         <div>
  //           <motion.h1
  //             initial={{
  //               x: "-10%",
  //               opacity: 0,
  //             }}
  //             animate={{
  //               x: 0,
  //               opacity: 1,
  //             }}
  //             transition={{ delay: 2, duration: 0.9 }}
  //             className="max-w-2xl font-extrabold text-8xl leading-24 text-left"
  //           >
  //             WHERE
  //           </motion.h1>

  //           <motion.h1
  //             initial={{
  //               x: "-10%",
  //               opacity: 0,
  //             }}
  //             animate={{
  //               x: 0,
  //               opacity: 1,
  //             }}
  //             transition={{ delay: 2.7, duration: 0.9 }}
  //             className="text-amber-500 max-w-2xl font-extrabold text-8xl leading-24 text-left"
  //           >
  //             CREATIVITY
  //           </motion.h1>

  //           <motion.h1
  //             initial={{
  //               x: "-10%",
  //               opacity: 0,
  //             }}
  //             animate={{
  //               x: 0,
  //               opacity: 1,
  //             }}
  //             transition={{ delay: 3.4, duration: 0.9 }}
  //             className="max-w-2xl font-extrabold text-8xl leading-24 text-left"
  //           >
  //             MEETS CODE
  //           </motion.h1>