"use client";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { AiOutlinePhone } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { GiWorld } from "react-icons/gi";

export default function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_1w4yi4p",
        "template_0dtw8u6",
        form.current,
        "ORMfpcyEwiZ1F6dH8"
      )
      .then(
        () => {
          alert("Your Message Sended");
        },
        (error) => {
          alert(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <main
      className="min-h-[calc(100vh-10rem)] w-11/12 mx-auto  bg-cover bg-no-repeat bg-center "
      style={{ backgroundImage: "url(space.png)" }}
    >
      <div className="w-full min-h-[calc(100vh-10rem)] mx-auto bg-black/[.63]">
        <h1 className="text-7xl mb-10 max-md:text-4xl text-center">
          Contact Me
        </h1>
        <div className="flex  max-sm:flex-col">
          <div className="w-7/12 max-sm:w-11/12 ">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col items-center"
            >
              <input
                type="text"
                placeholder="Enter Your Name"
                className="transition duration-500 hover:scale-105 bg-black/[.63] w-6/12 max-sm:w-9/12 h-10 border-2 border-slate-400 pl-3 rounded-md"
                name="name"
                required
                minLength="3"
                maxLength="20"
              />
              <input
                type="email"
                placeholder="Enter Your Email"
                className="transition duration-500 ease-in-out hover:scale-105 bg-black/[.63] w-6/12 max-sm:w-9/12 h-10 border-2 border-slate-400 pl-3 mt-3 rounded-md"
                name="email"
                required
                minLength="8"
                maxLength="20"
              />
              <textarea
                id=""
                cols="30"
                rows="10"
                className="transition duration-500 hover:scale-105 bg-black/[.63] w-6/12 max-sm:w-9/12 border-2 border-slate-400 pl-3 mt-3 rounded-md"
                name="message"
                placeholder="Enter Your Message"
                required
                minLength="10"
                maxLength="500"
              ></textarea>
              <input
                type="submit"
                className="transition duration-500 hover:scale-105 mt-10 bg-indigo-900 text-xl  max-md:text-sm py-3 px-5 max-sm:py-1 max-sm:px-3 rounded-3xl "
                value="Send Your Message"
              />
            </form>
          </div>
          <div className="w-4/12 max-sm:w-11/12 max-sm:mt-8">
            <div className="flex flex-col items-center">
              <div className="w-full max-sm:w-9/12 h-28  pt-2 rounded-md bg-black/[.63] border-2 border-slate-400">
                <div className="flex flex-row ml-3 mt-2">
                  <AiOutlinePhone className="text-4xl my-auto max-md:hidden" />
                  <div className="flex flex-col max-sm:pl-0  max-md:pl-2 gap-2 pl-4">
                    <h3 className="text-2xl">Phone</h3>
                    <h4 className="text-slate-500 max-lg:text-sm text-lg">
                      +90 539 668 9348
                    </h4>
                  </div>
                </div>
              </div>
              <div className="w-full max-sm:w-9/12 h-28 bg-black/[.63] mt-8 rounded-md border-2 border-slate-400">
                <div className="flex flex-row ml-3 mt-2">
                  <AiOutlineMail className="text-4xl my-auto max-md:hidden" />
                  <div className="flex flex-col max-sm:pl-0  max-md:pl-2 gap-2 pl-4">
                    <h3 className="text-2xl">Email</h3>
                    <h4 className="text-slate-500 max-lg:text-sm text-lg">
                      barancansng@gmail.com
                    </h4>
                  </div>
                </div>
              </div>
              <div className="w-full max-sm:w-9/12 h-28 pt-2 bg-black/[.63] mt-8 rounded-md border-2 border-slate-400">
                <div className="flex flex-row ml-3 mt-2">
                  <GiWorld className="text-4xl my-auto max-md:hidden" />
                  <div className="flex flex-col max-sm:pl-0  max-md:pl-2 gap-2 pl-4">
                    <h3 className="text-2xl">Address</h3>
                    <h4 className="text-slate-500 max-lg:text-sm text-lg">
                      Ankara/Turkey
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
// <button
//   type="submit"
//   className="mt-10 bg-lime-800  rounded-3xl text-xl py-3 px-5 max-sm:py-1 max-sm:px-3 rounded-3xl text-sm"
// >
//   Send Your Message
// </button>;
