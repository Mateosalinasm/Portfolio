import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/24/outline";

export default function MessageSuccessfulModal({ showBookingModal, onClose }) {
  return (
    <Transition.Root show={showBookingModal} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 max-sm:flex max-sm:justify-center  overflow-y-auto">
          <div className="flex min-h-full items-end justify-center max-sm:content-center max-sm:flex-wrap p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-[#1C1C1C] bg-opacity-70 border border-mute-beige px-4  py-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                <div>
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-mute-beige">
                    <CheckIcon
                      className="h-6 w-6 text-[#1C1C1C]"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="mt-3 text-center sm:mt-5">
                    <Dialog.Title
                      as="h3"
                      className="text-xl font-extralight leading-6 pb-2 text-mute-beige"
                    >
                      Message Sent!
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-beige">
                        Thank you for your message, I'll get in touch with you
                        soon
                      </p>
                    </div>
                  </div>
                </div>
                {/* <div className="mt-5 sm:mt-6">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-mute-beige bg-opacity-60 hover:bg-opacity-100 px-3 py-2 text-sm font-normal text-[#1C1C1C] shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
                    onClick={onClose}
                  >
                    Back
                  </button>
                </div> */}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
