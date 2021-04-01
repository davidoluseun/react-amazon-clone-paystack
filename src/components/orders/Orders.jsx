import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CurrencyFormat from "react-currency-format";
import moment from "moment";
import { toast } from "react-toastify";
import CartProduct from "../cart/CartProduct";
import Ads from "../common/Ads";
import PreloaderWrap from "../common/PreloaderWrap";
import { auth, db } from "../../firebase";
import "../../styles/orders/orders.css";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [ordersStatusIsLoading, setOrdersStatusIsLoading] = useState(true);

  useEffect(() => {
    try {
      let isSubscribed = true;

      const getOrders = async () => {
        const querySnapshot = await db
          .collection("users")
          .doc(auth.currentUser?.uid)
          .collection("orders")
          .orderBy("created", "desc")
          .get();

        const docs = querySnapshot.docs.map((doc) => doc.data());

        setOrders(docs);
        setOrdersStatusIsLoading(false);
      };

      if (isSubscribed) getOrders();

      return () => (isSubscribed = false);
    } catch (e) {
      toast.error("An unexpected error occurred.");
    }
  }, []);

  return (
    <main className="orders">
      <div className="content-wrap">
        <div className="orders-products">
          {ordersStatusIsLoading ? (
            <div className="orders-preloader">
              <PreloaderWrap />
            </div>
          ) : (
            <>
              {orders.length === 0 ? (
                <div className="orders-header">
                  <h2>Your Amazon Orders is empty.</h2>
                  <p>
                    Your Shopping Orders lives to serve. Give it purpose — fill
                    it with groceries, clothing, household supplies,
                    electronics, and more.
                    <br />
                    Shopping on the <Link to="/">Amazon.com homepage</Link>,
                    learn about <Link to="/todays-deals">today's deals</Link>,
                    or visit your <Link to="/wish-list">Wish List</Link>.
                  </p>
                </div>
              ) : (
                orders.map((order) => (
                  <div className="order" key={order.orderId}>
                    <p>
                      {moment(order.created).format("MMMM Do YYYY, h:mm:ss a")}
                    </p>

                    <div>
                      {order.cart.map((item) => (
                        <CartProduct
                          key={order.orderId + item.id}
                          id={item.id}
                          image={item.image}
                          title={item.title}
                          price={item.price}
                          displayButtons={false}
                        />
                      ))}
                    </div>
                    <div className="cart-subtotal">
                      <CurrencyFormat
                        renderText={(value) => (
                          <p>
                            Subtotal ({order.cart.length}{" "}
                            {order.cart.length >= 2 ? "items" : "item"}
                            ): <strong>{value}</strong>
                          </p>
                        )}
                        decimalScale={2}
                        value={order.amount / 100}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix="&#8358;"
                      />
                    </div>
                  </div>
                ))
              )}
            </>
          )}
        </div>
        <Ads />
      </div>
    </main>
  );
};

export default Orders;
