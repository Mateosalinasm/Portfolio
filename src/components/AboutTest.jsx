import { Carousel } from 'react-carousel'
import React from 'react'

const AboutTest = () => {
  return (
    <div>
      <Carousel showIndicators={true}>
        <div className="embla__slide rounded-2xl px-2">
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
        </div>{" "}
      </Carousel>
    </div>
  );
}

export default AboutTest
