import React from "react";
import { Preloader, TailSpin } from "react-preloader-icon";
import "../../styles/common/preloader-wrap.css";

const PreloaderWrap = () => {
  return (
    <div className="preloader-wrap">
      <Preloader
        use={TailSpin}
        size={60}
        strokeWidth={6}
        strokeColor="#1a73e8"
        duration={1600}
      />
    </div>
  );
};

export default PreloaderWrap;
