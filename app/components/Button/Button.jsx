import React from "react";
import Link from "next/link";
const Button = () => {
  return (
    <div>
      <Link
        target="_blank"
        href="https://drive.google.com/file/d/1YvVPp3vanwy_r-TgxLQIwolk48L36rGG/view"
      >
        <button className="transition duration-400 ease-in-out hover:scale-105 mt-10 bg-indigo-900 py-3 px-5 rounded-3xl text-xl max-sm:py-1 px-3 rounded-3xl text-sm">
          Detail
        </button>
      </Link>
    </div>
  );
};

export default Button;
