import React from "react";
import Footer from "./Footer";

const ContactUs = () => {
  return (
    <div className="w-full bg-[#F3F5F4]">
      <div className=" w-full grid grid-cols-1 sm:grid-cols-2 px-[5vw] gap-[2vw] mt-[4vw] mb-[6vw] sm:px-[7vw]">
        <div className="">
          <div className="bg-white relative w-[90%] aspect-square pb-[5vw]  flex flex-col pt-[5vw] justify-start items-center rounded-full ">
            <h2 className="text-[2vw] font-bold text-center ">
              GET THE PARTY START
            </h2>
            <form className="w-[30vw] aspect-auto flex flex-col items-center  mt-[1vw] ">
              <div className="w-full">
                <input
                  type="text"
                  placeholder="Your full name"
                  className="w-full text-[1vw] font-medium p-[1vw] border-b-[.05vw] bg-white border-gray-500 outline-none mb-[.5vw]"
                />
              </div>
              <div className="w-full">
                <input
                  type="text"
                  placeholder="Your phone no"
                  className="w-full text-[1vw] font-medium p-[1vw] border-b-[.05vw]  bg-white border-gray-500 outline-none mb-[.5vw]"
                />
              </div>
              <div className="w-full">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full text-[1vw] font-medium p-[1vw] border-b-[.05vw]  bg-white border-gray-500 outline-none  mb-[.5vw]"
                />
              </div>
              <div className="w-full flex justify-center">
                <textarea
                  placeholder="Your message"
                  className="w-[80%] text-[1vw] font-medium p-[1vw] border-b-[.05vw] bg-white border-gray-500 outline-none  mb-[.5vw]"
                  rows={3}
                ></textarea>
              </div>
            </form>
            <div className=" absolute bottom-[-3vw]	text-[1.2vw]  flex justify-center mx-auto h-[6vw] w-[6vw]  items-center bg-gradient-to-r from-[#9FF0BA] to-[#C3A1F6]  rounded-full">
              submit
            </div>
          </div>
        </div>

        <div className="mt-8  ">
          <p className="text-[2.2vw] font-semibold tracking-wide">
            LET’S GET IN TOUCH
          </p>

          <p className="mt-4 text-[1.2vw] text-balance text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore facilisis.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 mt-[2vw] ">
            <div className=" w-full sm:aspect-[2/1]  sm:border-r-[.1vw] border-slate-400 p-[1vw]">
              <h3 className="text-[2vw] font-bold ">LOCATION</h3>
              <p className="text-[1.2vw] text-gray-500">
                7065 West Clinton St. Palm <br />
                Coast, FL 32137
              </p>
            </div>
            <div className=" w-full sm:aspect-[2/1]  sm:border-b-[.1vw] border-slate-400 p-[1vw]">
              <h3 className="text-[2vw] font-bold ">PHONE NO</h3>
              <p className="text-[1.2vw] text-gray-500 ">+09(123)(4567)(890)</p>
              <p className="text-[1.2vw] text-gray-500">+09(123)(4567)(890)</p>
            </div>

            <div className=" w-full  sm:aspect-[2/1]  sm:border-t-[.1vw] border-slate-400 p-[1vw]">
              <h3 className="text-[2vw] font-bold ">TIME</h3>
              <p className="text-[1.2vw] text-gray-500 ">
                Mon - Saturday 10am to 08pm
              </p>
              <p className="text-[1.2vw] text-gray-500 ">Sunday Close</p>
            </div>
            {/* Email Addresses Container */}
            <div className=" w-full  sm:aspect-[2/1]  sm:border-l-[.1vw] border-slate-400 p-[1vw]">
              <h3 className="text-[2vw] font-bold ">EMAIL ADDRESS</h3>
              <p className="text-[1.2vw] text-gray-500 ">
                sale@themetechmount.com
              </p>
              <p className="text-[1.2vw] text-gray-500">
                info@themetechmount.com
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-red-300">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d9934.18659180951!2d-0.1195192!3d51.5031864!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1718281445066!5m2!1sen!2sin"
          //   width="100%"
          // height="450"
          className="w-full h-[70vw] sm:h-[50vw] md:h-[35vw]"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
