import React from "react";
import ProductCategory from "./ProductCategory";
import ProductCategoryVariation from "./ProductCategoryVariation";
import HomeAside from "./HomeAside";
import HeroSlider from "../common/HeroSlider";
import ProductSlider from "./ProductSlider";
import ProductCategorySignIn from "./ProductCategorySignIn";
import useStateValue from "../../hooks/useStateValue";
import {
  dAmazonItems,
  beautyCareProducts,
  wirelessProducts,
} from "../../services/productSlider";
import "../../styles/home/home.css";

import AmazonBasicsImage from "../../images/amazon-basics.jpg";
import ElectronicsImage from "../../images/electronics.jpg";
import ShopTopCatImage from "../../images/shop-top-categories.jpg";
import ComputersAccessoriesImage from "../../images/computer-accessories.jpg";
import BeautyPicksImage from "../../images/beauty-picks.jpg";
import DealsPromotionsImage from "../../images/deals-promotions.jpg";
import WomenFashionSweatshirtImage from "../../images/women-fashion-sweatshirt.jpg";
import WomenFashionJoggersImage from "../../images/women-fashion-joggers.jpg";
import WomenFashionCardiganImage from "../../images/women-fashion-cardigan.jpg";
import WomenFashionTeesQuadImage from "../../images/women-fashion-tees-quad.jpg";
import DashLaptops from "../../images/dash-laptops.jpg";
import HomeBedding from "../../images/home-bedding.jpg";
import StripLightingg from "../../images/strip-lighting.jpg";
import UserProfilePic from "../../images/default-user-pic.jfif";
import OrdersImage from "../../images/orders.jfif";
import HeadsetImage from "../../images/headset.jfif";
import AccessoriesImage from "../../images/accessories.jfif";
import HomeKitchenImage from "../../images/home-kitchen.jfif";

const Home = () => {
  const [{ user }] = useStateValue();

  return (
    <main className="home">
      <HeroSlider />
      <div className="home-wrap content-wrap">
        <div className="product-category-wrap">
          <ProductCategory
            categoryTitle="Computers &amp; Accessories"
            categoryImage={ComputersAccessoriesImage}
            linkText="Shop now"
          />
          <ProductCategory
            categoryTitle="AmazonBasics"
            categoryImage={AmazonBasicsImage}
            linkText="See More"
          />
          <ProductCategory
            categoryTitle="Beauty picks"
            categoryImage={BeautyPicksImage}
            linkText="Shop now"
          />

          {user ? (
            <ProductCategorySignIn
              UserProfilePic={UserProfilePic}
              categoryTitle={`Hi, ${user.displayName}`}
              categoryImage1={OrdersImage}
              categoryImage2={HeadsetImage}
              categoryImage3={AccessoriesImage}
              categoryImage4={HomeKitchenImage}
              imageText1="Your Orders"
              imageText2="Electronics"
              imageText3="Computers &amp; Accessories"
              imageText4="Home &amp; Kitchen"
            />
          ) : (
            <HomeAside />
          )}

          <ProductCategory
            categoryTitle="Shop top categories"
            categoryImage={ShopTopCatImage}
            linkText="See More"
          />

          <ProductCategoryVariation
            categoryTitle="Shop by Category"
            categoryImage1={WomenFashionSweatshirtImage}
            categoryImage2={WomenFashionJoggersImage}
            categoryImage3={WomenFashionCardiganImage}
            categoryImage4={WomenFashionTeesQuadImage}
            imageText1="Sweatshirts"
            imageText2="Joggers"
            imageText3="Cardigans"
            imageText4="Easy tees"
            linkText="Shop now"
          />

          <ProductCategory
            categoryTitle="Electronics"
            categoryImage={ElectronicsImage}
            linkText="See More"
          />

          <ProductCategory
            categoryTitle="Deals &amp; Promotions"
            categoryImage={DealsPromotionsImage}
            linkText="Explore now"
          />
        </div>

        <div>
          <ProductSlider
            numberToShow={6}
            title="Discover Amazon"
            titleLinkText="Click to learn more"
            titleLinkPath="/discover-amazon"
            items={dAmazonItems}
          />
        </div>
        <div>
          <ProductSlider
            numberToShow={7}
            title="Top Beauty &amp; Personal Care Products"
            titleLinkText="Shop now"
            titleLinkPath="/beauty-personal-care"
            items={beautyCareProducts}
          />
        </div>

        <div>
          <ProductSlider
            numberToShow={6}
            title="Must have Wireless products"
            titleLinkText="Shop now"
            titleLinkPath="/wireless-products"
            items={wirelessProducts}
          />
        </div>

        <div className="product-category-wrap">
          <ProductCategoryVariation
            categoryTitle="Comfy styles for her"
            categoryImage1={WomenFashionSweatshirtImage}
            categoryImage2={WomenFashionJoggersImage}
            categoryImage3={WomenFashionCardiganImage}
            categoryImage4={WomenFashionTeesQuadImage}
            imageText1="Sweatshirts"
            imageText2="Joggers"
            imageText3="Cardigans"
            imageText4="Easy tees"
            linkText="See More"
          />
          <ProductCategory
            categoryTitle="Shop Laptops &amp; Tablets"
            categoryImage={DashLaptops}
            linkText="See More"
          />

          <ProductCategory
            categoryTitle="Explore home bedding"
            categoryImage={HomeBedding}
            linkText="See More"
          />
          <ProductCategory
            categoryTitle="Create with strip lights"
            categoryImage={StripLightingg}
            linkText="Shop now"
          />
        </div>
      </div>
    </main>
  );
};

export default Home;
