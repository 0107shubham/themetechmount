import React from "react";
import { MdOutlineTextSnippet } from "react-icons/md";
import { MdPlace } from "react-icons/md";
import { MdOutlineWatchLater } from "react-icons/md";
import { pageResult } from "../Data";
import { teamMate } from "../Data";
import { products } from "../Data";
import { events } from "../Data";
import { BlogsData } from "../Data";

const Search = () => {
  console.log(pageResult);

  const extractMonthDay = (dateString) => {
    const [monthDay, year] = dateString.split(",");
    const [month, day] = monthDay.trim().split(" ");
    return { month, day };
  };

  const currentItems = teamMate.slice(0, 3);
  const currentEvents = events.slice(0, 3);
  const currentProducts = products.slice(0, 3);
  return (
    <div className="w-full bg-[#FBFBFC]">
      <div className="px-[8vw] my-[2vw]">
        <div className=" w-full grid grid-cols-1 sm:grid-cols-2 gap-[2vw]">
          <div className="">
            <p className="text-black text-[3vw] font-semibold mr-[.5vw]">
              Page results
            </p>
            <ul>
              {pageResult.map((item) => (
                <li
                  key={item.id}
                  className="cursor-pointer flex items-center text-[1.4vw] font-semibold "
                >
                  <MdOutlineTextSnippet className="text-purple-400 text-[1vw] mr-[.5vw] " />{" "}
                  <span className="hover:text-purple-300">{item.name}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid gap-3 ">
            <p className="text-black text-[3vw] font-semibold mr-[.5vw] leading-none ">
              Post results
            </p>
            {BlogsData.map((blog) => (
              <div key={blog.id} className="flex cursor-pointer">
                <img
                  src={blog.imageUrl}
                  alt={blog.Name}
                  className="w-[4vw] h-[4vw]"
                />
                <div className="ml-[.5vw]">
                  <h2 className="text-[1vw] text-gray-800 font-normal">
                    {blog.Name}
                  </h2>

                  <p className="text-[1vw] text-gray-800 font-normal">
                    {blog.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* example */}

        <button
          id="dropdownDefaultButton"
          data-dropdown-toggle="dropdown"
          class="text-white bg-blue-700 group hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="button"
        >
          Dropdown button{" "}
          <svg
            class="w-2.5 h-2.5 ms-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>

        {/* <!-- Dropdown menu --> */}
        <div
          id="dropdown"
          class="z-10 hidden group-hover:block bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
        >
          <ul
            class="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownDefaultButton"
          >
            <li>
              <a
                href="#"
                class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Dashboard
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Settings
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Earnings
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Sign out
              </a>
            </li>
          </ul>
        </div>

        {/* team Member */}

        <div className="mt-[5vw]">
          <p className="text-black text-[3vw] font-semibold my-[3vw] mr-[.5vw]">
            Team Member results{" "}
          </p>
          <ul className="w-full flex gap-[4vw]">
            {currentItems.map((person) => (
              <li key={person.id}>
                <div className="relative">
                  <img
                    src={person.imageURL}
                    alt={`${person.name}`}
                    className="w-full aspect-square "
                  />
                  <div className="bg-white w-[60%] text-[1.5vw] absolute bottom-6 whitespace-nowrap">
                    <strong>{person.name}</strong>
                    <br />
                    {person.designation}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* team Member end */}

        {/* products */}

        <div className="mt-[5vw]">
          <p className="text-black text-[3vw] font-semibold my-[3vw] mr-[.5vw]">
            Product results
          </p>

          <div className="grid grid-cols-3 gap-4 mb-6">
            {currentProducts.map((product) => (
              <div
                key={product.id}
                className="bg-[#F8F8F8] flex flex-col justify-between transform duration-1000 transition-transform shadow-md rounded-lg overflow-hidden pt-[2vw] group"
              >
                <div className="w-full relative overflow-hidden">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className=" w-full mb-[2vw] h-[15vw] object-contain group-hover:scale-105 ease-in-out "
                  />

                  <button className="absolute transform translate-y-[10vw] transition-transform duration-1000 ease-in-out group-hover:translate-y-0 bottom-0 text-white w-full h-[4vw]  bg-purple-400 ">
                    Add to Cart
                  </button>
                </div>
                <div className="p-4 bg-white">
                  <h2 className="text-[1.5vw] text-center font-bold text-black whitespace-nowrap">
                    {product.name}
                  </h2>
                  <div className="flex justify-center items-center ">
                    {product.saleOffer == 0 && (
                      <div className="text-purple-500 text-[1.2vw]">
                        ${product.price}
                      </div>
                    )}
                  </div>
                  {product.saleOffer > 0 && (
                    <div className="flex justify-center ">
                      <div className=" line-through  mx-[.5vw] text-[1vw]  text-gray-400">
                        ${product.price}
                      </div>
                      <div className="text-purple-500 mx-[.5vw] text-[1.2vw]">
                        ${product.priceAfterSale}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* products end */}

        {/* events */}
        <div className="mt-[5vw] w-full">
          <p className="text-black text-[3vw] font-semibold my-[3vw] mr-[.5vw]">
            Event results
          </p>
          <ul className=" grid-cols-1 grid sm:grid-cols-3 gap-3 w-full ">
            {currentEvents.map((event) => {
              const { month, day } = extractMonthDay(event.date);
              return (
                <li key={event.id} className="bg-white shadow-md relative">
                  <img
                    src={event.imageURL}
                    alt={event.title}
                    className="w-full "
                  />
                  <p className="absolute flex flex-col justify-center items-center top-[1vw] ml-[1vw] w-[4vw] rounded-sm aspect-square text-white font-medium bg-purple-300">
                    <span className="text-[2vw] leading-none">{day}</span>
                    <span className="text-[1vw] ">{month}</span>
                  </p>
                  <div className="w-full ml-[1vw] brightness-105 mb-[1vw]">
                    <h3 className="text-left text-[2vw] tracking-wide text-black font-semibold">
                      {event.title}
                    </h3>

                    <p className="text-left flex items-center text-[1.1vw] text-gray-600 font-medium">
                      <MdOutlineWatchLater className="mr-[.5vw] text-purple-400 text-[1.1vw] brightness-110" />
                      {event.time}
                    </p>
                    <p className="text-left flex items-center text-[1.1vw]  text-gray-800 font-light">
                      <MdPlace className="mr-[.5vw] text-purple-400 text-[1.1vw] brightness-110" />{" "}
                      {event.location}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        {/* events end */}
      </div>
    </div>
  );
};

export default Search;
