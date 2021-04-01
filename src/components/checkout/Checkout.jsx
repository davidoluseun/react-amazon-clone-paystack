import React from "react";
import CheckoutProduct from "./CheckoutProduct";
import Shipping from "./Shipping";
import "../../styles/checkout/checkout.css";

const Checkout = () => {
  return (
    <main className="checkout">
      <div className="content-wrap">
        <CheckoutProduct />
        <Shipping />
      </div>
    </main>
  );
};

export default Checkout;
