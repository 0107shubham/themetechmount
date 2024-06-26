import React, { useState } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { parse, format } from "date-fns";
import { events } from "../Data";
import "./Events.css";
import { Link } from "react-router-dom";

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

const formatDate = (dateString) => {
  const [monthDay, year] = dateString.split(",");
  return monthDay.trim();
};

const Events = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseEnter = (itemId) => {
    setHoveredItem(itemId);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };
  return (
    <div className="p-[2vw] bg-gray-200  ">
      <p className="text-black text-[1vw] font-bold mb-4">UPCOMING EVENTS</p>
      <div className="  mb-[2vw]">
        <p className="text-black text-[3vw] font-bold">EVENT SCHEDULE</p>
      </div>
      {events.map((item) => (
        <div
          onMouseEnter={() => handleMouseEnter(item.id)}
          onMouseLeave={handleMouseLeave}
          key={item.id}
          className="shadow-md mb-4 relative bg-white  group flex w-full h-[10vw]"
          style={{
            backgroundImage:
              hoveredItem === item.id ? `url(${item.imageURL})` : "none",

            backgroundSize: "cover",
            backgroundPosition: "center",
          }}

          // className="flex font-medium  bg-cover  hover-bg  w-full h-[10vw] my-[1vw] text-[2vw] "
        >
          <div className="w-[5vw] flex-shrink-0 relative  pt-[3vw] sm:pt-[3.5vw]  bg-gradient-to-r from-[#9FF0BA] to-[#C3A1F6]  items-center">
            <p className="text-gray-800 absolute right-auto left-auto  whitespace-nowrap transform -rotate-90 text-[1.8vw]  font-semibold md:font-bold">
              {format(item.date, "MMM dd")}
            </p>
          </div>

          <div
            // hover:bg-[url(${item.imgUrl})]
            className="flex  text-[14px] sm:text-[18px] md:text-[2vw]   font-medium text-black group-hover:text-white  bg-cover justify-around items-center w-full min-h-[100%]   "
            key={item.id}
          >
            <p className="pr-[2vw]">{item.time}</p>
            {/* <img src={item.imageURL} className="w-[4vw]" /> */}
            <div className="border-[.1vw] group-hover:text-white h-[80%] border-black"></div>
            <p className="  pr-[2vw]">{item.title}</p>
            <div className="border-[.1vw]  h-[80%] border-black"></div>
            <p className="  pr-[2vw] ">{item.location}</p>
            <div className="border-[.1vw]  h-[80%] border-black"></div>
            <Link
              to={`/eventsDetails/${item.id}`}
              className="border-black border-[.2vw] rounded-full p-[2.5vw]    hover:bg-gradient-to-r from-[#9FF0BA] to-[#C3A1F6]"
            >
              <p className="">
                <GoArrowUpRight />
              </p>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Events;
