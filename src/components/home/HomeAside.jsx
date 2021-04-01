import React from "react";
import { Link, useHistory } from "react-router-dom";
import "../../styles/home/home-aside.css";

import AmazonExports from "../../images/amazon-exports.jpg";

const HomeAside = () => {
  const history = useHistory();

  return (
    <aside className="home-aside">
      <div className="sign-in">
        <h2 className="sign-in-title">Sign in for the best experience</h2>
        <button
          className="btn-primary sign-in-btn"
          onClick={() => history.push("/sign-in")}
        >
          Sign in securely
        </button>
      </div>

      <Link to="/">
        <img src={AmazonExports} alt="" />
      </Link>
    </aside>
  );
};

export default HomeAside;

// Remove this component when a user logged in
