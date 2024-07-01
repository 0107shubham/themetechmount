import React, { useState } from "react";
import { BsCalendarPlusFill } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";

const AddToCalender = () => {
  const [active, setActive] = useState(false);
  console.log(active);

  return (
    <div className="relative w-fit">
      <div
        onClick={() => setActive(!active)}
        className="flex text-[20px] space-x-3 px-2 my-4 py-2 justify-center items-center w-full border-[1px] border-blue-500 bg-white hover:bg-blue-500 text-blue-500 hover:text-white"
      >
        <BsCalendarPlusFill />
        <p className="whitespace-nowrap">Add To Calender</p>
        <IoIosArrowDown className={`${active ? "rotate-180" : ""}`} />
      </div>

      {active && (
        <div className="absolute bg-white w-full">
          <ul className="divide-y px-3 space-y-2">
            <li>
              <a href="https://www.apple.com/calendar">Apple</a>
            </li>
            <li>
              <a href="https://calendar.google.com">Google</a>
            </li>
            <li>
              <a href="https://www.ical.com">iCal</a>
            </li>
            <li>
              <a href="https://outlook.live.com/calendar">Outlook.com</a>
            </li>
            <li>
              <a href="https://www.office.com/launch/outlook">Microsoft 365</a>
            </li>
            <li>
              <a href="https://teams.microsoft.com">Microsoft Teams</a>
            </li>
            <li>
              <a href="https://calendar.yahoo.com">Yahoo</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default AddToCalender;
