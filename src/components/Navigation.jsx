import React, { useState } from "react";
import { IoCart } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { Button, Drawer } from "flowbite-react";
import { imagesGallery } from "../Data";
import { Link } from "react-router-dom";
import { cartState } from "../state/cartState";
import { useRecoilValue } from "recoil";

const platforms = [
  { id: 1, name: "Instagram" },
  { id: 2, name: "Facebook" },
  { id: 3, name: "Twitter" },
  { id: 4, name: "Dribble" },
];

const Navigation = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const cartvalue = useRecoilValue(cartState);

  const cartvalueLength = cartvalue.length;

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
          className={`absolute top-[10vw] z-50 mt-1 left-0 w-full bg-black text-white transition-all duration-300 ${
            isNavVisible ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <nav className="p-4">
            <ul className="space-y-2 ">
              <li className="border-b-[1px]  border-gray-400 ">
                <Link to="/">
                  <a href="#home" className="text-white hover:text-purple-500">
                    Home
                  </a>
                </Link>
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
                <Link to="/contactUs">
                  <a href="#home" className="text-white hover:text-purple-500">
                    Contact Us
                  </a>
                </Link>
              </li>
              <li className="border-b-[1px]  border-gray-400 ">
                <a
                  href="#home"
                  className="text-white hover:text-purple-500"
                ></a>

                <Link to="/shop">
                  <a href="#home" className="text-white hover:text-purple-500">
                    Shop
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Desktop view */}

      <div className="text-white relative  flex-row justify-around items-center  bg-black w-full h-[8vw]  hidden lg:flex">
        <div className="text-lg font-bold text-white">
          <Link to="/">PRESENTUP</Link>
        </div>
        <nav className="flex items-center">
          <ul className="flex space-x-4 ">
            <li className="    flex flex-col justify-center  h-[8vw] ">
              <Link
                to="/"
                className="text-white hover:underline hover:text-purple-500 pl-[1.5vw]"
              >
                Home
              </Link>
            </li>
            <li className=" relative group flex flex-col justify-center  h-[8vw] ">
              <Link className="text-white  hover:underline hover:text-purple-500  pl-[1.5vw]">
                Pages
              </Link>
              <div className="bg-black absolute  z-40  left-0 top-full hidden group-hover:block w-[20vw] pl-[2vw]">
                <p className="text-white  hover:underline text-[1.2vw] font-medium hover:text-purple-500 my-[.8vw]">
                  <Link to="aboutUs">About Us</Link>{" "}
                </p>

                <p className="text-white text-[1.2vw] font-medium hover:text-purple-500  my-[.8vw]">
                  <Link to="services">Services</Link>{" "}
                </p>
                <p className="text-white text-[1.2vw] font-medium hover:text-purple-500  my-[.8vw]">
                  <Link to="serviceDetails">Services Details</Link>{" "}
                </p>
                <p className="text-white text-[1.2vw] font-medium hover:text-purple-500  my-[.8vw]">
                  <Link to="teamDetails">Team Details</Link>{" "}
                </p>
              </div>
            </li>
            <li className="   relative group flex flex-col justify-center  h-[8vw]">
              <p className="text-white cursor-pointer  hover:underline hover:text-purple-500 pl-[1.5vw]">
                Portfolio
              </p>
              <div className="bg-black absolute left-0 z-40  top-full hidden group-hover:block w-[20vw] pl-[2vw]">
                <p className="text-white text-[1.2vw] font-medium hover:text-purple-500 my-[.5vw]">
                  <Link to={`/portfolio/${1}`}>Project Details</Link>{" "}
                </p>
              </div>
            </li>
            <li className="  relative group flex flex-col justify-center h-[8vw]">
              <p className="text-white cursor-pointer hover:underline hover:text-purple-500 pl-[1.5vw]">
                Blog
              </p>
              <div className="bg-black absolute z-40 left-0 top-full hidden group-hover:block w-[20vw]  pl-[2vw]">
                <p className="text-white text-[1.2vw] font-medium hover:text-purple-500 my-[.5vw]">
                  <Link to="blogClassic">Blogs Classic</Link>{" "}
                </p>

                <p className="text-white text-[1.2vw] font-medium hover:text-purple-500  my-[.5vw]">
                  <Link to={`/blogs_details/${1}`}>Blogs Details</Link>{" "}
                </p>
              </div>
            </li>
            <li className="    flex flex-col justify-center  h-[8vw]  ">
              <Link
                to="contactUs"
                className="text-white hover:underline hover:text-purple-500 pl-[1.5vw]"
              >
                Contact Us
              </Link>
            </li>
            <li className="     flex flex-col justify-center  h-[8vw]  ">
              <Link className="text-white hover:underline hover:text-purple-500 pl-[1.5vw]">
                <Link to="/shop">Shop</Link>{" "}
              </Link>
            </li>
          </ul>
        </nav>

        {/* support */}
        <div className="flex items-center  mx-2">
          <div className="  border-r-2 border-gray-400">
            <p className="text-[1vw]">Support center</p>
            <p>+123 456 7890</p>
          </div>
          <div className="flex items-center ">
            <Link to="cart">
              <IoCart size={24} />
              <p>{cartvalueLength}</p>
            </Link>
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
              className="h-full hidden  bg-black min-w-full space-x-0 ml-0"
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
