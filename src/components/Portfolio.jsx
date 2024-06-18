import React from "react";
import { IoArrowForward } from "react-icons/io5";
import { Link } from "react-router-dom";

import { CiSearch } from "react-icons/ci";
import { events } from "../Data";
import { useParams } from "react-router-dom";

const Portfolio = () => {
  const { id } = useParams();

  const mainFiltredData = events.find((item) => item.id.toString() === id);

  const filtredData = events.filter((item) => item.id.toString() !== id);
  console.log("dt", filtredData);

  return (
    <div className="w-full">
      <div className="w-full">
        <div className="relative w-full py-[4vw] px-[7vw]">
          <div className="w-full">
            <p>{mainFiltredData.title}</p>
            <img
              src={mainFiltredData.imageURL}
              alt={mainFiltredData.title}
              className="h-[37vw] w-full"
            />
          </div>

          {/* right card */}
          <div className="absolute right-[10vw] top-[30vw]  w-[25vw] h-[25vw] bg-[#F5F5F5]">
            <div className="flex  items-center  py-[.7vw]">
              <p className="text-black text-[1.2vw] font-semibold mx-[1vw]">
                Creative Director{" "}
              </p>
              <p className="text-[1vw] text-gray-600">David Copper</p>
            </div>
            <div className="h-[.05vw] w-full bg-gray-500  my-[1vw]"></div>
            <div className="flex  items-center  py-[.7vw]">
              <p className="text-black text-[1.2vw] font-semibold mx-[1vw]">
                Category r{" "}
              </p>
              <p className="text-[1vw] text-gray-600">Kids birthday party</p>
            </div>
            <div className="h-[.05vw] w-full bg-gray-500  my-[1vw]"></div>
            <div className="flex  items-center  py-[.7vw]">
              <p className="text-black text-[1.2vw] font-semibold mx-[1vw]">
                Date{" "}
              </p>
              <p className="text-[1vw] text-gray-600">09th September 2023</p>
            </div>
            <div className="h-[.05vw] w-full bg-gray-500  my-[1vw]"></div>
            <div className="flex  items-center  py-[.7vw]">
              <p className="text-black text-[1.2vw] font-semibold mx-[1vw]">
                Location{" "}
              </p>
              <p className="text-[1vw] text-gray-600">
                27 Marion street columbia
              </p>
            </div>
            <div className="h-[.05vw] w-full bg-gray-500  my-[1vw]"></div>
            <div className="flex  items-center  py-[.7vw]">
              <p className="text-black text-[1.2vw] font-semibold mx-[1vw]">
                Customer{" "}
              </p>
              <p className="text-[1vw] text-gray-600">ThemeForest Envato</p>
            </div>
          </div>

          <div className="w-[65%]  my-[1vw] ">
            <p className="text-[2vw] font-semibold  my-[1vw] ">
              FORRIGN EXCHANGE
            </p>
            <p className="text-[1vw] text-gray-400 font-normal  my-[1vw] ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis.
            </p>
            <p className="text-[1vw] text-gray-400 font-normal my-[1vw] ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore maecenas accumsan
              lacus vel facilisis.
            </p>
          </div>
          <div>
            <p className="text-[2vw] font-semibold text-black  my-[1vw] ">
              HEAR TO KNOW ABOUT OUR PROJECT
            </p>
            <p className="text-[1vw] text-gray-400 font-normal  my-[1vw] ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt maecenas
              accumsan lacus vel facilisis. maecenas accumsan lacus vel
              facilisis.
            </p>
          </div>

          <div className="bg-[#F7F7F7] flex w-full px-[1vw] py-[3vw] my-[2vw]">
            <div>
              <img
                src="https://res.cloudinary.com/drvjsegeb/image/upload/v1718108770/double_quates_zwmu5z.png"
                alt="double_quates"
                className="h-[5vw] w-[8vw] "
              />
            </div>
            <div className="ml-[2vw] ">
              <p className="text-[2.5vw] font-semibold leading-none">
                EVENTS CONTRARY TO POPUL NOTAR BELIEF, LOREM IPSUM IS NOT SIMPLY
                RANDOM POPULAR BEL TEXT INDIK IT IN HAS ROOTS IN A PIECE OF
                CLASSICAL
              </p>
              <p className="text-[1vw] text-gray-400 font-normal  my-[1vw] ">
                Group Of Solars CEO
              </p>
              <p className="text-[1.5vw] text-black font-normal  my-[1vw] ">
                ALEX JHON MARTIN
              </p>
            </div>
          </div>

          <div className="flex w-full ">
            <div className="">
              <p className="text-black font-semibold">Our mission</p>

              <p className="flex items-center text-[1.2vw] my-[1vw]">
                {" "}
                <IoArrowForward className="mr-[.5vw] " />
                consectetur adipiscing elit, sed do ut eiusmod tempor in
              </p>
              <p className="flex items-center text-[1.2vw] my-[1vw]">
                {" "}
                <IoArrowForward className="mr-[.5vw] " />
                ntrary to popular belief, Lorem Ipsum is not simply random text
              </p>
            </div>
            <div className="ml-[3vw]">
              <p className="text-black font-semibold">Our Challange</p>

              <p className="flex items-center text-[1.2vw] my-[1vw]">
                {" "}
                <IoArrowForward className="mr-[.5vw] " />
                ntrary to popular belief, Lorem Ipsum is not simply random
              </p>
              <p className="flex items-center text-[1.2vw] my-[1vw]">
                {" "}
                <IoArrowForward className="mr-[.5vw] " />
                ntrary to popular belief, Lorem Ipsum is not simply random text
              </p>
            </div>
          </div>
          <div className="h-[.05vw] w-full bg-gray-500  my-[1vw]"></div>

          {/* related evenets */}

          <div className="w-full">
            <div className="text-black text-[2vw] font-bold my-[1vw]">
              <p className="">REALTED EVENTS</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-[1vw] ">
              {filtredData.map((items) => (
                <div
                  key={items.id}
                  className="w-full bg-[#FFFFFF] drop-shadow-md"
                >
                  <div
                    // className={` relative w-full sm:w-full aspect-square bg-[url(${items.imageURL})] bg-cover overflow-hidden group`}
                    className="relative w-full sm:w-full aspect-square bg-cover overflow-hidden group"
                    style={{ backgroundImage: `url(${items.imageURL})` }}
                  >
                    <div className="absolute top-0 left-0 w-full h-full bg-purple-300 transform -translate-y-full transition-transform duration-1000 ease-in-out group-hover:translate-y-0">
                      <div className="ml-auto mr-auto mt-[38%] text-white hover:bg-white hover:text-purple-500  w-fit rounded-full border-white border-[.1vw] p-[.5vw]">
                        <CiSearch className=" text-[2vw] " />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center  py-[.5vw]">
                    <Link
                      to={`/portfolio/${items.id}`}
                      className="text-black text-[1.2vw]"
                    >
                      {items.title}
                    </Link>
                    <p className="text-gray-400 text-[1vw]">private party</p>
                  </div>
                </div>
              ))}

              {/* <div className="w-full bg-[#FFFFFF] drop-shadow-md">
                <div className="relative w-full aspect-square bg-[url('https://res.cloudinary.com/drvjsegeb/image/upload/v1718170039/04-720x604_1_h0zviv.jpg')] bg-cover overflow-hidden group">
                  <div className="absolute top-0 left-0 w-full h-full bg-purple-300 transform -translate-y-full transition-transform duration-1000 ease-in-out group-hover:translate-y-0">
                    <div className="ml-auto mr-auto mt-[38%] text-white hover:bg-white hover:text-purple-500  w-fit rounded-full border-white border-[.1vw] p-[.5vw]">
                      <CiSearch className=" text-[2vw] " />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center  py-[.5vw]">
                  <p className="text-black text-[1.2vw]">
                    MUTHALOVIN DANCE PARTY
                  </p>
                  <p className="text-gray-400 text-[1vw]">private party</p>
                </div>
              </div> */}
              {/* <div>
                <div className="w-full bg-[#FFFFFF] drop-shadow-md">
                  <div className="relative w-full aspect-square bg-[url('https://res.cloudinary.com/drvjsegeb/image/upload/v1718170050/06-720x604_1_hqt43u.jpg')] bg-cover overflow-hidden group">
                    <div className="absolute top-0 left-0 w-full h-full bg-purple-300 transform -translate-y-full transition-transform duration-1000 ease-in-out group-hover:translate-y-0">
                      <div className="ml-auto mr-auto mt-[38%] text-white hover:bg-white hover:text-purple-500  w-fit rounded-full border-white border-[.1vw] p-[.5vw]">
                        <CiSearch className=" text-[2vw] " />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center  py-[.5vw]">
                    <p className="text-black text-[1.2vw]">
                      MUTHALOVIN DANCE PARTY
                    </p>
                    <p className="text-gray-400 text-[1vw]">private party</p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
