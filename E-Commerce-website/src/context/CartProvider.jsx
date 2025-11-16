import React from 'react'
import { createContext } from "react";

export const CartContext= createContext()



const CartContextProvider = (props) => {
  return (
    <>
    <CartContext.Provider value={1}>
        {props.children}
    </CartContext.Provider>
    
    </>
  )
}

export default CartContext
