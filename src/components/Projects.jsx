import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
const Projects = () => {
  const projects = [
    {
      name: "DWELLO",
      src: "/images/projects/Dwello/dwello 1.png",
      description:
        "This travel app was created using the MERN stack and Tailwind. Designed for wanderers seeking something beyond the ordinary, Dwello offers a one-of-a-kind experience in accommodations worldwide. It provides a user-friendly platform were users can book accommodations from a diverse selection of options, including private islands, mountain lofts, treehouses, and more.",
      live: "https://dwello.vercel.app/",
      github: "https://github.com/Mateosalinasm/Dwello-Frontend",
    },
    {
      name: "FITLOGIC",
      src: "/images/projects/Fitlogic/fitlogic-home.png",
      description:
        "This fitness app, developed as a group project using the MERN stack, aims to help users achieve their fitness goals by offering a variety of features like creating customizable workouts and have access to lots of healthy tips for their fitness journey. I was in charge of the UI design and creation of content, while the other two team members handled CRUD operations and backend logic.",
      live: "https://fitlogic.netlify.app/",
      github: "https://github.com/Mateosalinasm/Fitlogic-Frontend",
    },
    {
      name: "LEAFLIST",
      src: "/images/projects/Leaflist/Leaflist Demo Image.png",
      description:
        "I developed a comprehensive full-stack web application with the purpose of assisting users in managing their daily tasks efficiently. Users can create, edit, mark tasks as complete, and delete them. Built with Node.js, Mongoose, Express, Tailwind, and EJS using the MVC structure. Includes task and user models with RESTful routes.",
      live: "/images/projects/Leaflist/compressed leaf again.mp4",
      github: "https://github.com/Mateosalinasm/Fitlogic-Frontend",
    },
    {
      name: "WILD JUNGLE ESCAPE",
      src: "/images/projects/Wild Jungle Escape/Game Image.png",
      description:
        "My first project was this 2D scroll game I created using HTML, Vanilla CSS, and JavaScript. I also learned a little bit of canvas animations to make it more fluid along with some sound effects. I was inspired by the classic Mario-style gameplay. The ultimate goal is to dodge that sneaky enemy mushroom with perfect timing and aim for a high score that'll blow everyone away!",
      live: "/images/projects/Wild Jungle Escape/compressed jungle again.mp4",
      github: "https://github.com/Mateosalinasm/Fitlogic-Frontend",
    },
  ];
//Test
  return (
    <div className="flex justify-center mb-20 ">
      <div className="max-w-6xl z-10 flex flex-col w-[72rem] ml-48 items-center mx-24 max-sm:ml-24">
        <p
          id="about"
          className="text-mute-beige self-start relative text-sm font-extralight tracking-[0.4em] mb-6 max-sm:text-xxs max-sm:left-[3.2rem] max-sm:mb-0"

          // className="text-mute-beige self-start relative text-sm font-extralight tracking-[0.3em] mb-6 max-sm:text-xxs max-sm:mb-1"
        >
          PROJECTS
        </p>
        <div className="font-normal text-mute-beige text-5xl relative selection:leading-16 text-left mb-10">
          <div className="rounded-2xl  w-[65rem] max-sm:w-[26rem]">
            <div className="flex justify-center max-sm:gap-2 -z-10 gap-y-4 max-sm:gap-y-6 flex-wrap">
              <div className="rounded-2xl">
                <Carousel
                  className="w-[53rem] h-[47rem] max-sm:w-[23rem] max-[550px]:w-[19rem] max-sm:h-[38rem]"
                  showThumbs={true}
                  showStatus={false}
                  showArrows={false}
                  emulateTouch={true}
                  showIndicators={true}
                  infiniteLoop={true}
                  centerMode={false}
                  autoPlay={false}
                  interval={6000}
                  transitionTime={400}
                  swipeable={true}
                  stopOnHover={true}
                >
                  {projects.map((project, index) => (
                    <div key={index} className="rounded-2xl">
                      <div className="w-[50rem] mx-5 max-sm:w-[21rem] max-[550px]:w-[17rem] max-sm:pt-6 mb-[4rem] max-sm:mb-[4.5rem]">
                        <img src={project.src} alt="" className="rounded-2xl" />
                        <div className="flex justify-between mt-2 mb-4">
                          <h1 className="text-xl font-bold p-2 relative -left-2 max-sm:-left-0 max-sm:text-sm">
                            {project.name}
                          </h1>
                          <div className="flex">
                            <Link
                              to={project.live}
                              target="_blank"
                              className="text-base py-2"
                            >
                              LIVE
                            </Link>
                            <Link to={project.github} target="_blank">
                              <svg
                                className="h-5 m-2 max-sm:h-5"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                              >
                                <path
                                  fill="#d1c1a7"
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M12 2C6.475 2 2 6.588 2 12.253c0 4.537 2.862 8.369 6.838 9.727.5.09.687-.218.687-.487 0-.243-.013-1.05-.013-1.91C7 20.059 6.35 18.957 6.15 18.38c-.113-.295-.6-1.205-1.025-1.448-.35-.192-.85-.667-.013-.68.788-.012 1.35.744 1.538 1.051.9 1.551 2.338 1.116 2.912.846.088-.666.35-1.115.638-1.371-2.225-.256-4.55-1.14-4.55-5.062 0-1.115.387-2.038 1.025-2.756-.1-.256-.45-1.307.1-2.717 0 0 .837-.269 2.75 1.051.8-.23 1.65-.346 2.5-.346.85 0 1.7.115 2.5.346 1.912-1.333 2.75-1.05 2.75-1.05.55 1.409.2 2.46.1 2.716.637.718 1.025 1.628 1.025 2.756 0 3.934-2.337 4.806-4.562 5.062.362.32.675.936.675 1.897 0 1.371-.013 2.473-.013 2.82 0 .268.188.589.688.486a10.039 10.039 0 0 0 4.932-3.74A10.447 10.447 0 0 0 22 12.253C22 6.588 17.525 2 12 2Z"
                                />
                              </svg>
                            </Link>
                          </div>
                        </div>
                        <div>
                          <p className="text-xl max-sm:text-base text-left leading-8 max-sm:left-2 relative max-sm:leading-7">
                            {project.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
