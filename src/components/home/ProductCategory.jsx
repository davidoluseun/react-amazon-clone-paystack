import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home/product-category.css";

const ProductCategory = ({ categoryTitle, categoryImage, linkText }) => {
  return (
    <section className="product-category">
      <h2>{categoryTitle}</h2>
      <Link to="/products">
        <img src={categoryImage} alt="" />
      </Link>
      <Link to="/products">{linkText}</Link>
    </section>
  );
};

export default ProductCategory;
