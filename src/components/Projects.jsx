import React, { useCallback } from "react";
import { Link } from "react-router-dom";
// import useEmblaCarousel from "embla-carousel-react";
// import {
//   CarouselComponent,
//   CarouselItemsDirective,
//   CarouselItemDirective,
// } from "@syncfusion/ej2-react-navigations";
import { Tab } from "@headlessui/react";

// import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import { Carousel } from "@mantine/carousel";

// const autoplayOptions = {
//   //   delay: 2000,
//   rootNode: (emblaRoot) => emblaRoot.parentElement,
//   stopOnMouseEnter: true,
//   stopOnInteraction: false,
// };

const Projects = () => {
  const dwello = [
    {
      src: "public/images/projects/Dwello/dwello 1.png",
    },
    {
      src: "public/images/projects/Dwello/dwello 5.png",
    },
    {
      src: "public/images/projects/Dwello/dwello 2.png",
    },
    {
      src: "public/images/projects/Dwello/dwello 3.png",
    },
    {
      src: "public/images/projects/Dwello/dwello 4.png",
    },
    {
      src: "public/images/projects/Dwello/dwello 6.png",
    },
    {
      src: "public/images/projects/Dwello/dwello 7.png",
    },
  ];

  const fitlogic = [
    {
      src: "public/images/projects/Fitlogioc/fitlogic 1.png",
    },
    {
      src: "public/images/projects/Fitlogioc/fitlogic 2.png",
    },
    {
      src: "public/images/projects/Fitlogioc/fitlogic 3.png",
    },
    {
      src: "public/images/projects/Fitlogioc/fitlogic 4.png",
    },
    {
      src: "public/images/projects/Fitlogioc/fitlogic 5.png",
    },
    {
      src: "public/images/projects/Fitlogioc/fitlogic 6.png",
    },
    {
      src: "public/images/projects/Fitlogioc/fitlogic 7.png",
    },
  ];
  //   const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [
  // Autoplay(autoplayOptions),
  //   ]);

  //   const scrollPrev = useCallback(() => {
  //     if (emblaApi) emblaApi.scrollPrev();
  //   }, [emblaApi]);

  //   const scrollNext = useCallback(() => {
  //     if (emblaApi) emblaApi.scrollNext();
  //   }, [emblaApi]);
  return (
    <div className="flex justify-center mb-20 ">
      <div className="max-w-6xl z-10 flex flex-col w-[72rem] ml-48 items-center mx-24 max-sm:ml-24">
        <p
          id="about"
          className="text-mute-beige self-start relative text-sm font-extralight tracking-[0.3em] mb-6 max-sm:text-xxs max-sm:mb-1"
        >
          PROJECTS
        </p>
        <div className="font-normal text-mute-beige text-5xl relative selection:leading-16 text-left mb-10">
          <Tab.Group as="div" className="rounded-2xl  w-[65rem]">
            <div className="flex justify-between max-sm:gap-2 -z-10 gap-y-4 max-sm:gap-y-6 flex-wrap">
              <div className="embla rounded-2xl">
                <Tab.List className="grid grid-cols-2 rounded-2xl  gap-x-10 w-full">
                  <div>
                    <div className="flex justify-between">
                      <h1 className="text-base p-2">DWELLO</h1>
                      <div className="flex">
                        <Link
                          to="https://dwello.vercel.app/"
                          target="_blank"
                          className="text-base py-2"
                        >
                          LIVE
                        </Link>
                        <Link
                          to="https://github.com/Mateosalinasm/Dwello-Frontend"
                          target="_blank"
                        >
                          <svg
                            className="h-5 m-2 max-sm:h-7"
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
                    <Carousel
                      withIndicators
                      withControls={false}
                      styles={{
                        indicator: {
                          width: "1rem",
                          height: "1rem",
                          border: "2px solid #d1c1a7",
                          transition: "width 250ms ease",

                          "&[data-active]": {
                            width: "1rem",
                          },
                          control: {
                            opacity: 0,
                          },
                        },
                      }}
                    >
                      {dwello.map((image, index) => (
                        <div
                          key={index}
                          className="rounded-2xl h-[23rem] embla__slide "
                        >
                          <img
                            src={image.src}
                            alt=""
                            className="rounded-2xl h-80"
                          />
                        </div>
                      ))}
                    </Carousel>
                  </div>
                  <div>
                    <div className="flex justify-between">
                      <h1 className="text-base p-2">FITLOGIC</h1>
                      <div className="flex">
                        <Link
                          to="https://dwello.vercel.app/"
                          target="_blank"
                          className="text-base py-2"
                        >
                          LIVE
                        </Link>
                        <Link
                          to="https://github.com/Mateosalinasm/Dwello-Frontend"
                          target="_blank"
                        >
                          <svg
                            className="h-5 m-2 max-sm:h-7"
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
                    <Carousel
                      withIndicators
                      withControls={false}
                      styles={{
                        indicator: {
                          // marginBottom: '18.5rem',
                          width: "1rem",
                          height: "1rem",
                          border: "2px solid #d1c1a7",
                          transition: "width 250ms ease",

                          "&[data-active]": {
                            width: "1rem",
                          },
                          control: {
                            opacity: 0,
                          },
                        },
                      }}
                    >
                      {fitlogic.map((image, index) => (
                        <div
                          key={index}
                          className="rounded-2x h-[23rem] embla__slide "
                        >
                          <img
                            src={image.src}
                            alt=""
                            className="rounded-2xl h-80"
                          />
                        </div>
                      ))}
                    </Carousel>
                  </div>
                  <div>
                    <div className="flex justify-between">
                      <h1 className="text-base p-2">DWELLO</h1>
                      <div className="flex">
                        <Link
                          to="https://dwello.vercel.app/"
                          target="_blank"
                          className="text-base py-2"
                        >
                          LIVE
                        </Link>
                        <Link
                          to="https://github.com/Mateosalinasm/Dwello-Frontend"
                          target="_blank"
                        >
                          <svg
                            className="h-5 m-2 max-sm:h-7"
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
                    <Carousel
                      withIndicators
                      withControls={false}
                      styles={{
                        indicator: {
                          width: "1rem",
                          height: "1rem",
                          border: "2px solid #d1c1a7",
                          transition: "width 250ms ease",

                          "&[data-active]": {
                            width: "1rem",
                          },
                          control: {
                            opacity: 0,
                          },
                        },
                      }}
                    >
                      {dwello.map((image, index) => (
                        <div
                          key={index}
                          className="rounded-2xl h-[23rem] embla__slide "
                        >
                          <img
                            src={image.src}
                            alt=""
                            className="rounded-2xl "
                          />
                        </div>
                      ))}
                    </Carousel>
                  </div>
                  <div>
                    <div className="flex justify-between">
                      <h1 className="text-base p-2">DWELLO</h1>
                      <div className="flex">
                        <Link
                          to="https://dwello.vercel.app/"
                          target="_blank"
                          className="text-base py-2"
                        >
                          LIVE
                        </Link>
                        <Link
                          to="https://github.com/Mateosalinasm/Dwello-Frontend"
                          target="_blank"
                        >
                          <svg
                            className="h-5 m-2 max-sm:h-7"
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
                    <Carousel
                      withIndicators
                      withControls={false}
                      styles={{
                        indicator: {
                          width: "1rem",
                          height: "1rem",
                          border: "2px solid #d1c1a7",
                          transition: "width 250ms ease",

                          "&[data-active]": {
                            width: "1rem",
                          },
                          control: {
                            opacity: 0,
                          },
                        },
                      }}
                    >
                      {dwello.map((image, index) => (
                        <div
                          key={index}
                          className="rounded-2xl h-[23rem] embla__slide "
                        >
                          <img
                            src={image.src}
                            alt=""
                            className="rounded-2xl "
                          />
                        </div>
                      ))}
                    </Carousel>
                  </div>
                </Tab.List>
                {/* <div className="embla__slide rounded-2xl px-2">
                    <img
                      className="object-contain rounded-2xl "
                      src="public/images/projects/Dwello/dwello 1.png"
                      alt=""
                    />
                  </div>
                  <div className="embla__slide px-2">
                    <img
                      className="object-contain rounded-2xl"
                      src="public/images/projects/Dwello/dwello 5.png"
                      alt=""
                    />
                  </div>
                  <div className="embla__slide px-2">
                    <img
                      className="object-contain rounded-2xl"
                      src="public/images/projects/Dwello/dwello 2.png"
                      alt=""
                    />
                  </div>
                  <div className="embla__slide px-2">
                    <img
                      className="object-contain rounded-2xl"
                      src="public/images/projects/Dwello/dwello 3.png"
                      alt=""
                    />
                  </div>
                  <div className="embla__slide px-2">
                    <img
                      className="object-contain rounded-2xl"
                      src="public/images/projects/Dwello/dwello 4.png"
                      alt=""
                    />
                  </div>
                  <div className="embla__slide px-2">
                    <img
                      className="object-contain rounded-2xl"
                      src="public/images/projects/Dwello/dwello 6.png"
                      alt=""
                    />
                  </div>
                  <div className="embla__slide px-2">
                    <img
                      className="object-contain rounded-2xl"
                      src="public/images/projects/Dwello/dwello 7.png"
                      alt=""
                    />
                  </div> */}
              </div>
            </div>
          </Tab.Group>
        </div>
      </div>
    </div>
  );
};

export default Projects;
