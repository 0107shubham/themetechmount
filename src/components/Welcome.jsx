import React from "react";
import MarqueBoxComponent from "./MarqueBoxComponent";

const Welcome = () => {
  return (
    <div>
      <div className="w-full p-[6vw] flex ">
        <img
          className="w-[50%] hover:opacity-75"
          src="https://res.cloudinary.com/drvjsegeb/image/upload/v1717585727/party_ya23ha.jpg"
        />
        <div className="w-[50%] p-[3vw] ">
          <div className=" ">
            <p className="text-[1vw]">WELCOME TO PRESENTUP</p>
            <p className="text-[2.5vw] font-semibold">
              WITH OUR PASSION KNOWLEDGE CREATIV FLAIR INSPIRATION.
            </p>
            <p className="text-[1vw] text-gray-700">
              We have a huge range of suppliers and contacts in the industry
              that work closely with us to not only ensure you get the wedding
              day.
            </p>
          </div>
          <div className="flex flex-col">
            <div className="flex">
              <p className="">SUN-THU:3 PM-2AM</p>
              <p className="mx-[1vw]">SUN-THU:3 PM-2AM</p>
            </div>
            <div className="flex ">
              <p className="">SUN-THU:3 PM-2AM</p>
              <p className="mx-[1vw]">SUN-THU:3 PM-2AM</p>
            </div>
          </div>
          <div>
            <button className="text-[1.2vw] p-[.5vw] my-2  bg-gradient-to-r from-[#9FF0BA] to-[#C3A1F6]">
              More About
            </button>
            <button className="border-black border-[1px] text-[1.2vw]  p-[.5vw] my-2 ml-[4vw]  hover:bg-gradient-to-r from-[#9FF0BA] to-[#C3A1F6]">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
