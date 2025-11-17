import React from "react";
import { useSelector } from "react-redux";


function Subtotal() {
    const basket=useSelector(state=>state.cart.basket)
  function getBasketTotal(n) {
    return n.reduce((acc,curr)=>acc+(curr.price*curr.quantity),0)
  }

  const formattedTotal = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format(getBasketTotal(basket));

  return (
    <div className="subtotal">
      <p>
        Subtotal ({basket.reduce((acc,curr)=>acc+curr.quantity,0)} items): <strong>{formattedTotal}</strong>
      </p>

      <small className="subtotal__gift">
        <input type="checkbox" /> This order contains a gift
      </small>

      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
