import React from "react";
import MarqueBoxComponent from "./MarqueBoxComponent";

const Welcome = () => {
  return (
    <div>
      <div className="w-full p-[6vw] grid grid-cols-1 sm:grid-cols-2">
        <img
          className="w-full hover:opacity-75"
          src="https://res.cloudinary.com/drvjsegeb/image/upload/v1717585727/party_ya23ha.jpg"
        />
        <div className="w-full p-[5px] sm:-[1vw] md:p-[3vw] ">
          <div className=" ">
            <p className="text-[8px] sm:text-[14px] md:text-[1.5vw]">
              WELCOME TO PRESENTUP
            </p>
            <p className="text-[12px]  sm:text-[17px]  md:text-[2.5vw] whitespace-normal  font-bold sm:font-bold">
              WITH OUR PASSION KNOWLEDGE CREATIV FLAIR INSPIRATION.
            </p>
            <p className="text-[12px] md:text-[1.2vw]  sm:text-[14px]  mt-[1vw] whitespace-normal text-gray-700">
              We have a huge range of suppliers and contacts in the industry
              that work closely with us to not only ensure you get the wedding
              day.
            </p>
          </div>
          <div className="flex flex-col text-gray-700 text-[12px]  sm:text-[10px]  font-medium mt-[10px] md:text-[1.2vw] sm:my-[.8vw] md:my-[1.2vw]">
            <div className="flex flex-col sm:flex-row">
              <p className="my-[2px]">SUN-THU:3 PM-2AM</p>
              <p className="sm:mx-[1.2vw] my-[2px]">MON-THU:3 PM-2AM</p>
            </div>
            <div className="flex flex-col sm:flex-row ">
              <p className="my-[2px]">SUN-THU:3 PM-2AM</p>
              <p className="sm:mx-[1.2vw] my-[2px]">MON-THU:3 PM-2AM</p>
            </div>
          </div>
          <div>
            <button className="p-[1vw] my-2 text-[14px]  sm:text-[14px] md:text-[16px]  bg-gradient-to-r from-[#9FF0BA] to-[#C3A1F6]">
              More About
            </button>
            <button className="border-black border-[1px]  text-[14px]  sm:text-[14px] md:text-[16px]  p-[1vw] my-2 ml-[4vw]  hover:bg-gradient-to-r from-[#9FF0BA] to-[#C3A1F6]">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
