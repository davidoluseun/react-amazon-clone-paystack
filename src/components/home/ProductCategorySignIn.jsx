import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home/product-category-variation.css";
import "../../styles/home/product-category-sign-in.css";

const ProductCategorySignIn = ({
  UserProfilePic,
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
      <div className="category-sign-in-header">
        <Link to="/account">
          <img src={UserProfilePic} alt="" />
        </Link>
        <h2>{categoryTitle}</h2>
      </div>

      <p className="recommendation">Recommendations for you</p>

      <div className="variation-wrap">
        <Link className="category-sign-in-link" to="/orders">
          <img src={categoryImage1} alt="" />
          <span className="variation-text">{imageText1}</span>
        </Link>
        <Link className="category-sign-in-link" to="/products">
          <img src={categoryImage2} alt="" />
          <span className="variation-text">{imageText2}</span>
        </Link>
        <Link className="category-sign-in-link" to="/products">
          <img src={categoryImage3} alt="" />
          <span className="variation-text">{imageText3}</span>
        </Link>
        <Link className="category-sign-in-link" to="/products">
          <img src={categoryImage4} alt="" />
          <span className="variation-text">{imageText4}</span>
        </Link>
      </div>
    </section>
  );
};

export default ProductCategorySignIn;
