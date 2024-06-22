import React from "react";
import { RiDoubleQuotesL } from "react-icons/ri";
import TicketBooking from "./TicketBooking";
import Footer from "./Footer";
import Navigation from "./Navigation";

const ServiceDetails = () => {
  return (
    <div className="w-full">
      <div className="bg-black w-full">
        <Navigation />
      </div>
      <div className="w-full px-[20vw] py-[4vw]">
        <div className="w-full flex justify-end items-end   h-[34vw]  bg-cover bg-[url('https://res.cloudinary.com/drvjsegeb/image/upload/v1717936085/post-image-002-780x590_biw6qa.jpg')]">
          <div className="bg-[#F7F7F7] flex   w-[30vw] h-[10vw] pt-[1.5vw]">
            <img
              src="https://res.cloudinary.com/drvjsegeb/image/upload/v1718108770/double_quates_zwmu5z.png"
              alt="dq"
              className=" bg-blend-multiply h-[5vw] "
            />
            <p className="ml-[1vw] uppercase font-mono font-semibold text-[1.2vw]">
              I WOULD RECOMMEND HER FOR ANY EVENT WEDDINGS, BABY SHOWER,
              BIRTHDAY PARTY.
            </p>
          </div>
        </div>

        <div className="w-full mt-[2vw]">
          <div className="w-full">
            <p className=" text-[2.1vw] font-semibold">
              ENGAGING EVENT ATTENDEES CAN BE DIFFICULT – AND BLOWING IS EVEN
              HARDER.
            </p>
            <p className=" text-[1.4vw] text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis.
            </p>
          </div>
          <div className="grid grid-cols-2  mt-[2vw]">
            <div className="px-[1vw] ">
              <p className="text-[2vw] font-semibold my-[.5vw]">CAPABILITIES</p>
              <p className=" text-[1.1vw] text-gray-500 my-[.5vw]">
                Lorem ipsum dolor sit amet, consectetur eius mod tempor
                incididunt
              </p>
              <p className="text-[2vw] font-semibold my-[.5vw]">
                01. THE PERFECT EVENT
              </p>
              <p className=" text-[1.1vw] text-gray-500 my-[.5vw]">
                Lorem ipsum dolor sit amet, consecteturac cum san lacus vel
                facilisis.
              </p>
              <p className="text-[2vw] font-semibold my-[.5vw]">
                02. PRICELESS MEMORIES
              </p>
              <p className=" text-[1.1vw] text-gray-500 my-[.5vw]">
                Lorem ipsum dolor sit amet, consecteturac cum san lacus vel
                facilisis.
              </p>
            </div>
            <div className="w-full">
              <img
                src="https://res.cloudinary.com/drvjsegeb/image/upload/v1718111414/service-detail-2_fix2bk.jpg"
                alt="servise_2"
                className="h-[23vw]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="px-[6vw] w-full">
        <TicketBooking />
      </div>

      <Footer />
    </div>
  );
};

export default ServiceDetails;
