import React from "react";
import { AddToCalendarButton } from "add-to-calendar-button-react";
import "add-to-calendar-button-react/dist/css/styles.css";

const AddToCalendarComponent = () => {
  return (
    <AddToCalendarButton
      name="My Event"
      options={["Apple", "Google", "iCal", "Outlook.com", "Yahoo"]}
      location="World Wide Web"
      startDate="2024-06-21"
      endDate="2024-06-21"
      startTime="10:15"
      endTime="23:30"
      timeZone="America/Los_Angeles"
      buttonStyle="3d" // You can customize the style as needed
    >
      Add this Event to Your Calendar{" "}
    </AddToCalendarButton>
  );
};

export default AddToCalendarComponent;
