import React from "react";

import Navigation from "./Navigation";
const Home = () => {
  return (
    <div className="w-full  bg-cover bg-[url('https://res.cloudinary.com/drvjsegeb/image/upload/v1717399420/slider_h7kdml.jpg')]">
      {/* Content goes here */}
      <Navigation />
      <div className="flex justify-center items-center  w-full h-full">
        <div className="text-white flex flex-col bold  leading-none">
          <p className="text-[8vw] leading-none">
            BUILD YOUR 🥳 <br />{" "}
          </p>
          <div>
            <p></p>
            <p className="text-[8vw]">
              <span className="text-[#9BF9B3]  leading-none">EVENTS</span> THE{" "}
            </p>
          </div>
          <div className="flex items-center">
            <p className="text-[8vw]  leading-none">EASY WAY</p>
            <button className="text-white border-2 h-fit mx-[2vw]  border-white hover:bg-purple-200">
              Buy Tickets
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
