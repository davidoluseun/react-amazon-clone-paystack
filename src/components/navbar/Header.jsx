import React from "react";
import BeltNav from "./BeltNav";
import MainNav from "./MainNav";
import "../../styles/navbar/header.css";

const Header = () => {
  return (
    <header className="header">
      <nav>
        <BeltNav />
        <MainNav />
      </nav>
    </header>
  );
};

export default Header;
