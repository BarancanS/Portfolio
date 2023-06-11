"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const currentPage = usePathname();
  const [hamburger, setHamburger] = React.useState(false);

  const style1 =
    currentPage === "/about"
      ? "hover:text-white text-orange-700 transition duration-500 ease-in-out"
      : "hover:text-indigo-300 transition duration-500 ease-in-out";
  const style2 =
    currentPage === "/projects"
      ? "hover:text-white text-orange-700 transition duration-500 ease-in-out"
      : "hover:text-indigo-300 transition duration-500 ease-in-out";
  const style3 =
    currentPage === "/contact"
      ? "hover:text-white text-orange-700 transition duration-500 ease-in-out"
      : "hover:text-indigo-300 transition duration-500 ease-in-out";
  return (
    <div className="h-20 relative">
      <div className=" flex items-center justify-between h-20 w-3/4 mx-auto">
        <Link
          href="/"
          className="text-2xl md:text-4xl text-transparent bg-gradient-to-r bg-clip-text from-zinc-100 to-zinc-700"
        >
          BARAN CAN
        </Link>
        <div className="text-4xl md:hidden">
          <GiHamburgerMenu onClick={() => setHamburger(!hamburger)} />
        </div>
        <div className="hidden md:flex space-x-16 text-2xl ">
          <Link href="/about" className={style1}>
            About
          </Link>
          <Link href="/projects" className={style2}>
            Projects
          </Link>
          <Link href="/contact" className={style3}>
            Contact
          </Link>
        </div>
        {hamburger && (
          <div className="flex justify-between  absolute top-0 left-0 w-2/4 min-h-[calc(100vh+4rem)]  bg-indigo-950 text-white z-10 md:hidden whitespace-nowrap">
            <div className="max-sm:text-sm text-xl mt-4 ml-4">
              <Link href="/" onClick={() => setHamburger(!hamburger)}>
                Baran
              </Link>
            </div>
            <div className="flex flex-col items-center justify-center max-sm:text-sm text-xl">
              <div>
                <Link
                  href="/about"
                  className={style1}
                  onClick={() => setHamburger(!hamburger)}
                >
                  About
                </Link>
              </div>
              <Link
                href="/projects"
                className={style2}
                onClick={() => setHamburger(!hamburger)}
              >
                Projects
              </Link>
              <Link
                href="/contact"
                className={style3}
                onClick={() => setHamburger(!hamburger)}
              >
                Contact
              </Link>
            </div>
            <div className="mt-5 mr-4">
              <CgClose
                onClick={() => setHamburger(!hamburger)}
                className="text-2xl max-sm:text-sm"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
