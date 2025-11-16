import { createSlice } from '@reduxjs/toolkit'
import React from 'react'

const CartSlice = createSlice(
    {
        name:"Cart",
        initialState:0,
        reducers:{
            addToCart(state, action){
                state.initialState+=1
            },
            removeFromCart(state, action){
                state.initialState-=1
            }
        }
        }
    
)
export const {addToCart,removeFromCart} =CartSlice.actions
export default CartSlice.reducer
