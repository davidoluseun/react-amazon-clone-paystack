import React from "react";
import { Link } from "react-router-dom";
import CurrencyFormat from "react-currency-format";
import useStateValue from "../../hooks/useStateValue";
import "../../styles/cart/cart-product.css";

const CartProduct = ({ id, title, price, image, displayButtons }) => {
  const [, dispatch] = useStateValue();

  const handleRemoveFromCart = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", id });
  };

  return (
    <div className="cart-product">
      <div>
        <Link className="cart-product-link" to="/">
          <img className="cart-product-img" src={image} alt="" />
        </Link>
        <div className="cart-product-details">
          <div className="title-wrap">
            <p>
              <Link to="/">{title}</Link>
            </p>
            <CurrencyFormat
              renderText={(value) => (
                <strong className="cart-product-price">{value}</strong>
              )}
              decimalScale={2}
              value={price}
              displayType={"text"}
              thousandSeparator={true}
              prefix="&#8358;"
            />
          </div>

          {displayButtons && (
            <>
              <div className="stock-status">In stock</div>
              <div className="cart-product-btn-wrap">
                <button onClick={() => handleRemoveFromCart(id)}>Delete</button>
                <button>Save for Later</button>
                <button>Compare with similar items</button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
