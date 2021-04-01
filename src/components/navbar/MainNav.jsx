import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../firebase";
import useStateValue from "../../hooks/useStateValue";
import "../../styles/navbar/main-nav.css";

const MainNav = () => {
  const [{ user }] = useStateValue();
  const history = useHistory();
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  const handleAuthStatus = () => {
    if (user) auth.signOut();
    else history.push("/sign-in");
  };

  const handleInvisible = () => {
    setMenuIsVisible(false);
  };

  const handleVisible = () => {
    setMenuIsVisible(true);
  };

  const hmClasses = menuIsVisible
    ? "hm-menu hm-menu-visible"
    : "hm-menu hm-menu-invisible";

  const hmOpaqueClasses = menuIsVisible
    ? "hm-menu-opaque"
    : "hm-menu-opage-invisible";

  return (
    <div className="main-nav">
      <div className="content-wrap">
        <div className="nav-left">
          <button
            className="btn-link"
            onClick={handleVisible}
            aria-expanded={menuIsVisible}
            aria-controls="hm-menu"
            aria-label="Open navigation"
          >
            <span className="fas fa-bars" aria-hidden="true"></span>
            <span className="hm-label">All</span>
          </button>

          <div className={hmClasses} id="hm-menu">
            <button
              onClick={handleInvisible}
              className="close-btn"
              aria-expanded={menuIsVisible}
              aria-controls="hm-menu"
              aria-label="Close navigation"
            >
              <span className="fas fa-times" aria-hidden="true"></span>
            </button>

            <span className="hm-user-profile">
              <button onClick={handleAuthStatus} className="hm-user-btn">
                <span className="hm-user-icon">
                  <span className="fas fa-user" aria-hidden="true"></span>
                </span>
                <span>Hello, {user ? user.displayName : "Sign in"}</span>
              </button>
            </span>

            <div className="hm-menu-nav">
              <div>
                <div className="hm-menu-title">
                  Digital Content &amp; Devices
                </div>
                <Link to="/orders">Orders</Link>
                <Link to="/">Amazon Music</Link>
                <Link to="/">Kindle E-readers &amp; Books</Link>
                <Link to="/">Appstore for Android</Link>
              </div>
              <div>
                <div className="hm-menu-title">Shop By Department</div>
                <Link to="/">Electronics</Link>
                <Link to="/">Computers</Link>
                <Link to="/">Smart Home</Link>
                <Link to="/">Arts &amp; Crafts</Link>
                <Link to="/">See All</Link>
              </div>
              <div>
                <div className="hm-menu-title">Programs &amp; Features</div>
                <Link to="/">Gift Cards</Link>
                <Link to="/">#FoundItOnAmazon</Link>
                <Link to="/">Amazon Live</Link>
                <Link to="/">International Shopping</Link>
                <Link to="/">See All</Link>
                <Link to="/">Full Store Directory</Link>
              </div>
              <div>
                <div className="hm-menu-title">Help &amp; Settings</div>
                <Link to="/">Your Account</Link>
                <Link to="/">English</Link>
                <Link to="/">United States</Link>
                <Link to="/">Help</Link>
                <Link to="/">Sign In</Link>
              </div>
            </div>
          </div>
          <div className={hmOpaqueClasses} onClick={handleInvisible}></div>
        </div>

        <div className="nav-fill">
          <div>
            <Link to="/">Today's Deals</Link>
            <Link to="/">Customer Service</Link>
            <Link to="/">Gift Cards</Link>
            <Link to="/">Sell</Link>
            <Link to="/">Registry</Link>
          </div>
        </div>

        <div className="nav-right">
          <Link to="/">Amazon's response to COVID-19</Link>
        </div>
      </div>
    </div>
  );
};

export default MainNav;
