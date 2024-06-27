import React from "react";
import { motion } from "framer-motion";
const TicketBooking = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full flex flex-col  justify-center "
    >
      <div className=" flex flex-col items-center w-full">
        <p className="text-[1.2vw] mt-[3vw]">OUR EVENTS</p>
        <p className="text-[3vw] mb-[1vw] font-bold">
          BUY TICKETS UPCOMING EVENTS!
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-5 h-full gap-[1vw] w-full sm:p-[5vw] my-[2vw]">
        <div className=" w-full px-[15vw] sm:px-0 sm:w-full col-span-2 ">
          <div className="bg-black h-full w-full text-white flex flex-col  items-center">
            <p className=" text-[2vw] font-medium">CHRISTMAS EVENTS</p>
            <p className="text-purple-700 text-[7vw] font-bold">20-27</p>
            <p className=" text-[2vw] font-bold">SEPTEMBER 2022</p>
            <p className="text-[1.2vw]  font-semibold">
              28 Kiviision St, Jew Work, <br />
            </p>
            <p className="text-[1.2vw] font-semibold">NJ 456789, MUA</p>
            <div className="w-full flex justify-between border-dotted border-white border-t-[2px] px-[7vw] my-[1.2vw]">
              <div className="flex flex-col items-center">
                <p>Price :</p>
                <p>$119.00</p>
              </div>
              <div className="flex flex-col items-center">
                <p> Zone :</p>
                <p>FUNZONE</p>
              </div>
            </div>
            <img
              src="https://res.cloudinary.com/drvjsegeb/image/upload/v1717853324/barcode_bwtpie.jpg"
              alt="barcode"
            />
          </div>
        </div>
        <div className=" w-full sm:col-span-3 h-full  overflow-hidden group ">
          <div className='flex transform transition-transform duration-300 hover:scale-105 justify-center items-center h-[50vh] sm:h-full w-full bg-[url("https://res.cloudinary.com/drvjsegeb/image/upload/v1717853320/ticket_party_ifl7hl.jpg")] bg-cover bg-center'>
            <button className="rounded-lg hidden group-hover:block p-[1vw] bg-gradient-to-r from-[#9FF0BA] to-[#C3A1F6]">
              Buy Ticket
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TicketBooking;
