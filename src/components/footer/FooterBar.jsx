import React from "react";
import { Link } from "react-router-dom";
import "../../styles/footer/footer-bar.css";

import SiteHeaderLogo from "../../images/amazon-logo-01.png";
import USAFlag from "../../images/usa-flag.png";

const FooterBar = () => {
  return (
    <div className="footer-bar">
      <Link className="footer-bar-logo" to="/">
        <img src={SiteHeaderLogo} alt="" />
      </Link>
      <div className="footer-bar-option">
        <Link to="/">
          <span className="option-icon fas fa-globe" aria-hidden="true"></span>
          <span>English</span>
          <span className="sort-icon fas fa-sort" aria-hidden="true"></span>
        </Link>
        <Link to="/">
          <span className="option-icon">&#36;</span>
          <span>USD - U.S. Dollar</span>
        </Link>
        <Link className="option-country" to="/">
          <img className="option-icon us-flag" src={USAFlag} alt="" />
          <span>United States</span>
        </Link>
      </div>
    </div>
  );
};

export default FooterBar;
