import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="h-20 w-3/4 max-sm:gap-2 max-sm:px-2 max-sm:w-5/6 mx-auto flex items-center justify-between text-xs md:text-xl whitespace-nowrap">
      <div className="">@ Made By: Baran</div>
      <div className="flex max-sm:gap-1 gap-3 flex-row">
        <Link target="_blank" href="https://www.instagram.com/barancan.sng/">
          <Image
            src="/instagram.png"
            alt=""
            width={20}
            height={20}
            className="transition duration-400 ease-in-out hover:scale-110 max-sm:w-4 max-sm:h-4 w-8 h-8"
          />
        </Link>
        <Link target="_blank" href="https://www.facebook.com">
          <Image
            src="/facebook.png"
            alt=""
            width={20}
            height={20}
            className="transition duration-400 ease-in-out hover:scale-110 max-sm:w-4 max-sm:h-4 w-8 h-8"
          />
        </Link>
        <Link target="_blank" href="https://www.twitter.com">
          <Image
            src="/twitter.png"
            alt=""
            width={20}
            height={20}
            className="transition duration-400 ease-in-out hover:scale-110 max-sm:w-4 max-sm:h-4 w-8 h-8"
          />
        </Link>
        <Link target="_blank" href="https://www.youtube.com">
          <Image
            src="/youtube.png"
            alt=""
            width={20}
            height={20}
            className="transition duration-400 ease-in-out hover:scale-110 max-sm:w-4 max-sm:h-4 w-8 h-8"
          />
        </Link>
        <Link
          target="_blank"
          href="https://www.linkedin.com/in/baran-can-s%C3%BCnnet%C3%A7io%C4%9Flu-6624201b1/"
        >
          <Image
            src="/linkedin.png"
            alt=""
            width={20}
            height={20}
            className="transition duration-400 ease-in-out hover:scale-110 max-sm:w-4 max-sm:h-4 w-8 h-8"
          />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
