import React from "react";
import Product from "./Product";
import "../../styles/products/products.css";
import VivoBookPCImage from "../../images/vivobook-pc.jpg";
import HeroBookProImage from "../../images/herobook-pro.jpg";
import KidsTabletImage from "../../images/kids-tablet.jpg";
import LenovoTabletImage from "../../images/lenovo-tablet.jpg";
import GooglePixelImage from "../../images/google-pixel.jpg";
import UnlockedSmartPhoneImage from "../../images/unlocked-smartphone.jpg";
import WillfulSmartWatchImage from "../../images/willful-smartwatch.jpg";
import AmazfitSmartWatchImage from "../../images/amazfit-smartwatch.jpg";
import ClassicalFCGamesImage from "../../images/classical-fc-games.jpg";
import BlandstrsGameImages from "../../images/blandstrs-handheld-game.jpg";

const Products = () => {
  return (
    <main className="products content-wrap">
      <Product
        id="123450"
        image={VivoBookPCImage}
        title="ASUS VivoBook 15 Thin and Light Laptop- 15.6” Full HD, Intel i5-1035G1 CPU, 8GB RAM, 512GB SSD, Backlit KeyBoard, Fingerprint, Windows 10- F512JA-AS54, Slate Gray"
        rating={5}
        price={599.99}
        productURL={VivoBookPCImage}
        shippingLocation="Nigeria"
      />
      <Product
        id="123451"
        image={KidsTabletImage}
        title='All-new Fire HD 8 Kids Edition tablet 2-pack, 8" HD display, 32 GB, Blue/Purple Kid-Proof Case'
        rating={3}
        price={209.98}
        productURL={KidsTabletImage}
        shippingLocation="Nigeria"
      />
      <Product
        id="123452"
        image={WillfulSmartWatchImage}
        title="Willful Smart Watch for Android Phones and iOS Phones Compatible iPhone Samsung, IP68 Swimming Waterproof Smartwatch Fitness Tracker Fitness Watch Heart Rate Monitor Smart Watches for Men Women Black"
        rating={4}
        price={35.99}
        productURL={WillfulSmartWatchImage}
        shippingLocation="Nigeria"
      />
      <Product
        id="123453"
        image={ClassicalFCGamesImage}
        title="FGWAF Gift 3-Inch Color Screen 400 Classical FC Games Support for Connecting TV &amp; Two Players 800mAh Rechargeable Battery Present for Kids and Adult"
        rating={4}
        price={20.99}
        productURL={ClassicalFCGamesImage}
        shippingLocation="Nigeria"
      />
      <Product
        id="123454"
        image={GooglePixelImage}
        title="Google Pixel 4a - New Unlocked Android Smartphone - 128 GB of Storage - Up to 24 Hour Battery - Just Black"
        rating={4}
        price={53.0}
        productURL={GooglePixelImage}
        shippingLocation="Nigeria"
      />
      <Product
        id="123455"
        image={HeroBookProImage}
        title="CHUWI HeroBook Pro 14.1 inch Windows 10 Laptop Computer, 8G RAM / 256GB SSD with Intel Gmini Lake N4000 Notebook, Thin and Light"
        rating={4}
        price={349.0}
        productURL={HeroBookProImage}
        shippingLocation="Nigeria"
      />
      <Product
        id="123456"
        image={LenovoTabletImage}
        title='Lenovo Tab M8 Tablet, 8" HD Android Tablet, Quad-Core Processor, 2GHz, 16GB Storage, Full Metal Cover, Long Battery Life, Android 9 Pie, ZA5G0102US, Slate Black'
        rating={4}
        price={89.99}
        productURL={LenovoTabletImage}
        shippingLocation="Nigeria"
      />
      <Product
        id="123457"
        image={AmazfitSmartWatchImage}
        title='Amazfit Bip U Pro Smart Watch with Built-in GPS, 9-Day Battery Life, Fitness Tracker, Blood Oxygen, Heart Rate, Sleep, Stress Monitor, 60+ Sports Modes, 1.43" Large HD Display'
        rating={4}
        price={69.99}
        productURL={AmazfitSmartWatchImage}
        shippingLocation="Nigeria"
      />
      <Product
        id="123458"
        image={BlandstrsGameImages}
        title="BLANDSTRS Handheld Game Consoles, Retro Mini Game Player with 520 Classic FC Games, Good Present for Kids Boy, Xmas Gift - Red"
        rating={4}
        price={32.99}
        productURL={BlandstrsGameImages}
        shippingLocation="Nigeria"
      />
      <Product
        id="123459"
        image={UnlockedSmartPhoneImage}
        title="Unlocked Smartphone, HAFURY GT20 8GB RAM/128GB, 6.4-Inch Display, 48MP Cameras, 4200mAh Battery, Android 10, Global Version, Dual SIM, Black"
        rating={4}
        price={199.99}
        productURL={UnlockedSmartPhoneImage}
        shippingLocation="Nigeria"
      />
    </main>
  );
};

export default Products;
