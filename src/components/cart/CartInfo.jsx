import React from "react";
import { Link } from "react-router-dom";
import "../../styles/cart/cart-info.css";

const CartInfo = () => {
  return (
    <div className="cart-info">
      <p>
        The price and availability of items at Amazon.com are subject to change.
        The Cart is a temporary place to store a list of your items and reflects
        each item's most recent price. Shopping Cart{" "}
        <Link to="/learn-more">Learn more</Link>
      </p>
      <p>
        Do you have a gift card or promotional code? We'll ask you to enter your
        claim code when it's time to pay.
      </p>
    </div>
  );
};

export default CartInfo;
