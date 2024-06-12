import React, { useState } from "react";
import { IoCart } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

const Navigation = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);

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
        </div>
      </div>
    </div>
  );
};

export default Navigation;
