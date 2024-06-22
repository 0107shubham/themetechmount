import React, { useState, useEffect } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { imagesGallery } from "../Data";
import { IoCaretForwardSharp } from "react-icons/io5";
import { IoCaretBackSharp } from "react-icons/io5";
import { IoCaretBack } from "react-icons/io5";
import { IoPauseSharp } from "react-icons/io5";

const EventGallery = ({ status, toggleCLose }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [slideMove, setSlide] = useState(false);

  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    "/docs/images/carousel/carousel-1.svg",
    "/docs/images/carousel/carousel-2.svg",
    "/docs/images/carousel/carousel-3.svg",
    "/docs/images/carousel/carousel-4.svg",
    "/docs/images/carousel/carousel-5.svg",
  ];

  useEffect(() => {
    let slideInterval;
    if (slideMove) {
      slideInterval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000); // Change slide every 3 seconds
    }
    return () => {
      if (slideInterval) {
        clearInterval(slideInterval);
      }
    };
  }, [slideMove, imagesGallery.length]);

  const prevSlide = () => {
    const newIndex =
      currentIndex === 0 ? imagesGallery.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex =
      currentIndex === imagesGallery.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const toggleModal = () => {
    toggleCLose(false);
  };

  console.log("model", status);

  return (
    <div className="relative">
      {/* <button
        onClick={toggleModal}
        className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        Toggle modal
      </button> */}

      {status && (
        <div
          id="static-modal"
          tabIndex="-1"
          aria-hidden="true"
          className="fixed inset-0 z-50 w-full  flex justify-center items-center  min-h-full bg-black bg-opacity-50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className=" relative w-[70%] sm:w-[50%] md:w-[40%]  aspect-square  bg-green-300"
          >
            {/* Modal content */}
            <div className="relative bg-pink-500 w-full h-full rounded-lg shadow dark:bg-gray-700">
              {/* Modal header */}

              {/* Modal body */}

              <div
                id="indicators-carousel"
                className="relative w-full h-full bg-sky-400"
                data-carousel=""
              >
                <div className="relative w-full h-full bg-purple-500 overflow-hidden ">
                  {imagesGallery.map((slide, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                        currentIndex === index ? "opacity-100" : "opacity-0"
                      }`}
                      data-carousel-item={
                        currentIndex === index ? "active" : ""
                      }
                    >
                      <img
                        src={slide.url}
                        className="block w-full  h-full"
                        alt={`Slide ${index + 1}`}
                      />
                    </div>
                  ))}
                </div>
                <div className="absolute w-[80%] z-30 flex -translate-x-1/2 space-x-1 rtl:space-x-reverse bottom-5 left-1/2">
                  {imagesGallery.map((slide, index) => (
                    <div>
                      <img
                        src={slide.url}
                        key={index}
                        type="button"
                        className={`w-[10vw] hover:border-[.2vw] hover:border-white ${
                          currentIndex === index
                            ? "bg-blue-700 border-[.2vw] border-white"
                            : "border"
                        }`}
                        aria-current={currentIndex === index ? "true" : "false"}
                        aria-label={`Slide ${index + 1}`}
                        onClick={() => goToSlide(index)}
                        data-carousel-slide-to={index}
                      />
                    </div>
                  ))}
                </div>
                <button
                  type="button"
                  className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                  onClick={prevSlide}
                  data-carousel-prev
                >
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg
                      className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 6 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 1L1 5l4 4"
                      />
                    </svg>
                    <span className="sr-only">Previous</span>
                  </span>
                </button>
                <button
                  type="button"
                  className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                  onClick={nextSlide}
                  data-carousel-next
                >
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg
                      className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 6 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 9 4-4-4-4"
                      />
                    </svg>
                    <span className="sr-only">Next</span>
                  </span>
                </button>
              </div>
              <div className="bg-white w-full flex justify-between items-center relative min-h-5 h-[3vw] px-[1vw]">
                <div className="flex mx-3">
                  {slideMove ? (
                    <IoCaretForwardSharp
                      className=" text-gray-400 bg-transparent active:scale-105 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-5 h-5 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                      onClick={() => setSlide(false)}
                    />
                  ) : (
                    <IoPauseSharp
                      className=" text-gray-400 bg-transparent  active:scale-105 hover:bg-gray-200 hover:text-gray-900 rounded-lg  w-5 h-5 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                      onClick={() => setSlide(true)}
                    />
                  )}
                  <div className="flex">
                    <button className=" text-gray-400 bg-transparent active:scale-105 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-5 h-5 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white">
                      <IoCaretBackSharp
                        onClick={prevSlide}
                        className="w-4 h-4"
                      />
                    </button>{" "}
                    <button className=" text-gray-400 bg-transparent active:scale-105 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-5 h-5 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white">
                      {" "}
                      <IoCaretForwardSharp
                        onClick={nextSlide}
                        className="w-4 h-4"
                      />
                    </button>{" "}
                  </div>
                </div>
                <button
                  type="button"
                  className=" text-gray-400 active:scale-105 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-5 h-5 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={toggleModal}
                >
                  <IoCloseOutline className="w-4 h-4" aria-hidden="true" />
                  <span className="sr-only">Close modal</span>
                </button>
              </div>

              {/* Modal footer */}
              {/* <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button
                  onClick={toggleModal}
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  I accept
                </button>
                <button
                  onClick={toggleModal}
                  className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  Decline
                </button>
              </div> */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventGallery;
