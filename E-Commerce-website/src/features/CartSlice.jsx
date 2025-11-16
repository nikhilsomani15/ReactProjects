import { createSlice } from "@reduxjs/toolkit";
import React from "react";
const initialState = {
  basket: [],
};
const CartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    addToCart(state, action){
       
        if(!state.basket.some(i=>i.id==action.payload.id))
        state.basket.push(action.payload)
    },
    removeFromCart(state, action) {
      state.basket = state.basket.filter((i) => i.id !== action.payload.id);
    },
  },
});
export const { addToCart, removeFromCart } = CartSlice.actions;
export default CartSlice.reducer;
