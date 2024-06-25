import React, { useState, useEffect } from "react";
import { products } from "../Data";
import { RxCross2 } from "react-icons/rx";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";
import { useRecoilValue } from "recoil";
import { cartPrice } from "../state/cartState";
import { cartState } from "../state/cartState";
import { useRecoilState } from "recoil";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";

const Cart = () => {
  const [cart, setCart] = useRecoilState(cartState);
  const [totalPrice, setTotalPrice] = useRecoilState(cartPrice);

  const initialQuantities = cart.map(() => 1);
  const [quantities, setQuantities] = useState(initialQuantities);

  console.log("cart quantity", quantities.length);
  const totalProductIncart = quantities.length;
  // const [totalPrice, setTotalPrice] = useState(0);

  const handleQuantityIncrease = (index) => {
    const newQuantities = [...quantities];
    newQuantities[index] += 1;
    setQuantities(newQuantities);
    const newCart = [...cart];
    newCart[index].quantity += 1;
    setCart(newCart);
  };

  const handleQuantityDecrease = (index) => {
    const newQuantities = [...quantities];
    if (newQuantities[index] > 1) {
      newQuantities[index] -= 1;
      setQuantities(newQuantities);
      const newCart = [...cart];
      newCart[index].quantity -= 1;
      setCart(newCart);
    }
  };

  // const handleQuantityIncrease = (index) => {
  //   const filteredCart = cart.filter((product) => product.id !== index);
  //   const newQuantities = [...quantities];
  //   newQuantities[index] += 1;
  //   setQuantities(newQuantities);
  // };

  // const handleQuantityDecrease = (index) => {
  //   const newQuantities = [...quantities];
  //   if (newQuantities[index] > 1) {
  //     newQuantities[index] -= 1;
  //   }
  //   setQuantities(newQuantities);
  // };

  const handleDeleteElementInCart = (id) => {
    const filteredCart = cart.filter((product) => product.id !== id);
    setCart(filteredCart);
    const filteredQuantities = quantities.filter(
      (_, index) => cart[index].id !== id
    );
    setQuantities(filteredQuantities);
  };

  useEffect(() => {
    const newTotalPrice = cart.reduce((acc, product, index) => {
      const productPrice =
        product.saleOffer > 0 ? product.priceAfterSale : product.price;
      return acc + productPrice * quantities[index];
    }, 0);
    setTotalPrice(newTotalPrice);
  }, [quantities, cart, setTotalPrice]);

  return (
    <div className="w-full ">
      <div className="bg-black w-full">
        <Navigation />
      </div>
      <div className="w-full flex justify-center items-center h-[30vw] md:h-[20vw] bg-cover bg-[url('https://res.cloudinary.com/drvjsegeb/image/upload/v1717399420/slider_h7kdml.jpg')]">
        <p className="uppercase text-[5vw] text-white">Cart</p>
      </div>

      {totalProductIncart > 0 ? (
        <div className="p-6  min-h-screen w-full h-fit">
          <div className="">
            <div className="max-w-4xl mx-auto hidden md:block bg-white p-6 rounded-lg shadow-lg">
              <table className="table-auto w-full">
                <thead>
                  <tr>
                    <th className="px-4 py-2 text-left"></th>
                    <th className="px-4 py-2 text-left"></th>
                    <th className="px-4 py-2 text-left">Product</th>
                    <th className="px-4 py-2 text-left">Price</th>
                    <th className="px-4 py-2 text-left">Quantity</th>
                    <th className="px-4 py-2 text-left">Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((product, index) => (
                    <tr key={product.id} className="border-t ">
                      <td className="px-4 py-2">
                        <RxCross2
                          onClick={() => handleDeleteElementInCart(product.id)}
                          className="text-red-600 text-[24px] mg:text-[2vw] cursor-pointer hover:bg-red-700  hover:text-white rounded-full"
                        />
                      </td>
                      <div className="px-4 py-2">
                        <img
                          src={product.imageUrl}
                          alt={product.name}
                          className="w-[2vw] h-[2vw] rounded-md"
                        />
                      </div>
                      <td className="px-4 py-2">
                        <div className="font-normal  text-[20px] mg:text-[1.8vw]  text-purple-500 hover:text-black">
                          {product.name}
                        </div>
                        {product.saleOffer > 0 && (
                          <p className=" font-normal   text-[20px] mg:text-[1.8vw]  text-black">
                            {/* Sale: {product.saleOffer}% off */}
                          </p>
                        )}
                      </td>
                      <td className="px-4 py-2">
                        {product.saleOffer > 0 ? (
                          <div className="text-black   text-[20px] mg:text-[1.8vw]  ">
                            {/* <span className="line-through text-gray-600">
                        ${product.price.toFixed(2)}
                      </span> */}
                            <span className="text-black  text-[20px] mg:text-[1.8vw]  ml-2">
                              ${product.priceAfterSale}
                            </span>
                          </div>
                        ) : (
                          <span className="text-black   text-[20px] mg:text-[1.8vw] ">
                            ${product.price}
                          </span>
                        )}
                      </td>
                      <td className="px-[1vw]   h-[4vw] mt-[.7vw] w-[7vw]  text-black flex items-center border-[.1vw] border-gray-600 group  text-[20px] mg:text-[1.8vw]  ">
                        {quantities[index]}
                        <span className="flex flex-col ">
                          <IoMdArrowDropup
                            onClick={() => handleQuantityIncrease(index)}
                            className="hidden group-hover:block hover:bg-gray-300 active:bg-gray-600 ml-[.5vw]"
                          />
                          <IoMdArrowDropdown
                            onClick={() => handleQuantityDecrease(index)}
                            className="hidden group-hover:block hover:bg-gray-300 active:bg-gray-600 ml-[.5vw]"
                          />
                        </span>
                      </td>
                      <td className="px-4 py-2 text-black  text-[20px] mg:text-[1.8vw] ">
                        $
                        {(product.priceAfterSale * quantities[index]).toFixed(
                          2
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="md:hidden">
              {cart.map((product, index) => (
                <div className="border divide-y my-7 ">
                  <div className=" px-[3vw]">
                    <RxCross2
                      onClick={() => handleDeleteElementInCart(product.id)}
                      className=" text-[5vw] my-[6px] text-red-600 font-bold cursor-pointer hover:bg-red-700  hover:text-white rounded-full"
                    />
                  </div>
                  <div className="flex justify-between items-center  my-[6px] px-[3vw]">
                    <p className="font-bold text-[4vw]">Product</p>
                    <p className=" text-[4vw] text-purple-600">
                      {" "}
                      {product.name}
                    </p>
                  </div>
                  <div className="flex justify-between items-center  my-[6px]  px-[3vw]">
                    <p className="font-bold text-[4vw]">Price</p>
                    <div className=" text-[4vw] ">
                      {product.saleOffer > 0 ? (
                        <div className="text-black     ">
                          <span className="text-black  ">
                            ${product.priceAfterSale}
                          </span>
                        </div>
                      ) : (
                        <span className=" ">${product.price}</span>
                      )}
                    </div>
                  </div>
                  <div className="flex justify-between items-center  my-[6px] px-[3vw]">
                    <p className="font-bold text-[4vw]">Quantity</p>
                    <div className="   text-black flex items-center h-full  text-[4vw]   ">
                      {quantities[index]}
                      <span className="flex flex-col  text-[4vw]  ">
                        <IoMdArrowDropup
                          onClick={() => handleQuantityIncrease(index)}
                          className=" hover:bg-gray-300 active:bg-gray-600 ml-[.5vw]  text-[4vw] "
                        />
                        <IoMdArrowDropdown
                          onClick={() => handleQuantityDecrease(index)}
                          className=" hover:bg-gray-300 active:bg-gray-600 ml-[.5vw]  text-[4vw] "
                        />
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center  my-[6px]  px-[3vw] ">
                    <p className="font-bold text-[4vw]">Subtotal</p>
                    <p className=" text-[4vw]">
                      {" "}
                      {(product.priceAfterSale * quantities[index]).toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="w-full  hidden  h-[25vw] md:flex justify-end mt-[3vw]  ">
              <div className="w-[49%]">
                <p className="my-[1vw]  md:text-[30px] font-bold  ">
                  Cart totals
                </p>
                <div className=" w-[40vw] h-[10vw] flex flex-col justify-center shadow-md bg-white px-[1vw]">
                  <div className="md:text-[25px] ">
                    <p>
                      <span className="font-semibold mr-[3vw]">Subtotal</span> $
                      {totalPrice.toFixed(2)}
                    </p>
                  </div>
                  <div className="w-full h-[1px] my-[1vw] bg-gray-400"></div>
                  <div className="md:text-[25px] font-semibold ">
                    <p>
                      <span className=" mr-[6vw]">Total</span> $
                      {totalPrice.toFixed(2)}
                    </p>
                  </div>
                </div>
                <div className="mt-[1vw]  bg-gradient-to-r from-[#9FF0BA] to-[#C3A1F6] text-center text-[22px] py-[.5vw] w-[40vw] ">
                  <Link to="/checkout" className=" ">
                    Proceed to Checkout
                  </Link>
                </div>
              </div>
            </div>

            <div className="w-full  flex mt-[3vw] md:hidden  my-[5vw] text-[4vw] ">
              <div className="w-full">
                <p className="my-[3vw]  text-[5vw] font-bold  ">Cart totals</p>
                <div className=" w-full  flex flex-col justify-center shadow-md bg-white p-[4vw] border">
                  <div className="md:text-[25px] flex justify-between border px-2">
                    <p className="font-semibold mr-[3vw]">Subtotal</p>{" "}
                    <p>$ {totalPrice.toFixed(2)}</p>
                  </div>
                  {/* <div className="w-full h-[1px] my-[1vw] bg-gray-400 font-semibold "></div> */}
                  <div className="md:text-[25px] flex justify-between border  px-2">
                    <p className="font-semibold mr-[3vw]">Total</p>{" "}
                    <p>$ {totalPrice.toFixed(2)}</p>
                  </div>
                </div>
                <div className="mt-[1vw]  bg-gradient-to-r from-[#9FF0BA] to-[#C3A1F6] text-center  py-[.5vw] w-full">
                  <Link to="/checkout" className=" ">
                    Proceed to Checkout
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="h-[100vh]">Cart is empty</div>
      )}
    </div>
  );
};

export default Cart;

// import React from "react";
// import { products } from "../Data";

// const Cart = () => {
//   let cartProduct = products.slice(0, 2);
//   return (
//     <div>
//       <div>
//         <div className="grid grid-cols-1  gap-6">
//           {cartProduct.map((product) => (
//             <div key={product.id} className="border p-4 rounded-lg shadow-lg">
//               {product.saleOffer > 0 && (
//                 <p className="text-red-600 mb-2">
//                   Sale: {product.saleOffer}% off
//                 </p>
//               )}
//               <p className="text-green-600 font-bold">
//                 Price After Sale: ${product.priceAfterSale.toFixed(2)}
//               </p>

//               <table class="table-auto">
//                 <thead>
//                   <tr>
//                     <th></th>
//                     <th>Product</th>
//                     <th>Price</th>
//                     <th>Quantity</th>
//                     <th>Subtotal</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   <tr>
//                     <td>
//                       {
//                         <img
//                           src={product.imageUrl}
//                           alt={product.name}
//                           className="w-[5vw] h-[5vw] mb-4 rounded-md"
//                         />
//                       }
//                     </td>
//                     <td>{product.name}</td>
//                     <td>{product.price}</td>
//                     <td>2</td>
//                     <td>{product.price * 2}</td>
//                   </tr>
//                 </tbody>
//               </table>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cart;
