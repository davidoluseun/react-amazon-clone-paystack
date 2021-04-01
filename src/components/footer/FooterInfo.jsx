import React from "react";
import { Link } from "react-router-dom";
import "../../styles/footer/footer-info.css";

const FooterInfo = () => {
  return (
    <div className="footer-info">
      <Link to="/">Conditions of Use</Link>
      <Link to="/">Privacy Notice</Link>
      <Link to="/">Interest-Based Ads</Link>
      <small>&copy; 1996-2021, Amazon.com, Inc. or its affiliates</small>
    </div>
  );
};

export default FooterInfo;
