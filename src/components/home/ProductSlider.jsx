import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styles/home/product-slider.css";

const ProductSlider = ({
  numberToShow,
  title,
  titleLinkPath,
  titleLinkText,
  items,
}) => {
  const settings = {
    arrows: true,
    speed: 500,
    infinite: false,
    slidesToShow: numberToShow,
    slidesToScroll: numberToShow,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
        },
      },
    ],
  };

  return (
    <section className="product-slider">
      <div className="product-slider-title">
        <h2>{title}</h2>
        <Link to={titleLinkPath}>{titleLinkText}</Link>
      </div>
      <Slider {...settings}>
        {items.map((item) => (
          <Link key={item.id} to={item.productURL}>
            <img src={item.productImage} alt="" />
          </Link>
        ))}
      </Slider>
    </section>
  );
};

export default ProductSlider;
