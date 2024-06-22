import { format } from "date-fns";

export const compareDates = (date1, date2) => {
  return new Date(date1) - new Date(date2);
};

export const groupByMonth = (events) => {
  const groupedEvents = {};

  events.forEach((event) => {
    const month = format(new Date(event.date), "MMMM yyyy");
    if (!groupedEvents[month]) {
      groupedEvents[month] = [];
    }
    groupedEvents[month].push(event);
  });

  return groupedEvents;
};

// import { format, parse } from "date-fns";

// export const compareDates = (date1, date2) => {
//   return new Date(date1) - new Date(date2);
// };

// export const groupByMonth = (events) => {
//   const groupedEvents = {};

//   events.forEach((event) => {
//     const month = format(new Date(event.date), "MMMM yyyy");
//     if (!groupedEvents[month]) {
//       groupedEvents[month] = [];
//     }
//     groupedEvents[month].push(event);
//   });

//   return groupedEvents;
// };
