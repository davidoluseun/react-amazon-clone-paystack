import React from "react";
import { Link, useHistory } from "react-router-dom";
import "../../styles/cart/no-user.css";
import KettleImage from "../../images/kettle.svg";

const NoUser = () => {
  const history = useHistory();

  return (
    <div className="no-user">
      <img src={KettleImage} alt="" />
      <div>
        <h2>Your Amazon Cart is empty.</h2>
        <Link to="/todays-deals">today's deals</Link>
        <div>
          <button
            className="btn-primary no-user-sign-in-btn"
            onClick={() => history.push("/sign-in")}
          >
            Sign in to your account
          </button>
          <button
            className="btn-secondary"
            onClick={() => history.push("/register")}
          >
            Sign up now
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoUser;
