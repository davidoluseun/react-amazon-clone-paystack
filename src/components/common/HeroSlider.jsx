import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styles/common/hero-slider.css";

import SliderImage01 from "../../images/slider-01.jpg";
import SliderImage02 from "../../images/slider-02.jpg";
import SliderImage03 from "../../images/slider-03.jpg";
import SliderImage04 from "../../images/slider-04.jpg";
import SliderImage05 from "../../images/slider-05.jpg";
import SliderImage06 from "../../images/slider-06.jpg";

const HeroSlider = () => {
  const settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="hero-slider">
      <Slider {...settings}>
        <div>
          <img src={SliderImage01} alt="" />
        </div>
        <div>
          <img src={SliderImage02} alt="" />
        </div>
        <div>
          <img src={SliderImage03} alt="" />
        </div>
        <div>
          <img src={SliderImage04} alt="" />
        </div>
        <div>
          <img src={SliderImage05} alt="" />
        </div>
        <div>
          <img src={SliderImage06} alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default HeroSlider;
