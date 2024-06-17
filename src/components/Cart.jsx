import React, { useState, useEffect } from "react";
import { products } from "../Data";
import { RxCross2 } from "react-icons/rx";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";

const Cart = () => {
  const initialQuantities = products.slice(0, 2).map(() => 1);
  const [quantities, setQuantities] = useState(initialQuantities);
  console.log(quantities);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleQuantityIncrease = (index) => {
    const newQuantities = [...quantities];
    newQuantities[index] += 1;
    setQuantities(newQuantities);
  };

  const handleQuantityDecrease = (index) => {
    const newQuantities = [...quantities];
    if (newQuantities[index] > 1) {
      newQuantities[index] -= 1;
    }
    setQuantities(newQuantities);
  };

  useEffect(() => {
    const newTotalPrice = products.slice(0, 2).reduce((acc, product, index) => {
      const productPrice =
        product.saleOffer > 0 ? product.priceAfterSale : product.price;
      return acc + productPrice * quantities[index];
    }, 0);
    setTotalPrice(newTotalPrice);
  }, [quantities]);

  const cartProduct = products.slice(0, 2);

  return (
    <div className="p-6 bg-gray-100 min-h-screen w-full">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
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
            {cartProduct.map((product, index) => (
              <tr key={product.id} className="border-t">
                <td className="px-4 py-2">
                  <RxCross2 className="text-red-600 text-[2vw] cursor-pointer hover:bg-red-700 hover:text-white rounded-full" />
                </td>
                <td className="px-4 py-2">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-[2vw] h-[2vw] rounded-md"
                  />
                </td>
                <td className="px-4 py-2">
                  <div className="font-normal text-[1vw] text-purple-500 hover:text-black">
                    {product.name}
                  </div>
                  {product.saleOffer > 0 && (
                    <p className=" font-normal text-[1vw] text-black">
                      {/* Sale: {product.saleOffer}% off */}
                    </p>
                  )}
                </td>
                <td className="px-4 py-2">
                  {product.saleOffer > 0 ? (
                    <div className="text-black text-[1vw]">
                      {/* <span className="line-through text-gray-600">
                        ${product.price.toFixed(2)}
                      </span> */}
                      <span className="text-black text-[1.2vw] ml-2">
                        ${product.priceAfterSale}
                      </span>
                    </div>
                  ) : (
                    <span className="text-black text-[1.2vw]">
                      ${product.price}
                    </span>
                  )}
                </td>
                <td className="px-[1vw] w-[5vw] mt-[.5vw] h-[3vw] text-black flex border-[.1vw] border-gray-600 group text-[1.2vw]">
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
                <td className="px-4 py-2 text-black text-[1.2vw]">
                  ${(product.priceAfterSale * quantities[index]).toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="w-full h-[25vw] flex justify-end">
        <div className="w-[49%]">
          <p className="my-[1vw]">Cart totals</p>
          <div className="divide-y w-full h-[10vw] flex flex-col justify-center shadow-md bg-white px-[1vw]">
            <div>
              <p>Subtotal: ${totalPrice.toFixed(2)}</p>
            </div>
            <div className="w-full h-[.05vw] bg-gray-400"></div>
            <div>
              <p>Total: ${totalPrice.toFixed(2)}</p>
            </div>
          </div>
          <div className="mt-[1vw] w-full">
            <button className="bg-red-600 w-full py-[.5vw]">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
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
