import React, { useEffect, useState } from "react";

import "./ProductsList.css";
import ProductCard from "./ProductCard";
import apiClient from "../../utils/api-client";
import useData from "../../hooks/useData";
import ProductsSkeleton from "./ProductsSkeleton";
import { useSearchParams } from "react-router-dom";
import Pageniation from "../common/Pageniation";

const ProductsList = () => {
  const [search, setSearch] = useSearchParams();
  const category = search.get("category");
  const page = search.get("page");
  const { data, error, isLoading } = useData(
    "/products",
    {
      params: {
        category,
        page,
      },
    },
    [category, page]
  );
  const arr = [1, 2, 3, 4, 5, 6, 7, 8];
  const handlePageChange = (page) => {
    const previous = Object.fromEntries([...search]);
    setSearch({
      ...previous,
      page: page,
    });
  };
  return (
    <section className="products_list_section">
      <header className="align_center products_list_header">
        <h2>Products</h2>
        <select name="sort" id="" className="products_sorting">
          <option value="">Relevance</option>
          <option value="price desc">Price HIGH to LOW</option>
          <option value="price asc">Price LOW to HIGH</option>
          <option value="rate desc">Rate HIGH to LOW</option>
          <option value="rate asc">Rate LOW to HIGH</option>
        </select>
      </header>

      <div className="products_list">
        {error && <em className="form_error">{error}</em>}

        {isLoading
          ? arr.map((p, i) => <ProductsSkeleton key={i} />)
          : data?.products &&
            data.products.map((product) => (
              <ProductCard
                key={product._id}
                id={product._id}
                image={product.images[0]}
                price={product.price}
                title={product.title}
                rating={product.reviews.rate}
                ratingCounts={product.reviews.counts}
                stock={product.stocks}
              />
            ))}
      </div>
      <Pageniation
        totalPosts={data?.totalProducts}
        postPerPage={8}
        onCLick={handlePageChange}
        currentPage={page}
      />
    </section>
  );
};

export default ProductsList;
