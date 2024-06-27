import React, { useState } from "react";
import { FaLongArrowAltUp, FaArrowDown } from "react-icons/fa";
import { motion } from "framer-motion";

const ReviewComment = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const CommentData = [
    {
      id: 1,
      comment:
        "I WOULD RECOMMEND HER FOR ANY EVENT WEDDINGS, ANNIVERSARY PARTY, BABY SHOWER, BIRTHDAY PARTIES, AND MORE THANK YOU!!!!!!!!",
      position: "Group of Salars CEO",
      author: "ALEX JOHN MARTIN",
    },
    {
      id: 2,
      comment:
        "You are amazing! You worked so hard for Cady's wedding. You had every little detail under control....you need to run my life!",
      position: "CEO Atlant",
      author: "Samuel Smith",
    },
    {
      id: 3,
      comment:
        "I WOULD RECOMMEND HER FOR ANY EVENT WEDDINGS, ANNIVERSARY PARTY, BABY SHOWER, BIRTHDAY PARTIES, AND MORE THANK YOU!!!!!!!!",
      position: "Group of Salars CEO",
      author: "ALEX JOHN MARTIN",
    },
    {
      id: 4,
      comment:
        "You are amazing! You worked so hard for Cady's wedding. You had every little detail under control....you need to run my life!",
      position: "CEO Atlant",
      author: "Samuel Smith",
    },
    {
      id: 5,
      comment:
        "I WOULD RECOMMEND HER FOR ANY EVENT WEDDINGS, ANNIVERSARY PARTY, BABY SHOWER, BIRTHDAY PARTIES, AND MORE THANK YOU!!!!!!!!",
      position: "Group of Salars CEO",
      author: "ALEX JOHN MARTIN",
    },
    {
      id: 6,
      comment:
        "You are amazing! You worked so hard for Cady's wedding. You had every little detail under control....you need to run my life!",
      position: "CEO Atlant",
      author: "Samuel Smith",
    },
  ];

  const totalItems = CommentData.length;

  const handleTop = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? totalItems - 1 : prevIndex - 1
    );
  };

  const handleBottom = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === totalItems - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <motion.div
      className="w-full h-[50vw] sm:h-[30vw]  grid grid-cols-5"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="relative col-span-4 h-full overflow-hidden rounded-lg ">
        {CommentData.map((item, index) => (
          <div
            key={item.id}
            className={`absolute  h-full  flex justify-end duration-700 ease-in-out ${
              activeIndex === index ? "translate-y-0" : "translate-y-full"
            }`}
            style={{
              top: 0,
              left: 0,
              transform: `translateY(${(index - activeIndex) * 100}%)`,
            }}
          >
            <div className="h-full w-[90%]    relative flex items-center justify-end">
              <div className="absolute  left-[15%] top-[7%]  sm:left-[20%] sm:top-[12%]  w-[15vw] h-[15vw] sm:w-[12vw] sm:h-[12vw] sm:p-[2vw] flex items-center justify-center border  border-gray-700 rounded-full ">
                <img
                  src="https://res.cloudinary.com/drvjsegeb/image/upload/v1719067841/double_vzfra7.png"
                  alt="double"
                  className="bg-blend-multiply w-[4vw]"
                />
              </div>
              <div className="z-10 w-[70%] px-[2vw]  ">
                <p className=" text-[3.4vw] sm:text-[2vw] font-mono leading-tight">
                  {item.comment}
                </p>
                <p className=" text-[1.5vw]  sm:text-[0.9vw] uppercase  my-[.5vw]  text-gray-400 leading-normal">
                  {item.position}
                </p>
                <p className="text-[2.5vw] sm:text-[1.5vw] uppercase my-[.5vw] font-mono leading-normal">
                  {item.author}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full grid-span-1   flex flex-col justify-center items-start   right-4">
        <button
          onClick={handleTop}
          className="my-[2vw] w-fit rounded-full border-[2px] border-white p-[1vw] sm:p-[.5vw] hover:bg-gradient-to-r from-[#9FF0BA] to-[#C3A1F6]"
        >
          <FaLongArrowAltUp className="text-[4vw] sm:text-[2vw]" />
        </button>
        <button
          onClick={handleBottom}
          className="my-[2vw] w-fit rounded-full border-[2px] border-white p-[1vw] sm:p-[.5vw] hover:bg-gradient-to-r from-[#9FF0BA] to-[#C3A1F6]"
        >
          <FaArrowDown className=" text-[4vw] sm:text-[2vw]" />
        </button>
      </div>
    </motion.div>
  );
};

export default ReviewComment;

// import React, { useState } from "react";

// const ReviewComment = () => {
//   const [activeIndex, setActiveIndex] = useState(1);

//   const CommentData = [
//     {
//       id: 1,
//       comment:
//         "I WOULD RECOMMEND HER FOR ANY EVENT WEDDINGS,ANNIVERSERY PARTY ,BABY SHOWER,BIRTHDAY PARTIES, AND MORE THANK YOU!!!!!!!!  ",
//       Possition: "Group of Salars CEO",
//       author: "ALEX JOHN MARTIN",
//     },
//     {
//       id: 2,
//       comment:
//         "You are amazing! You worked so hard for Cady's wedding. You had every little detail under control....you need to run my life!",
//       Possition: " CEO Atlant",
//       author: "Samuel Smith",
//     },
//   ];
//   const items = [
//     "/docs/images/carousel/carousel-1.svg",
//     "/docs/images/carousel/carousel-2.svg",
//     "/docs/images/carousel/carousel-3.svg",
//     "/docs/images/carousel/carousel-4.svg",
//     "/docs/images/carousel/carousel-5.svg",
//   ];

//   const handlePrev = () => {
//     setActiveIndex((prevIndex) =>
//       prevIndex === 0 ? CommentData.length - 1 : prevIndex - 1
//     );
//   };

//   const handleNext = () => {
//     setActiveIndex((prevIndex) =>
//       prevIndex === CommentData.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   return (
//     <div className="relative w-full" data-carousel="static">
//       <div className="relative h-56 overflow-hidden rounded-lg bg-pink-300 md:h-96">
//         {CommentData.map((visibleItem, index) => (
//           <div
//             key={index}
//             className={`absolute block w-full transition-opacity duration-700 bg-red-300 ease-in-out ${
//               activeIndex === index ? "opacity-100" : "opacity-0"
//             }`}
//             style={{
//               top: "50%",
//               left: "50%",
//               transform: "translate(-50%, -50%)",
//             }}
//             data-carousel-item={activeIndex === index ? "active" : ""}
//           >
//             <div className="relative w-[40%] flex">
//               <div className="bg-red-300 absolute bottom-[6.1vw] aspect-square p-[4vw] border border-gray-400 rounded-full ">
//                 <p>Hi</p>
//               </div>
//               <div className="z-10 ml-[7vw] ">
//                 <p className="text-[2vw] leading-tight">
//                   {visibleItem.comment}
//                 </p>
//                 <p className="text-[.7vw]  leading-normal">
//                   {visibleItem.Possition}
//                 </p>
//                 <p className="text-[1vw]   leading-normal">
//                   {visibleItem.author}
//                 </p>
//               </div>
//             </div>
//           </div>
//           // <div
//           //   key={index}
//           //   className={`absolute block w-full transition-opacity duration-700 ease-in-out ${
//           //     activeIndex === index ? "opacity-100" : "opacity-0"
//           //   }`}
//           //   style={{
//           //     top: "50%",
//           //     left: "50%",
//           //     transform: "translate(-50%, -50%)",
//           //   }}
//           //   data-carousel-item={activeIndex === index ? "active" : ""}
//           // >
//           //   <img
//           //     src={src}
//           //     className="block w-full"
//           //     alt={`Slide ${index + 1}`}
//           //   />
//           // </div>
//         ))}
//       </div>
//       <button
//         type="button"
//         className="absolute top-0 bg-yellow-200 right-0 z-30 flex flex-col  h-full px-4 cursor-pointer group focus:outline-none"
//         onClick={handlePrev}
//         data-carousel-prev
//       >
//         <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
//           <svg
//             className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
//             aria-hidden="true"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 6 10"
//           >
//             <path
//               stroke="currentColor"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M5 1L1 5l4 4"
//             />
//           </svg>
//           <span className="sr-only">Previous</span>
//         </span>
//       </button>
//       <button
//         type="button"
//         className="absolute bottom-0 end-0 z-30 flex items-center justify-end h-full px-4 cursor-pointer group focus:outline-none"
//         onClick={handleNext}
//         data-carousel-next
//       >
//         <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
//           <svg
//             className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
//             aria-hidden="true"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 6 10"
//           >
//             <path
//               stroke="currentColor"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M1 9l4-4-4-4"
//             />
//           </svg>
//           <span className="sr-only">Next</span>
//         </span>
//       </button>
//     </div>
//   );
// };

// export default ReviewComment;
