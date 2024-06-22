import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaLongArrowAltUp } from "react-icons/fa";
import { FaArrowDownLong } from "react-icons/fa6";
import EventGallery from "./EventGallery";
import ReviewComment from "./ReviewComment";

// const CommentData = [
//   {
//     id: 1,
//     comment:
//       "I WOULD RECOMMEND HER FOR ANY EVENT WEDDINGS,ANNIVERSERY PARTY ,BABY SHOWER,BIRTHDAY PARTIES, AND MORE THANK YOU!!!!!!!!  ",
//     Possition: "Group of Salars CEO",
//     author: "ALEX JOHN MARTIN",
//   },
//   {
//     id: 2,
//     comment:
//       "You are amazing! You worked so hard for Cady's wedding. You had every little detail under control....you need to run my life!",
//     Possition: " CEO Atlant",
//     author: "Samuel Smith",
//   },
// ];

const evenetImage = [
  {
    id: 1,
    url: "https://res.cloudinary.com/drvjsegeb/image/upload/v1718602003/gallary-img-3_1_foiyiv.jpg",
  },
  {
    id: 2,
    url: "https://res.cloudinary.com/drvjsegeb/image/upload/v1718602010/gallary-img-2_1_gmqkox.jpg",
  },
  {
    id: 3,
    url: "https://res.cloudinary.com/drvjsegeb/image/upload/v1718602021/gallary-img-1_1_wwnt5y.jpg",
  },
  {
    id: 4,
    url: "https://res.cloudinary.com/drvjsegeb/image/upload/v1718602032/gallary-img-4_1_llh4fp.jpg",
  },
];

const Review = () => {
  // const [startIndex, setStartIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  // const lengthOfData = CommentData.length;
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const toggleCLose = (status) => {
    console.log("close", status);
    setIsOpen(status);
  };

  console.log("status", isOpen);

  // const handleScrollUp = () => {
  //   setStartIndex((prevIndex) =>
  //     prevIndex === 0 ? lengthOfData - 1 : prevIndex - 1
  //   );
  // };

  // const handleScrollDown = () => {
  //   setStartIndex((prevIndex) =>
  //     prevIndex === lengthOfData - 1 ? 0 : prevIndex + 1
  //   );
  // };

  // const visibleItem = CommentData[startIndex];

  return (
    <div className="w-full ">
      <div
        className=" flex flex-col  w-full  items-center justify-center h-full text-white text-4xl font-bold"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/drvjsegeb/image/upload/v1717399420/slider_h7kdml.jpg')",
        }}
      >
        <ReviewComment />
        {/* <div className=" flex flex-row justify-center items-center bg-purple-300 h-[30vw]   ">
          <div className="relative w-[40%] flex">
            <div className="bg-red-300 absolute bottom-[6.1vw] aspect-square p-[4vw] border border-gray-400 rounded-full ">
              <p>Hi</p>
            </div>
            <div className="z-10 ml-[7vw] ">
              <p className="text-[2vw] leading-tight">{visibleItem.comment}</p>
              <p className="text-[.7vw]  leading-normal">
                {visibleItem.Possition}
              </p>
              <p className="text-[1vw]   leading-normal">
                {visibleItem.author}
              </p>
            </div>
          </div>

          <div className="w-[30%] flex flex-col  items-center ">
            <button
              onClick={handleScrollUp}
              className="my-[2vw] w-fit rounded-full border-[2px] border-white p-[.5vw] hover:bg-gradient-to-r from-[#9FF0BA] to-[#C3A1F6]"
            >
              <FaLongArrowAltUp className="text-[2vw]" />
            </button>
            <button
              onClick={handleScrollDown}
              className="my-[2vw]  w-fit rounded-full border-[2px] border-white p-[.5vw] hover:bg-gradient-to-r from-[#9FF0BA] to-[#C3A1F6]"
            >
              <FaArrowDownLong className="text-[2vw]" />
            </button>
          </div>
        </div> */}

        <motion.div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-[1vw]">
          <motion.div className="w-full grid grid-cols-2   gap-[.5vw]">
            {evenetImage.map((items) => (
              <motion.div
                onClick={toggleModal}
                className="   m-[.2vw]   bg-purple-100 overflow-hidden"
              >
                <motion.img
                  key={items.id}
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 1 }}
                  src={items.url}
                  alt={`gallery ${items.index}`}
                  className="h-full w-full hover:brightness-75"

                  //  src="https://res.cloudinary.com/drvjsegeb/image/upload/v1717827170/gallary-img-1_y7dmp7.jpg"
                />
                <EventGallery
                  className="bg-red"
                  status={isOpen}
                  toggleCLose={toggleCLose}
                />
              </motion.div>
            ))}

            {/* <motion.div className="w-[48%] m-[.2vw]   bg-purple-100 overflow-hidden">
              <motion.img
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.8 }}
                className="h-full w-full"
                src="https://res.cloudinary.com/drvjsegeb/image/upload/v1717827170/gallary-img-1_y7dmp7.jpg"
              />
            </motion.div>
            <motion.div className="w-[48%] m-[.2vw]   bg-purple-100 overflow-hidden">
              <motion.img
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.8 }}
                className="h-full w-full"
                src="https://res.cloudinary.com/drvjsegeb/image/upload/v1717827170/gallary-img-1_y7dmp7.jpg"
              />
            </motion.div> */}

            {/* <motion.div className="w-[48%] m-[.2vw]   bg-purple-100 overflow-hidden">
              <motion.img
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.8 }}
                className="h-full w-full"
                src="https://res.cloudinary.com/drvjsegeb/image/upload/v1717827170/gallary-img-1_y7dmp7.jpg"
              />
            </motion.div> */}
          </motion.div>
          <motion.div className="w-full  overflow-hidden   ">
            <motion.img
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.8 }}
              className="h-full w-full"
              src="https://res.cloudinary.com/drvjsegeb/image/upload/v1717827170/gallary-img-1_y7dmp7.jpg"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Review;
