import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const eventsData = [
  {
    id: 1,
    date: "10 APR",
    time: "8:00 am - 10:00 am",
    type: "TECHOHUB 2020",
    city: "NEW YORK",
    anchor: "",
    imgUrl:
      "https://res.cloudinary.com/drvjsegeb/image/upload/v1717774614/pp1_jpleja.jpg",
  },
  {
    id: 2,
    date: "10 APR",
    time: "8:00 am - 10:00 am",
    type: "TECHOHUB 2020",
    city: "NEW YORK",
    anchor: "",
    imgUrl:
      "https://res.cloudinary.com/drvjsegeb/image/upload/v1717774614/pp1_jpleja.jpg",
  },
  {
    id: 3,
    date: "10 APR",
    time: "8:00 am - 10:00 am",
    type: "TECHOHUB 2020",
    city: "NEW YORK",
    anchor: "",
    imgUrl:
      "https://res.cloudinary.com/drvjsegeb/image/upload/v1717774614/pp1_jpleja.jpg",
  },
  {
    id: 4,
    date: "10 APR",
    time: "8:00 am - 10:00 am",
    type: "TECHOHUB 2020",
    city: "NEW YORK",
    anchor: "",
    imgUrl:
      "https://res.cloudinary.com/drvjsegeb/image/upload/v1717774614/pp1_jpleja.jpg",
  },
];

const Events = () => {
  return (
    <div className="p-[2vw] bg-gray-200  ">
      <p className="text-black text-[1vw] font-bold mb-4">UPCOMING EVENTS</p>
      <div className="  mb-[2vw]">
        <p className="text-black text-[3vw] font-bold">EVENT SCHEDULE</p>
      </div>
      {eventsData.map((item) => (
        <div
          key={item.id}
          className={` rounded-lg bg-white hover:bg-[url(${item.imgUrl})] shadow-md mb-4 relative flex w-full h-[10vw]`}
        >
          <div className="w-[5vw] flex-shrink-0  pt-[3vw] sm:pt-[3.5vw]  bg-gradient-to-r from-[#9FF0BA] to-[#C3A1F6]  items-center">
            <p className="text-gray-800  whitespace-nowrap transform -rotate-90 text-[1.8vw]  font-semibold md:font-bold">
              {item.date}
            </p>
          </div>

          <div className="flex  font-medium justify-around items-center w-full min-h-[100%]  text-[2vw] hover:bg-[${item.imgUrl}]">
            <p className="text-gray-800   pr-[2vw]">{item.time}</p>
            <div className="border-[.1vw] h-[80%] border-black"></div>
            <p className="text-gray-800    pr-[2vw]">{item.type}</p>
            <div className="border-[.1vw]  h-[80%] border-black"></div>
            <p className="text-gray-800   pr-[2vw] ">{item.city}</p>
            <div className="border-[.1vw]  h-[80%] border-black"></div>
            <div className="border-black border-[.2vw] rounded-full p-[2.5vw]    hover:bg-gradient-to-r from-[#9FF0BA] to-[#C3A1F6]">
              <GoArrowUpRight />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Events;
