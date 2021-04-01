import React from "react";
import CartAside from "./CartAside";
import CartWrap from "./CartWrap";
import "../../styles/cart/cart.css";

const Cart = () => {
  return (
    <main className="cart">
      <div className="content-wrap">
        <CartWrap />
        <CartAside />
      </div>
    </main>
  );
};

export default Cart;
