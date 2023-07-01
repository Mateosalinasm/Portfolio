//Zoom
  // const startValue = window.innerHeight > 796 ? "top 6.5%" : "top 7.9%";
  // const yValue = window.innerHeight > 796 ? -500 : -1500;

  // useEffect(() => {
  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: "#hero-text",
  //       start: startValue,
  //       end: "center",
  //       scrub: true,
  //       markers: true,
  //     },
  //   });

  // tl.fromTo(
  //   "#hero-text",
  //   {
  //     opacity: 1,
  //     zIndex: 0, // Add this line
  //   },
  //   {
  //     scale: 100,
  //     x: 24500,
  //     y: yValue,
  //     // opacity: 0,
  //     duration: 30,
  //     ease: "power1.out",
  //   }
  // ).add(() => {
  //   gsap.to("#about", {
  //     opacity: 1,
  //     duration: 3,
  //     zIndex: 1,
  //     scrollTrigger: {
  //       trigger: "#about", // changed trigger from "#hero-text" to "#about"
  //       start: "center center", // delay the start
  //       end: "bottom 20%",
  //       // pin: true,
  //       scrub: true,
  //       markers: {
  //         startColor: "yellow",
  //         endColor: "purple",
  //       },
  //     },
  //   });
  // });
  // }, []);





//const [visible, setVisible] = useState(false);
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

// import React, { useState, useEffect, useRef } from "react";
// import { delay, motion, useAnimation } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import "./home.css";

// const Home = () => {
//   // const { ref, inView: colorChange, entry } = useInView();
//   const [ref, inView] = useInView({
//     threshold: 0.1,
//   });
//   return (
//     <motion.div
//       initial={{ x: 0, opacity: 0, scale: 1 }}
//       animate={{ opacity: 1, scale: 1 }}
//       exit={{ x: "670%", y: "-730%", opacity: 1, scale: 40 }}
//       transition={{ duration: 1, ease: "easeInOut" }}
//     >
//       <div className="flex-col flex justify-center">
//         <div className="text-mute-beige tracking-tighter font-bold text-5xl justify-center mt-40 flex flex-col items-center">
//           {/* <h1>Frontend Developer</h1> */}
//           <motion.h1
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 1, duration: 0.9 }}
//             className="relative -left-52 text-base font-extralight tracking-widest mb-2"
//           >
//             MATEO SALINAS
//           </motion.h1>
//           <div>
//             <motion.h1
//               initial={{ x: "-10%", opacity: 0 }}
//               animate={{ x: 0, opacity: 1 }}
//               transition={{ delay: 2, duration: 0.9 }}
//               className="max-w-2xl font-extrabold text-8xl leading-24 text-left"
//             >
//               WHERE
//             </motion.h1>
//             <div className="creativity-container">
//               <motion.h1
//                 initial={{ x: "-10%", opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 transition={{ delay: 2.7, duration: 0.9 }}
//                 className="text-amber-500 max-w-2xl font-extrabold text-8xl leading-24 text-left"
//               >
//                 CREATIVITY
//               </motion.h1>
//             </div>

//             <motion.h1
//               initial={{ x: "-10%", opacity: 0 }}
//               animate={{
//                 x: 0,
//                 opacity: 1,
//               }}
//               transition={{ delay: 3.4, duration: 0.9 }}
//               className="max-w-2xl font-extrabold text-8xl leading-24 text-left"
//             >
//               MEETS CODE
//             </motion.h1>
//           </div>
//           {/* <img
//             className="absolute w-screen mt-50 -z-10 bg-cover opacity-20 sepia"
//             src="/photos/_MG_7046.jpg"
//             alt=""
//           /> */}
//           {/* <h2 className="text-white opacity-0" ref={ref}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis repellat expedita, ut nisi veritatis reiciendis. Unde vel dicta eaque recusandae omnis eos modi officiis nemo, numquam, aliquam illo consectetur praesentium?</h2> */}
//         </div>
//       </div>
//       <div className="container">

//       </div>
//     <div className="h-screen"></div>
//     <div className="h-screen"></div>
//     <div className="h-screen"></div>
//     </motion.div>
//   );
// };

// export default Home;

// import React, { useEffect, useRef } from "react";
// import { motion } from "framer-motion";
// // import { gsap } from "gsap";
// // import { ScrollTrigger } from "gsap/ScrollTrigger";
// // gsap.registerPlugin(ScrollTrigger);

// import "./home.css";

// const Home = () => {
//   // const creativityRef = useRef(null);

