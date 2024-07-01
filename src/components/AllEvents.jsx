import React, { useState, useRef, useEffect } from "react";
import { compareDates, groupByMonth } from "./utils";
import { events } from "../Data";
import { parse, format, isAfter, isBefore } from "date-fns";
import { IoChevronBack } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import { CiViewList } from "react-icons/ci";
import { MdToday } from "react-icons/md";
import { MdCalendarMonth } from "react-icons/md";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { IoIosArrowUp } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import "./AllEvents.css";
import Navigation from "./Navigation";
import AddToCalender from "./AddToCalender";

const AllEvents = () => {
  const today = new Date();
  const [selectedDate, setSelectedDate] = useState(today);
  const [pastEvents, setPastEvents] = useState([]);
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [groupedPastEvents, setGroupedPastEvents] = useState({});
  const [groupedUpcomingEvents, setGroupedUpcomingEvents] = useState({});
  const [active, setActive] = useState("upcoming");
  const [isClicked, setIsClicked] = useState(false);
  const datePickerRef = useRef(null);
  const [openSearch, setOpenSearch] = useState(false);
  const [openCalender, setOpenCalender] = useState(false);

  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const [status, setStatus] = useState("upcoming");
  const [viewMode, setViewMode] = useState(false);

  const handleIconClick = (event) => {
    setIsClicked(!isClicked);
    setIsCalendarOpen(!isCalendarOpen);

    console.log("cliked");
  };

  const handleClickOutside = (event) => {
    if (
      datePickerRef.current &&
      !datePickerRef.current.contains(event.target)
    ) {
      setIsCalendarOpen(false);
      setIsClicked(!isClicked);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setActive("upcoming");
  };

  const extractDay = (dateString) => {
    const date = parse(dateString, "MMMM dd, yyyy", new Date());
    return format(date, "dd");
  };

  const extractWeekday = (dateString) => {
    const date = parse(dateString, "MMMM dd, yyyy", new Date());
    return format(date, "EEE");
  };

  const extractMonth = (dateString) => {
    const date = parse(dateString, "MMMM dd, yyyy", new Date());
    return format(date, "MMMM");
  };

  const filterEvents = (date) => {
    const parseEventDate = (dateString) => {
      return parse(dateString, "MMMM dd, yyyy", new Date());
    };

    const past = events.filter((event) =>
      isBefore(parseEventDate(event.date), date)
    );
    const upcoming = events.filter(
      (event) => !isBefore(parseEventDate(event.date), date)
    );

    setPastEvents(past);
    setUpcomingEvents(upcoming);
  };

  useEffect(() => {
    filterEvents(selectedDate);
  }, [selectedDate]);

  useEffect(() => {
    setGroupedPastEvents(groupByMonth(pastEvents));
    setGroupedUpcomingEvents(groupByMonth(upcomingEvents));
  }, [pastEvents, upcomingEvents]);

  const handlePast = () => {
    // const defaultDate = new Date("2024-03-14");
    const defaultDate = new Date();
    setActive("past");
    setStatus("March 14 - Now");

    setSelectedDate(defaultDate);
    // setSelectedDate(defaultDate);
  };

  const handlePresent = () => {
    const defaultDate = new Date();
    setActive("upcoming");
    setStatus("Upcoming");

    setSelectedDate(defaultDate);
    // setSelectedDate(defaultDate);
  };
  const handleToday = () => {
    const defaultDate = new Date();
    setActive("upcoming");

    setSelectedDate(defaultDate);
    // setSelectedDate(defaultDate);
  };

  return (
    <div className="w-full">
      <div className="bg-black w-full">
        <Navigation />
      </div>{" "}
      <div className="w-full flex justify-center items-center h-[30vw] md:h-[20vw] bg-cover bg-[url('https://res.cloudinary.com/drvjsegeb/image/upload/v1717399420/slider_h7kdml.jpg')]">
        <p className="uppercase text-[5vw] text-white"> events </p>{" "}
      </div>{" "}
      <div className="container mx-auto w-full px-[2vw] lg:px-[15vw]">
        <div className=" hidden border w-full lg:flex items-center my-[2vw]">
          <IoSearchOutline className="text-[2vw] ml-2 text-gray-500" />
          <input
            type="search"
            className="text-[1.4vw] bg-transparent w-full border-none outline-none focus:border-none focus:outline-none"
            placeholder="search"
          />
          <div className="flex items-center">
            <button className="bg-blue-600 h-fit text-[1.2vw] focus:border-none whitespace-nowrap text-white px-[1vw] py-[.5vw] ">
              Find Events{" "}
            </button>{" "}
            <button className="mx-[.5vw] py-[.8vw] border-b-[.2vw] border-transparent focus:border-black focus:border-b-[.2vw]">
              List{" "}
            </button>{" "}
            <button
              onClick={() => setViewMode(!viewMode)}
              className="mx-[.5vw] py-[.8vw] border-b-[.2vw] border-transparent focus:border-black focus:border-b-[.2vw]"
            >
              Month{" "}
            </button>{" "}
            <button className="mx-[.5vw] py-[.8vw] border-b-[.2vw] border-transparent focus:border-black focus:border-b-[.2vw]">
              Day{" "}
            </button>{" "}
          </div>{" "}
        </div>{" "}
        <div className="hidden  lg:flex flex-row items-center">
          <div className="">
            <button onClick={handlePast}>
              <IoChevronBack
                className={`text-gray-400 ${
                  active === "upcoming" ? " text-gray-700" : ""
                } text-[1.8vw] hover:text-gray-700`}
              />{" "}
            </button>{" "}
            <button onClick={handlePresent}>
              <IoIosArrowForward
                className={`text-gray-400 ${
                  active === "past" ? " text-gray-700" : ""
                } text-[1.8vw] hover:text-gray-700`}
              />{" "}
            </button>{" "}
          </div>{" "}
          <button
            onClick={handleToday}
            className="border text-[1.2vw] mx-[1vw] px-[1vw]"
          >
            Today{" "}
          </button>{" "}
          <div ref={datePickerRef} className="relative  inline-block ">
            <button
              onClick={handleIconClick}
              className="text-black text-[1.2vw] ml-3 cursor-pointer flex items-center"
            >
              {selectedDate ? (
                selectedDate.toDateString() === today.toDateString() ? (
                  <>
                    {" "}
                    {status}{" "}
                    <IoIosArrowUp
                      className={`ml-2 transition-transform duration-300 ${
                        isClicked ? "rotate-180" : ""
                      }`}
                    />{" "}
                  </>
                ) : (
                  <>
                    {" "}
                    {format(selectedDate, "MMMM dd")}
                    onwards{" "}
                    <IoIosArrowUp
                      onClick={handleIconClick}
                      className={`ml-2 transition-transform duration-300 ${
                        isClicked ? "rotate-180" : ""
                      }`}
                    />{" "}
                  </>
                )
              ) : (
                "Select a date"
              )}{" "}
            </button>{" "}
            {isCalendarOpen && (
              <div className="absolute z-10 mt-2">
                <DatePicker
                  selected={selectedDate}
                  onChange={handleDateChange}
                  inline
                />
              </div>
            )}{" "}
          </div>{" "}
        </div>{" "}
        {/* mobile tab */}{" "}
        <div className=" flex justify-between lg:hidden  relative items-center mt-[5vw]">
          <div ref={datePickerRef} className=" inline-block  lg:hidden">
            <button
              onClick={handleIconClick}
              className="text-gray-800 hover:text-gray-500   text-[4vw]   sm:text-[3vw]  md:text-[3vw] cursor-pointer flex items-center"
            >
              {selectedDate ? (
                selectedDate.toDateString() === today.toDateString() ? (
                  <>
                    {" "}
                    {status}{" "}
                    <IoIosArrowUp
                      className={`ml-2 transition-transform duration-300 ${
                        isClicked ? "rotate-180" : ""
                      }`}
                    />{" "}
                  </>
                ) : (
                  <>
                    {" "}
                    {format(selectedDate, "MMMM dd")}
                    onwards{" "}
                    <IoIosArrowUp
                      onClick={handleIconClick}
                      className={`ml-2 transition-transform duration-300 ${
                        isClicked ? "rotate-180" : ""
                      }`}
                    />{" "}
                  </>
                )
              ) : (
                "Select a date"
              )}{" "}
            </button>{" "}
            {isCalendarOpen && (
              <div className="absolute z-10 mt-2">
                <DatePicker
                  selected={selectedDate}
                  onChange={handleDateChange}
                  showMonthYearPicker
                  inline
                />
              </div>
            )}{" "}
          </div>{" "}
          <div className="flex ">
            <IoSearchOutline
              onClick={() => {
                setOpenSearch(!openSearch);
                setOpenCalender(false);
              }}
              className=" text-[4vw]   sm:text-[3vw]  md:text-[3vw] mr-[3vw] text-gray-800 hover:text-gray-500"
            />{" "}
            {openSearch && (
              <div className="absolute top-full left-0  w-full bg-white py-[2vw]">
                <form className=" flex justify-between items-center w-full  ">
                  <input
                    type="search"
                    placeholder="Search"
                    className="w-full border-none"
                  />
                  <IoSearchOutline className=" text-[4vw]   sm:text-[3vw]  md:text-[3vw] " />
                </form>{" "}
                <div className="bg-gray-600 h-[1px] w-full my-[2vw]"> </div>{" "}
                <button className="bg-blue-600 h-fit w-full  text-[4vw]   sm:text-[3vw]  md:text-[3vw] focus:border-none whitespace-nowrap text-white px-[1vw] py-[.5vw] ">
                  Find Events{" "}
                </button>{" "}
              </div>
            )}{" "}
            <SlCalender
              onClick={() => {
                setOpenCalender(!openCalender);
                setOpenSearch(false);
              }}
              className=" text-[3vw]   sm:text-[3vw]  md:text-[3vw]  text-gray-800 hover:text-gray-500"
            />{" "}
            {openCalender && (
              <div className="absolute top-full right-[2vw]  text-[2.5vw] py-[2vw] px-[2vw] border  sm:text-[3vw]  md:text-[3vw]   bg-white flex-col ">
                <button className="flex items-center justify-around mx-[.5vw] py-[.8vw] border-b-[.2vw] border-transparent focus:border-black focus:border-b-[.2vw]">
                  <CiViewList className="mr-[1vw]   text-[3.5vw] " /> List{" "}
                </button>{" "}
                <button className="flex  items-center mx-[.5vw] py-[.8vw] border-b-[.2vw] border-transparent focus:border-black focus:border-b-[.2vw]">
                  <MdCalendarMonth className="mr-[1vw]   text-[3.5vw] " /> Month{" "}
                </button>{" "}
                <button className="flex  items-center  mx-[.5vw] py-[.8vw] border-b-[.2vw] border-transparent focus:border-black focus:border-b-[.2vw]">
                  <MdToday className="mr-[1vw]   text-[3.5vw] " /> Day{" "}
                </button>{" "}
              </div>
            )}{" "}
          </div>{" "}
        </div>{" "}
        <div className="w-full hidden lg:block mt-[4vw]">
          {" "}
          {active === "upcoming" && (
            <div className="mb-8">
              {" "}
              {Object.keys(groupedUpcomingEvents).map((month, idx) => (
                <div key={idx}>
                  <h3 className="text-[1.2vw] font-semibold mb-2 whitespace-nowrap">
                    {" "}
                    {month}{" "}
                  </h3>{" "}
                  {groupedUpcomingEvents[month].map((event) => (
                    <div
                      key={event.id}
                      className="mb-4 p-4 w-full flex flex-row justify-between"
                    >
                      <div className="flex flex-col">
                        <p className="text-[1vw] uppercase leading-none">
                          {" "}
                          {extractWeekday(event.date)}{" "}
                        </p>{" "}
                        <p className="text-[2vw] font-bold">
                          {" "}
                          {extractDay(event.date)}{" "}
                        </p>{" "}
                      </div>{" "}
                      <div className="w-[66%] px-[2vw] text-[1vw]">
                        <p>
                          {" "}
                          {extractMonth(event.date)} {extractDay(event.date)}@{" "}
                          {event.time}{" "}
                        </p>{" "}
                        <h4 className="text-lg font-bold"> {event.title} </h4>{" "}
                        <p className="flex">
                          {" "}
                          {event.location}{" "}
                          {event.club && (
                            <p className="ml-[1vw]"> {event.club} </p>
                          )}{" "}
                        </p>{" "}
                        <div className="relative">
                          <p className="line-clamp-2 text-[1vw] text-gray-700">
                            {" "}
                            {event.description}{" "}
                          </p>{" "}
                          <span className="absolute text-[1vw] text-gray-700 bottom-0 right-0 bg-white hover:text-purple-600">
                            ...continue reading{" "}
                          </span>{" "}
                        </div>{" "}
                      </div>{" "}
                      <div className="w-[34%]">
                        <img
                          src={event.imageURL}
                          alt={event.id}
                          className="w-[18vw] px-[2vw]"
                        />
                      </div>{" "}
                    </div>
                  ))}{" "}
                </div>
              ))}{" "}
            </div>
          )}{" "}
          {active === "past" && (
            <div className="w-full">
              {" "}
              {Object.keys(groupedPastEvents).map((month, idx) => (
                <div key={idx}>
                  <div className="flex items-center">
                    <h3 className="text-[1.2vw] font-semibold mb-2 mr-[2vw] whitespace-nowrap">
                      {" "}
                      {month}{" "}
                    </h3>{" "}
                    <div className="w-full h-[.1vw] bg-gray-400"> </div>{" "}
                  </div>{" "}
                  {groupedPastEvents[month].map((event) => (
                    <div
                      key={event.id}
                      className="mb-4 p-4 w-full flex justify-between"
                    >
                      <div className="flex flex-col">
                        <p className="text-[1vw] uppercase leading-none">
                          {" "}
                          {extractWeekday(event.date)}{" "}
                        </p>{" "}
                        <p className="text-[2vw] font-bold">
                          {" "}
                          {extractDay(event.date)}{" "}
                        </p>{" "}
                      </div>{" "}
                      <div className="w-[66%] px-[2vw] text-[1vw]">
                        <p>
                          {" "}
                          {extractMonth(event.date)} {extractDay(event.date)}@{" "}
                          {event.time}{" "}
                        </p>{" "}
                        <h4 className="text-lg font-bold"> {event.title} </h4>{" "}
                        <p className="flex">
                          {" "}
                          {event.location}{" "}
                          {event.club && (
                            <p className="ml-[1vw]"> {event.club} </p>
                          )}{" "}
                        </p>{" "}
                        <div className="relative">
                          <p className="line-clamp-2 text-[1vw] text-gray-700">
                            {" "}
                            {event.description}{" "}
                          </p>{" "}
                          <span className="absolute text-[1vw] text-gray-700 bottom-0 right-0 bg-white hover:text-purple-600">
                            ...continue reading{" "}
                          </span>{" "}
                        </div>{" "}
                      </div>{" "}
                      <div className="w-[34%]">
                        <img
                          src={event.imageURL}
                          alt={event.id}
                          className="w-[18vw] px-[2vw]"
                        />
                      </div>{" "}
                    </div>
                  ))}{" "}
                </div>
              ))}{" "}
            </div>
          )}{" "}
        </div>{" "}
        {/* mobile and tab view */}{" "}
        <div className="w-full lg:hidden mt-[4vw]">
          {" "}
          {active === "upcoming" && (
            <div className="mb-8">
              {" "}
              {Object.keys(groupedUpcomingEvents).map((month, idx) => (
                <div key={idx}>
                  <div className="flex items-center my-[2vw]">
                    <h3 className=" text-[4vw]   sm:text-[3vw]  md:text-[2vw] font-semibold mb-2 whitespace-nowrap">
                      {" "}
                      {month}{" "}
                    </h3>{" "}
                    <div className="bg-gray-700 w-full h-[1px] mx-[2vw]"> </div>{" "}
                  </div>{" "}
                  {groupedUpcomingEvents[month].map((event) => (
                    <div
                      key={event.id}
                      className="mb-4 w-full flex flex-row justify-between"
                    >
                      <div className="flex flex-col  w-fit mr-[2vw]">
                        <p className=" text-[4vw]   sm:text-[3.5vw]  md:text-[2vw] uppercase leading-none">
                          {" "}
                          {extractWeekday(event.date)}{" "}
                        </p>{" "}
                        <p className=" text-[6vw]   sm:text-[4vw]  md:text-[3vw] font-bold">
                          {" "}
                          {extractDay(event.date)}{" "}
                        </p>{" "}
                      </div>{" "}
                      <div className=" w-full">
                        <div className="w-full">
                          <img
                            src={event.imageURL}
                            alt={event.id}
                            className="w-full px-[2vw]"
                          />
                        </div>{" "}
                        <div className="w-full px-[2vw] text-[1vw]">
                          <p className=" text-[3vw]   sm:text-[2.5vw]  md:text-[1.5vw]">
                            {" "}
                            {extractMonth(event.date)} {extractDay(event.date)}@{" "}
                            {event.time}{" "}
                          </p>{" "}
                          <h4 className=" text-[5vw]   sm:text-[4vw]  md:text-[2.5vw] font-bold">
                            {" "}
                            {event.title}{" "}
                          </h4>{" "}
                          <p className="flex  text-[3vw]   sm:text-[2.5vw]  md:text-[1.5vw]">
                            {event.location}
                            {event.club && (
                              <p className="ml-[1vw]"> {event.club} </p>
                            )}
                          </p>
                          <div className="relative my-[2vw]">
                            <p className="line-clamp-2  text-[3vw]   sm:text-[3vw]  md:text-[2vw] text-gray-700">
                              {event.description}
                            </p>
                            <span className="absolute  text-[3vw]   sm:text-[3vw]  md:text-[2.2vw] text-gray-700 bottom-0 right-0 bg-white hover:text-purple-600">
                              ...continue reading
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          )}
          {active === "past" && (
            <div className="w-full">
              {Object.keys(groupedPastEvents).map((month, idx) => (
                <div key={idx}>
                  <div className="flex items-center my-[2vw]">
                    <h3 className=" text-[4vw]   sm:text-[3vw]  md:text-[2vw] font-semibold mb-2 whitespace-nowrap">
                      {month}
                    </h3>
                    <div className="bg-gray-700 w-full h-[1px] mx-[2vw]"> </div>
                  </div>
                  {groupedPastEvents[month].map((event) => (
                    <div
                      key={event.id}
                      className="mb-4 w-full flex flex-row justify-between"
                    >
                      <div className="flex flex-col  w-fit mr-[2vw]">
                        <p className=" text-[4vw]   sm:text-[3.5vw]  md:text-[2vw] uppercase leading-none">
                          {extractWeekday(event.date)}
                        </p>
                        <p className=" text-[6vw]   sm:text-[4vw]  md:text-[3vw] font-bold">
                          {extractDay(event.date)}
                        </p>
                      </div>
                      <div className=" w-full">
                        <div className="w-full">
                          <img
                            src={event.imageURL}
                            alt={event.id}
                            className="w-full px-[2vw]"
                          />
                        </div>
                        <div className="w-full px-[2vw] text-[1vw]">
                          <p className=" text-[3vw]   sm:text-[2.5vw]  md:text-[1.5vw]">
                            {extractMonth(event.date)} {extractDay(event.date)}@
                            {event.time}
                          </p>
                          <h4 className=" text-[5vw]   sm:text-[4vw]  md:text-[2.5vw] font-bold">
                            {event.title}
                          </h4>
                          <p className="flex  text-[3vw]   sm:text-[2.5vw]  md:text-[1.5vw]">
                            {event.location}
                            {event.club && (
                              <p className="ml-[1vw]"> {event.club} </p>
                            )}
                          </p>
                          <div className="relative my-[2vw]">
                            <p className="line-clamp-2  text-[3vw]   sm:text-[3vw]  md:text-[2vw] text-gray-700">
                              {event.description}
                            </p>
                            <span className="absolute  text-[3vw]   sm:text-[3vw]  md:text-[2.2vw] text-gray-700 bottom-0 right-0 bg-white hover:text-purple-600">
                              ...continue reading
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}{" "}
            </div>
          )}{" "}
        </div>{" "}
        <div className="  my-[5vw]">
          <div className="flex justify-between">
            <button className="flex items-center" onClick={handlePast}>
              <IoChevronBack
                className={`text-gray-400 ${
                  active === "upcoming" ? " text-gray-700" : ""
                } text-[3vw] lg:text-[2vw] hover:text-gray-700`}
              />{" "}
              <p
                className={`text-gray-400 ${
                  active === "past" ? " text-gray-700" : ""
                } text-[3vw] lg:text-[2vw] hover:text-gray-700`}
              >
                Previous{" "}
              </p>{" "}
            </button>{" "}
            <button
              onClick={handleToday}
              className="border text-[3vw] lg:text-[1.5vw] mx-[1vw] px-[1vw]"
            >
              Today{" "}
            </button>{" "}
            <button className="flex items-center" onClick={handlePresent}>
              <p
                className={`text-gray-400 ${
                  active === "past" ? " text-gray-700" : ""
                } text-[3vw] lg:text-[2vw] hover:text-gray-700`}
              >
                Next{" "}
              </p>{" "}
              <IoIosArrowForward
                className={`text-gray-400 ${
                  active === "past" ? " text-gray-700" : ""
                } text-[3vw] hover:text-gray-700`}
              />{" "}
            </button>{" "}
          </div>{" "}
        </div>{" "}
        <div className="bg-slate-800 h-[1px] w-full"></div>
        <AddToCalender />
      </div>{" "}
    </div>
  );
};

export default AllEvents;

// import React, { useState, useRef, useEffect } from "react";
// import { compareDates, groupByMonth } from "./utils";
// import { events } from "../Data";
// import { parse, format, isAfter, isBefore } from "date-fns";
// import { IoChevronBack } from "react-icons/io5";
// import { IoIosArrowForward } from "react-icons/io";
// import { SlCalender } from "react-icons/sl";
// import { CiViewList } from "react-icons/ci";
// import { MdToday } from "react-icons/md";
// import { MdCalendarMonth } from "react-icons/md";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import { IoIosArrowUp } from "react-icons/io";
// import { IoSearchOutline } from "react-icons/io5";
// import "./AllEvents.css";
// import Navigation from "./Navigation";

// const AllEvents = () => {
//   const today = new Date();
//   const [selectedDate, setSelectedDate] = useState(today);
//   const [pastEvents, setPastEvents] = useState([]);
//   const [upcomingEvents, setUpcomingEvents] = useState([]);
//   const [groupedPastEvents, setGroupedPastEvents] = useState({});
//   const [groupedUpcomingEvents, setGroupedUpcomingEvents] = useState({});
//   const [active, setActive] = useState("upcoming");
//   const [isClicked, setIsClicked] = useState(false);
//   const datePickerRef = useRef(null);
//   const [openSearch, setOpenSearch] = useState(false);
//   const [openCalender, setOpenCalender] = useState(false);

//   const [isCalendarOpen, setIsCalendarOpen] = useState(false);

//   const [status, setStatus] = useState("upcoming");
//   const [viewMode, setViewMode] = useState(false);

//   const handleIconClick = (event) => {
//     setIsClicked(!isClicked);
//     setIsCalendarOpen(!isCalendarOpen);

//     console.log("cliked");
//   };

//   const handleClickOutside = (event) => {
//     if (
//       datePickerRef.current &&
//       !datePickerRef.current.contains(event.target)
//     ) {
//       setIsCalendarOpen(false);
//       setIsClicked(!isClicked);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   const handleDateChange = (date) => {
//     setSelectedDate(date);
//     setActive("upcoming");
//   };

//   const extractDay = (dateString) => {
//     const date = parse(dateString, "MMMM dd, yyyy", new Date());
//     return format(date, "dd");
//   };

//   const extractWeekday = (dateString) => {
//     const date = parse(dateString, "MMMM dd, yyyy", new Date());
//     return format(date, "EEE");
//   };

//   const extractMonth = (dateString) => {
//     const date = parse(dateString, "MMMM dd, yyyy", new Date());
//     return format(date, "MMMM");
//   };

//   const filterEvents = (date) => {
//     const parseEventDate = (dateString) => {
//       return parse(dateString, "MMMM dd, yyyy", new Date());
//     };

//     const past = events.filter((event) =>
//       isBefore(parseEventDate(event.date), date)
//     );
//     const upcoming = events.filter(
//       (event) => !isBefore(parseEventDate(event.date), date)
//     );

//     setPastEvents(past);
//     setUpcomingEvents(upcoming);
//   };

//   useEffect(() => {
//     filterEvents(selectedDate);
//   }, [selectedDate]);

//   useEffect(() => {
//     setGroupedPastEvents(groupByMonth(pastEvents));
//     setGroupedUpcomingEvents(groupByMonth(upcomingEvents));
//   }, [pastEvents, upcomingEvents]);

//   const handlePast = () => {
//     // const defaultDate = new Date("2024-03-14");
//     const defaultDate = new Date();
//     setActive("past");
//     setStatus("March 14 - Now");

//     setSelectedDate(defaultDate);
//     // setSelectedDate(defaultDate);
//   };

//   const handlePresent = () => {
//     const defaultDate = new Date();
//     setActive("upcoming");
//     setStatus("Upcoming");

//     setSelectedDate(defaultDate);
//     // setSelectedDate(defaultDate);
//   };
//   const handleToday = () => {
//     const defaultDate = new Date();
//     setActive("upcoming");

//     setSelectedDate(defaultDate);
//     // setSelectedDate(defaultDate);
//   };

//   return (
//     <div className="w-full">
//       <div className="bg-black w-full">
//         <Navigation />
//       </div>{" "}
//       <div className="w-full flex justify-center items-center h-[30vw] md:h-[20vw] bg-cover bg-[url('https://res.cloudinary.com/drvjsegeb/image/upload/v1717399420/slider_h7kdml.jpg')]">
//         <p className="uppercase text-[5vw] text-white"> events </p>{" "}
//       </div>{" "}
//       <div className="container mx-auto w-full px-[2vw] lg:px-[15vw]">
//         <div className=" hidden border w-full lg:flex items-center my-[2vw]">
//           <IoSearchOutline className="text-[2vw] ml-2 text-gray-500" />
//           <input
//             type="search"
//             className="text-[1.4vw] bg-transparent w-full border-none outline-none focus:border-none focus:outline-none"
//             placeholder="search"
//           />
//           <div className="flex items-center">
//             <button className="bg-blue-600 h-fit text-[1.2vw] focus:border-none whitespace-nowrap text-white px-[1vw] py-[.5vw] ">
//               Find Events{" "}
//             </button>{" "}
//             <button className="mx-[.5vw] py-[.8vw] border-b-[.2vw] border-transparent focus:border-black focus:border-b-[.2vw]">
//               List{" "}
//             </button>{" "}
//             <button
//               onClick={() => setViewMode(!viewMode)}
//               className="mx-[.5vw] py-[.8vw] border-b-[.2vw] border-transparent focus:border-black focus:border-b-[.2vw]"
//             >
//               Month{" "}
//             </button>{" "}
//             <button className="mx-[.5vw] py-[.8vw] border-b-[.2vw] border-transparent focus:border-black focus:border-b-[.2vw]">
//               Day{" "}
//             </button>{" "}
//           </div>{" "}
//         </div>{" "}
//         <div className="hidden  lg:flex flex-row items-center">
//           <div className="">
//             <button onClick={handlePast}>
//               <IoChevronBack
//                 className={`text-gray-400 ${
//                   active === "upcoming" ? " text-gray-700" : ""
//                 } text-[1.8vw] hover:text-gray-700`}
//               />{" "}
//             </button>{" "}
//             <button onClick={handlePresent}>
//               <IoIosArrowForward
//                 className={`text-gray-400 ${
//                   active === "past" ? " text-gray-700" : ""
//                 } text-[1.8vw] hover:text-gray-700`}
//               />{" "}
//             </button>{" "}
//           </div>{" "}
//           <button
//             onClick={handleToday}
//             className="border text-[1.2vw] mx-[1vw] px-[1vw]"
//           >
//             Today{" "}
//           </button>{" "}
//           <div ref={datePickerRef} className="relative  inline-block ">
//             <button
//               onClick={handleIconClick}
//               className="text-black text-[1.2vw] ml-3 cursor-pointer flex items-center"
//             >
//               {" "}
//               {selectedDate ? (
//                 selectedDate.toDateString() === today.toDateString() ? (
//                   <>
//                     {" "}
//                     {status}{" "}
//                     <IoIosArrowUp
//                       className={`ml-2 transition-transform duration-300 ${
//                         isClicked ? "rotate-180" : ""
//                       }`}
//                     />{" "}
//                   </>
//                 ) : (
//                   <>
//                     {" "}
//                     {format(selectedDate, "MMMM dd")}
//                     onwards{" "}
//                     <IoIosArrowUp
//                       onClick={handleIconClick}
//                       className={`ml-2 transition-transform duration-300 ${
//                         isClicked ? "rotate-180" : ""
//                       }`}
//                     />{" "}
//                   </>
//                 )
//               ) : (
//                 "Select a date"
//               )}{" "}
//             </button>{" "}
//             {isCalendarOpen && (
//               <div className="absolute z-10 mt-2">
//                 <DatePicker
//                   selected={selectedDate}
//                   onChange={handleDateChange}
//                   inline
//                 />
//               </div>
//             )}{" "}
//           </div>{" "}
//         </div>{" "}
//         {/* mobile tab */}{" "}
//         <div className=" flex justify-between lg:hidden  relative items-center mt-[5vw]">
//           <div ref={datePickerRef} className=" inline-block  lg:hidden">
//             <button
//               onClick={handleIconClick}
//               className="text-gray-800 hover:text-gray-500   text-[4vw]   sm:text-[3vw]  md:text-[3vw] cursor-pointer flex items-center"
//             >
//               {" "}
//               {selectedDate ? (
//                 selectedDate.toDateString() === today.toDateString() ? (
//                   <>
//                     {" "}
//                     {status}{" "}
//                     <IoIosArrowUp
//                       className={`ml-2 transition-transform duration-300 ${
//                         isClicked ? "rotate-180" : ""
//                       }`}
//                     />{" "}
//                   </>
//                 ) : (
//                   <>
//                     {" "}
//                     {format(selectedDate, "MMMM dd")}
//                     onwards{" "}
//                     <IoIosArrowUp
//                       onClick={handleIconClick}
//                       className={`ml-2 transition-transform duration-300 ${
//                         isClicked ? "rotate-180" : ""
//                       }`}
//                     />{" "}
//                   </>
//                 )
//               ) : (
//                 "Select a date"
//               )}{" "}
//             </button>{" "}
//             {isCalendarOpen && (
//               <div className="absolute z-10 mt-2">
//                 <DatePicker
//                   selected={selectedDate}
//                   onChange={handleDateChange}
//                   showMonthYearPicker
//                   inline
//                 />
//               </div>
//             )}{" "}
//           </div>{" "}
//           <div className="flex ">
//             <IoSearchOutline
//               onClick={() => {
//                 setOpenSearch(!openSearch);
//                 setOpenCalender(false);
//               }}
//               className=" text-[4vw]   sm:text-[3vw]  md:text-[3vw] mr-[3vw] text-gray-800 hover:text-gray-500"
//             />{" "}
//             {openSearch && (
//               <div className="absolute top-full left-0  w-full bg-white py-[2vw]">
//                 <form className=" flex justify-between items-center w-full  ">
//                   <input
//                     type="search"
//                     placeholder="Search"
//                     className="w-full border-none"
//                   />
//                   <IoSearchOutline className=" text-[4vw]   sm:text-[3vw]  md:text-[3vw] " />
//                 </form>{" "}
//                 <div className="bg-gray-600 h-[1px] w-full my-[2vw]"> </div>{" "}
//                 <button className="bg-blue-600 h-fit w-full  text-[4vw]   sm:text-[3vw]  md:text-[3vw] focus:border-none whitespace-nowrap text-white px-[1vw] py-[.5vw] ">
//                   Find Events{" "}
//                 </button>{" "}
//               </div>
//             )}{" "}
//             <SlCalender
//               onClick={() => {
//                 setOpenCalender(!openCalender);
//                 setOpenSearch(false);
//               }}
//               className=" text-[3vw]   sm:text-[3vw]  md:text-[3vw]  text-gray-800 hover:text-gray-500"
//             />{" "}
//             {openCalender && (
//               <div className="absolute top-full right-[2vw]  text-[2.5vw] py-[2vw] px-[2vw] border  sm:text-[3vw]  md:text-[3vw]   bg-white flex-col ">
//                 <button className="flex items-center justify-around mx-[.5vw] py-[.8vw] border-b-[.2vw] border-transparent focus:border-black focus:border-b-[.2vw]">
//                   <CiViewList className="mr-[1vw]   text-[3.5vw] " /> List{" "}
//                 </button>{" "}
//                 <button className="flex  items-center mx-[.5vw] py-[.8vw] border-b-[.2vw] border-transparent focus:border-black focus:border-b-[.2vw]">
//                   <MdCalendarMonth className="mr-[1vw]   text-[3.5vw] " /> Month{" "}
//                 </button>{" "}
//                 <button className="flex  items-center  mx-[.5vw] py-[.8vw] border-b-[.2vw] border-transparent focus:border-black focus:border-b-[.2vw]">
//                   <MdToday className="mr-[1vw]   text-[3.5vw] " /> Day{" "}
//                 </button>{" "}
//               </div>
//             )}{" "}
//           </div>{" "}
//         </div>{" "}
//         <div className="w-full hidden lg:block mt-[4vw]">
//           {" "}
//           {active === "upcoming" && (
//             <div className="mb-8">
//               {" "}
//               {Object.keys(groupedUpcomingEvents).map((month, idx) => (
//                 <div key={idx}>
//                   <h3 className="text-[1.2vw] font-semibold mb-2 whitespace-nowrap">
//                     {" "}
//                     {month}{" "}
//                   </h3>{" "}
//                   {groupedUpcomingEvents[month].map((event) => (
//                     <div
//                       key={event.id}
//                       className="mb-4 p-4 w-full flex flex-row justify-between"
//                     >
//                       <div className="flex flex-col">
//                         <p className="text-[1vw] uppercase leading-none">
//                           {" "}
//                           {extractWeekday(event.date)}{" "}
//                         </p>{" "}
//                         <p className="text-[2vw] font-bold">
//                           {" "}
//                           {extractDay(event.date)}{" "}
//                         </p>{" "}
//                       </div>{" "}
//                       <div className="w-[66%] px-[2vw] text-[1vw]">
//                         <p>
//                           {" "}
//                           {extractMonth(event.date)} {extractDay(event.date)}@{" "}
//                           {event.time}{" "}
//                         </p>{" "}
//                         <h4 className="text-lg font-bold"> {event.title} </h4>{" "}
//                         <p className="flex">
//                           {" "}
//                           {event.location}{" "}
//                           {event.club && (
//                             <p className="ml-[1vw]"> {event.club} </p>
//                           )}{" "}
//                         </p>{" "}
//                         <div className="relative">
//                           <p className="line-clamp-2 text-[1vw] text-gray-700">
//                             {" "}
//                             {event.description}{" "}
//                           </p>{" "}
//                           <span className="absolute text-[1vw] text-gray-700 bottom-0 right-0 bg-white hover:text-purple-600">
//                             ...continue reading{" "}
//                           </span>{" "}
//                         </div>{" "}
//                       </div>{" "}
//                       <div className="w-[34%]">
//                         <img
//                           src={event.imageURL}
//                           alt={event.id}
//                           className="w-[18vw] px-[2vw]"
//                         />
//                       </div>{" "}
//                     </div>
//                   ))}{" "}
//                 </div>
//               ))}{" "}
//             </div>
//           )}{" "}
//           {active === "past" && (
//             <div className="w-full">
//               {" "}
//               {Object.keys(groupedPastEvents).map((month, idx) => (
//                 <div key={idx}>
//                   <div className="flex items-center">
//                     <h3 className="text-[1.2vw] font-semibold mb-2 mr-[2vw] whitespace-nowrap">
//                       {" "}
//                       {month}{" "}
//                     </h3>{" "}
//                     <div className="w-full h-[.1vw] bg-gray-400"> </div>{" "}
//                   </div>{" "}
//                   {groupedPastEvents[month].map((event) => (
//                     <div
//                       key={event.id}
//                       className="mb-4 p-4 w-full flex justify-between"
//                     >
//                       <div className="flex flex-col">
//                         <p className="text-[1vw] uppercase leading-none">
//                           {" "}
//                           {extractWeekday(event.date)}{" "}
//                         </p>{" "}
//                         <p className="text-[2vw] font-bold">
//                           {" "}
//                           {extractDay(event.date)}{" "}
//                         </p>{" "}
//                       </div>{" "}
//                       <div className="w-[66%] px-[2vw] text-[1vw]">
//                         <p>
//                           {" "}
//                           {extractMonth(event.date)} {extractDay(event.date)}@{" "}
//                           {event.time}{" "}
//                         </p>{" "}
//                         <h4 className="text-lg font-bold"> {event.title} </h4>{" "}
//                         <p className="flex">
//                           {" "}
//                           {event.location}{" "}
//                           {event.club && (
//                             <p className="ml-[1vw]"> {event.club} </p>
//                           )}{" "}
//                         </p>{" "}
//                         <div className="relative">
//                           <p className="line-clamp-2 text-[1vw] text-gray-700">
//                             {" "}
//                             {event.description}{" "}
//                           </p>{" "}
//                           <span className="absolute text-[1vw] text-gray-700 bottom-0 right-0 bg-white hover:text-purple-600">
//                             ...continue reading{" "}
//                           </span>{" "}
//                         </div>{" "}
//                       </div>{" "}
//                       <div className="w-[34%]">
//                         <img
//                           src={event.imageURL}
//                           alt={event.id}
//                           className="w-[18vw] px-[2vw]"
//                         />
//                       </div>{" "}
//                     </div>
//                   ))}{" "}
//                 </div>
//               ))}{" "}
//             </div>
//           )}{" "}
//         </div>{" "}
//         {/ * mobile and tab view * /}{" "}
//         <div className="w-full lg:hidden mt-[4vw]">
//           {" "}
//           {active === "upcoming" && (
//             <div className="mb-8">
//               {" "}
//               {Object.keys(groupedUpcomingEvents).map((month, idx) => (
//                 <div key={idx}>
//                   <div className="flex items-center my-[2vw]">
//                     <h3 className=" text-[4vw]   sm:text-[3vw]  md:text-[2vw] font-semibold mb-2 whitespace-nowrap">
//                       {" "}
//                       {month}{" "}
//                     </h3>{" "}
//                     <div className="bg-gray-700 w-full h-[1px] mx-[2vw]"> </div>{" "}
//                   </div>{" "}
//                   {groupedUpcomingEvents[month].map((event) => (
//                     <div
//                       key={event.id}
//                       className="mb-4 w-full flex flex-row justify-between"
//                     >
//                       <div className="flex flex-col  w-fit mr-[2vw]">
//                         <p className=" text-[4vw]   sm:text-[3.5vw]  md:text-[2vw] uppercase leading-none">
//                           {" "}
//                           {extractWeekday(event.date)}{" "}
//                         </p>{" "}
//                         <p className=" text-[6vw]   sm:text-[4vw]  md:text-[3vw] font-bold">
//                           {" "}
//                           {extractDay(event.date)}{" "}
//                         </p>{" "}
//                       </div>{" "}
//                       <div className=" w-full">
//                         <div className="w-full">
//                           <img
//                             src={event.imageURL}
//                             alt={event.id}
//                             className="w-full px-[2vw]"
//                           />
//                         </div>{" "}
//                         <div className="w-full px-[2vw] text-[1vw]">
//                           <p className=" text-[3vw]   sm:text-[2.5vw]  md:text-[1.5vw]">
//                             {" "}
//                             {extractMonth(event.date)} {extractDay(event.date)}@{" "}
//                             {event.time}{" "}
//                           </p>{" "}
//                           <h4 className=" text-[5vw]   sm:text-[4vw]  md:text-[2.5vw] font-bold">
//                             {" "}
//                             {event.title}{" "}
//                           </h4>{" "}
//                           <p className="flex  text-[3vw]   sm:text-[2.5vw]  md:text-[1.5vw]">
//                             {" "}
//                             {event.location}{" "}
//                             {event.club && (
//                               <p className="ml-[1vw]"> {event.club} </p>
//                             )}{" "}
//                           </p>{" "}
//                           <div className="relative my-[2vw]">
//                             <p className="line-clamp-2  text-[3vw]   sm:text-[3vw]  md:text-[2vw] text-gray-700">
//                               {" "}
//                               {event.description}{" "}
//                             </p>{" "}
//                             <span className="absolute  text-[3vw]   sm:text-[3vw]  md:text-[2.2vw] text-gray-700 bottom-0 right-0 bg-white hover:text-purple-600">
//                               ...continue reading{" "}
//                             </span>{" "}
//                           </div>{" "}
//                         </div>{" "}
//                       </div>{" "}
//                     </div>
//                   ))}{" "}
//                 </div>
//               ))}{" "}
//             </div>
//           )}{" "}
//           {active === "past" && (
//             <div className="w-full">
//               {" "}
//               {Object.keys(groupedPastEvents).map((month, idx) => (
//                 <div key={idx}>
//                   <div className="flex items-center my-[2vw]">
//                     <h3 className=" text-[4vw]   sm:text-[3vw]  md:text-[2vw] font-semibold mb-2 whitespace-nowrap">
//                       {" "}
//                       {month}{" "}
//                     </h3>{" "}
//                     <div className="bg-gray-700 w-full h-[1px] mx-[2vw]"> </div>{" "}
//                   </div>{" "}
//                   {groupedPastEvents[month].map((event) => (
//                     <div
//                       key={event.id}
//                       className="mb-4 w-full flex flex-row justify-between"
//                     >
//                       <div className="flex flex-col  w-fit mr-[2vw]">
//                         <p className=" text-[4vw]   sm:text-[3.5vw]  md:text-[2vw] uppercase leading-none">
//                           {" "}
//                           {extractWeekday(event.date)}{" "}
//                         </p>{" "}
//                         <p className=" text-[6vw]   sm:text-[4vw]  md:text-[3vw] font-bold">
//                           {" "}
//                           {extractDay(event.date)}{" "}
//                         </p>{" "}
//                       </div>{" "}
//                       <div className=" w-full">
//                         <div className="w-full">
//                           <img
//                             src={event.imageURL}
//                             alt={event.id}
//                             className="w-full px-[2vw]"
//                           />
//                         </div>{" "}
//                         <div className="w-full px-[2vw] text-[1vw]">
//                           <p className=" text-[3vw]   sm:text-[2.5vw]  md:text-[1.5vw]">
//                             {" "}
//                             {extractMonth(event.date)} {extractDay(event.date)}@{" "}
//                             {event.time}{" "}
//                           </p>{" "}
//                           <h4 className=" text-[5vw]   sm:text-[4vw]  md:text-[2.5vw] font-bold">
//                             {" "}
//                             {event.title}{" "}
//                           </h4>{" "}
//                           <p className="flex  text-[3vw]   sm:text-[2.5vw]  md:text-[1.5vw]">
//                             {" "}
//                             {event.location}{" "}
//                             {event.club && (
//                               <p className="ml-[1vw]"> {event.club} </p>
//                             )}{" "}
//                           </p>{" "}
//                           <div className="relative my-[2vw]">
//                             <p className="line-clamp-2  text-[3vw]   sm:text-[3vw]  md:text-[2vw] text-gray-700">
//                               {" "}
//                               {event.description}{" "}
//                             </p>{" "}
//                             <span className="absolute  text-[3vw]   sm:text-[3vw]  md:text-[2.2vw] text-gray-700 bottom-0 right-0 bg-white hover:text-purple-600">
//                               ...continue reading{" "}
//                             </span>{" "}
//                           </div>{" "}
//                         </div>{" "}
//                       </div>{" "}
//                     </div>
//                   ))}{" "}
//                 </div>
//               ))}{" "}
//             </div>
//           )}{" "}
//         </div>{" "}
//         <div className=" lg:hidden my-[5vw]">
//           <div className="flex justify-between">
//             <button className="flex items-center" onClick={handlePast}>
//               <IoChevronBack
//                 className={`text-gray-400 ${
//                   active === "upcoming" ? " text-gray-700" : ""
//                 } text-[3vw] hover:text-gray-700`}
//               />{" "}
//               <p
//                 className={`text-gray-400 ${
//                   active === "past" ? " text-gray-700" : ""
//                 } text-[3vw] hover:text-gray-700`}
//               >
//                 Previous{" "}
//               </p>
//             </button>
//             <button
//               onClick={handleToday}
//               className="border text-[3vw] mx-[1vw] px-[1vw]"
//             >
//               Today
//             </button>
//             <button className="flex items-center" onClick={handlePresent}>
//               <p
//                 className={`text-gray-400 ${
//                   active === "past" ? " text-gray-700" : ""
//                 } text-[3vw] hover:text-gray-700`}
//               >
//                 Next
//               </p>
//               <IoIosArrowForward
//                 className={`text-gray-400 ${
//                   active === "past" ? " text-gray-700" : ""
//                 } text-[3vw] hover:text-gray-700`}
//               />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AllEvents;
