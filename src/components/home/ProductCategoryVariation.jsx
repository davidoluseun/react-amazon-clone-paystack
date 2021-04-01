import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home/product-category-variation.css";

const ProductCategoryVariation = ({
  categoryTitle,
  categoryImage1,
  categoryImage2,
  categoryImage3,
  categoryImage4,
  imageText1,
  imageText2,
  imageText3,
  imageText4,
  linkText,
}) => {
  return (
    <section className="variation">
      <h2>{categoryTitle}</h2>

      <div className="variation-wrap">
        <Link to="/products">
          <img src={categoryImage1} alt="" />
          <span className="variation-text">{imageText1}</span>
        </Link>
        <Link to="/products">
          <img src={categoryImage2} alt="" />
          <span className="variation-text">{imageText2}</span>
        </Link>
        <Link to="/products">
          <img src={categoryImage3} alt="" />
          <span className="variation-text">{imageText3}</span>
        </Link>
        <Link to="/products">
          <img src={categoryImage4} alt="" />
          <span className="variation-text">{imageText4}</span>
        </Link>
      </div>
      <Link to="/products">{linkText}</Link>
    </section>
  );
};

export default ProductCategoryVariation;
