import React from "react";
import FooterNav from "./FooterNav";
import FooterBar from "./FooterBar";
import FooterInfo from "./FooterInfo";
import "../../styles/footer/footer.css";


const Footer = () => {
  return (
    <footer className="footer">
      <FooterNav />
      <FooterBar />
      <FooterInfo />
    </footer>
  );
};

export default Footer;
