import React, { useState } from "react";
import { IoCart } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { Button, Drawer } from "flowbite-react";
import { imagesGallery } from "../Data";
import { Link, useNavigate } from "react-router-dom";
import { cartState } from "../state/cartState";
import { useRecoilValue } from "recoil";
import { MdOutlineCalendarViewMonth } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";

const platforms = [
  { id: 1, name: "Instagram" },
  { id: 2, name: "Facebook" },
  { id: 3, name: "Twitter" },
  { id: 4, name: "Dribble" },
];

const Navigation = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [isPagesVisible, setIsPagesVisible] = useState(false);

  const [isPortfolioVisible, setIsPortfolioVisible] = useState(false);
  const [isBlogVisible, setIsBlogVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // const toggleDrawer = () => {
  //   setIsDrawerOpen(!isDrawerOpen);
  // };
  const cartvalue = useRecoilValue(cartState);

  const cartvalueLength = cartvalue.length;

  const handleClose = () => setIsOpen(false);
  console.log(imagesGallery);

  let requiredImage = imagesGallery.slice(0, 3);

  const handleButtonClick = (e) => {
    e.stopPropagation(); // Stop the event from bubbling up to the link
    e.preventDefault(); // Prevent the default link action
    console.log("Button inside link clicked");
    // Perform any other action here
  };

  const navigate = useNavigate();

  const handleCart = () => {
    navigate("/cart");
  };
  const handleContactUs = () => {
    navigate("/contactUs");
  };
  const handleBlogClassic = () => {
    navigate("/blogClassic");
  };
  const handleBlogDetails = () => {
    navigate("/blogs_details/1");
  };
  const handlePortfolioDetails = () => {
    navigate("/portfolio/1");
  };
  const handleAbout = () => {
    navigate("/aboutUs");
  };
  const handleService = () => {
    navigate("/services");
  };
  const handleServiceDetail = () => {
    navigate("/serviceDetails");
  };
  const handleteamDetails = () => {
    navigate("/teamDetails");
  };
  const handleShop = () => {
    navigate("/shop");
  };
  const handleSearch = () => {
    navigate("/search");
  };

  return (
    <div onClick={handleButtonClick} className="w-full">
      <div className="text-white flex justify-between items-center  w-full h-[15vw] sm:h-[12vw] relative lg:hidden">
        <div className=" text-[4vw] sm:text-[2vw]font-bold">
          <Link to="/">PRESENTUP</Link>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative cursor-pointer ">
            <IoCart
              className=" text-[6vw] sm:text-[4vw]"
              onClick={handleCart}
            />
            {cartvalueLength === 0 ? (
              ""
            ) : (
              <p className="bg-purple-400 right-[3.2vw] top-[3.3vw]  sm:right-[2.5vw] sm:top-[2.8vw]  flex justify-center items-center text-[2.5vw]  sm:text-[2vw]  absolute w-[4vw] h-[4vw]  sm:w-[3.5vw] sm:h-[3.5vw]  rounded-full">
                {cartvalueLength}
              </p>
            )}
          </div>
          {/* <div>
            <IoIosSearch className=" text-[6vw] cursor-pointer sm:text-[4vw]" />
          </div> */}
          <div className="relative   h-[8vw] flex items-center">
            {isSearchOpen ? (
              <RxCross2
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="text-white   cursor-pointer   text-[6vw] sm:text-[4vw]"
              />
            ) : (
              <IoIosSearch
                onClick={() => {
                  setIsSearchOpen(!isSearchOpen);
                }}
                className="text-white  cursor-pointer    text-[6vw] sm:text-[4vw]"
              />
            )}

            {isSearchOpen && (
              <div className="bg-white absolute   cursor-pointer px-[3vw]  z-40 right-full top-full  w-[50vw] ">
                <div className="  text-[1.2vw] font-medium  my-[2vw]">
                  <div className=" flex">
                    <input
                      type="search"
                      placeholder="Type Word Then Enter"
                      className=" bg-gray-200 w-full text-gray-900 text-[3vw]"
                    />
                    <div className="bg-purple-200 flex items-center">
                      <IoIosSearch
                        onClick={handleSearch}
                        className="text-black cursor-pointer my-[.5vw]   text-[6vw]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div
            onClick={() => setIsNavVisible(!isNavVisible)}
            className="cursor-pointer  text-[6vw] sm:text-[4vw] mr-3"
          >
            {isNavVisible ? <RxCross2 /> : <GiHamburgerMenu />}
          </div>
        </div>

        {/* Navigation Section */}
        <div
          className={`absolute top-full z-50  left-0 w-full bg-black  text-white transition-all duration-300 ${
            isNavVisible ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <nav className="p-4">
            <ul className=" ">
              <li className=" text-lg  ">
                <Link to="/">
                  <p className="text-white hover:text-purple-500">Home</p>
                </Link>
              </li>
              <div className="w-full bg-gray-700 h-[1px] my-[1.2vw]"></div>
              <li className="   ">
                <p
                  onClick={() => setIsPagesVisible(!isPagesVisible)}
                  className="text-white text-lg cursor-pointer hover:text-purple-500"
                >
                  Pages
                </p>
                {isPagesVisible && (
                  <div className="bg-black  cursor-pointer  z-40  text-lg  w-full pl-[2vw]">
                    <div
                      onClick={handleAbout}
                      className="text-white hover:underline whitespace-nowrap w-full  font-medium hover:text-purple-500 my-[.8vw]"
                    >
                      About Us
                    </div>
                    <div className="w-full bg-gray-700 h-[1px] my-[1.2vw]"></div>
                    <div
                      onClick={handleService}
                      className="text-white text-lg w-full  font-medium hover:text-purple-500 my-[.8vw]"
                    >
                      Services
                    </div>
                    <div className="w-full bg-gray-700 h-[1px] my-[1.2vw]"></div>
                    <div
                      onClick={handleServiceDetail}
                      className="text-white  w-full whitespace-nowrap font-medium hover:text-purple-500 my-[.8vw]"
                    >
                      Services Details
                    </div>
                    <div className="w-full bg-gray-700 h-[1px] my-[1.2vw]"></div>
                    <div
                      onClick={handleteamDetails}
                      className="text-white  cursor-pointer  w-full whitespace-normal  font-medium hover:text-purple-500 my-[.8vw]"
                    >
                      Team Details
                    </div>
                  </div>
                )}
              </li>
              <div className="w-full bg-gray-700 h-[1px] my-[1.2vw]"></div>
              {/* <li className="border-b-[1px]  border-gray-400 ">
                <p className="text-white group hover:text-purple-500">Pages</p>
                <div className="bg-black absolute  cursor-pointer   z-40  left-0 top-full hidden group-hover:block w-[20vw] pl-[2vw]">
                  <div className="text-white  hover:underline text-[1.2vw] font-medium hover:text-purple-500 my-[.8vw]">
                    <p onClick={handleAbout}>About Us</p>{" "}
                  </div>

                  <div className="text-white text-[1.2vw] font-medium hover:text-purple-500  my-[.8vw]">
                    <p onClick={handleService}>Services</p>{" "}
                  </div>
                  <div className="text-white text-[1.2vw] font-medium hover:text-purple-500  my-[.8vw]">
                    <p onClick={handleServiceDetail}>Services Details</p>{" "}
                  </div>
                  <div className="text-white text-[1.2vw] font-medium hover:text-purple-500  my-[.8vw]">
                    <p onClick={handleteamDetails}>Team Details</p>{" "}
                  </div>
                </div>
              </li> */}
              <li className="  text-lg ">
                <p
                  onClick={() => setIsPortfolioVisible(!isPortfolioVisible)}
                  className="text-white cursor-pointer hover:text-purple-500"
                >
                  Portfolio
                </p>
                {isPortfolioVisible && (
                  <div
                    onClick={handlePortfolioDetails}
                    className="bg-black  top-full w-[20vw] pl-[2vw]"
                  >
                    <div className="text-white whitespace-nowrap cursor-pointer font-medium hover:text-purple-500 my-[.5vw]">
                      Project Details
                    </div>
                  </div>
                )}
              </li>
              <div className="w-full bg-gray-700 h-[1px] my-[1.2vw]"></div>
              <li className=" text-lg ">
                <p
                  onClick={() => setIsBlogVisible(!isBlogVisible)}
                  className="text-white cursor-pointer hover:text-purple-500"
                >
                  Blog
                </p>
                {isBlogVisible && (
                  <div className="bg-black  w-full pl-[2vw]">
                    <div
                      onClick={handleBlogClassic}
                      className="text-white cursor-pointer font-medium hover:text-purple-500 "
                    >
                      Blogs Classic
                    </div>
                    <div className="w-full bg-gray-700 h-[1px] my-[1.2vw]"></div>
                    <div
                      onClick={handleBlogDetails}
                      className="text-white font-medium   cursor-pointer   hover:text-purple-500 "
                    >
                      Blogs Details
                    </div>
                  </div>
                )}
              </li>
              <div className="w-full bg-gray-700 h-[1px] my-[1.2vw]"></div>
              <li className="   ">
                <div onClick={handleContactUs}>
                  <p className="text-white text-lg  cursor-pointer  hover:text-purple-500">
                    Contact Us
                  </p>
                </div>
              </li>
              <div className="w-full bg-gray-700 h-[1px] my-[1.2vw]"></div>
              <li onClick={handleShop} className="  ">
                <div>
                  <p className="text-white text-lg  cursor-pointer  hover:text-purple-500">
                    Shop
                  </p>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Desktop view */}

      <div className="text-white relative  flex-row justify-around items-center   w-full h-[8vw]  hidden lg:flex">
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
              <p className="text-white flex items-center hover:underline hover:text-purple-500  pl-[1.5vw]">
                Pages <IoIosArrowDown />
              </p>
              <div className="bg-black absolute  cursor-pointer   z-40  left-0 top-full hidden group-hover:block w-[20vw] pl-[2vw]">
                <div className="text-white  hover:underline text-[1.2vw] font-medium hover:text-purple-500 my-[.8vw]">
                  <p onClick={handleAbout}>About Us</p>{" "}
                </div>

                <div className="text-white text-[1.2vw] font-medium hover:text-purple-500  my-[.8vw]">
                  <p onClick={handleService}>Services</p>{" "}
                </div>
                <div className="text-white text-[1.2vw] font-medium hover:text-purple-500  my-[.8vw]">
                  <p onClick={handleServiceDetail}>Services Details</p>{" "}
                </div>
                <div className="text-white text-[1.2vw] font-medium hover:text-purple-500  my-[.8vw]">
                  <p onClick={handleteamDetails}>Team Details</p>{" "}
                </div>
              </div>
            </li>
            <li className="   relative group flex flex-col justify-center  h-[8vw]">
              <p className="text-white cursor-pointer  flex items-center   hover:underline hover:text-purple-500 pl-[1.5vw]">
                Portfolio <IoIosArrowDown />
              </p>
              <div className="bg-black absolute left-0 z-40  top-full hidden group-hover:block w-[20vw] pl-[2vw]">
                <div className="text-white text-[1.2vw]  cursor-pointer  font-medium hover:text-purple-500 my-[.5vw]">
                  <p onClick={handlePortfolioDetails}>Project Details</p>{" "}
                </div>
              </div>
            </li>
            <li className="  relative group flex flex-col justify-center h-[8vw]">
              <p className="text-white cursor-pointer   flex items-center  hover:underline hover:text-purple-500 pl-[1.5vw]">
                Blog <IoIosArrowDown />
              </p>
              <div className="bg-black absolute cursor-pointer z-40 left-0 top-full hidden group-hover:block w-[20vw]  pl-[2vw]">
                <div className="text-white text-[1.2vw]  font-medium hover:text-purple-500 my-[.5vw]">
                  <p onClick={handleBlogClassic}>Blogs Classic</p>{" "}
                </div>

                <div className="text-white text-[1.2vw] font-medium hover:text-purple-500  my-[.5vw]">
                  <p onClick={handleBlogDetails}>Blogs Details</p>{" "}
                </div>
              </div>
            </li>
            <div className="  cursor-pointer    flex flex-col justify-center  h-[8vw]  ">
              <p
                onClick={handleContactUs}
                className="text-white hover:underline hover:text-purple-500 pl-[1.5vw]"
              >
                Contact Us
              </p>
            </div>
            <div className="  cursor-pointer        flex flex-col justify-center  h-[8vw]  ">
              <div className="text-white hover:underline hover:text-purple-500 pl-[1.5vw]">
                <p onClick={handleShop}>Shop</p>{" "}
              </div>
            </div>
          </ul>
        </nav>

        {/* support */}
        <div className="flex items-center  mx-2">
          <div className="   border-gray-400">
            <p className="text-[1vw]">Support center</p>
            <p className="text-[1.5vw]">+123 456 7890</p>
          </div>
          <div className="w-[1px] h-[8vw] mx-[1vw] bg-gray-600"></div>
          <div className="flex items-center ">
            {/* <div onClick={handleCart}>
              <IoCart size={24} />
              <p>{cartvalueLength}</p>
            </div> */}
            <div className="relative cursor-pointer mx-[1vw] ">
              <IoCart className=" text-[2.5vw] " onClick={handleCart} />
              {cartvalueLength === 0 ? (
                ""
              ) : (
                <p className="bg-purple-400 right-[1.2vw] top-[1.6vw]   flex justify-center items-center text-[1.5vw]  absolute w-[2vw] h-[2vw]   rounded-full">
                  {cartvalueLength}
                </p>
              )}
            </div>
            <div className="relative   h-[8vw] flex items-center">
              {isSearchOpen ? (
                <RxCross2
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  className="text-white   cursor-pointer  text-[2.5vw]"
                />
              ) : (
                <IoIosSearch
                  onClick={() => {
                    setIsSearchOpen(!isSearchOpen);
                  }}
                  className="text-white  cursor-pointer   text-[2.5vw]"
                />
              )}

              {isSearchOpen && (
                <div className="bg-white absolute   cursor-pointer px-[1vw]  z-40 right-full top-full  w-[30vw] ">
                  <div className="  text-[1.2vw] font-medium  my-[2vw]">
                    <div className=" flex">
                      <input
                        type="search"
                        placeholder="Type Word Then Enter"
                        className=" bg-gray-200 w-full text-gray-900 text-[1.5vw]"
                      />
                      <div className="bg-purple-200">
                        <IoIosSearch
                          onClick={handleSearch}
                          className="text-black cursor-pointer my-[.5vw]   text-[1.8vw]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          {/* navigation  */}

          <div className="flex  items-center justify-center cursor-pointer">
            <Button
              className="bg-transparent focus:border-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isNavVisible ? (
                <RxCross2 size={24} />
              ) : (
                <MdOutlineCalendarViewMonth className="text-white   text-[2.5vw]" />
              )}
            </Button>
          </div>
          <Drawer
            className="bg-black"
            open={isOpen}
            onClose={handleClose}
            position="top"
          >
            <div
              onClick={handleClose}
              className="bg-black w-full h-[4vw] flex justify-end items-center text-right "
            >
              <RxCross2 className="text-[2vw] text-white cursor-pointer" />
            </div>
            <Drawer.Items>
              <div className="flex gap-2 my-[2vw] px-[10vw] bg-black">
                <div className="w-[60%] ">
                  <div className="">
                    <p className="my-[1vw] text-[2vw] font-medium tracking-wider	">
                      PRESENTUP
                    </p>
                    <p className="my-[1vw] text-gray-400 text-[1vw] font-medium tracking-wider	">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut asdlabore et dolore
                      magna aliqua. Ut enim ad minim veniam, quis nostrud .
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
  );
};

export default Navigation;
