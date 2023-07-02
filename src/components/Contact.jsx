import React, { useState, useRef, useEffect } from "react";
import MessageSuccessfulModal from "../components/MessageSuccessfulModal";
import emailjs from "@emailjs/browser";
const emailjsId = import.meta.env.VITE_EMAILJS_ID;
const emailjsTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const emailjsPublicId = import.meta.env.VITE_EMAILJS_PUBLIC_ID;

const Contact = () => {
  const form = useRef();
  const [showBookingModal, setShowBookingModal] = useState(false);

  function capitalizeWords(str) {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }


 const sendEmail = (e) => {
   e.preventDefault();

   let nameField = form.current.elements.user_name;
   nameField.value = capitalizeWords(nameField.value);

   emailjs
     .sendForm(emailjsId, emailjsTemplateId, form.current, emailjsPublicId)
     .then(
       (result) => {
         console.log(result.text);
         form.current.reset();
         setShowBookingModal(true); // Show the modal
       },
       (error) => {
         console.log(error.text);
       }
     );
 };
  useEffect(() => {
    if (showBookingModal) {
      const timer = setTimeout(() => {
        setShowBookingModal(false);
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, [showBookingModal]);

  return (
    <div className="text-mute-beige mx-24 mb-10">
      <div className="flex flex-col justify-between px-24">
        <div className="text-sm mb-10 font-extralight tracking-[0.4em]">
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
          <form ref={form} onSubmit={sendEmail} className="z-50">
            <div className="sm:col-span-2">
              <label
                htmlFor="name"
                className="block text-sm font-normal leading-6 text-mute-beige"
              >
                Name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="user_name"
                  autoComplete="user_name"
                  className="bg-transparent mb-2 w-full rounded-md border-0 px-3.5 py-2 text-mute-beige ring-1 ring-inset ring-mute-beige ring-opacity-10 placeholder:text-mute-beige placeholder:opacity-50 focus:ring-1 focus:ring-opacity-40 focus:ring-inset focus:ring-mute-beige sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm font-normal leading-6 text-mute-beige"
              >
                Email
              </label>
              <div className="mt-2.5">
                <input
                  type="email"
                  name="user_email"
                  autoComplete="user_email"
                  className="bg-transparent mb-2 w-full rounded-md border-0 px-3.5 py-2 text-mute-beige ring-1 ring-inset ring-mute-beige ring-opacity-10 placeholder:text-mute-beige placeholder:opacity-50 focus:ring-1 focus:ring-opacity-40 focus:ring-inset focus:ring-mute-beige sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <label
              htmlFor="message"
              className="block text-sm font-normal leading-6 text-mute-beige"
            >
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                name="message"
                rows={4}
                className="bg-transparent mb-2 w-full rounded-md border-0 px-3.5 py-2 text-mute-beige ring-1 ring-inset ring-mute-beige ring-opacity-10 placeholder:text-mute-beige placeholder:opacity-50 focus:ring-1 focus:ring-opacity-40 focus:ring-inset focus:ring-mute-beige sm:text-sm sm:leading-6"
                defaultValue={""}
              />
            </div>
            <button
              type="submit"
              className="block w-full rounded-md bg-mute-beige px-3.5 py-2.5 text-center bg-opacity-70 text-sm font-semibold text-[#1C1C1C] shadow-sm hover:bg-opacity-100 focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-1 focus-visible:outline-mute-beige"
            >
              Let's talk
            </button>
          </form>
          <MessageSuccessfulModal
            showBookingModal={showBookingModal}
            onClose={() => setShowBookingModal(false)}
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