//   //   useEffect(() => {
//   //     const element = creativityRef.current;
//   //     gsap.fromTo(
//   //       element,
//   //       {
//   //         scale: 1,
//   //       },
//   //       {
//   //         scale: 40,
//   //         scrollTrigger: {
//   //           trigger: element,
//   //           start: "top 20%",
//   //           end: "bottom 80%",
//   //           scrub: true,
//   //           markers: true,
//   //         },
//   //       }
//   //     );
//   //   }, []);

//   return (
//     <motion.div
//       initial={{ x: 0, opacity: 0, scale: 1 }}
//       animate={{ opacity: 1, scale: 1 }}
//       exit={{ x: "670%", y: "-730%", opacity: 1, scale: 40 }}
//       transition={{ duration: 1, ease: "easeInOut" }}
//     >
//       <div className="flex-col flex justify-center">
//         <div className="text-mute-beige tracking-tighter font-bold text-5xl justify-center mt-40 flex flex-col items-center">
//           {/* <h1>Frontend Developer</h1> */}
//           <motion.h1
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 1, duration: 0.9 }}
//             className="relative -left-52 text-base font-extralight tracking-widest mb-2"
//           >
//             MATEO SALINAS
//           </motion.h1>
//           <div>
//             <motion.h1
//               initial={{ x: "-10%", opacity: 0 }}
//               animate={{ x: 0, opacity: 1 }}
//               transition={{ delay: 2, duration: 0.9 }}
//               className="max-w-2xl font-extrabold text-8xl leading-24 text-left"
//             >
//               WHERE
//             </motion.h1>
//             <div className="creativity-container">
//               <motion.h1
//                 // ref={creativityRef}
//                 initial={{ x: "-10%", opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 transition={{ delay: 2.7, duration: 0.9 }}
//                 className="text-amber-500 max-w-2xl font-extrabold text-8xl leading-24 text-left"
//               >
//                 CREATIVITY
//               </motion.h1>
//             </div>

//             <motion.h1
//               initial={{ x: "-10%", opacity: 0 }}
//               animate={{
//                 x: 0,
//                 opacity: 1,
//               }}
//               transition={{ delay: 3.4, duration: 0.9 }}
//               className="max-w-2xl font-extrabold text-8xl leading-24 text-left"
//             >
//               MEETS CODE
//             </motion.h1>
//           </div>
//           <div className="panel"></div>
//           <div className="panel"></div>
//           <div className="panel"></div>
//           <div className="panel"></div>
//           {/* <img
//             className="absolute w-screen mt-50 -z-10 bg-cover opacity-20 sepia"
//             src="/photos/_MG_7046.jpg"
//             alt=""
//           /> */}
//           {/* <h2 className="text-white opacity-0" ref={ref}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis repellat expedita, ut nisi veritatis reiciendis. Unde vel dicta eaque recusandae omnis eos modi officiis nemo, numquam, aliquam illo consectetur praesentium?</h2> */}
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default Home;

// const { ref, inView: colorChange, entry } = useInView();
// const [ref, inView] = useInView({
//   threshold: 0.1,
// });

// useEffect(() => {
//   gsap.to("#hero-text", {
//     scale: 10,
//     duration: 8,
//     scrollTrigger: {
//       trigger: "#hero-text",
//       start: "top 6%",
//       end: "bottom ",
//       scrub: true,
//       markers: true,
//     },
//   });
// }, []);
// useEffect(() => {
//   gsap.fromTo(
//     "#hero-image",
//     {
//       scale: 0.1,
//     },
//     {
//       scale: 1, // Target scale value
//       duration: 30, // Duration of the animation
//       scrollTrigger: {
//         trigger: "#hero-image",
//         start: "top center",
//         end: "bottom 100%", // Adjust the end value for a smoother transition
//         scrub: true,
//         markers: true,
//       },
//     }
//   );
// }, []);

// useEffect(() => {
//   gsap.to("#hero-text", {
//     scale: 100,
//     x: 24500,
//     y: yValue,
//     opacity: 0,
//     duration: 30,
//     ease: "power1.out",
//     scrollTrigger: {
//       trigger: "#hero-text",
//       start: startValue,
//       end: "600% bottom", // Increase the end position to make the scroll-triggered animation last longer
//       scrub: true,
//       markers: true,
//     },
//   });
// }, []);

// useEffect(() => {
//   gsap.to('about', {
//     opacity: 1,
//     scrollTrigger: {
//       trigger: 'about',
//       start: 'top center',
//       end: 'bottom 200%',
//       scrub: true,
//       markers: true
//     }
//   })
// }, [])
