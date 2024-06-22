import React, { useState, useEffect } from "react";
import {
  GetCountries,
  GetState,
  GetCity,
  GetLanguages,
} from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";
import Navigation from "./Navigation";

const Checkout = () => {
  const [countryId, setCountryId] = useState(0);
  const [stateId, setStateId] = useState(0);
  const [cityId, setCityId] = useState(0);
  const [language, setLanguage] = useState(0);

  const [countryList, setCountryList] = useState([]);
  const [stateList, setStateList] = useState([]);
  const [cityList, setCityList] = useState([]);
  const [languageList, setLanguageList] = useState([]);

  const [orderNotes, setOrderNotes] = useState("");

  const handleNotesChange = (e) => {
    setOrderNotes(e.target.value);
  };

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    country: "",
    address: "",
    apartment: "",
    city: "",
    state: "",
    zipCode: "",
    phone: "",
    email: "",
    notes: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    GetCountries().then((result) => {
      setCountryList(result);
    });

    GetLanguages().then((result) => {
      setLanguageList(result);
    });
  }, []);

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: !value,
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    if (value) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: false,
      }));
    }
  };

  return (
    <div className="w-full ">
      <div className="bg-black w-full">
        <Navigation />
      </div>
      <div className="w-full flex flex-col md:flex-row gap-4  px-[5vw]">
        <div className="bg-purple-200  w-full md:w-[66%]">
          <div className="p-[3vw] bg-gray-100 min-h-screen flex flex-col items-center">
            <div className="max-w-4xl w-full bg-white p-[3vw] rounded-lg shadow-lg  flex flex-col sm:flex-row">
              <div className=" w-full md:w-[50%]">
                <h2 className="text-[2.5vw] font-medium mb-[2vw]">
                  Billing Details
                </h2>

                <form>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-[.1vw] mb-[2vw] ">
                    <div className="col-span-1">
                      <label className="block mb-[1vw] font-medium">
                        First name *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        className={`w-full text-[1.2vw] p-[.3vw] bg-[#F7F7F7] border-[.1vw] ${
                          errors.firstName
                            ? "border-red-500"
                            : "focus:border-yellow-400 border-gray-600"
                        }`}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        style={{ outline: "none" }}
                      />
                    </div>
                    <div className="col-span-1">
                      <label className="block mb-[1vw] font-medium">
                        Last name *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        className={`w-full p-[.3vw] text-[1.2vw]  bg-[#F7F7F7] border-[.1vw] ${
                          errors.lastName
                            ? "border-red-500"
                            : "focus:border-blue-500 border-gray-600"
                        }`}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        style={{ outline: "none" }}
                      />
                    </div>
                  </div>
                  <div className="mb-[2vw]">
                    <label className=" mb-[1vw] font-medium">
                      Company name (optional)
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      className="w-full  p-[.3vw] text-[1.2vw]  bg-[#F7F7F7]  border-[.1vw] border-green-600  focus:outline-none focus:border-yellow-500"
                      onChange={handleChange}
                      style={{ outline: "none" }}
                    />
                  </div>
                  <div className="mb-[2vw]">
                    <label className="block mb-[1vw] font-medium">
                      Country / Region *
                    </label>
                    <select
                      name="country"
                      className={`w-full  p-[.3vw] text-[1.2vw]  bg-[#F7F7F7]  border  ${
                        errors.country
                          ? "border-red-500"
                          : "focus:border-blue-500 border-gray-600"
                      }`}
                      onBlur={handleBlur}
                      onChange={(e) => {
                        const country = countryList[e.target.value];
                        setCountryId(country.id);
                        GetState(country.id).then((result) => {
                          setStateList(result);
                        });
                        handleChange(e);
                      }}
                      value={formData.country}
                      style={{ outline: "none" }}
                    >
                      <option value="">Select Country</option>
                      {countryList.map((item, index) => (
                        <option key={index} value={index}>
                          {item.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="mb-[2vw]">
                    <label className="block mb-[1vw] font-medium">
                      Street address *
                    </label>
                    <input
                      type="text"
                      name="address"
                      className={`w-full  p-[.3vw] text-[1.2vw]  bg-[#F7F7F7]  border  mb-[1vw] ${
                        errors.address
                          ? "border-red-500"
                          : "focus:border-blue-500 border-gray-600"
                      }`}
                      placeholder="House number and street name"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      style={{ outline: "none" }}
                    />
                    <input
                      type="text"
                      name="apartment"
                      className="w-full  p-[.3vw]  text-[1.2vw] bg-[#F7F7F7]  border  focus:border-blue-500"
                      placeholder="Apartment, suite, unit, etc. (optional)"
                      onChange={handleChange}
                      style={{ outline: "none" }}
                    />
                  </div>
                  <div className="mb-[2vw]">
                    <label className="block mb-[1vw] font-medium">
                      Town / City *
                    </label>
                    <input
                      type="text"
                      name="city"
                      className={`w-full  p-[.3vw] text-[1.2vw]  bg-[#F7F7F7]  border  ${
                        errors.city
                          ? "border-red-500"
                          : "focus:border-blue-500 border-gray-600"
                      }`}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      style={{ outline: "none" }}
                    />
                  </div>
                  <div className="mb-[2vw]">
                    <label className="block mb-[1vw] font-medium">
                      State *
                    </label>
                    <select
                      name="state"
                      className={`w-full  p-[.3vw]  text-[1.2vw] bg-[#F7F7F7]  border  ${
                        errors.state
                          ? "border-red-500"
                          : "focus:border-blue-500 border-gray-600"
                      }`}
                      onBlur={handleBlur}
                      onChange={(e) => {
                        const state = stateList[e.target.value];
                        setStateId(state.id);
                        GetCity(countryId, state.id).then((result) => {
                          setCityList(result);
                        });
                        handleChange(e);
                      }}
                      value={formData.state}
                      style={{ outline: "none" }}
                    >
                      <option value="">Select State</option>
                      {stateList.map((item, index) => (
                        <option key={index} value={index}>
                          {item.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="mb-[2vw]">
                    <label className="block mb-[1vw] font-medium">
                      ZIP Code *
                    </label>
                    <input
                      type="text"
                      name="zipCode"
                      className={`w-full  p-[.3vw] text-[1.2vw]  bg-[#F7F7F7]  border  ${
                        errors.zipCode
                          ? "border-red-500"
                          : "focus:border-blue-500 border-gray-600"
                      }`}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      style={{ outline: "none" }}
                    />
                  </div>
                  <div className="mb-[2vw]">
                    <label className="block mb-[1vw] font-medium">
                      Phone *
                    </label>
                    <input
                      type="text"
                      name="phone"
                      className={`w-full  p-[.3vw] text-[1.2vw]  bg-[#F7F7F7]  border  ${
                        errors.email
                          ? "border-red-500"
                          : "focus:border-blue-500 border-gray-600"
                      }`}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      style={{ outline: "none" }}
                    />
                  </div>
                  <div className="mb-[2vw]">
                    <label className="block mb-[1vw] font-medium">
                      Email address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      className={`w-full  p-[.3vw] text-[1.2vw]  bg-[#F7F7F7]  border  ${
                        errors.email
                          ? "border-red-500"
                          : "focus:border-blue-500 border-gray-600"
                      }`}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      style={{ outline: "none" }}
                    />
                  </div>
                  <div className="mb-[2vw]">
                    <label className="block mb-[1vw] font-medium">
                      Order notes (optional)
                    </label>
                    <textarea
                      name="notes"
                      className="w-full  p-[.3vw] text-[1.2vw]  bg-[#F7F7F7]  border  focus:border-blue-500 border-gray-600"
                      placeholder="Notes about your order, e.g. special notes for delivery."
                      onChange={handleChange}
                      style={{ outline: "none" }}
                    />
                  </div>
                </form>
              </div>
              <div className=" w-full md:w-[50%] ml-[1vw]">
                <h2 className="text-[2.5vw] whitespace-nowrap font-medium mb-[1.8vw]">
                  Additional information
                </h2>
                <div className="">
                  <label
                    htmlFor="orderNotes"
                    className="block text-[1vw] text-[1.2vw]  font-medium text-gray-700 my-[.5vw]"
                  >
                    Order notes (optional)
                  </label>
                  <textarea
                    id="orderNotes"
                    name="orderNotes"
                    rows="3"
                    className="mt-1 text-[1vw] block w-full bg-[#F7F7F7] border-gray-300  focus:border-purple-500"
                    placeholder="Notes about your order, e.g. special notes for delivery."
                    value={orderNotes}
                    onChange={handleNotesChange}
                    style={{ outline: "none" }}
                  ></textarea>
                </div>
              </div>
            </div>

            <div className="max-w-4xl w-full flex-container bg-white p-[3vw] mt-[3vw] rounded-lg shadow-lg">
              <h2 className="text-[2.5vw] font-bold mb-[2vw]">Your order</h2>
              <div className="mb-[2vw] border divide-y p-[1vw]">
                <div className="flex justify-between  mb-[1vw]">
                  <span className="text-[1.5vw]  font-medium">Product</span>
                  <span className="text-[1.5vw] font-medium">Subtotal</span>
                </div>
                <div className="flex justify-between  mb-[1vw]">
                  <span className="text-[1.2vw]">Cake Candles × 1</span>
                  <span className="text-[1.2vw]">$$$$$$</span>
                </div>
                <div className="flex justify-between mb-[1vw]">
                  <span className="text-[1.5vw] font-medium">Subtotal</span>
                  <span className="text-[1.5vw]">$$$$$$</span>
                </div>
                <div className="flex justify-between mb-[1vw]">
                  <span className="text-[1.5vw] font-medium">Total</span>
                  <span className="text-[1.5vw]">$$$$$$</span>
                </div>
              </div>
              <div className="w-full flex justify-end ">
                <button className=" bg-purple-600 px-[1vw] text-[1.5vw] text-white w-fit py-[1vw] rounded">
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[34%] ">
          <div className="max-w-2xl mx-auto mt-8 space-y-8">
            {/* Archives Card */}
            <div className="bg-white rounded-lg shadow-md divide-y divide-gray-300 p-4">
              <h2 className="text-black font-bold text-[3vw] mb-4">Archives</h2>
              <div className="divide-y divide-gray-300">
                <div className="py-2">
                  <h3 className="text-black  text-[1.2vw]">October 2018</h3>
                </div>
                <div className="py-2">
                  <h3 className="text-black text-[1.2vw]">September 2018</h3>
                </div>
              </div>
            </div>

            {/* Horizontal line */}
            <hr className="my-8 border-gray-300" />

            {/* Categories Card */}
            <div className="bg-white rounded-lg shadow-md p-4 divide-y divide-gray-300">
              <h2 className="text-black font-bold text-[3vw] mb-4">
                Categories
              </h2>
              <ul className="divide-y divide-gray-300 text-[1.2vw]">
                <li className="py-2 ">Engagement</li>
                <li className="py-2">Event Tips</li>
                <li className="py-2">Events for Kids</li>
                <li className="py-2">Lighting/Decor</li>
                <li className="py-2">MICE Events</li>
                <li className="py-2">Uncategorized</li>
                <li className="py-2">Weddings</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
