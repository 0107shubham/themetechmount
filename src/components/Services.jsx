import React, { useState } from "react";
import { GiSparkles } from "react-icons/gi";
import { MdArrowOutward } from "react-icons/md";
import { FaWineGlassAlt } from "react-icons/fa";
import { MdPhotoCamera } from "react-icons/md";
import { FaMasksTheater } from "react-icons/fa6";
import { FaPeoplePulling } from "react-icons/fa6";
import { FaWineBottle } from "react-icons/fa";
import { FaGlassCheers } from "react-icons/fa";
import { FaPeopleRobbery } from "react-icons/fa6";
import TicketBooking from "./TicketBooking";
import Navigation from "./Navigation";

const reviews = [
  {
    img: "https://www.themetechmount.com/wordpress/presentup/advanced/wp-content/uploads/sites/4/2023/02/22.jpg",
    comment: "This is the first review.",
    author: "Samuel Smith",
    position: "CEO Atlant",
  },
  {
    img: "https://www.themetechmount.com/wordpress/presentup/advanced/wp-content/uploads/sites/4/2023/02/44.jpg",
    comment: "This is the second review.",
    author: "Julia Rose",
    position: "Marketing Manager",
  },
  {
    img: "https://www.themetechmount.com/wordpress/presentup/advanced/wp-content/uploads/sites/4/2023/02/11.jpg",
    comment: "This is the third review.",
    author: "Alex John Martin",
    position: "Group Of Solars CEO",
  },
  {
    img: "https://www.themetechmount.com/wordpress/presentup/advanced/wp-content/uploads/sites/4/2023/02/33.jpg",
    comment: "This is the fourth review.",
    author: "Martin Velle",
    position: "Marketing Manager",
  },
];

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleSelect = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className=" w-full ">
      <div className="bg-black w-full">
        <Navigation />
      </div>
      <div className="grid grid-cols-2">
        <div className="w-full">
          <p className="text-[1vw] text-black">ABOUT US</p>
          <p className="text-black text-[4vw] leading-tight font-semibold">
            WE’RE THE LARGEST EVENTS COMPANY
          </p>
          <p className="text-[1vw] mt-[10vw] pr-[2vw] text-gray-800">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis.
          </p>
          <div className="mt-[2vw] flex ">
            <button className="outline-none  py-[.5vw] px-[2vw]   bg-gradient-to-r from-[#9FF0BA] to-[#C3A1F6] mr-[1vw]">
              More About
            </button>
            <button className="outline-none border-black border-[.1vw] py-[.5vw] px-[2vw]  text-black text-[1vw] ml-[.5vw]">
              Contact US
            </button>
          </div>
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/drvjsegeb/image/upload/v1718037849/services-img-1_fnemph.jpg"
            alt="service"
          />
        </div>
      </div>
      <div className="w-full bg-black py-[2vw] my-[2vw]">
        <div className="my-[4vw] w-full  text-white flex flex-col items-center">
          <p className="uppercase text-[1vw] font-normal leading-none">
            our services
          </p>
          <p className="uppercase text-[4vw] font-bold leading-none">
            PROVIDE BEST EVENT SERVICES!
          </p>
        </div>
        <div className="w-full flex justify-center ">
          <div className="mr-[1vw] flex flex-col items-center  w-full pl-[2vw]">
            {/* 1 */}
            <div className="w-full   text-white">
              <div className="w-full ">
                <div className="flex justify-between cursor-pointer group  ">
                  <div className="flex w-full">
                    <GiSparkles className="text-[2vw] text-purple-700  brightness-200   hidden mr-[2vw] group-hover:block opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <p className="">PRIVATE PARTY</p>
                  </div>
                  <div className="h-[2vw] w-[2vw] opacity-0 group-hover:opacity-100 rounded-full border-[.2vw] border-white transition-opacity duration-300 flex items-center justify-center">
                    <MdArrowOutward />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full border-t-[.1vw] border-gray-400 my-[2vw]"></div>
            {/* 2 */}
            <div className="w-full   text-white">
              <div className="w-full ">
                <div className="flex justify-between cursor-pointer group  ">
                  <div className="flex w-full">
                    <FaWineGlassAlt className="text-[2vw] text-purple-700  brightness-200  hidden mr-[2vw] group-hover:block opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <p className="">WEDDING & BIRTHDAY PARTY</p>
                  </div>
                  <div className="h-[2vw] w-[2vw] opacity-0 group-hover:opacity-100 rounded-full border-[.2vw] border-white transition-opacity duration-300 flex items-center justify-center">
                    <MdArrowOutward />
                  </div>
                </div>
              </div>
            </div>

            {/* 3 */}
            <div className="w-full border-t-[.1vw] border-gray-400 my-[2vw]"></div>
            <div className="w-full   text-white">
              <div className="w-full ">
                <div className="flex justify-between cursor-pointer group  ">
                  <div className="flex w-full">
                    <MdPhotoCamera className="text-[2vw] text-purple-700  brightness-200  hidden mr-[2vw] group-hover:block opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <p className="">UNFORGETTABLE TIME</p>
                  </div>
                  <div className="h-[2vw] w-[2vw] opacity-0 group-hover:opacity-100 rounded-full border-[.2vw] border-white transition-opacity duration-300 flex items-center justify-center">
                    <MdArrowOutward />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full border-t-[.1vw] border-gray-400 my-[2vw]"></div>
            {/* 4 */}
            <div className="w-full   text-white">
              <div className="w-full ">
                <div className="flex justify-between cursor-pointer group  ">
                  <div className="flex w-full">
                    <FaMasksTheater className="text-[2vw] text-purple-700 brightness-200  hidden mr-[2vw] group-hover:block opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <p className="">UNIQUE SCENARIOS</p>
                  </div>
                  <div className="h-[2vw] w-[2vw] opacity-0 group-hover:opacity-100 rounded-full border-[.2vw] border-white transition-opacity duration-300 flex items-center justify-center">
                    <MdArrowOutward />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* vertical line */}

          <div className="h-[28vw] w-[2px] bg-gray-500  mx-[2vw]"></div>
          {/* 1 */}
          {/* right conatainer  */}
          <div className="mr-[1vw] flex flex-col items-center  w-full pl-[2vw]">
            <div className="w-full   text-white">
              <div className="w-full ">
                <div className="flex justify-between cursor-pointer group  ">
                  <div className="flex w-full">
                    <FaPeoplePulling className="text-[2vw] text-purple-700 brightness-200  hidden mr-[2vw] group-hover:block opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <p className="">CORPARATE PARTY</p>
                  </div>
                  <div className="h-[2vw] w-[2vw] opacity-0 group-hover:opacity-100 rounded-full border-[.2vw] border-white transition-opacity duration-300 flex items-center justify-center">
                    <MdArrowOutward />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full border-t-[.1vw] border-gray-400 my-[2vw]"></div>
            {/* 2 */}
            <div className="w-full   text-white">
              <div className="w-full ">
                <div className="flex justify-between cursor-pointer group  ">
                  <div className="flex w-full">
                    <FaWineBottle className="text-[2vw] text-purple-700 brightness-200  hidden mr-[2vw] group-hover:block opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <p className="">DRINK OUTSIDE THE BOX</p>
                  </div>
                  <div className="h-[2vw] w-[2vw] opacity-0 group-hover:opacity-100 rounded-full border-[.2vw] border-white transition-opacity duration-300 flex items-center justify-center">
                    <MdArrowOutward />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full border-t-[.1vw] border-gray-400 my-[2vw]"></div>
            {/* 3 */}
            <div className="w-full   text-white">
              <div className="w-full ">
                <div className="flex justify-between cursor-pointer group  ">
                  <div className="flex w-full">
                    <FaGlassCheers className="text-[2vw] text-purple-700 brightness-200  hidden mr-[2vw] group-hover:block opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <p className="">NIGHT CLUB PARTY</p>
                  </div>
                  <div className="h-[2vw] w-[2vw] opacity-0 group-hover:opacity-100 rounded-full border-[.2vw] border-white transition-opacity duration-300 flex items-center justify-center">
                    <MdArrowOutward />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full border-t-[.1vw] border-gray-400 my-[2vw]"></div>
            {/* 4 */}
            <div className="w-full   text-white">
              <div className="w-full ">
                <div className="flex justify-between cursor-pointer group  ">
                  <div className="flex w-full">
                    <FaPeopleRobbery className="text-[2vw] text-purple-700 brightness-200 hidden mr-[2vw] group-hover:block opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <p className="">MUTHALOVIN DANCE PARTY</p>
                  </div>
                  <div className="h-[2vw] w-[2vw] opacity-0 group-hover:opacity-100 rounded-full border-[.2vw] border-white transition-opacity duration-300 flex items-center justify-center">
                    <MdArrowOutward />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* vertical line */}
      </div>

      <TicketBooking />

      {/* <div className="container mx-auto p-4">
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {reviews.map((review, index) => (
              <div key={index} className="min-w-full flex-shrink-0 p-4">
                <img
                  src={review.img}
                  alt={`Review ${index + 1}`}
                  className="rounded-lg shadow-lg cursor-pointer"
                  onClick={() => handleSelect(index)}
                />
              </div>
            ))}
          </div>
          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg focus:outline-none"
          >
            &lt;
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg focus:outline-none"
          >
            &gt;
          </button>
        </div>
        <div className="mt-4 text-center">
          <p className="text-xl font-semibold">
            {reviews[currentIndex].comment}
          </p>
          <h3 className="text-lg font-bold">{reviews[currentIndex].author}</h3>
          <span className="text-sm">{reviews[currentIndex].position}</span>
        </div>
      </div> */}
    </div>
  );
};

export default Services;
