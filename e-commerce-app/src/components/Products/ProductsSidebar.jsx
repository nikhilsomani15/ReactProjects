import React from "react";

import "./ProductsSidebar.css";

import LinkWithIcon from "../navbar/LinkWithIcon";

import useData from "../../hooks/useData";

const ProductsSidebar = () => {
  const { data, error } = useData("/category");

  return (
    <aside className="products_sidebar">
      <h2>Category</h2>

      <div className="category_links">
        {error && <em className="form_error">{error}</em>}
        {data &&
          data.map((p) => (
            <LinkWithIcon
              title={p.name}
              link={`products?category=${p.name}`}
              emoji={`http://localhost:5000/category/${p.image}`}
              sidebar={true}
              key={p._id}
            />
          ))}
      </div>
    </aside>
  );
};

export default ProductsSidebar;
