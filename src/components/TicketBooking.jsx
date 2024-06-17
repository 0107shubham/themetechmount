import React from "react";

const TicketBooking = () => {
  return (
    <div className="w-full flex flex-col justify-center ">
      <div className=" flex flex-col items-center w-full">
        <p className="text-[1.2vw] mt-[3vw]">OUR EVENTS</p>
        <p className="text-[3vw] mb-[1vw] font-bold">
          BUY TICKETS UPCOMING EVENTS!
        </p>
      </div>
      <div className="flex w-full p-[5vw]">
        <div className="w-[40%] bg-yellow-200 h-[40vw] mr-[2vw]">
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
        <div className=" w-[60%] h-[40vw]  ">
          <div className='flex transform transition-transform duration-300 hover:scale-105 justify-center items-center h-full w-full bg-[url("https://res.cloudinary.com/drvjsegeb/image/upload/v1717853320/ticket_party_ifl7hl.jpg")] bg-cover bg-center'>
            <button className="rounded-lg p-[1vw] bg-gradient-to-r from-[#9FF0BA] to-[#C3A1F6]">
              Buy Ticket
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketBooking;