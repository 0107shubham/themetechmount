import React, { useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
import { products } from "../Data";

const Shop = () => {
  const [currentPage, setCurrentPage] = useState(1);
  let productPerPage = 9;

  let len = products.length;
  let totalNumberOfpage = 92;
  let firstIndexItem = (currentPage - 1) * productPerPage + 1;
  let lastIndexItem = firstIndexItem + productPerPage;

  let numOfPossiblePage = Math.ceil(len / productPerPage, 1);

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleNext = () => {
    if (currentPage < numOfPossiblePage) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleClick = (i) => {
    setCurrentPage(i);
  };

  let dataFetched = products.slice(firstIndexItem, lastIndexItem);
  console.log(dataFetched);

  const getPaginationButtons = () => {
    let buttons = [];
    let startPage = Math.max(currentPage - 2, 1);
    let endPage = Math.min(startPage + 4, 2);

    if (endPage - startPage < 4) {
      startPage = Math.max(endPage - 4, 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <button
          key={i}
          onClick={() => handleClick(i)}
          className={`px-3 py-1 mx-1 ${
            i === currentPage ? "bg-purple-400 text-white" : "bg-[#FFFFFF]"
          } rounded hover:bg-purple-400`}
        >
          {i}
        </button>
      );
    }
    return buttons;
  };

  return (
    <div className="w-full md:px-[20vw] my-9">
      <div className="grid grid-cols-3 gap-4 mb-6">
        {dataFetched.map((product) => (
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

      <div className="flex justify-center">
        {" "}
        {currentPage === numOfPossiblePage && (
          <button
            className="border-slate-400 border-[.1vw] hover:bg-purple-300 px-[.8vw] py-[.2vw]"
            onClick={handlePrev}
          >
            <IoIosArrowRoundBack className="text-[1.5vw]" />
          </button>
        )}
        {getPaginationButtons()}
        {currentPage !== numOfPossiblePage && (
          <button
            className="border-slate-400 border-[.1vw] hover:bg-purple-300 px-[.8vw] py-[.2vw]"
            onClick={handleNext}
          >
            <IoIosArrowRoundForward className="text-[1.5vw]" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Shop;
