import React from "react";
import Image from "next/image";

export const metadata = {
  title: "About Me - Frontend Developer",
  description:
    "Learn about me, a dedicated Frontend Developer with 1+ years of experience using React and Next.js. Explore my skillset and the technologies I use.",
};

export default function About() {
  return (
    <main className="min-h-[calc(100vh-10rem)] flex items-center justify-center gap-10 px-5 max-lg:flex-col">
      <div className="w-6/12 mx-auto max-lg:w-11/12  max-sm:mt-12 slide transition-transform duration-500 ease-in-out">
        <h1 className="w-full mx-auto max-lg:w-11/12 sm:text-2xl lg:text-4xl font-semibold  text-indigo-600">
          About Me
        </h1>
        <p className="w-full mx-auto  max-lg:w-11/12 max-md:text-xs lg:text-xl mt-3">
          I am a Frontend developer who uses React, NextJs preferably in my
          projects with 1+ years experience. I am a dedicated adaptable React
          Developer who is an enthusiastic learner of new technologies. Looking
          for a challenging working environment where I can develop myself and
          contribute to both individual and team projects.
          <br />
          <br />
        </p>
        <div className="w-full mx-auto  max-lg:w-11/12 max-md:text-xs lg:text-xl mt-3">
          <h2>Skillset:</h2>
          <ul>
            <li>- WordPress</li>
            <li>- ES6 | TypeScript</li>
            <li>- React JS | Next JS</li>
            <li>
              - HTML5 | CSS3 | SCSS | Bootstrap | TailwindCSS | Styled
              Components | Material-UI
            </li>
          </ul>
          <p>
            I’ve used these tools/technologies while working on my projects:
            Git, Github, ESLint, Npm, and much more.
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
