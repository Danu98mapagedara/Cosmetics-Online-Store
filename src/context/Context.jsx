
import React, { createContext, useContext, useReducer,useEffect } from "react";

import { Reducer } from "./Reducer"
import products from "../constants/product";

// Create context
const CartContext = createContext();

const Context = ({ children }) => {
 
  const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
  

  const [state, dispatch] = useReducer(Reducer, {
    products:products,
    cart: storedCart,
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);

  

console.log("my cart state:", state.cart)
  console.log("my product state:", state.products)

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default Context;


export const useCart = () => {
  return useContext(CartContext);
};
