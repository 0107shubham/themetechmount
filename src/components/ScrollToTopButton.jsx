import React from "react";
import { RiArrowUpSLine } from "react-icons/ri";

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // This makes the scroll smooth
    });
  };

  return (
    <div
      className="fixed right-0 bottom-6 bg-yellow-400 p-2"
      onClick={scrollToTop}
    >
      <RiArrowUpSLine className="text-white text-[30px]" />
    </div>
  );
};

export default ScrollToTopButton;
