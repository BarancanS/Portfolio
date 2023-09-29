import Link from "next/link";
export const metadata = {
  title: "Projects Page",
  description:
    "Explore my portfolio of web projects and applications. See live demos and check out the source code on GitHub.",
};

export default function Projects() {
  return (
    <main className="min-h-[calc(100vh-10rem)] flex items-center  flex-col">
      <h1 className="text-7xl mb-10 max-md:text-4xl text-center">Projects</h1>
      <section className="display grid grid-cols-3 max-md:grid-cols-1 max-lg:grid-cols-2 gap-7">
        <div
          style={{ backgroundImage: "url(moviessdb.png)" }}
          className="flex flex-row items-center justify-center bg-cover bg-no-repeat bg-center max-sm:w-60 max-sm:h-40 w-80 h-60 rounded-md hover:scale-110 transition duration-500 ease-in-out"
        >
          <div className="flex flex-row justify-center items-center gap-2 bg-black/[.63] text-black font-semibold opacity-0 hover:opacity-100 w-full h-full transition duration-500 ease-in-out">
            <Link
              href="https://moviessdb.vercel.app/"
              target="_blank"
              className="w-20 h-10 bg-white flex justify-center items-center rounded-full"
            >
              Live
            </Link>
            <Link
              href="https://github.com/BarancanS/moviessdb"
              target="_blank"
              className="w-20 h-10 bg-orange-400 flex justify-center items-center rounded-full"
            >
              Code
            </Link>
          </div>
        </div>
        <div
          style={{ backgroundImage: "url(UmutCan.png)" }}
          className="flex flex-row items-center justify-center bg-cover bg-no-repeat bg-center max-sm:w-60 max-sm:h-40 w-80 h-60 rounded-md hover:scale-110 transition duration-500 ease-in-out"
        >
          <div className="flex flex-row justify-center items-center gap-2 bg-black/[.63] text-black font-semibold opacity-0 hover:opacity-100 w-full h-full transition duration-500 ease-in-out">
            <Link
              href="https://umutsng.vercel.app/"
              target="_blank"
              className="w-20 h-10 bg-white flex justify-center items-center rounded-full"
            >
              Live
            </Link>
            <Link
              href="https://github.com/BarancanS/Umut"
              target="_blank"
              className="w-20 h-10 bg-orange-400 flex justify-center items-center rounded-full"
            >
              Code
            </Link>
          </div>
        </div>
        <div
          style={{ backgroundImage: "url(BaranPorfolio.png)" }}
          className="flex flex-row items-center justify-center bg-cover bg-no-repeat bg-center max-sm:w-60 max-sm:h-40 w-80 h-60 rounded-md hover:scale-110 transition duration-500 ease-in-out"
        >
          <div className="flex flex-row justify-center items-center gap-2 bg-black/[.63] text-black font-semibold opacity-0 hover:opacity-100 w-full h-full transition duration-500 ease-in-out">
            <Link
              href="/"
              target="_blank"
              className="w-20 h-10 bg-white flex justify-center items-center rounded-full"
            >
              Live
            </Link>
            <Link
              href="https://github.com/BarancanS/Portfolio"
              target="_blank"
              className="w-20 h-10 bg-orange-400 flex justify-center items-center rounded-full"
            >
              Code
            </Link>
          </div>
        </div>
        <div
          style={{ backgroundImage: "url(AnkaragucuStore.png)" }}
          className="flex flex-row items-center justify-center bg-cover bg-no-repeat bg-center max-sm:w-60 max-sm:h-40 w-80 h-60 rounded-md hover:scale-110 transition duration-500 ease-in-out"
        >
          <div className="flex flex-row justify-center items-center gap-2 bg-black/[.63] text-black font-semibold opacity-0 hover:opacity-100 w-full h-full transition duration-500 ease-in-out">
            <Link
              href="/"
              target="_blank"
              className="w-20 h-10 bg-white flex justify-center items-center rounded-full"
            >
              Live
            </Link>
            <Link
              href="/"
              target="_blank"
              className="w-20 h-10 bg-orange-400 flex justify-center items-center rounded-full"
            >
              Code
            </Link>
          </div>
        </div>
        <div
          style={{ backgroundImage: "url(PizzaRecipes.png)" }}
          className="flex flex-row items-center justify-center bg-cover bg-no-repeat bg-center max-sm:w-60 max-sm:h-40 w-80 h-60 rounded-md hover:scale-110 transition duration-500 ease-in-out"
        >
          <div className="flex flex-row justify-center items-center gap-2 bg-black/[.63] text-black font-semibold opacity-0 hover:opacity-100 w-full h-full transition duration-500 ease-in-out">
            <Link
              href="/"
              target="_blank"
              className="w-20 h-10 bg-white flex justify-center items-center rounded-full"
            >
              Live
            </Link>
            <Link
              href="/"
              target="_blank"
              className="w-20 h-10 bg-orange-400 flex justify-center items-center rounded-full"
            >
              Code
            </Link>
          </div>
        </div>
        <div
          style={{ backgroundImage: "url(cryptotracker.png)" }}
          className="flex flex-row items-center justify-center bg-cover bg-no-repeat bg-center max-sm:w-60 max-sm:h-40 w-80 h-60 rounded-md hover:scale-110 transition duration-500 ease-in-out"
        >
          <div className="flex flex-row justify-center items-center gap-2 bg-black/[.63] text-black font-semibold opacity-0 hover:opacity-100 w-full h-full transition duration-500 ease-in-out">
            <Link
              href="https://cryptotracker-zeta.vercel.app/"
              target="_blank"
              className="w-20 h-10 bg-white flex justify-center items-center rounded-full"
            >
              Live
            </Link>
            <Link
              href="/"
              target="_blank"
              className="w-20 h-10 bg-orange-400 flex justify-center items-center rounded-full"
            >
              Code
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
