import React from "react";
import Contact from "@/app/components/Contact/Contact";
export const metadata = {
  title: "Contact Me - Contact",
  description:
    "Welcome to my Contact Me page! I appreciate your interest and would love to hear from you. Whether you have a project idea, a collaboration proposal, or simply want to get in touch, this is the place to do it.",
};
const page = () => {
  return (
    <div>
      <Contact />
    </div>
  );
};

export default page;
