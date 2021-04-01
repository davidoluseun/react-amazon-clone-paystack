import React from "react";
import NoUser from "./NoUser";
import EmptyCart from "./EmptyCart";
import CartItem from "./CartItem";
import CartInfo from "./CartInfo";
import useStateValue from "../../hooks/useStateValue";

const CartWrap = () => {
  const [{ cart, user }] = useStateValue();

  return (
    <section className="cart-wrap">
      {!user && cart.length === 0 ? (
        <NoUser />
      ) : (
        <>{cart.length === 0 ? <EmptyCart /> : <CartItem />}</>
      )}
      <CartInfo />
    </section>
  );
};

export default CartWrap;
