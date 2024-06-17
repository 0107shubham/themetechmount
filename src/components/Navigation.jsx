import React, { useState } from "react";
import { IoCart } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { Button, Drawer } from "flowbite-react";
import { imagesGallery } from "../Data";

const platforms = [
  { id: 1, name: "Instagram" },
  { id: 2, name: "Facebook" },
  { id: 3, name: "Twitter" },
  { id: 4, name: "Dribble" },
];

const Navigation = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);
  console.log(imagesGallery);

  let requiredImage = imagesGallery.slice(0, 3);

  return (
    <div className="w-full">
      <div className="text-white flex justify-between items-center bg-black w-full h-[10vw] relative lg:hidden">
        <div className="text-lg font-bold">PRESENTUP</div>
        <div className="flex items-center space-x-4">
          <div>
            <IoCart size={24} />
          </div>
          <div>
            <IoIosSearch size={24} />
          </div>
          <div
            onClick={() => setIsNavVisible(!isNavVisible)}
            className="cursor-pointer"
          >
            {isNavVisible ? (
              <RxCross2 size={24} />
            ) : (
              <GiHamburgerMenu size={24} />
            )}
          </div>
        </div>

        {/* Navigation Section */}
        <div
          className={`absolute top-[10vw] mt-1 left-0 w-full bg-black text-white transition-all duration-300 ${
            isNavVisible ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <nav className="p-4">
            <ul className="space-y-2 ">
              <li className="border-b-[1px]  border-gray-400 ">
                <a href="#home" className="text-white hover:text-purple-500">
                  Home
                </a>
              </li>
              <li className="border-b-[1px]  border-gray-400 ">
                <a href="#home" className="text-white hover:text-purple-500">
                  Pages
                </a>
              </li>
              <li className="border-b-[1px]  border-gray-400 ">
                <a href="#home" className="text-white hover:text-purple-500">
                  Portfolio
                </a>
              </li>
              <li className="border-b-[1px]  border-gray-400 ">
                <a href="#home" className="text-white hover:text-purple-500">
                  Blog
                </a>
              </li>
              <li className="border-b-[1px]  border-gray-400 ">
                <a href="#home" className="text-white hover:text-purple-500">
                  Contact Us
                </a>
              </li>
              <li className="border-b-[1px]  border-gray-400 ">
                <a href="#home" className="text-white hover:text-purple-500">
                  Shop
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Desktop view */}

      <div className="text-white  flex-row justify-around items-center  bg-black w-full h-[10vw]  hidden lg:flex">
        <div className="text-lg font-bold text-white">PRESENTUP</div>
        <nav className="flex items-center">
          <ul className="flex space-x-4">
            <li className="border-r-[1px] border-gray-400 pr-2">
              <a href="#home" className="text-white hover:text-purple-500">
                Home
              </a>
            </li>
            <li className="border-r-[1px] border-gray-400 pr-2">
              <a href="#pages" className="text-white hover:text-purple-500">
                Pages
              </a>
            </li>
            <li className="border-r-[1px] border-gray-400 pr-2">
              <a href="#portfolio" className="text-white hover:text-purple-500">
                Portfolio
              </a>
            </li>
            <li className="border-r-[1px] border-gray-400 pr-2">
              <a href="#blog" className="text-white hover:text-purple-500">
                Blog
              </a>
            </li>
            <li className="border-r-[1px] border-gray-400 pr-2">
              <a href="#contact" className="text-white hover:text-purple-500">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#shop" className="text-white hover:text-purple-500">
                Shop
              </a>
            </li>
          </ul>
        </nav>
        <div className="flex items-center  mx-2">
          <div className="  border-r-2 border-gray-400">
            <p className="text-[1vw]">Support center</p>
            <p>+123 456 7890</p>
          </div>
          <div className="flex items-center ">
            <div>
              <IoCart size={24} />
            </div>
            <div>
              <IoIosSearch size={24} />
            </div>

            {/* navigation  */}

            <div className="flex  items-center justify-center cursor-pointer">
              <Button onClick={() => setIsOpen(true)}>
                {isNavVisible ? (
                  <RxCross2 size={24} />
                ) : (
                  <GiHamburgerMenu size={24} />
                )}
              </Button>
            </div>
            <Drawer
              className="h-full bg-black min-w-full space-x-0 ml-0"
              open={isOpen}
              onClose={handleClose}
              position="top"
            >
              <div
                onClick={handleClose}
                className=" w-full h-[4vw] flex justify-end items-center text-right "
              >
                <RxCross2 className="text-[2vw] cursor-pointer" />
              </div>
              <Drawer.Items>
                <div className="flex gap-2 my-[2vw] px-[10vw]">
                  <div className="w-[60%] ">
                    <div className="">
                      <p className="my-[1vw] text-[2vw] font-medium tracking-wider	">
                        PRESENTUP
                      </p>
                      <p className="my-[1vw] text-gray-400 text-[1vw] font-medium tracking-wider	">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut asdlabore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud .
                        <span className="underline text-white">Read More</span>{" "}
                      </p>
                      <p className="mt-[2vw] text-white text-[1.5vw] font-medium tracking-widest	">
                        WE ARE AVAILABLE
                      </p>
                      <p className="my-[1vw] text-gray-400 text-[1.2vw] font-medium tracking-wider	">
                        Mon-Sat: 09.00 am to 6.30 pm / Sunday close
                      </p>
                    </div>

                    <div className="w-full h-[.1vw] bg-gray-500 my-[2vw]"></div>

                    <div className="flex flex-wrap mx-2 mt-4 ">
                      {requiredImage.map((image, index) => (
                        <div
                          key={`${image.id}-${index}`}
                          className="w-full sm:w-1/2 lg:w-1/3 px-2 mb-4"
                        >
                          <img
                            src={image.url}
                            alt={`Gallery Image ${image.id}`}
                            className="w-full h-auto object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="w-[.1vw] min-h-full bg-gray-500 mx-[.2vw]"></div>
                  <div className="">
                    <div>
                      <p className="my-[1vw] text-[2vw] font-medium tracking-wider	">
                        PHONE
                      </p>
                      <p className="my-[1vw] text-gray-400 text-[1vw] font-medium tracking-wider	">
                        + 96 123 456 7890
                      </p>
                      <p className="my-[1vw] text-[2vw] font-medium tracking-wider	">
                        EMAIL
                      </p>
                      <p className="my-[1vw] text-gray-400 text-[1vw] font-medium tracking-wider	">
                        Mail1: info.support@domain.com
                      </p>
                      <p className="my-[1vw] text-[2vw] font-medium tracking-wider	">
                        LOCATION
                      </p>
                      <p className="my-[1vw] text-gray-400 text-[1vw] font-medium tracking-wider	">
                        405 main Bolins Stret New Jersey Town Road KY 7007
                      </p>
                      <p className="my-[1vw] text-[2vw] font-medium tracking-wider	">
                        SOCIAL LINKS
                      </p>
                      <div className="flex flex-col ">
                        {platforms.map((platform) => (
                          <div
                            key={platform.id}
                            className="my-[.2vw] text-gray-400 text-[1vw] font-medium tracking-wider	"
                          >
                            {platform.name}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Drawer.Items>
            </Drawer>

            {/* drawer */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
