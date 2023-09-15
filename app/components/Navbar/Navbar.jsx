"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [hamburger, setHamburger] = React.useState(false);
  const pathName = usePathname();

  return (
    <div className="h-20 relative">
      <div className=" flex items-center justify-between h-20 w-3/4 mx-auto">
        <Link
          href="/"
          className={
            pathName === "/"
              ? "text-2xl md:text-4xl hover:border-b-2  text-transparent bg-gradient-to-r bg-clip-text from-indigo-700 to-white transition duration-500 ease-in-out"
              : "text-2xl md:text-4xl hover:border-b-2 hover:text-indigo-300 text-transparent bg-gradient-to-r bg-clip-text from-zinc-100 to-zinc-700 transition duration-500 ease-in-out"
          }
        >
          BARAN CAN
        </Link>
        <div className="text-4xl md:hidden">
          <GiHamburgerMenu onClick={() => setHamburger(!hamburger)} />
        </div>
        <div className="hidden md:flex space-x-16 text-2xl ">
          <Link
            href="/about"
            className={
              pathName === "/about"
                ? "hover:border-b-2  text-indigo-800 transition duration-500 ease-in-out"
                : "hover:text-indigo-300 hover:border-b-2 transition duration-500 ease-in-out"
            }
          >
            About
          </Link>
          <Link
            href="/projects"
            className={
              pathName === "/projects"
                ? "hover:border-b-2  text-indigo-800 transition duration-500 ease-in-out"
                : "hover:text-indigo-300 hover:border-b-2 transition duration-500 ease-in-out"
            }
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className={
              pathName === "/contact"
                ? "hover:border-b-2  text-indigo-800 transition duration-500 ease-in-out"
                : "hover:text-indigo-300 hover:border-b-2 transition duration-500 ease-in-out"
            }
          >
            Contact
          </Link>
        </div>
        {
          <div
            className={`flex justify-between h-full md:hidden fixed inset-0 bg-indigo-950 text-white whitespace-nowrap max-lg:bg-opacity-100 z-30 py-4 top-0 left-0  ${
              hamburger ? "translate-x-0" : "translate-x-[-100%]"
            } transition-transform duration-500 ease-in-out`}
          >
            <div className="text-3xl mt-4 ml-4">
              <Link
                href="/"
                className={
                  pathName === "/"
                    ? "text-orange-700 transition duration-500 ease-in-out"
                    : "hover:text-indigo-300 transition duration-500 ease-in-out"
                }
                onClick={() => setHamburger(!hamburger)}
              >
                Baran
              </Link>
            </div>
            <div className="flex flex-col items-center justify-center max-sm:text-sm text-xl">
              <div>
                <Link
                  href="/about"
                  className={
                    pathName === "/about"
                      ? "text-orange-700 transition duration-500 ease-in-out"
                      : "hover:text-indigo-300 transition duration-500 ease-in-out"
                  }
                  onClick={() => setHamburger(!hamburger)}
                >
                  About
                </Link>
              </div>
              <Link
                href="/projects"
                className={
                  pathName === "/projects"
                    ? "text-orange-700 transition duration-500 ease-in-out"
                    : "hover:text-indigo-300 transition duration-500 ease-in-out"
                }
                onClick={() => setHamburger(!hamburger)}
              >
                Projects
              </Link>
              <Link
                href="/contact"
                className={
                  pathName === "/contact"
                    ? "text-orange-700 transition duration-500 ease-in-out"
                    : "hover:text-indigo-300 transition duration-500 ease-in-out"
                }
                onClick={() => setHamburger(!hamburger)}
              >
                Contact
              </Link>
            </div>
            <div className="mt-5 mr-4">
              <CgClose
                onClick={() => setHamburger(!hamburger)}
                className="text-3xl"
              />
            </div>
          </div>
        }
      </div>
    </div>
  );
};

export default Navbar;
