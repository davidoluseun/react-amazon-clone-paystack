import React from "react";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import useStateValue from "../../hooks/useStateValue";
import "../../styles/products/product.css";
import StarImage from "../../images/star.png";

const Product = ({
  id,
  image,
  title,
  rating,
  price,
  productURL,
  shippingLocation,
}) => {
  const [, dispatch] = useStateValue();
  const history = useHistory();

  const handleAddToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      item: { id, title, rating, price, image },
    });
    toast.success("One item added to your cart", {
      autoClose: 2000,
    });
  };

  const handleBuyNow = () => {
    dispatch({
      type: "ADD_TO_CART",
      item: { id, title, rating, price, image },
    });

    history.push("/checkout");
  };

  return (
    <div className="product">
      <Link className="product-link" to={productURL}>
        <img src={image} alt="" />
      </Link>
      <div className="product-info">
        <p className="product-title">
          <Link to={productURL}>{title}</Link>
        </p>

        <div className="product-rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <img key={i} src={StarImage} alt="" />
            ))}
        </div>
        <div className="product-price">
          <small>&#8358;</small>
          <strong>{price}</strong>
        </div>
        <div className="shipping-location">Ships to {shippingLocation}</div>
        <div className="product-btn-wrap">
          <button
            className="btn-primary add-cart-btn"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
          <button className="btn-primary buy-now-btn" onClick={handleBuyNow}>
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
