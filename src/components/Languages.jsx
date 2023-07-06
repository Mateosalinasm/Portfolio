import React from "react";
import "./languages.css";
import { StarIcon, EllipsisHorizontalIcon } from "@heroicons/react/20/solid";
const Languages = () => {
  // const languageElements = document.querySelectorAll(
  //   ".spanish, .portuguese, .russian"
  // );
  // const spotlight = document.createElement("div");
  // spotlight.classList.add("spotlight");

  // document.addEventListener("mousemove", (e) => {
  //   spotlight.style.left = `${e.clientX}px`;
  //   spotlight.style.top = `${e.clientY}px`;
  // });

  // languageElements.forEach((languageElement) => {
  //   languageElement.addEventListener("mouseenter", () => {
  //     spotlight.textContent = languageElement.dataset.english;
  //     spotlight.classList.add("active");
  //   });

  //   languageElement.addEventListener("mouseleave", () => {
  //     spotlight.classList.remove("active");
  //   });
  // });

  // document.body.appendChild(spotlight);

  return (
    <div className="flex justify-center mb-20">
      <div className="max-w-6xl flex flex-col w-[72rem] justify-start ml-48  mx-24 max-sm:ml-24">
        <p
          id="about"
          className="text-mute-beige relative text-sm font-extralight tracking-[0.3em] mb-6 max-sm:text-xxs max-sm:mb-1"
        >
          LANGUAGES
        </p>
        <div className="font-normal text-mute-beige text-5xl relative selection:leading-16 text-left mb-10">
          <div className="flex gap-x-40 max-sm:gap-2 max-sm:gap-y-6 flex-wrap">
            <div className="language-wrapper md:mb-10 sm:mb-10 max-sm:-mb-5">
              <div className="spanish text-completed w-54 wrapper -mb-4 max-sm:text-2xl "></div>
              <div className="text-xs tracking-[0.2em]">FLUENT</div>
              <div className="star-wrapper flex flex-row">
                <StarIcon className="h-4" />
                <StarIcon className="h-4" />
                <StarIcon className="h-4" />
                <StarIcon className="h-4" />
                <StarIcon className="h-4" />
              </div>
            </div>
            <div className="language-wrapper md:mb-10 sm:mb-10 max-sm:-mb-5">
              <div className="portuguese text-completed -mb-4 w-78 max-sm:text-2xl "></div>
              <div className="text-xs tracking-[0.2em] max-sm:text-xxs">
                ADVANCED
              </div>
              <div className="star-wrapper flex flex-row">
                <StarIcon className="h-4" />
                <StarIcon className="h-4" />
                <StarIcon className="h-4" />
                <StarIcon className="h-4" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#1C1C1C"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-[1.1rem] "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  />
                </svg>
              </div>
            </div>
            <div className="language-wrapper ">
              <div className="russian text-completed -mb-4 w-60 max-sm:text-2xl "></div>
              <div className="text-xs tracking-[0.2em]">BEGINNER</div>
              <div className="star-wrapper flex flex-row">
                <StarIcon className="h-4" />
                <StarIcon className="h-4" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#1C1C1C"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-[1.1rem] "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#1C1C1C"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-[1.1rem] "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#1C1C1C"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-[1.1rem] "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Languages;
