import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaLongArrowAltUp } from "react-icons/fa";
import { FaArrowDownLong } from "react-icons/fa6";

const CommentData = [
  {
    id: 1,
    comment:
      "I WOULD RECOMMEND HER FOR ANY EVENT WEDDINGS,ANNIVERSERY PARTY ,BABY SHOWER,BIRTHDAY PARTIES, AND MORE THANK YOU!!!!!!!!  ",
    Possition: "Group of Salars CEO",
    author: "ALEX JOHN MARTIN",
  },
  {
    id: 2,
    comment:
      "You are amazing! You worked so hard for Cady's wedding. You had every little detail under control....you need to run my life!",
    Possition: " CEO Atlant",
    author: "Samuel Smith",
  },
];

const Review = () => {
  const [startIndex, setStartIndex] = useState(0);

  const lengthOfData = CommentData.length;

  const handleScrollUp = () => {
    setStartIndex((prevIndex) =>
      prevIndex === 0 ? lengthOfData - 1 : prevIndex - 1
    );
  };

  const handleScrollDown = () => {
    setStartIndex((prevIndex) =>
      prevIndex === lengthOfData - 1 ? 0 : prevIndex + 1
    );
  };

  const visibleItem = CommentData[startIndex];

  return (
    <div className="w-full relative">
      <div
        className="absolute inset-0 bg-cover opacity-95"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/drvjsegeb/image/upload/v1717399420/slider_h7kdml.jpg')",
        }}
      ></div>
      <div className="relative flex flex-col  w-full z-10 items-center justify-center h-full text-white text-4xl font-bold">
        <div className=" flex flex-row justify-center my-[2vw] ">
          <div className=" w-[40%] ">
            <p className="text-[2vw] leading-tight">{visibleItem.comment}</p>
            <p className="text-[.7vw]  leading-normal">
              {visibleItem.Possition}
            </p>
            <p className="text-[1vw]   leading-normal">{visibleItem.author}</p>
          </div>

          <div className="w-[30%] flex flex-col  items-center ">
            <div
              onClick={handleScrollUp}
              className="my-[2vw] w-fit rounded-full border-[2px] border-white p-[.5vw] hover:bg-gradient-to-r from-[#9FF0BA] to-[#C3A1F6]"
            >
              <FaLongArrowAltUp className="text-[2vw]" />
            </div>
            <dic
              onClick={handleScrollDown}
              className="my-[2vw]  w-fit rounded-full border-[2px] border-white p-[.5vw] hover:bg-gradient-to-r from-[#9FF0BA] to-[#C3A1F6]"
            >
              <FaArrowDownLong className="text-[2vw]" />
            </dic>
          </div>
        </div>

        <motion.div className="w-full flex  flex-col sm:flex-row ">
          <motion.div className="w-full  sm:w-[48%] flex flex-wrap">
            <motion.div className="  w-[48%] m-[.2vw]   bg-purple-100 overflow-hidden">
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
            </motion.div>
            <motion.div className="w-[48%] m-[.2vw]   bg-purple-100 overflow-hidden">
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
            </motion.div>
          </motion.div>
          <motion.div className="w-full sm:w-[52%] overflow-hidden ">
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
