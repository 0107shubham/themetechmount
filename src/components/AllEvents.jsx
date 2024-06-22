import React, { useState, useRef, useEffect } from "react";
import { compareDates, groupByMonth } from "./utils";
import { events } from "../Data";
import { parse, format, isAfter, isBefore } from "date-fns";
import { IoChevronBack } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { IoIosArrowUp } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import "./AllEvents.css";
import Navigation from "./Navigation";

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

  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const [status, setStatus] = useState("upcoming");

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
    <div>
      <div className="bg-black w-full">
        <Navigation />
      </div>

      <div className="container mx-auto w-full px-[15vw]">
        <div className="border w-full flex items-center my-[2vw]">
          <IoSearchOutline className="text-[2vw] ml-2 text-gray-500" />
          <input
            type="search"
            className="text-[1.4vw] bg-transparent w-full border-none outline-none focus:border-none focus:outline-none"
            placeholder="search"
          />
          <div className="flex items-center">
            <button className="bg-blue-600 h-fit text-[1.2vw] focus:border-none whitespace-nowrap text-white px-[1vw] py-[.5vw] ">
              Find Events
            </button>
            <button className="mx-[.5vw] py-[.8vw] border-b-[.2vw] border-transparent focus:border-black focus:border-b-[.2vw]">
              List
            </button>
            <button className="mx-[.5vw] py-[.8vw] border-b-[.2vw] border-transparent focus:border-black focus:border-b-[.2vw]">
              Month
            </button>
            <button className="mx-[.5vw] py-[.8vw] border-b-[.2vw] border-transparent focus:border-black focus:border-b-[.2vw]">
              Day
            </button>
          </div>
        </div>
        <div className="flex items-center">
          <div>
            <button onClick={handlePast}>
              <IoChevronBack
                className={`text-gray-400 ${
                  active === "upcoming" ? " text-gray-700" : ""
                } text-[1.8vw] hover:text-gray-700`}
              />
            </button>
            <button onClick={handlePresent}>
              <IoIosArrowForward
                className={`text-gray-400 ${
                  active === "past" ? " text-gray-700" : ""
                } text-[1.8vw] hover:text-gray-700`}
              />
            </button>
          </div>

          <button
            onClick={handleToday}
            className="border text-[1.2vw] mx-[1vw] px-[1vw]"
          >
            Today
          </button>

          <div ref={datePickerRef} className="relative inline-block">
            <button
              onClick={handleIconClick}
              className="text-black text-[1.2vw] ml-3 cursor-pointer flex items-center"
            >
              {selectedDate ? (
                selectedDate.toDateString() === today.toDateString() ? (
                  <>
                    {status}
                    <IoIosArrowUp
                      className={`ml-2 transition-transform duration-300 ${
                        isClicked ? "rotate-180" : ""
                      }`}
                    />
                  </>
                ) : (
                  <>
                    {format(selectedDate, "MMMM dd")} onwards
                    <IoIosArrowUp
                      onClick={handleIconClick}
                      className={`ml-2 transition-transform duration-300 ${
                        isClicked ? "rotate-180" : ""
                      }`}
                    />
                  </>
                )
              ) : (
                "Select a date"
              )}
            </button>
            {isCalendarOpen && (
              <div className="absolute z-10 mt-2">
                <DatePicker
                  selected={selectedDate}
                  onChange={handleDateChange}
                  inline
                />
              </div>
            )}
          </div>
        </div>
        <div className="w-full mt-[4vw]">
          {active === "upcoming" && (
            <div className="mb-8">
              {Object.keys(groupedUpcomingEvents).map((month, idx) => (
                <div key={idx}>
                  <h3 className="text-[1.2vw] font-semibold mb-2 whitespace-nowrap">
                    {month}
                  </h3>
                  {groupedUpcomingEvents[month].map((event) => (
                    <div
                      key={event.id}
                      className="mb-4 p-4 w-full flex justify-between"
                    >
                      <div className="flex flex-col">
                        <p className="text-[1vw] uppercase leading-none">
                          {extractWeekday(event.date)}
                        </p>
                        <p className="text-[2vw] font-bold">
                          {extractDay(event.date)}
                        </p>
                      </div>
                      <div className="w-[66%] px-[2vw] text-[1vw]">
                        <p>
                          {extractMonth(event.date)}
                          {extractDay(event.date)} @ {event.time}
                        </p>
                        <h4 className="text-lg font-bold">{event.title}</h4>
                        <p className="flex">
                          {event.location}
                          {event.club && (
                            <p className="ml-[1vw]">{event.club}</p>
                          )}
                        </p>
                        <div className="relative">
                          <p className="line-clamp-2 text-[1vw] text-gray-700">
                            {event.description}
                          </p>
                          <span className="absolute text-[1vw] text-gray-700 bottom-0 right-0 bg-white hover:text-purple-600">
                            ... continue reading
                          </span>
                        </div>
                      </div>
                      <div className="w-[34%]">
                        <img
                          src={event.imageURL}
                          alt={event.id}
                          className="w-[18vw] px-[2vw]"
                        />
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
                  <div className="flex items-center">
                    <h3 className="text-[1.2vw] font-semibold mb-2 mr-[2vw] whitespace-nowrap">
                      {month}
                    </h3>
                    <div className="w-full h-[.1vw] bg-gray-400"></div>
                  </div>
                  {groupedPastEvents[month].map((event) => (
                    <div
                      key={event.id}
                      className="mb-4 p-4 w-full flex justify-between"
                    >
                      <div className="flex flex-col">
                        <p className="text-[1vw] uppercase leading-none">
                          {extractWeekday(event.date)}
                        </p>
                        <p className="text-[2vw] font-bold">
                          {extractDay(event.date)}
                        </p>
                      </div>
                      <div className="w-[66%] px-[2vw] text-[1vw]">
                        <p>
                          {extractMonth(event.date)}
                          {extractDay(event.date)} @ {event.time}
                        </p>
                        <h4 className="text-lg font-bold">{event.title}</h4>
                        <p className="flex">
                          {event.location}
                          {event.club && (
                            <p className="ml-[1vw]">{event.club}</p>
                          )}
                        </p>
                        <div className="relative">
                          <p className="line-clamp-2 text-[1vw] text-gray-700">
                            {event.description}
                          </p>
                          <span className="absolute text-[1vw] text-gray-700 bottom-0 right-0 bg-white hover:text-purple-600">
                            ... continue reading
                          </span>
                        </div>
                      </div>
                      <div className="w-[34%]">
                        <img
                          src={event.imageURL}
                          alt={event.id}
                          className="w-[18vw] px-[2vw]"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllEvents;

// import React, { useState, useEffect } from "react";
// import { compareDates, groupByMonth } from "./utils";
// import { events } from "../Data";
// import { parse, format } from "date-fns";
// import { IoChevronBack } from "react-icons/io5";
// import { IoIosArrowForward } from "react-icons/io";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

// const AllEvents = () => {
//   const defaultDate = new Date("2024-03-14");
//   const [pastEvents, setPastEvents] = useState([]);
//   const [upcomingEvents, setUpcomingEvents] = useState([]);
//   const [groupedPastEvents, setGroupedPastEvents] = useState({});
//   const [groupedUpcomingEvents, setGroupedUpcomingEvents] = useState({});
//   const [active, setActive] = useState("upcoming");

//   const [selectedDate, setSelectedDate] = useState(defaultDate);
//   console.log("groupbymonth", groupByMonth);

//   function filterEventsByDateRange(startDate, endDate) {
//     // Convert start and end dates to Date objects for comparison
//     const start = new Date(startDate);
//     const end = new Date(endDate);

//     // Filter events that fall within the date range
//     const filteredEvents = events.filter((event) => {
//       const eventDate = new Date(event.date);
//       return eventDate >= start && eventDate <= end;
//     });

//     return filteredEvents;
//   }

//   // Example usage:
//   const startDate = "2024-03-01"; // Start date of range (YYYY-MM-DD format)
//   const endDate = "2024-04-30"; // End date of range (YYYY-MM-DD format)

//   const handleDateChange = (date) => {
//     setSelectedDate(date);
//   };

//   const extractDay = (dateString) => {
//     const date = parse(dateString, "MMMM dd, yyyy", new Date());
//     return format(date, "dd");
//   };

//   const extractWeekday = (dateString) => {
//     const date = parse(dateString, "MMMM dd, yyyy", new Date());
//     return format(date, "EEE"); // 'EEEE' gives the full name of the day of the week
//   };

//   const extractMonth = (dateString) => {
//     const date = parse(dateString, "MMMM dd, yyyy", new Date());
//     return format(date, "MMMM");
//   };
//   const today = new Date();
//   console.log(today, "selected", selectedDate);

//   useEffect(() => {
//     const today = new Date();

//     const past = events.filter(
//       (event) => compareDates(event.date, selectedDate) < 0
//     );
//     const upcoming = events.filter(
//       (event) => compareDates(event.date, today) >= 0
//     );

//     setPastEvents(past);
//     setUpcomingEvents(upcoming);

//     setGroupedPastEvents(groupByMonth(past));
//     setGroupedUpcomingEvents(groupByMonth(upcoming));
//   }, []);

//   console.log("group", groupedPastEvents);

//   return (
//     <div className="container mx-auto w-full px-[15vw]">
//       <div>
//         <div>
//           <button onClick={() => setActive("past")}>
//             {" "}
//             <IoChevronBack
//               className={`text-gray-400 ${
//                 active === "upcoming" ? " text-gray-700" : ""
//               } text-[2vw] hover:text-gray-700`}
//             />
//           </button>
//           <button onClick={() => setActive("upcoming")}>
//             <IoIosArrowForward
//               className={`text-gray-400 ${
//                 active === "past" ? " text-gray-700" : ""
//               } text-[2vw] hover:text-gray-700`}
//             />
//           </button>
//         </div>
//         <DatePicker
//           selected={selectedDate}
//           onChange={handleDateChange}
//           customInput={
//             <button className="text-blue-600  cursor-pointer">
//               {selectedDate ? selectedDate.toDateString() : "Select a date"}
//               {/* March 14 - December 1 <span></span> */}
//             </button>
//           }
//         />
//       </div>
//       {active === "upcoming" && (
//         <div className="mb-8">
//           <h2 className="text-2xl font-bold mb-4">Upcoming Events</h2>
//           {Object.keys(groupedUpcomingEvents).map((month, idx) => (
//             <div key={idx}>
//               <h3 className="text-[1.2vw] font-semibold mb-2 whitespace-nowrap">
//                 {month} {console.log(groupedUpcomingEvents)}
//               </h3>
//               {groupedUpcomingEvents[month].map((event) => (
//                 <div
//                   key={event.id}
//                   className="mb-4 p-4   w-full flex justify-between"
//                 >
//                   <div className="flex flex-col">
//                     <p className="text-[1vw] uppercase leading-none">
//                       {extractWeekday(event.date)}
//                     </p>
//                     <p className="text-[2vw] font-bold">
//                       {" "}
//                       {extractDay(event.date)}
//                     </p>
//                   </div>
//                   <div className="w-[66%] px-[2vw] text-[1vw]">
//                     {" "}
//                     <p>
//                       {extractMonth(event.date)}
//                       {extractDay(event.date)} @ {event.time}
//                     </p>
//                     <h4 className="text-lg font-bold">{event.title}</h4>
//                     <p className="flex">
//                       {" "}
//                       {event.location}
//                       {event.club && <p className="ml-[1vw]">{event.club}</p>}
//                     </p>
//                     <div className="relative">
//                       <p className="line-clamp-2 text-[1vw] text-gray-700   ">
//                         {event.description}
//                       </p>
//                       <span className="absolute text-[1vw] text-gray-700  bottom-0 right-0 bg-white hover:text-purple-600">
//                         ... continue reading
//                       </span>
//                     </div>
//                   </div>
//                   <div className="w-[34%]">
//                     <img
//                       src={event.imageURL}
//                       alt={event.id}
//                       className="w-[18vw] px-[2vw]"
//                     />
//                   </div>
//                 </div>
//               ))}
//             </div>
//           ))}
//         </div>
//       )}

//       {active === "past" && (
//         <div className="w-full">
//           <h2 className="text-2xl font-bold mb-4">Past Events</h2>
//           {Object.keys(groupedPastEvents).map((month, idx) => (
//             <div key={idx}>
//               <div className="flex items-center">
//                 <h3 className="text-[1.2vw] font-semibold mb-2 mr-[2vw] whitespace-nowrap">
//                   {month}
//                 </h3>
//                 <div className="w-full h-[.1vw] bg-gray-400"></div>
//               </div>
//               {groupedPastEvents[month].map((event) => (
//                 <div
//                   key={event.id}
//                   className="mb-4 p-4   w-full flex justify-between"
//                 >
//                   <div className="flex flex-col">
//                     <p className="text-[1vw] uppercase leading-none">
//                       {extractWeekday(event.date)}
//                     </p>
//                     <p className="text-[2vw] font-bold">
//                       {" "}
//                       {extractDay(event.date)}
//                     </p>
//                   </div>
//                   <div className="w-[66%] px-[2vw] text-[1vw]">
//                     {" "}
//                     <p>
//                       {extractMonth(event.date)}
//                       {extractDay(event.date)} @ {event.time}
//                     </p>
//                     <h4 className="text-lg font-bold">{event.title}</h4>
//                     <p className="flex">
//                       {" "}
//                       {event.location}
//                       {event.club && <p className="ml-[1vw]">{event.club}</p>}
//                     </p>
//                     <div className="relative">
//                       <p className="line-clamp-2 text-[1vw] text-gray-700   ">
//                         {event.description}
//                       </p>
//                       <span className="absolute text-[1vw] text-gray-700  bottom-0 right-0 bg-white hover:text-purple-600">
//                         ... continue reading
//                       </span>
//                     </div>
//                   </div>
//                   <div className="w-[34%]">
//                     <img
//                       src={event.imageURL}
//                       alt={event.id}
//                       className="w-[18vw] px-[2vw]"
//                     />
//                   </div>
//                 </div>
//               ))}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default AllEvents;
