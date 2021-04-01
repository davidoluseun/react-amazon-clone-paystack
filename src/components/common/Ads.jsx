import React from "react";
import AdsProduct from "./AdsProduct";
import "../../styles/common/ads.css";

import AdsProductImageOne from "../../images/ads-product-01.jpg";
import AdsProductImageTwo from "../../images/ads-product-02.jpg";
import AdsProductImageThree from "../../images/ads-product-03.jpg";
import AdsProductImageFour from "../../images/ads-product-04.jpg";

const Ads = () => {
  return (
    <div className="ads">
      <h3>Sponsored Products</h3>

      <div className="ads-wrap">
        <AdsProduct
          image={AdsProductImageOne}
          title="Battery Tender 4-Bank:"
          rating={5}
          price="&#8358;184.95"
        />
        <AdsProduct
          image={AdsProductImageTwo}
          title="Battery Tender 4-Bank:"
          rating={4}
          price="&#8358;303.00"
        />
        <AdsProduct
          image={AdsProductImageThree}
          title="Battery Tender 4-Bank:"
          price="&#8358;429.99"
        />
        <AdsProduct
          image={AdsProductImageFour}
          title="Battery Tender 4-Bank:"
          rating={4}
          price="&#8358;18.98"
        />
      </div>
    </div>
  );
};

export default Ads;
