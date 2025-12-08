import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./../home/HomePage";
import SingleProductPage from "./../singleproducts/SingleProductPage";
import ProductsPage from "../Products/ProductsPage";
import SignupPage from "./../authentication/SignupPage";
import LoginPage from "../authentication/LoginPage";
import CartPage from "./../cart/CartPage";
import MyOrderPage from "./../myorder/MyOrderPage";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/product/1" element={<SingleProductPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/myorders" element={<MyOrderPage />} />
    </Routes>
  );
};

export default AllRoutes;
