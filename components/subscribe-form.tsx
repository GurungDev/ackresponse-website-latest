"use client";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { BsArrowRightShort } from "react-icons/bs";
import Contact_Us_Section from "./insight/contact_us";

export default function SubForm() {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div className=" ">
        <button
          type="button"
          onClick={openModal}
          className={`px-5 py-2 m-auto  items-center  duration-300  btn    w-[60vw] transform-all flex md:w-[30vw] justify-between bg-accent text-text border-[1px]      rounded-md `}
        >
          {" "}
          <span className="group small">
            Subscribe if you want to stay up-to-date
          </span>
          <BsArrowRightShort className="text-[1.5em]    duration-300 " />
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-[999]" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto ">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-[95%] md:w-[60%]  z-[999] transform overflow-hidden rounded-2xl bg-white    shadow-xl transition-all">
                  <Contact_Us_Section />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
