"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import SplitText from "gsap-trial/SplitText";

export default function About() {
  useEffect(() => {
    gsap.registerPlugin(SplitText);
    let mySplitText = new SplitText(".split", { type: "chars" });
    let chars = mySplitText.chars;
    gsap.from(chars, {
      yPercent: -50,
      xPercent: -50,
      // stagger: 0.02,
      ease: "back.out",
      duration: 2,
    });
  });
  return (
    <main className="min-h-[calc(100vh-10rem)] flex items-center justify-center gap-10 px-5 max-lg:flex-col">
      <div className="w-6/12 mx-auto max-lg:w-11/12  max-sm:mt-12">
        <h1 className="w-full mx-auto max-lg:w-11/12 sm:text-2xl lg:text-4xl split font-semibold  text-indigo-600">
          About Me
        </h1>
        <p className="w-full mx-auto  max-lg:w-11/12 max-md:text-xs lg:text-xl mt-3 split">
          I am a Frontend developer who uses React, NextJs and NodeJs preferably
          in my projects with 1+ years experience. I am a dedicated adaptable
          Software Developer who is an enthusiastic learner of new technologies.
          Looking for a challenging working environment where I can develop
          myself and contribute to both individual and team projects.
          <br />
          <br />
        </p>
        <div className="w-full mx-auto  max-lg:w-11/12 max-md:text-xs lg:text-xl mt-3 split">
          <h2>Skillset:</h2>
          <ul>
            <li>- ES6 | TypeScript</li>
            <li>- NodeJS | NestJS</li>
            <li>- React | NestJS</li>
            <li>
              - HTML5 | CSS3 | SCSS | Bootstrap | TailwindCSS | Styled
              Components | Material-UI
            </li>
          </ul>
          <p>
            I’ve used these tools/technologies while working on my projects:
            Git, Github, ESLint, Prettier, Yarn, Npm, and much more.
          </p>
        </div>
      </div>
      <div className="w-3/12 mx-auto max-lg:w-5/12 max-sm:hidden">
        <Image
          src="/baran.png"
          width={500}
          height={500}
          alt="about-image"
          className="w-full  mx-auto  max-sm:w-7/12 animate-movey transition duration-500 ease-in-out"
        />
      </div>
    </main>
  );
}
