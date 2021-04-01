import React from "react";
import CurrencyFormat from "react-currency-format";
import CartProduct from "./CartProduct";
import useStateValue from "../../hooks/useStateValue";
import getCartTotal from "../../utils/getCartTotal";
import "../../styles/cart/cart-item.css";

const CartItem = () => {
  const [{ cart }, dispatch] = useStateValue();

  const handleRemoveAllFromCart = () => {
    dispatch({ type: "EMPTY_CART" });
  };

  return (
    <div className="cart-item">
      <div className="cart-item-header">
        <h2 className="">Shopping Cart</h2>
        <div className="cart-item-info">
          <button className="cart-item-btn" onClick={handleRemoveAllFromCart}>
            Deselect all items
          </button>
          <div className="cart-price">Price</div>
        </div>
      </div>
      <div>
        {cart.map((item) => (
          <CartProduct
            key={item.id}
            id={item.id}
            image={item.image}
            title={item.title}
            price={item.price}
            displayButtons={true}
          />
        ))}
      </div>
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
    </div>
  );
};

export default CartItem;
