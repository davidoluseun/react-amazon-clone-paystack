import React from "react";
import { Link } from "react-router-dom";
import "../../styles/footer/footer-nav.css";

const FooterNav = () => {
  return (
    <div className="footer-nav content-wrap">
      <section>
        <h4>Get to Know Us</h4>
        <Link to="/">Careers</Link>
        <Link to="/">Blog</Link>
        <Link to="/">About Amazon</Link>
        <Link to="/">Investor Relations</Link>
        <Link to="/">Amazon Devices</Link>
        <Link to="/">Amazon Tours</Link>
      </section>
      <section>
        <h4>Make Money with Us</h4>
        <Link to="/">Sell products on Amazon</Link>
        <Link to="/">Sell apps on Amazon</Link>
        <Link to="/">Become an Affiliate</Link>
        <Link to="/">Advertise Your Products</Link>
        <Link to="/">Self-Publish with Us</Link>
        <Link to="/">Host an Amazon Hub</Link>
        <Link to="/">See More Make Money with Us</Link>
      </section>
      <section>
        <h4>Make Money with Us</h4>
        <Link to="/">Amazon Business Card</Link>
        <Link to="/">Shop with Points</Link>
        <Link to="/">Reload Your Balance</Link>
        <Link to="/">Amazon Currency Converter</Link>
      </section>
      <section>
        <h4>Make Money with Us</h4>
        <Link to="/">Amazon and COVID-19</Link>
        <Link to="/">Your Account</Link>
        <Link to="/">Your Orders</Link>
        <Link to="/">Advertise Your Products</Link>
        <Link to="/">Shipping Rates &amp; Policies</Link>
        <Link to="/">Returns &amp; Replacements</Link>
        <Link to="/">Manage Your Content and Devices</Link>
        <Link to="/">Amazon Assistant</Link>
        <Link to="/">Help</Link>
      </section>
    </div>
  );
};

export default FooterNav;
