import React from "react";
import { useHistory } from "react-router-dom";
import CurrencyFormat from "react-currency-format";
import { usePaystackPayment } from "react-paystack";
import useStateValue from "../../hooks/useStateValue";
import getCartTotal from "../../utils/getCartTotal";
import { db } from "../../firebase";
import "../../styles/checkout/payment.css";

const Payment = ({ data }) => {
  const history = useHistory();
  const [{ cart, user }, dispatch] = useStateValue();

  const config = {
    publicKey: "pk_test_4e595818d440626e5e40ec79e3e317bb503fae5f",
    reference: new Date().getTime(),
    email: data.email,
    amount: getCartTotal(cart) * 100,
    metadata: data,
  };

  const initializePayment = usePaystackPayment(config);

  const onSuccess = (reference) => {
    db.collection("users")
      .doc(user?.uid)
      .collection("orders")
      .doc(reference.trans)
      .set({
        cart,
        amount: getCartTotal(cart) * 100,
        created: new Date().getTime(),
        orderId: reference.trans,
      });
    dispatch({ type: "EMPTY_CART" });
    history.replace("/orders");
  };

  return (
    <div className="payment">
      <CurrencyFormat
        renderText={(value) => <h3>Order Total: {value}</h3>}
        decimalScale={2}
        value={getCartTotal(cart)}
        displayType={"text"}
        thousandSeparator={true}
        prefix="&#8358;"
      />
      <button
        className="btn-primary"
        onClick={() => initializePayment(onSuccess)}
      >
        Make Payment
      </button>
    </div>
  );
};

export default Payment;
