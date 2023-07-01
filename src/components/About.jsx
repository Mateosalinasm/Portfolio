import { React, useEffect, useLayoutEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import "./about.css";


const About = () => {
  useEffect(() => {
    const text = document.querySelector(".text-to-animate");
    const words = text.textContent.split(" ");
    text.textContent = "";

    words.forEach((word) => {
      const wordSpan = document.createElement("span");
      wordSpan.className =
        word === "frontend" || word === "developer" ? "colored-word" : "";
      const letters = word.split("");
      letters.forEach((letter) => {
        const letterSpan = document.createElement("span");
        letterSpan.textContent = letter;
        wordSpan.appendChild(letterSpan);
      });
      wordSpan.innerHTML += " "; // add back the space after the word
      text.appendChild(wordSpan);
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".text-to-animate",
        start: "top 80%",
        end: "bottom 40%",
        scrub: true,
        // markers: true,
      },
    });

    // Animate text opacity change
    gsap.utils.toArray(".text-to-animate span span").forEach((letter, i) => {
      tl.fromTo(
        letter,
        {
          opacity: 0.2,
          duration: 0.4,
        },
        {
          opacity: 1,
          duration: 0.4,
          ease: "none",
        },
        i * 0.1
      );
    });
  }, []);

  return (
    <div>
      <div className="text-mute-beige tracking-tighter font-normal text-5xl ml-20 h-screen flex content-around flex-col px-24 justify-center items-center">
        <div className="flex flex-col justify-start max-w-6xl">
          <p
            id="about"
            className="relative text-sm font-extralight tracking-[0.4em] mb-2"
          >
            ABOUT ME
          </p>
          <div className="text-6xl max-w-6xl AvantLight leading-16 text-left mb-10 text-to-animate">
            <h1>I'm a passionate </h1>
            <h1 className="text-amber-500">frontend developer</h1>
            <h1>
              {" "}
              dedicated to crafting visually captivating applications that not
              only provide effective solutions but also spark joy and
              inspiration.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
