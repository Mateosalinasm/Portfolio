import React, { useEffect, useRef } from "react";
import "./test.css";

const Test = () => {
  const heroRef = useRef(null);
  const heroTitleRef = useRef(null);

  useEffect(() => {
    const threshold = window.innerHeight;

    const handleScroll = () => {
      let scale = 1 + window.scrollY / 25;
      let opacity = 100 - window.scrollY * 1.5;
      if (scale < 20) {
        heroRef.current.style.transform = `scale(${scale})`;
        heroTitleRef.current.style.opacity = opacity * 0.01;
      }

      window.scrollY > threshold
        ? document.body.classList.add("past-threshold")
        : document.body.classList.remove("past-threshold");
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <header ref={heroRef} className="hero" style={{ transform: "scale(1)" }}>
        <div className="hero__top">
          <div className="filler filler-white"></div>
          <div className="hero__illustration">
            <div className="filler filler-white"></div>
            <div className="hero-icon"></div>
            <div className="filler filler-white"></div>
          </div>
          <div className="filler filler-white"></div>
        </div>
        <div className="hero__bottom">
          <h1 ref={heroTitleRef}>The future is here.</h1>
        </div>
      </header>

      <div className="trailer">
        <div className="video-wrapper">
          <div className="video"></div>
        </div>
      </div>

      <main className="content">
        <section className="section">
          {/* <h2>Really</h2> */}
        </section>
        <section className="section">
          {/* <h2>sweet</h2> */}
        </section>
        <section className="section">
          {/* <h2>scroll</h2> */}
        </section>
        <section className="section">
          {/* <h2>effect.</h2>
          <p>Inspired by Framer's homepage.</p> */}
        </section>
      </main>
    </div>
  );
};

export default Test;
