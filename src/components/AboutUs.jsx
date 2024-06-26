import React from "react";
import Events from "./Events";
import Blogs from "./Blogs";
import Footer from "./Footer";
import Navigation from "./Navigation";

const events = [
  {
    id: 1,
    title: "Halloween Party",
    image:
      "https://www.themetechmount.com/wordpress/presentup/advanced/wp-content/uploads/sites/4/2023/02/01-720x604.jpg",
  },
  {
    id: 2,
    title: "Divqi Holiday Party",
    image:
      "https://www.themetechmount.com/wordpress/presentup/advanced/wp-content/uploads/sites/4/2023/02/04-720x604.jpg",
  },
  {
    id: 3,
    title: "Muthalovin Dance Party",
    image:
      "https://www.themetechmount.com/wordpress/presentup/advanced/wp-content/uploads/sites/4/2023/02/03-720x604.jpg",
  },
  {
    id: 4,
    title: "Bring Your Own Booty Party",
    image:
      "https://www.themetechmount.com/wordpress/presentup/advanced/wp-content/uploads/sites/4/2023/02/06-720x604.jpg",
  },
  {
    id: 5,
    title: "Steven and Sofia Grand Wedding",
    image:
      "https://www.themetechmount.com/wordpress/presentup/advanced/wp-content/uploads/sites/4/2023/02/10-720x604.jpg",
  },
];
const AboutUs = () => {
  return (
    <div className="w-full  ">
      <div className="bg-black w-full">
        <Navigation />
      </div>

      <div className="w-full flex justify-center items-center h-[30vw] md:h-[20vw] bg-cover bg-[url('https://res.cloudinary.com/drvjsegeb/image/upload/v1717399420/slider_h7kdml.jpg')]">
        <p className="uppercase text-[5vw] text-white">About Us</p>
      </div>
      <div className="px-[4vw] ">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 pt-[2vw]">
          <div className="">
            <p>WELCOME TO</p>
            <p className="uppercase text-[4vw] font-semibold leading-tight">
              VIRTAL RELITY WHERE REALITY ENDS AND IMAGINATION BEGINS
            </p>
            <p className="p-[1vw] text-gray-600">
              There are many variations of passages of Lorem but the majority
              Ipavailable but the majority havn some form, by injected humour
            </p>

            <div className="flex items-center space-x-4 my-[2vw]">
              <div className="flex flex-col  text-black">
                <p className="mx-[1vw]">SUN-THU: 3 PM - 2 AM</p>
                <p className="mx-[1vw]">MON-THU: 3 PM - 4 AM</p>
              </div>
              <div className="h-[5vw] border-l-[.1vw] border-blue-950"></div>
              <div className="flex flex-col  text-black">
                <p className="mx-[1vw]">SUN-THU: 3 PM - 2 AM</p>
                <p className="mx-[1vw]">MON-THU: 3 PM - 4 AM</p>
              </div>
            </div>
          </div>
          <div>
            <div className="w-full  my-[20px] lg:my-0  flex flex-col lg:flex-row lg:items-center">
              <img
                src="https://res.cloudinary.com/drvjsegeb/image/upload/v1717936099/post-image-001-780x590_ebjk4n.jpg"
                alt="aboutus1"
                className="h-[30vw] w-[30vw] lg:w-[10vw] lg:h-[10vw]"
              />
              <div className="ml-[1vw] ">
                <p className="text-black text-[16px] sm:text-[18px] md:text-[20px] lg:text-[2vw]">
                  Our Vision
                </p>
                <p className="text-gray-600 w-full lg:w-[70%] text-[12px] sm:text-[14px] md::text-[16px] lg:text-[1.2vw]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor inci didunt ulacus vel facilisis.
                </p>
              </div>
            </div>
            <div className="w-full  hidden lg:block my-[4vw]  border-gray-700 border-t-[.1vw] "></div>
            <div className="w-full my-[20px] lg:my-0 flex flex-col lg:flex-row lg:items-center">
              <img
                src="https://res.cloudinary.com/drvjsegeb/image/upload/v1717936099/post-image-001-780x590_ebjk4n.jpg"
                alt="aboutus1"
                className="h-[30vw] w-[30vw] lg:w-[10vw] lg:h-[10vw]"
              />
              <div className="ml-[1vw] ">
                <p className="text-black text-[16px] sm:text-[18px] md:text-[20px] lg:text-[2vw]">
                  Our Vision
                </p>
                <p className="text-gray-600 w-full lg:w-[70%] text-[12px] sm:text-[14px] md::text-[16px] lg:text-[1.2vw]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor inci didunt ulacus vel facilisis.
                </p>
              </div>
            </div>
          </div>
        </div>
        <img
          src="https://res.cloudinary.com/drvjsegeb/image/upload/v1718025724/about-friend-party_vvdikb.jpg"
          alt="party-about"
          className="w-full"
        />
        <Events />

        <div className="w-full h-[40vw] flex-col   flex justify-center items-center min-h-[100%]  bg-[url('https://res.cloudinary.com/drvjsegeb/image/upload/v1718026595/party_about_ksnz82.jpg')] bg-cover ">
          <ul className=" ">
            {events.map((event, index) => (
              <div
                key={event.id}
                className="relative group w-full  flex flex-col items-center "
              >
                <p className="cursor-pointer text-white text-[3vw] hover:text-purple-800">
                  {event.title}
                </p>
                <div
                  className={` absolute top-0 w-[12vw] h-[12vw] bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                    index % 2 === 0
                      ? "left-full ml-[2vw]"
                      : "right-full mr-[2vw]"
                  }`}
                  style={{ backgroundImage: `url(${event.image})` }}
                ></div>
              </div>
            ))}
          </ul>
        </div>

        <Blogs />
      </div>
    </div>
  );
};

export default AboutUs;
