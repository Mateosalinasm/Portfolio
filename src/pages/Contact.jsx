import { React, useEffect } from "react";
import { motion } from "framer-motion";
import { gsap} from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import './contact.css'
const Contact = () => {

useEffect(() => {
  const text = document.querySelector(".text-to-animate");
  const chars = text.textContent.split("");
  text.textContent = "";

  chars.forEach((char) => {
    const span = document.createElement("span");
    span.textContent = char;
    text.appendChild(span);
  });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".text-to-animate",
      start: "top 80%",
      end: 'bottom 40%',
      scrub: true,
      markers: true,
    },
  });

  // Animate each character's color change
  gsap.utils.toArray(".text-to-animate span").forEach((char, i) => {
    tl.to(
      char,
      {
        color: "yellow",
        duration: 0.4,
        ease: "none",
      },
      i * 0.1
    );
  });

  // gsap.to(".square", {
  // x: 1000,
  // duration: 8,
  // scrollTrigger: {
  //   trigger: ".square",
  //   start: "top 80%", 
  //   end: 'top 30%',
  //   scrub: 2,
  //   pin: '.square',
  //   pinSpacing: true,
  //   markers: {
  //     startColor: 'yellow',
  //     endColor:'red',
  //     fontSize: '2rem',
  //     indent: 100
  //   },
  //   toggleActions: 'restart none none none',
                //  play pause, reverse, resume, restart, reset, complete, none
                //  onEnter, OnLeave, onEnterBack, onLeaveBack
    // toggleClass: 'purple'// Adjust the start position as needed
    // Add more ScrollTrigger properties if needed
  // },
// });

}, []);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5 }}
    >
      {/* <div className="transition-container"> */}
      {/* <div className="transition-content"> */}
      <div>
        <div className="panel"></div>
        <div className="box"></div>
        <div className="panel"></div>
        <p className="text-to-animate">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae esse
          dolorem minima nulla illum molestias. Vitae numquam cupiditate tempora
          exercitationem dolore beatae culpa ab, maxime distinctio, itaque dicta
          aspernatur sapiente.
        </p>
      
        <div className="panel"></div>
        <div className="panel"></div>
        <div className="panel"></div>
        <div className="panel"></div>
        <div className="panel"></div>

        {/* <div className="div1"></div>
            <div className="div2">
              <div className="square"></div>
              <div className="square2"></div>
            </div> */}
        {/* <img
              src="/photos/mateo-gray-with-bg.jpg"
              alt=""
            /> */}
      </div>
      {/* </div> */}
      {/* </div> */}
    </motion.div>
  );
};

export default Contact;



  // ScrollTrigger.create({
  //   trigger: '.box',
  //   start: 'top 80%',
  //   end: 'top 50%',
  //   markers: true,
  //   toggleClass: 'box-red'
  // })
  // const tl = gsap.timeline({
  //   scrollTrigger: {
  //   trigger: '.box',
  //   markers: true,
  //   start: 'top 80%',
  //   end: 'top 30%',
  //   scrub: 1
  //   }
  // });

  // tl.to('.box', {x: 500, duration: 2})
  // .to('.box', {y:200, duration: 3})
  // .to('.box', {x:0, duration: 2})
  // gsap.to('.box', {
  //   x:500,
  //   duration: 2,
  // })
  // gsap.to('.box', {y:200, duration: 3, delay: 2})
  // gsap.to('.box', {x:0, duration: 2, delay: 5})
// gsap.to(".square", {
  // x: 1000,
  // duration: 8,
  // scrollTrigger: {
  //   trigger: ".square",
  //   start: "top 80%", 
  //   end: 'top 30%',
  //   scrub: 2,
  //   pin: '.square',
  //   pinSpacing: true,
  //   markers: {
  //     startColor: 'yellow',
  //     endColor:'red',
  //     fontSize: '2rem',
  //     indent: 100
  //   },
  //   toggleActions: 'restart none none none',
    //              play pause, reverse, resume, restart, reset, complete, none
    //              onEnter, OnLeave, onEnterBack, onLeaveBack
    //toggleClass: 'purple'// Adjust the start position as needed
    // Add more ScrollTrigger properties if needed
//   },
// });


  // gsap.utils.toArray('span').forEach((span) => {
  //   ScrollTrigger.create({
  //     trigger: span,
  //     start: 'top center',
  //     toggleClass: 'active',
  //     // onEnter: () => span.classList.add('active'),
  //     markers: true,
  //     scrub: true
  //   })
  // })