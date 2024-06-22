import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Navigation from "./Navigation";
import Welcome from "./Welcome";
import Events from "./Events";
import Review from "./Review";
import TicketBooking from "./TicketBooking";
import Blogs from "./Blogs";
import Instagram from "./Instagram";
import BlogClassic from "./BlogClassic";
import EventsDetails from "./EventsDetails";
import AllEvents from "./AllEvents";
import EventGallery from "./EventGallery";
import MarqueBoxComponent from "./MarqueBoxComponent";

const Home = () => {
  const [isNavbarSticky, setIsNavbarSticky] = useState(false);
  const navbarRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (navbarRef.current) {
        const offsetTop = navbarRef.current.getBoundingClientRect().top;
        setIsNavbarSticky(offsetTop <= 0);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="text-center hidden sm:block py-[1.3vw] font-medium bg-gradient-to-r uppercase from-[#9FF0BA] to-purple-600">
        10:00 - 12:00 - THE WORLD OF BLUES - ASTHON PORTER - BANGLADESH
      </div>
      <div className="w-full h-[100vh] bg-cover bg-[url('https://res.cloudinary.com/drvjsegeb/image/upload/v1717399420/slider_h7kdml.jpg')]">
        <div
          ref={navbarRef}
          className={`sticky w-full top-0 z-50 transition-colors duration-300 ${
            isNavbarSticky
              ? "bg-black"
              : "bg-transparent border border-gray-700"
          }`}
        >
          <Navigation />
        </div>

        <div className="flex justify-center items-center w-full h-full">
          <div className="text-white flex flex-col font-bold leading-none">
            <p className="text-[8vw] leading-none">
              BUILD YOUR 🥳 <br />
            </p>
            <div>
              <p className="text-[8vw]">
                <span className="text-[#9BF9B3] leading-none">EVENTS</span> THE{" "}
              </p>
            </div>
            <div className="flex items-center">
              <p className="text-[8vw] leading-none">EASY WAY</p>
              <button className="text-white border-2 h-fit mx-[2vw] border-white hover:bg-purple-200">
                Buy Tickets
              </button>
            </div>
          </div>
        </div>
      </div>
      <MarqueBoxComponent />

      <Welcome />
      <Events />
      <Review />
      <TicketBooking />
      <Blogs />
      <Instagram />
    </div>
  );
};

export default Home;

// import React from "react";

// import Navigation from "./Navigation";
// import Welcome from "./Welcome";
// import Events from "./Events";
// import Review from "./Review";
// import TicketBooking from "./TicketBooking";
// import Blogs from "./Blogs";
// import Instagram from "./Instagram";
// import BlogClassic from "./BlogClassic";
// import EventsDetails from "./EventsDetails";
// import AllEvents from "./AllEvents";
// import EventGallery from "./EventGallery";

// const Home = () => {
//   return (
//     <div>
//       <p className="text-center">Latest Mews</p>
//       <div className="w-full  bg-cover bg-[url('https://res.cloudinary.com/drvjsegeb/image/upload/v1717399420/slider_h7kdml.jpg')]">
//         {/* Content goes here */}
//         <Navigation />

//         <div className="flex justify-center items-center  w-full h-full">
//           <div className="text-white flex flex-col bold  leading-none">
//             <p className="text-[8vw] leading-none">
//               BUILD YOUR 🥳 <br />{" "}
//             </p>
//             <div>
//               <p></p>
//               <p className="text-[8vw]">
//                 <span className="text-[#9BF9B3]  leading-none">EVENTS</span> THE{" "}
//               </p>
//             </div>
//             <div className="flex items-center">
//               <p className="text-[8vw]  leading-none">EASY WAY</p>
//               <button className="text-white border-2 h-fit mx-[2vw]  border-white hover:bg-purple-200">
//                 Buy Tickets
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//       <EventGallery />
//       <AllEvents />

//       <Welcome />
//       <Events />
//       <Review />
//       <TicketBooking />
//       <Blogs />
//       <Instagram />
//     </div>
//   );
// };

// export default Home;
