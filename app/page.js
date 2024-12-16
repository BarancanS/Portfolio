"use client";
import Button from "./components/Button/Button";
import Typed from "typed.js";
import Image from "next/image";
import { useEffect } from "react";
export default function Home() {
  useEffect(() => {
    const typed = new Typed(".typedJs", {
      strings: [
        "React Developer",
        "Designer",
        "Wordpress Developer",
        "Computer Programmer",
      ],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    });
  });
  return (
    <main className="min-h-[calc(100vh-10rem)] flex items-center justify-center max-sm:flex-col">
      <div className="w-4/12 max-md:w-8/12 max-lg:w-8/12 md:p-4 max-sm:w-11/12">
        <h1 className="text-4xl max-sm:text-xl font-semibold text-indigo-700">
          I'am a <span className="text-white typedJs"></span>
        </h1>
        <p className="mt-4 max-sm:text-xs max-md:text-lg lg:text-xl">
          Hi, I'm Baran Can Sünnetçioğlu. A passionate Front-end React Developer
          based in Melbourne, Australia. I've worked on a variety of projects over the
          one year and I'm proud of the progress I've made. Many of these
          projects are open-source and available for others to explore and
          contribute to. If you're interested in any of the projects I've worked
          on, please feel free to check out the code and suggest any
          improvements or enhancements you might have in mind. Collaborating
          with others is a great way to learn and grow, and I'm always open to
          new ideas and feedback.
        </p>
        <Button />
      </div>
      <Image
        src="/headerImage.png"
        width={500}
        height={500}
        alt=""
        className="w-5/12 h-96 object-contain object-no-repeat object-center max-sm:w-9/12 max-sm:h-52 animate-movey transition duration-500 ease-in-out"
      ></Image>
    </main>
  );
}
