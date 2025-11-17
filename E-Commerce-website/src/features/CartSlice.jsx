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
          
          let exist=state.basket.find(i=>i.id==action.payload.id)
          if(exist?.totalQuantity<1) {return alert("No More Left")}
          if(exist){
            exist.quantity+=1
            exist.totalQuantity-=1
          }
          else{
            
            state.basket.push({...action.payload,quantity:1,totalQuantity:action.payload.totalQuantity-=1})
          }
          
      },
    removeFromCart(state, action) {
      
      let exist=state.basket.find(item=>item.id===action.payload.id)
      if(!exist) return
      if(exist.quantity>1){
        exist.quantity-=1
      }
      else if(exist.quantity===1){
        state.basket = state.basket.filter((i) => i.id !== action.payload.id);
      }
      
    },
  },
});
export const { addToCart, removeFromCart } = CartSlice.actions;
export default CartSlice.reducer;
