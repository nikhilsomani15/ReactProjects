import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../features/CartSlice";

const CheckoutProduct = ({ id, image, title, price, rating }) => {
  const data = useSelector((state) => state.cart.basket);
  console.log(data);
  const dispatch = useDispatch();
  const removeFromBasket = () => {
    dispatch(removeFromCart({id}))
  };
  return (
    <div className="checkoutProduct">
      <img src={image} alt="" className="checkoutProduct__image" />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          { Array.from({
                length:rating
            },(_,i)=>(<p key={i}>
                ⭐
            </p>))}
        </div>
        <button onClick={()=>removeFromBasket()}>Remove from Basket</button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
