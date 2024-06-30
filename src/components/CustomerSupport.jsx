import React from "react";
import { FaHeadset } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";

const CustomerSupport = () => {
  return (
    <div className="fixed shadow-md cursor-pointer  flex flex-col justify-center items-center space-y-2 p-[10px] right-0 top-[35%] bg-white h-[150px]">
      <div className="relative group">
        {" "}
        <FaHeadset className="text-[30px] text-black" />{" "}
        <div className="absolute shadow-lg capitalize hidden group-hover:block right-8 top-0 bg-white p-[10px] text-[16px]">
          {" "}
          <p> SUPPORT </p>{" "}
        </div>{" "}
      </div>{" "}
      <div className="relative group">
        <FaRegEdit className="text-[30px] text-black" />
        <div className="absolute hidden shadow-lg group-hover:block right-8 top-0 bg-white p-[10px] text-[16px]">
          {" "}
          <p> Customization </p>{" "}
        </div>{" "}
      </div>{" "}
      <div className="relative group">
        <AiOutlineShoppingCart className="text-[30px] text-black" />
        <div className="absolute hidden shadow-lg group-hover:block whitespace-nowrap right-8 top-0 capitalize bg-white p-[10px] text-[16px]">
          {" "}
          <p> Buy Now </p>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default CustomerSupport;
