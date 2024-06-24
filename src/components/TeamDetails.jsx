import React from "react";
import { FaPhone } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";
import { TfiWorld } from "react-icons/tfi";
import { IoMdPerson } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa6";
import { FaDribbble } from "react-icons/fa";
import { FaAngleDoubleRight } from "react-icons/fa";
import Navigation from "./Navigation";

const statements = [
  "Experienced Attorneys Professional.",
  "Committed To Helping Our Clients.",
  "Independence Makes Difference.",
  "Corporate Event Management.",
  "Experienced Attorneys Approach.",
  "Experienced Attorneys Professional.",
];

const skillsData = [
  { title: "Birthday Party", percentage: 70 },
  { title: "Wedding Party", percentage: 50 },
  { title: "Business Events", percentage: 85 },
  { title: "Wedding Party", percentage: 50 },
];

const cardData = [
  {
    id: "01",
    title: "BBA MANAGEMENT",
    period: "1996 - 2000 Present",
  },
  {
    id: "02",
    title: "INTERIOR DESIGNERS",
    period: "1996 - 2000 Present",
  },
  {
    id: "03",
    title: "PR MANAGEMENT",
    period: "1996 - 2000 Present",
  },
  {
    id: "04",
    title: "BBA MANAGEMENT",
    period: "1996 - 2000 Present",
  },
];

