import React from "react";
import { MdOutlineMailLock } from "react-icons/md";
import { IoIosArrowRoundForward } from "react-icons/io";

const Footer = () => {
  return (
    <div className="w-full bg-black pb-[2vw] ">
      <div className="w-full px-[2vw]">
        <div className="w-full mb-[2vw] text-left  ">
          <p className="text-white text-[4vw] uppercase font-semibold">
            Affordable Wedding Planner and <br />
            Events
            <span className="text-purple-500"> Coordinator!</span>
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 text-white gap-[.2vw]">
          <div className=" p-4">
            <p className="text-[4vw]  sm:text-[2vw] font-semibold">ADDRESS</p>
            <p className="text-[2vw]  sm:text-[1vw]  font-normal mt-2">
              United States <br /> 456 78 Street, Office 456 <br /> Derlin ME
              567890
            </p>
          </div>
          <div className=" p-[2vw]">
            <p className="text-[4vw]  sm:text-[2vw]  font-semibold">
              SAY HELLO
            </p>
            <p className="text-[2vw]  sm:text-[1vw]  font-normal mt-2">
              info@123yourmail.com
              <br />
              +1800 132 45678 0
            </p>
          </div>
          <div className=" p-[2vw]">
            <p className="text-[3vw] sm:text-[2vw]  font-semibold">
              SOCIAL SHARE
            </p>
            <p className="text-[2vw]  sm:text-[1vw]  font-normal mt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                Facebook
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                Twitter
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                Instagram
              </a>
              <a
                href="https://dribbble.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                Dribble
              </a>
            </p>
          </div>
          <div className=" pt-[2vw]">
            <div className="flex items-center">
              <MdOutlineMailLock
                className="text-[2vw]  sm:text-[1.5vw] "
                alt="Email icon"
              />
              <input
                type="email"
                className="bg-black text-[2vw]  sm:text-[1vw]  pl-[.3vw] h-[1.5vw] outline-none border-b-[.1vw] border-white flex-grow mx-2"
                placeholder="Enter Your Email Address"
                aria-label="Email"
              />
              <IoIosArrowRoundForward className="text-2xl" alt="Submit icon" />
            </div>
            <div className="w-full flex justify-between  border-white border-t-[.1vw] my-[2vw]"></div>
            <div className="flex contrast-less:">
              <input type="checkbox" className="text-[2vw]" />
              <p className="ml-[.5vw] text-[2vw]  sm:text-[1vw] ">
                I agree to the <span className="underline">Privacy Policy</span>
                .
              </p>
            </div>
          </div>
        </div>
        <div className="w-full  border-white border-t-[.1vw] "></div>
        <div className="w-full flex justify-between text-white   mt-[.5vw]">
          <p className="text-[2vw]  sm:text-[1vw] ]">
            Copyright © 2023 Presentup Theme by Themetechmount.
          </p>
          <p className="text-white text-[2vw]  sm:text-[1vw]  flex items-center space-x-2 ">
            <span>About</span>
            <span className="h-[2vw] border-l border-white mx-2"></span>
            <span>Contact</span>
            <span className="h-full border-l border-white mx-2"></span>
            <span>Services</span>
            <span className="h-full border-l border-white mx-2"></span>
            <span>Team</span>
            <span className="h-full border-l border-white mx-2"></span>
            <span>FAQ</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
