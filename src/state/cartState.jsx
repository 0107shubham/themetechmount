// src/state/cartState.js
import { atom } from "recoil";

export const cartState = atom({
  key: "cartState", // unique ID (with respect to other atoms/selectors)
  default: [], // default value (aka initial value)
});
export const cartPrice = atom({
  key: "cartPrice", // unique ID (with respect to other atoms/selectors)
  default: 0, // default value (aka initial value)
});
