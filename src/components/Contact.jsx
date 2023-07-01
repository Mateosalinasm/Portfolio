import React from "react";

const Contact = () => {
  return (
    <div className="text-mute-beige mx-24 mb-10">
      <div className="flex flex-col justify-between px-24">
        <div className="text-sm mb-5 font-extralight tracking-[0.4em]">
          <h1>CONNECT</h1>
        </div>
        <div className="flex flex-col ">
          {/* <div>
            <div className="flex justify-start">
              <h1 className="text-sm font-extrathin tracking-[0.2em]">EMAIL</h1>
            </div>
            <p className=" text-sm font-extrathin opacity-50">
              mateosalinasm.dev@gmail.com
            </p>
          </div>

          <div>
            <div className="flex justify-start">
              <h1 className="text-sm font-extrathin tracking-[0.2em]">
                LINKEDIN
              </h1>
            </div>
            <p className=" text-sm font-extrathin opacity-50">
              linkedin.com/in/mateosalinasm/
            </p>
          </div>

          <div>
            <div className="flex justify-start">
              <h1 className="text-sm font-extrathin tracking-[0.2em]">
                GITHUB
              </h1>
            </div>
            <p className=" text-sm font-extrathin opacity-50">
              github.com/Mateosalinasm
            </p>
          </div> */}
          {/* <label
            htmlFor="message"
            className="block text-sm font-thin leading-6 text-mute-beige"
          >
            CONTACT ME
          </label> */}
          <div className="mt-2.5">
            <textarea
              name="message"
              id="message"
              rows={4}
              // placeholder="Message"
              className="bg-transparent mb-2 w-full rounded-md border-0 px-3.5 py-2 text-mute-beige ring-1 ring-inset ring-mute-beige ring-opacity-10 placeholder:text-mute-beige placeholder:opacity-50 focus:ring-1 focus:ring-opacity-40 focus:ring-inset focus:ring-mute-beige sm:text-sm sm:leading-6"
              defaultValue={""}
            />
          </div>
          <button
            type="submit"
            className="block w-full rounded-md bg-mute-beige px-3.5 py-2.5 text-center bg-opacity-70 text-sm z-50 font-semibold text-[#1C1C1C] shadow-sm hover:bg-opacity-100 focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-1 focus-visible:outline-mute-beige"
          >
            Let's talk
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
