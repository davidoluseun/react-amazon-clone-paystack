import React from "react";

import { animateScroll as scroll } from "react-scroll";
import "../../styles/common/to-top.css";

const ToTop = () => {
  const scrollToTop = (e) => {
    e.preventDefault();

    scroll.scrollToTop({
      duration: 300,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <div className="to-top">
      <button onClick={scrollToTop} className="to-top-btn">
        Back to top
      </button>
    </div>
  );
};

export default ToTop;
