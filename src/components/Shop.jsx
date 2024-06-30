import React, { useState } from "react";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { products as initialProducts } from "../Data";
import { useRecoilState } from "recoil";
import { cartState } from "../state/cartState";
import { useRecoilValue } from "recoil";
import Navigation from "./Navigation";

const Shop = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [cart, setCart] = useRecoilState(cartState);
  const cartvalue = useRecoilValue(cartState);
  const [sorting, setSorting] = useState("Default Sorting");
  const [openSearch, setOpenSearch] = useState(false);

  const productPerPage = 9;
  const len = initialProducts.length;
  const numOfPossiblePage = Math.ceil(len / productPerPage);

  const sortProducts = (products, sortOrder) => {
    let sortedProducts = [...products];
    switch (sortOrder) {
      case "Sort by price : low to high":
        return sortedProducts.sort((a, b) => a.price - b.price);
      case "Sort by price : high to low":
        return sortedProducts.sort((a, b) => b.price - a.price);
      default:
        return sortedProducts;
    }
  };

  const sortedProducts = sortProducts(initialProducts, sorting);

  const firstIndexItem = (currentPage - 1) * productPerPage;
  const lastIndexItem = firstIndexItem + productPerPage;
  const dataFetched = sortedProducts.slice(firstIndexItem, lastIndexItem);

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

  const addToCart = (product) => {
    const productInCart = cart.find((item) => item.id === product.id);
    if (productInCart) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const getPaginationButtons = () => {
    let buttons = [];
    const startPage = Math.max(currentPage - 2, 1);
    const endPage = Math.min(startPage + 4, numOfPossiblePage);

    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <button
          key={i}
          onClick={() => handleClick(i)}
          className={`px-3 py-1 mx-1 ${
            i === currentPage ? "bg-purple-400 text-white" : "bg-[#FFFFFF]"
          } rounded hover:bg-purple-400`}
        >
          {i}{" "}
        </button>
      );
    }
    return buttons;
  };

  const truncateWords = (str, numWords) => {
    const words = str.split(" ");
    return words.length > numWords
      ? words.slice(0, numWords).join(" ") + "..."
      : str;
  };

  const options = [
    "Default sorting",
    "Sort by popularity",
    "Sort by avg rating",
    "Sort by latest",
    "Sort by price : low to high",
    "Sort by price : high to low",
  ];

  const handleSorting = (value) => {
    setSorting(value);
    setOpenSearch(false);
    setCurrentPage(1); // Reset to first page after sorting
  };

  return (
    <div className="w-full flex flex-col items-center">
      <div className="bg-black w-full">
        <Navigation />
      </div>{" "}
      <div className="w-full flex justify-center items-center h-[30vw] md:h-[20vw] bg-cover bg-[url('https://res.cloudinary.com/drvjsegeb/image/upload/v1717399420/slider_h7kdml.jpg')]">
        <p className="uppercase text-[5vw] text-white"> products </p>{" "}
      </div>{" "}
      <div className="w-full md:w-[750px] lg:w-full lg:px-[20vw]">
        <div className="w-full flex flex-col pl-[2vw] sm:pl-[0vw] sm:flex-row sm:justify-between h-fit text-[4vw] md:text-[2.5vw] lg:text-[1.5vw] my-[3vw]">
          <p>
            Showing {(currentPage - 1) * 9 + 1} -{" "}
            {currentPage * 9 < len ? currentPage * 9 : len}
            of {len}
            results{" "}
          </p>{" "}
          <div className="relative">
            <button
              onClick={() => setOpenSearch(!openSearch)}
              className="border whitespace-nowrap text-[4vw] px-[3vw] md:text-[2.5vw] lg:text-[1.5vw] w-fit cursor-pointer"
            >
              <span className="mr-[4vw]"> {truncateWords(sorting, 5)} </span>{" "}
              {openSearch ? "▲" : "▼"}{" "}
            </button>
            {openSearch && (
              <div className="absolute bottom-full w-fit sm:w-full py-[1vw] px-[2vw] h-[30vw] md:h-[20vw] overflow-y-scroll bg-white border border-black z-50">
                <input
                  type="search"
                  className="border w-fit"
                  placeholder="Search"
                />{" "}
                {options.map((option, index) => (
                  <p
                    key={index}
                    onClick={() => handleSorting(option)}
                    className="cursor-pointer whitespace-nowrap hover:bg-purple-400 text-[2.5vw] sm:text-[3vw] md:text-[2vw] lg:text-[1.5vw]"
                  >
                    {option}{" "}
                  </p>
                ))}{" "}
              </div>
            )}{" "}
          </div>{" "}
        </div>{" "}
        <div className="w-full my-[3vw]">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {" "}
            {dataFetched.map((product) => (
              <div
                key={product.id}
                className="bg-[#F8F8F8] w-full aspect-[10/12] flex flex-col justify-between transform duration-1000 transition-transform shadow-md rounded-lg overflow-hidden pt-[2vw] group"
              >
                <div className="w-full h-full relative overflow-hidden">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-full lg:h-[15vw] object-contain group-hover:scale-105 ease-in-out"
                  />
                  <button
                    onClick={() => addToCart(product)}
                    className="text-[1.2vw] hidden lg:block absolute py-[.2vw] translate-y-0 transform lg:translate-y-[10vw] transition-transform duration-1000 ease-in-out lg:group-hover:translate-y-0 bottom-0 text-white w-full lg:h-[4vw] bg-purple-400"
                  >
                    Add to Cart{" "}
                  </button>{" "}
                </div>{" "}
                <button
                  onClick={() => addToCart(product)}
                  className="text-[3vw] focus:bg-purple-500 lg:hidden sm:text-[2.4vw] md:text-[2vw] py-[.2vw] text-white w-full lg:h-[4vw] bg-purple-400"
                >
                  Add to Cart{" "}
                </button>{" "}
                <div className="p-4 bg-white">
                  <h2 className="text-[3.2vw] sm:text-[2.7vw] md:text-[2.3vw] lg:text-[1.5vw] text-center font-bold text-black whitespace-nowrap">
                    {" "}
                    {product.name}{" "}
                  </h2>{" "}
                  <div className="flex justify-center items-center">
                    {" "}
                    {product.saleOffer === 0 && (
                      <div className="text-purple-500 text-[3vw] sm:text-[2.4vw] md:text-[2vw] lg:text-[1.2vw]">
                        $ {product.price}{" "}
                      </div>
                    )}{" "}
                  </div>{" "}
                  {product.saleOffer > 0 && (
                    <div className="flex justify-center">
                      <div className="line-through mx-[.5vw] text-[3vw] sm:text-[2.4vw] md:text-[2vw] lg:text-[1.2vw] text-gray-400">
                        $ {product.price}{" "}
                      </div>{" "}
                      <div className="text-purple-500 mx-[.5vw] text-[2.6vw] sm:text-[2.2vw] md:text-[1.8vw] lg:text-[1vw]">
                        $ {product.priceAfterSale}{" "}
                      </div>{" "}
                    </div>
                  )}{" "}
                </div>{" "}
              </div>
            ))}{" "}
          </div>
          <div className="flex justify-center">
            {" "}
            {currentPage > 1 && (
              <button
                className="border-slate-400 border-[.1vw] hover:bg-purple-300 px-[.8vw] py-[.2vw]"
                onClick={handlePrev}
              >
                <IoIosArrowRoundBack className="text-[4vw] sm:text-[2.7vw] md:text-[2.3vw] lg:text-[1.5vw]" />
              </button>
            )}{" "}
            {getPaginationButtons()}{" "}
            {currentPage < numOfPossiblePage && (
              <button
                className="border-slate-400 border-[.1vw] hover:bg-purple-300 px-[.8vw] py-[.2vw]"
                onClick={handleNext}
              >
                <IoIosArrowRoundForward className="text-[4vw] sm:text-[2.7vw] md:text-[2.3vw] lg:text-[1.5vw]" />
              </button>
            )}{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default Shop;

// import React, { useState } from "react";
// import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
// import { products } from "../Data";
// import { useRecoilState } from "recoil";
// import { cartState } from "../state/cartState";
// import { useRecoilValue } from "recoil";
// import Navigation from "./Navigation";

// const Shop = () => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [cart, setCart] = useRecoilState(cartState);
//   const cartvalue = useRecoilValue(cartState);
//   const [sorting, setSorting] = useState("Default Sorting");
//   const [openSearch, setOpenSearch] = useState(false);
//   console.log(cartvalue);
//   const cartvalueLength = cartvalue.length;
//   const productPerPage = 9;
//   const len = products.length;
//   const numOfPossiblePage = Math.ceil(len / productPerPage);

//   const firstIndexItem = (currentPage - 1) * productPerPage;
//   const lastIndexItem = firstIndexItem + productPerPage;
//   const dataFetched = products.slice(firstIndexItem, lastIndexItem);

//   const handlePrev = () => {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   const handleNext = () => {
//     if (currentPage < numOfPossiblePage) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   const handleClick = (i) => {
//     setCurrentPage(i);
//   };

//   const addToCart = (product) => {
//     const productInCart = cart.find((item) => item.id === product.id);
//     if (productInCart) {
//       setCart(
//         cart.map((item) =>
//           item.id === product.id
//             ? { ...item, quantity: item.quantity + 1 }
//             : item
//         )
//       );
//     } else {
//       setCart([...cart, { ...product, quantity: 1 }]);
//     }
//   };

//   const getPaginationButtons = () => {
//     let buttons = [];
//     const startPage = Math.max(currentPage - 2, 1);
//     const endPage = Math.min(startPage + 4, numOfPossiblePage);

//     for (let i = startPage; i <= endPage; i++) {
//       buttons.push(
//         <button
//           key={i}
//           onClick={() => handleClick(i)}
//           className={`px-3 py-1 mx-1 ${
//             i === currentPage ? "bg-purple-400 text-white" : "bg-[#FFFFFF]"
//           } rounded hover:bg-purple-400`}
//         >
//           {i}
//         </button>
//       );
//     }
//     return buttons;
//   };

//   const truncateWords = (str, numWords) => {
//     const words = str.split(" ");
//     return words.length > numWords
//       ? words.slice(0, numWords).join(" ") + "..."
//       : str;
//   };

//   const options = [
//     "Default sorting ",
//     "Sort by popularity",
//     "Sort by avg rating",
//     "Sort by latest",
//     "Sort by price : low to high",
//     "Sort by price : high to low",
//   ];

//   const handleSorting = (value) => {
//     setSorting(value);
//     setOpenSearch(false);
//   };
//   return (
//     <div className="w-full flex flex-col items-center">
//       <div className="bg-black w-full">
//         <Navigation />
//       </div>
//       <div className="w-full flex justify-center items-center h-[30vw] md:h-[20vw] bg-cover bg-[url('https://res.cloudinary.com/drvjsegeb/image/upload/v1717399420/slider_h7kdml.jpg')]">
//         <p className="uppercase text-[5vw] text-white">products</p>
//       </div>
//       <div className="   w-full md:w-[750px]  lg:w-full lg:px-[20vw]">
//         <div className=" w-full  flex flex-col pl-[2vw] sm:pl-[0vw] sm:flex-row sm:justify-between h-fit  text-[4vw]     md:text-[2.5vw] lg:text-[1.5vw]     my-[3vw]">
//           <p>
//             Showing {(currentPage - 1) * 9 + 1} -{" "}
//             {currentPage * 9 < len ? currentPage * 9 : len} of {len} results
//           </p>
//           <div className="relative">
//             <button
//               onClick={() => setOpenSearch(!openSearch)}
//               className="border whitespace-nowrap  text-[4vw]  px-[3vw]   md:text-[2.5vw] lg:text-[1.5vw]  w-fit cursor-pointer"
//             >
//               <span className="mr-[4vw]"> {truncateWords(sorting, 5)} </span>
//               {openSearch ? "▲" : "▼"}
//             </button>

//             {openSearch && (
//               <div className="absolute bottom-full w-fit sm:w-full py-[1vw] px-[2vw] h-[30vw] md:h-[20vw] overflow-y-scroll bg-white border border-black z-50 ">
//                 <input
//                   type="search"
//                   className="border  w-fit"
//                   placeholder="Search"
//                 />
//                 {options.map((option, index) => (
//                   <p
//                     key={index}
//                     onClick={() => handleSorting(option)}
//                     className="cursor-pointer whitespace-nowrap hover:bg-purple-400 text-[2.5vw] sm:text-[3vw] md:text-[2vw] lg:text-[1.5vw]"
//                   >
//                     {option}
//                   </p>
//                 ))}
//               </div>
//             )}
//           </div>
//           {/* <div className="relative">
//           <p
//             onClick={() => setOpenSearch(!openSearch)}
//             className="border w-[25vw] "
//           >
//             {sorting} {openSearch ? "s" : "t"}
//           </p>

//           {openSearch && (
//             <div
//               onClick={(e) => handleSorting(e)}
//               className="absolute bottom-full w-full h-[20vw] border border-black overflow-x-scroll z-50 bg-pink-900"
//             >
//               <input type="search" className="border w-full" />
//               <p>hiiii</p>
//               <p>hiiii</p>
//               <p>hiiii</p>
//               <p>hiiii</p>
//               <p>hiiii</p>
//             </div>
//           )}
//         </div> */}
//         </div>
//         <div className="w-full my-[3vw] ">
//           <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
//             {dataFetched.map((product) => (
//               <div
//                 key={product.id}
//                 className="bg-[#F8F8F8] w-full aspect-[10/12] flex flex-col justify-between transform duration-1000 transition-transform shadow-md rounded-lg overflow-hidden pt-[2vw] group"
//               >
//                 <div className="w-full  h-full  relative overflow-hidden ">
//                   <img
//                     src={product.imageUrl}
//                     alt={product.name}
//                     className="w-full  h-full  lg:h-[15vw] object-contain group-hover:scale-105 ease-in-out"
//                   />
//                   <button
//                     onClick={() => addToCart(product)}
//                     className="text-[1.2vw] hidden lg:block  absolute py-[.2vw]  translate-y-0  transform lg:translate-y-[10vw] transition-transform duration-1000 ease-in-out lg:group-hover:translate-y-0 bottom-0 text-white w-full lg:h-[4vw] bg-purple-400"
//                   >
//                     Add to Cart
//                   </button>
//                 </div>
//                 <button
//                   onClick={() => addToCart(product)}
//                   className="text-[3vw] focus:bg-purple-500 lg:hidden sm:text-[2.4vw] md:text-[2vw]   py-[.2vw]   text-white w-full lg:h-[4vw] bg-purple-400"
//                 >
//                   Add to Cart
//                 </button>
//                 <div className="p-4 bg-white">
//                   <h2 className=" text-[3.2vw]  sm:text-[2.7vw] md:text-[2.3vw] lg:text-[1.5vw] text-center font-bold text-black whitespace-nowrap">
//                     {product.name}
//                   </h2>
//                   <div className="flex justify-center items-center">
//                     {product.saleOffer === 0 && (
//                       <div className="text-purple-500 text-[3vw] sm:text-[2.4vw] md:text-[2vw] lg:text-[1.2vw]">
//                         ${product.price}
//                       </div>
//                     )}
//                   </div>
//                   {product.saleOffer > 0 && (
//                     <div className="flex justify-center">
//                       <div className="line-through mx-[.5vw]  text-[3vw] sm:text-[2.4vw] md:text-[2vw] lg:text-[1.2vw] text-gray-400">
//                         ${product.price}
//                       </div>
//                       <div className="text-purple-500 mx-[.5vw]  text-[2.6vw] sm:text-[2.2vw] md:text-[1.8vw] lg:text-[1vw]">
//                         ${product.priceAfterSale}
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="flex justify-center">
//             {currentPage > 1 && (
//               <button
//                 className="border-slate-400 border-[.1vw] hover:bg-purple-300 px-[.8vw] py-[.2vw]"
//                 onClick={handlePrev}
//               >
//                 <IoIosArrowRoundBack className="  text-[4vw]  sm:text-[2.7vw] md:text-[2.3vw] lg:text-[1.5vw]" />
//               </button>
//             )}
//             {getPaginationButtons()}
//             {currentPage < numOfPossiblePage && (
//               <button
//                 className="border-slate-400 border-[.1vw] hover:bg-purple-300 px-[.8vw] py-[.2vw]"
//                 onClick={handleNext}
//               >
//                 <IoIosArrowRoundForward className=" text-[4vw]  sm:text-[2.7vw] md:text-[2.3vw] lg:text-[1.5vw]" />
//               </button>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Shop;

// import React, { useState } from "react";
// import { IoIosArrowRoundBack } from "react-icons/io";
// import { IoIosArrowRoundForward } from "react-icons/io";
// import { products } from "../Data";

// const Shop = () => {
//   const [currentPage, setCurrentPage] = useState(1);
//   let productPerPage = 9;

//   let len = products.length;
//   let totalNumberOfpage = 92;
//   let firstIndexItem = (currentPage - 1) * productPerPage + 1;
//   let lastIndexItem = firstIndexItem + productPerPage;

//   let numOfPossiblePage = Math.ceil(len / productPerPage, 1);

//   const handlePrev = () => {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };
//   const handleNext = () => {
//     if (currentPage < numOfPossiblePage) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   const handleClick = (i) => {
//     setCurrentPage(i);
//   };

//   let dataFetched = products.slice(firstIndexItem, lastIndexItem);
//   console.log(dataFetched);

//   const getPaginationButtons = () => {
//     let buttons = [];
//     let startPage = Math.max(currentPage - 2, 1);
//     let endPage = Math.min(startPage + 4, 2);

//     if (endPage - startPage < 4) {
//       startPage = Math.max(endPage - 4, 1);
//     }

//     for (let i = startPage; i <= endPage; i++) {
//       buttons.push(
//         <button
//           key={i}
//           onClick={() => handleClick(i)}
//           className={`px-3 py-1 mx-1 ${
//             i === currentPage ? "bg-purple-400 text-white" : "bg-[#FFFFFF]"
//           } rounded hover:bg-purple-400`}
//         >
//           {i}
//         </button>
//       );
//     }
//     return buttons;
//   };

//   return (
//     <div className="w-full md:px-[20vw] my-9">
//       <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
//         {dataFetched.map((product) => (
//           <div
//             key={product.id}
//             className="bg-[#F8F8F8] flex flex-col justify-between transform duration-1000 transition-transform shadow-md rounded-lg overflow-hidden pt-[2vw] group"
//           >
//             <div className="w-full relative overflow-hidden">
//               <img
//                 src={product.imageUrl}
//                 alt={product.name}
//                 className=" w-full mb-[2vw] h-[15vw] object-contain group-hover:scale-105 ease-in-out "
//               />

//               <button className="absolute transform translate-y-[10vw] transition-transform duration-1000 ease-in-out group-hover:translate-y-0 bottom-0 text-white w-full h-[4vw]  bg-purple-400 ">
//                 Add to Cart
//               </button>
//             </div>
//             <div className="p-4 bg-white">
//               <h2 className="text-[1.5vw] text-center font-bold text-black whitespace-nowrap">
//                 {product.name}
//               </h2>
//               <div className="flex justify-center items-center ">
//                 {product.saleOffer == 0 && (
//                   <div className="text-purple-500 text-[1.2vw]">
//                     ${product.price}
//                   </div>
//                 )}
//               </div>
//               {product.saleOffer > 0 && (
//                 <div className="flex justify-center ">
//                   <div className=" line-through  mx-[.5vw] text-[1vw]  text-gray-400">
//                     ${product.price}
//                   </div>
//                   <div className="text-purple-500 mx-[.5vw] text-[1.2vw]">
//                     ${product.priceAfterSale}
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="flex justify-center">
//         {" "}
//         {currentPage === numOfPossiblePage && (
//           <button
//             className="border-slate-400 border-[.1vw] hover:bg-purple-300 px-[.8vw] py-[.2vw]"
//             onClick={handlePrev}
//           >
//             <IoIosArrowRoundBack className="text-[1.5vw]" />
//           </button>
//         )}
//         {getPaginationButtons()}
//         {currentPage !== numOfPossiblePage && (
//           <button
//             className="border-slate-400 border-[.1vw] hover:bg-purple-300 px-[.8vw] py-[.2vw]"
//             onClick={handleNext}
//           >
//             <IoIosArrowRoundForward className="text-[1.5vw]" />
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Shop;
