import React from "react";
import Navigation from "./Navigation";
import { GoArrowUpRight } from "react-icons/go";
const LoadingPage = () => {
  return (
    <div className="w-full h-[100vh] bg-[##8c8b94] ">
      <div className="text-center flex justify-center items-center py-[1.3vw] font-medium bg-gradient-to-r uppercase from-[#9FF0BA] to-purple-600">
        10:00 - 12:00 - THE WORLD OF BLUES - ASTHON PORTER - BANGLADESH{" "}
        <GoArrowUpRight className="mx-[1vw] text-[2vw]" />
      </div>
      <div className="bg-[#464349]">
        <Navigation />
      </div>
    </div>
  );
};

export default LoadingPage;