const TeamDetails = () => {
  return (
    <div className="w-full">
      <div className="bg-black w-full">
        <Navigation />
      </div>
      <div className="w-full py-[4vw] px-[6vw]">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-[2vw] bg-gray-100 p-[4vw] ">
          <div className="w-full">
            <img
              src="https://res.cloudinary.com/drvjsegeb/image/upload/v1718113404/et3_f6lsqr.jpg"
              alt="Team_details_1"
              className=""
            />
          </div>

          <div className="w-full">
            <div className="w-full">
              <p className="text-[4vw] sm:text[3vw] md:text-[2vw] text-gray-600">
                Cleaner Head
              </p>
              <p className=" text-[7vw] sm:text[5vw]  md:text-[4vw] text-black font-bold">
                Raymond turner
              </p>
              <p className="  text-[3vw] sm:text[2vw]  md:text-[1vw] text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum viverra maecenas accumsan lacus vel facilisis.
              </p>
            </div>
            <div className="grid grid-cols-2">
              <div className="flex  items-center my-[2vw] mx-[.2vw] ">
                <div className="bg-[white] w-fit h-fit p-[.7vw] border-gray-400 border-[.04vw] mr-[.5vw]">
                  <FaPhone className=" text-[4vw]   sm:text-[3vw] md:text-[1.5vw] " />
                </div>
                <div>
                  {" "}
                  <p className="text-black  text-[3.5vw]   sm:text-[3vw] md:text-[1.5vw] font-semibold font-mono leading-none">
                    Phone :
                  </p>
                  <p className="text-gray-600  text-[3vw]   sm:text-[2.5vw]  md:text-[1.2vw] font-normal font-mono hover:text-purple-300">
                    +91 (234)(4567)(890)
                  </p>
                </div>
              </div>
              <div className="flex  items-center my-[2vw] mx-[.2vw] ">
                <div className="bg-[white] w-fit h-fit p-[.7vw]  border-gray-400  border-[.04vw] mr-[.5vw]">
                  <IoMailOutline className=" text-[3.5vw]   sm:text-[3vw] md:text-[1.5vw] " />
                </div>
                <div>
                  <p className="text-black text-[3.5vw]   sm:text-[3vw] md:text-[1.5vw]  font-semibold font-mono leading-none">
                    Email :
                  </p>
                  <p className="text-gray-600 text-[3vw]   sm:text-[2.5vw]  md:text-[1.2vw] font-normal font-mono hover:text-purple-300">
                    sale@themetechmount.com
                  </p>
                </div>
              </div>
              <div className="flex  items-center my-[2vw] mx-[.2vw] ">
                <div className="bg-[white] w-fit h-fit p-[.7vw]  border-gray-400  border-[.04vw] mr-[.5vw]">
                  <TfiWorld className=" text-[3.5vw]   sm:text-[3vw] md:text-[1.5vw] " />
                </div>
                <div>
                  <p className="text-black  text-[3.5vw]   sm:text-[3vw] md:text-[1.5vw]  font-semibold font-mono leading-none">
                    Website :
                  </p>
                  <p className="text-gray-600 text-[3vw]   sm:text-[2.5vw]  md:text-[1.2vw]  font-normal font-mono hover:text-purple-300">
                    www.example.com
                  </p>
                </div>
              </div>
              <div className="flex  items-center my-[2vw] mx-[.2vw] ">
                <div className="bg-[white] w-fit h-fit p-[.7vw]  border-gray-400  border-[.04vw] mr-[.5vw]">
                  <IoMdPerson className=" text-[3.5vw]   sm:text-[3vw] md:text-[1.5vw] " />
                </div>
                <div>
                  <p className="text-black  text-[3.5vw]   sm:text-[3vw] md:text-[1.5vw]  font-semibold font-mono leading-none">
                    Experiance :
                  </p>
                  <p className="text-gray-600  text-[3vw]   sm:text-[2.5vw]  md:text-[1.2vw]  font-normal font-mono hover:text-purple-300">
                    More Than 10 Years
                  </p>
                </div>
              </div>
            </div>

            <div className="flex  p-4">
              <div className="bg-[#385DA9] mr-[1vw] p-[.7vw]">
                {" "}
                <FaFacebookF className="text-white " />
              </div>
              <div className="bg-[#33CCFF] mr-[1vw]  p-[.7vw]">
                <FaTwitter className="text-white " />
              </div>
              <div className="bg-[#0073B1] mr-[1vw]  p-[.7vw]">
                {" "}
                <FaLinkedinIn className="text-white " />
              </div>
              <div className="bg-[#BD081C] mr-[1vw]  p-[.7vw]">
                {" "}
                <FaPinterestP className="text-white " />
              </div>
              <div className="bg-[#EA4C89]  p-[.7vw]">
                <FaDribbble className="text-white " />
              </div>
            </div>
          </div>
        </div>
        {/* personal info */}
        <div className="w-full">
          <div className="text-[4vw] text-black font-bold">
            PERSONAL BIOGRAPHY
          </div>
          <div className=" text-[2vw]   sm:text-[2vw]  md:text-[1.2vw]  text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo suspendisse
            ultrices gravida. Risus commodo viverra viverra maecenas Quis ipsum
            suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis. accumsan lacus vel facilisis.
          </div>
          <div className="w-full my-[2vw]">
            <ul className=" grid grid-cols-1 md:grid-cols-3 list-inside space-y-2 w-full ">
              {statements.map((statement, index) => (
                <li
                  key={index}
                  className=" text-[3vw]   sm:text-[2.5vw]  md:text-[1.2vw]  font-semibold w-full text-gray-800 flex items-center "
                >
                  <FaAngleDoubleRight className="mr-[1vw]" /> {"  "}
                  {statement}
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-[1vw]">
            <div className="w-full">
              <div>
                <p className="text-[4vw] sm:text[3vw] md:text-[2vw] text-black font-bold">
                  PROFESSIONAL SKILLS
                </p>
                {/* horizonatal line */}
                <div className="h-[.1vw] w-full bg-gray-500  my-[2.2vw]"></div>
                <p className=" text-[2vw]   sm:text-[2vw]  md:text-[1.2vw]  text-gray-600  my-[2.2vw]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod viv erra maecenas accumsan lacus vel facilisis.
                </p>
              </div>

              <div className="flex flex-col my-[2vw]">
                {skillsData.map((skill, index) => (
                  <div key={index} className="flex flex-col  my-[.5vw]">
                    <div className="flex justify-between">
                      <p className="w-36">{skill.title}</p>
                      <p className="ml-2">{`${skill.percentage}%`}</p>
                    </div>
                    <div className="w-full border-[.1vw] border-black p-[.2vw]">
                      <div className="w-full bg-gray-200 h-[1vw]  overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-[#9FF0BA] to-[#C3A1F6] h-[1vw]"
                          style={{ width: `${skill.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full">
              <div className="w-full">
                <p className="text-[4vw] sm:text[3vw] md:text-[2vw] text-black font-bold">
                  EDUCATIONAL QUALIFICATION
                </p>

                <div className="h-[.1vw] w-full bg-gray-500  my-[2.2vw]"></div>
                <p className=" text-[2vw]   sm:text-[2vw]  md:text-[1.2vw]  text-gray-600  my-[2.2vw]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod viv erra maecenas accumsan lacus vel facilisis.
                </p>
              </div>

              <div className="w-full grid grid-cols-2 gap-[1vw]  my-[3vw] ">
                {cardData.map((card) => (
                  <div className="bg-[#F5F5F5] shadow-md rounded-md ">
                    <h3 className="text-xl w-fit font-bold text-gray-700 bg-gradient-to-r from-[#9FF0BA] to-[#C3A1F6] px-[.2vw] rounded-b-[.5vw] rounded-r-[1vw]">
                      {card.id}
                    </h3>
                    <div className="ml-[2.5vw] py-[1vw]">
                      <h2 className=" text-[2.5vw]   sm:text-[2.4vw]  md:text-[1.5vw]  font-semibold text-gray-800">
                        {card.title}
                      </h2>
                      <p className=" text-[2vw]   sm:text-[2vw]  md:text-[1.2vw]  text-gray-600">
                        {card.period}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      z
    </div>
  );
};

export default TeamDetails;
