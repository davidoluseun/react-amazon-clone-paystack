import React from "react";
import { Link } from "react-router-dom";
import "../../styles/cart/empty-cart.css";

const EmptyCart = () => {
  return (
    <div className="empty-cart">
      <h2>Your Amazon Cart is empty.</h2>
      <p>
        Your Shopping Cart lives to serve. Give it purpose — fill it with
        groceries, clothing, household supplies, electronics, and more.
        <br />
        Continue shopping on the <Link to="/">Amazon.com homepage</Link>, learn
        about <Link to="/todays-deals">today's deals</Link>, or visit your{" "}
        <Link to="/wish-list">Wish List</Link>.
      </p>
    </div>
  );
};

export default EmptyCart;
