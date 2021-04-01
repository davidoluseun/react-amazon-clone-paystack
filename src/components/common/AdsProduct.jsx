import React from "react";
import { Link } from "react-router-dom";
import "../../styles/common/ads-product.css";

import StarImage from "../../images/star.png";

const CartAsideProduct = ({ image, title, rating, price }) => {
  return (
    <div className="ads-product">
      <div className="ads-product-img-wrap">
        <img className="ads-product-img" src={image} alt="" />
      </div>
      <div className="ads-product-details">
        <Link to="/">{title}</Link>
        <div className="ads-product-rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <img key={i} src={StarImage} alt="" />
            ))}
        </div>
        <div>{price}</div>
        <button className="btn-secondary ads-product-btn">
          See all buying options
        </button>
      </div>
    </div>
  );
};

export default CartAsideProduct;
