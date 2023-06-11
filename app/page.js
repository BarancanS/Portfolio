import Button from "./components/Button/Button";
export let metadata = {
  title: "Home Page",
  description: "Trying SEO",
};
export default function Home() {
  return (
    <main className="min-h-[calc(100vh-10rem)] flex items-center justify-center max-sm:flex-col">
      <div className="w-6/12 max-sm:w-9/12 ">
        <h1 className="text-4xl max-sm:text-xl font-semibold">
          Front-End React Developer
        </h1>
        <p className="mt-4 max-sm:text-xs max-md:text-lg lg:text-xl">
          Hi, I'm Baran Can Sünnetçioğlu. A passionate Front-end React Developer
          based in Ankara, Turkey. I've worked on a variety of projects over the
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
      <div
        style={{ backgroundImage: "url(baran.png)" }}
        className="  w-5/12 h-96 bg-contain bg-no-repeat bg-center max-sm:w-9/12 max-sm:h-52 animate-movey transition duration-500 ease-in-out"
      ></div>
    </main>
  );
}
