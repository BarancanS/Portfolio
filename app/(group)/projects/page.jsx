import Link from "next/link";
export const metadata = {
  title: "Projects  Page",
  description: "Projects  Page",
};

export default function Projects() {
  return (
    <main className="min-h-[calc(100vh-10rem)] flex items-center  flex-col">
      <h1 className="text-7xl mb-10 max-md:text-4xl text-center">Projects</h1>
      <section className="display grid grid-cols-3 max-md:grid-cols-1 max-lg:grid-cols-2 gap-7">
        <div
          style={{ backgroundImage: "url(AnkaragucuStore.png)" }}
          className="flex flex-row items-center justify-center bg-cover bg-no-repeat bg-center max-sm:w-60 max-sm:h-40 w-80 h-60 border-2 border-indigo-900  rounded-md hover:scale-110 transition duration-400 ease-in-out"
        >
          <button className="text-orange-700 opacity-0 hover:opacity-100 w-full h-full">
            <Link
              href="/"
              target="_blank"
              className="py-3 px-3 border-2 border-orange-400 rounded-full"
            >
              Live
            </Link>
            <Link
              href="/"
              target="_blank"
              className="py-3 px-2 border-2 border-orange-400 rounded-full ml-4"
            >
              Code
            </Link>
          </button>
        </div>
        <div
          style={{ backgroundImage: "url(Baranflix.png)" }}
          className="flex flex-row items-center justify-center bg-cover bg-no-repeat bg-center max-sm:w-60 max-sm:h-40 w-80 h-60 border-2 border-indigo-900  rounded-md hover:scale-110 transition duration-400 ease-in-out"
        >
          <button className="text-orange-700 opacity-0 hover:opacity-100 w-full h-full">
            <Link
              href="https://baranflix.vercel.app/"
              target="_blank"
              className="py-3 px-3 border-2 border-orange-400 rounded-full"
            >
              Live
            </Link>
            <Link
              href="https://github.com/BarancanS/Baranflix"
              target="_blank"
              className="py-3 px-2 border-2 border-orange-400 rounded-full ml-4"
            >
              Code
            </Link>
          </button>
        </div>
        <div
          style={{ backgroundImage: "url(UmutCan.png)" }}
          className="flex flex-row items-center justify-center bg-cover bg-no-repeat bg-center max-sm:w-60 max-sm:h-40 w-80 h-60 border-2 border-indigo-900  rounded-md hover:scale-110 transition duration-400 ease-in-out"
        >
          <button className="text-orange-700 opacity-0 hover:opacity-100 w-full h-full">
            <Link
              href="https://umutsng.vercel.app/"
              target="_blank"
              className="py-3 px-3 border-2 border-orange-400 rounded-full"
            >
              Live
            </Link>
            <Link
              href="https://github.com/BarancanS/Umut"
              target="_blank"
              className="py-3 px-2 border-2 border-orange-400 rounded-full ml-4"
            >
              Code
            </Link>
          </button>
        </div>
        <div
          style={{ backgroundImage: "url(BaranPorfolio.png)" }}
          className="flex flex-row items-center justify-center bg-cover bg-no-repeat bg-center max-sm:w-60 max-sm:h-40 w-80 h-60 border-2 border-indigo-900  rounded-md hover:scale-110 transition duration-400 ease-in-out"
        >
          <button className="text-orange-700 opacity-0 hover:opacity-100 w-full h-full">
            <Link
              href="/"
              target="_blank"
              className="py-3 px-3 border-2 border-orange-400 rounded-full"
            >
              Live
            </Link>
            <Link
              href="https://github.com/BarancanS/Portfolio"
              target="_blank"
              className="py-3 px-2 border-2 border-orange-400 rounded-full ml-4"
            >
              Code
            </Link>
          </button>
        </div>
        <div
          style={{ backgroundImage: "url(PizzaRecipes.png)" }}
          className="flex flex-row items-center justify-center bg-cover bg-no-repeat bg-center max-sm:w-60 max-sm:h-40 w-80 h-60 border-2 border-indigo-900  rounded-md hover:scale-110 transition duration-400 ease-in-out"
        >
          <button className="text-orange-700 opacity-0 hover:opacity-100 w-full h-full">
            <Link
              href="/"
              target="_blank"
              className="py-3 px-3 border-2 border-orange-400 rounded-full"
            >
              Live
            </Link>
            <Link
              href="/"
              target="_blank"
              className="py-3 px-2 border-2 border-orange-400 rounded-full ml-4"
            >
              Code
            </Link>
          </button>
        </div>
      </section>
    </main>
  );
}
