import React from "react";
import CurrencyFormat from "react-currency-format";
import CartProduct from "../cart/CartProduct";
import EmptyCart from "../cart/EmptyCart";
import useStateValue from "../../hooks/useStateValue";
import getCartTotal from "../../utils/getCartTotal";
import "../../styles/checkout/checkout-product.css";

const CheckoutProduct = () => {
  const [{ cart }] = useStateValue();

  return (
    <section className="checkout-products">
      {cart.length === 0 ? (
        <EmptyCart />
      ) : (
        <>
          <h2>Checkout Products</h2>
          {cart.map((item) => (
            <CartProduct
              key={item.id}
              id={item.id}
              image={item.image}
              title={item.title}
              price={item.price}
              displayButtons={false}
            />
          ))}
        </>
      )}
      <div className="cart-subtotal">
        <CurrencyFormat
          renderText={(value) => (
            <p>
              Subtotal ({cart.length} {cart.length >= 2 ? "items" : "item"}
              ): <strong>{value}</strong>
            </p>
          )}
          decimalScale={2}
          value={getCartTotal(cart)}
          displayType={"text"}
          thousandSeparator={true}
          prefix="&#8358;"
        />
      </div>
    </section>
  );
};

export default CheckoutProduct;
