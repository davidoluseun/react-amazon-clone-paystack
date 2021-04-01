import React from "react";
import Subtotal from "./Subtotal";
import Ads from "../common/Ads";
import useStateValue from "../../hooks/useStateValue";

const CartAside = () => {
  const [{ cart }] = useStateValue();

  return (
    <aside className="cart-aside">
      {cart.length === 0 ? null : <Subtotal />}
      <Ads />
    </aside>
  );
};

export default CartAside;
