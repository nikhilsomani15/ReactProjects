import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../features/CartSlice";

const Product = ({ id, title, image, price, rating,quantity,totalQuantity }) => {
    const dispatch=useDispatch()
    let test=useSelector(state=>state.cart.basket)
    let q=test.find(i=>i.id===id)
   let tot=q?.totalQuantity ?? totalQuantity

    function addToBasket() {
    dispatch(addToCart({
        id,
        title,
        image,
        price,
        rating,
        quantity,
        totalQuantity
    }))
    
  }
  return (
    <div className="product">
      <div className="product__info">
        <p className="product__title">{title}</p>
        <p className="product__price">
          <small>Rs. </small>
          <strong>{price}</strong>
          <br />
          <strong>Quantity Left= {tot}</strong>
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
