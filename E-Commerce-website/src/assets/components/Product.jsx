import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../features/CartSlice";

const Product = ({ id, title, image, price, rating,quantity }) => {
    const dispatch=useDispatch()
    function addToBasket() {
    dispatch(addToCart({
        id,
        title,
        image,
        price,
        rating,
        quantity
    }))
  }
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>Rs. </small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {
            Array.from({
                length:rating
            },(_,i)=>(<p key={i}>
                ⭐
            </p>))
          }
        </div>
      </div>

      <img src={image} />

      <button onClick={()=>addToBasket()}>Add to Basket</button>
    </div>
  );
};

export default Product;
