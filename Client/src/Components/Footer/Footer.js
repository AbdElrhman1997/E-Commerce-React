import React from "react";
import { BsTelephone } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { FiMail } from "react-icons/fi";
import footerImg from "../../Assets/Imgs/payment.png";

import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer p-8 lg:pb-0 pb-20">
      <div className="container">
        <p className="text-main font-bold mt-2">Fast Links</p>
        <div className="flex flex-wrap justify-between">
          <p className="text-main-text my-4 leading-8">
            <span className="font-bold mr-3 ">Clothes :</span>
            <a href="/categories/Clothes/Men">Men'S</a> |
            <a href="/categories/Clothes/Women"> Women'S</a> |
            <a href="/categories/Clothes/Belt"> Belts</a> |
            <a href="/categories/Clothes/Hat"> Hats</a>
          </p>
          <p className="text-main-text my-4 leading-8">
            <span className="font-bold mr-3 ">Footwear :</span>
            <a href="/categories/Footwear/Sports">Sports</a> |
            <a href="/categories/Footwear/Formal"> Formal</a> |
            <a href="/categories/Footwear/Casual"> Casual</a>
          </p>
          <p className="text-main-text my-4 leading-8">
            <span className="font-bold mr-3 ">Jewellery :</span>
            <a href="/categories/Jewellery/Earrings"> Earrings</a> |
            <a href="/categories/Jewellery/Couple Rings"> Couple Rings</a> |
            <a href="/categories/Jewellery/Necklace"> Necklace</a>
          </p>
          <p className="text-main-text my-4 leading-8">
            <span className="font-bold mr-3 ">Perfume :</span>
            <a href="/categories/Perfume/Titan"> Titan</a>
          </p>
          <p className="text-main-text my-4 leading-8">
            <span className="font-bold mr-3 ">Cosmetics :</span>
            <a href="/categories/Cosmetics/Belt"> Shampoo</a>
          </p>
          <p className="text-main-text my-4 leading-8">
            <span className="font-bold mr-3 ">Glasses :</span>
            <a href="/categories/Glasses/SunGlasses"> SunGlasses</a>
          </p>
          <p className="text-main-text my-4 leading-8">
            <span className="font-bold mr-3 ">Watches :</span>
            <a href="/categories/Watches/Smart"> Smart</a> |
            <a href="/categories/Watches/Pocket"> Pocket</a>
          </p>
        </div>
        <div className="details">
          <div className="group">
            <p className="group-head">POPULAR CATEGORIES</p>
            <p>Fashion</p>
            <p>Electronic</p>
            <p>Cosmetic</p>
            <p>Health</p>
            <p>Watches</p>
          </div>
          <div className="group">
            <p className="group-head">PRODUCTS</p>
            <p>Prices Drop</p>
            <p>New Products</p>
            <p>Best Sales</p>
            <p>Contact Us</p>
            <p>Sitemap</p>
          </div>
          <div className="group">
            <p className="group-head">OUR COMPANY</p>
            <p>Delivery</p>
            <p>Legal Notice</p>
            <p>Terms And Conditions</p>
            <p>About Us</p>
            <p>Secure Payment</p>
          </div>
          <div className="group">
            <p className="group-head">SERVICES</p>
            <p>Worldwide Delivery</p>
            <p>Next Day Delivery</p>
            <p>Best Online Support</p>
            <p>Return Policy</p>
            <p>30% Money Back</p>
          </div>
          <div className="group">
            <p className="group-head">CONTACT</p>
            <p className="flex items-center">
              <p>
                <CiLocationOn className="mr-2 text-2xl" />
              </p>
              419 State 414 Rte Beaver Dams, New York(NY), 14812, USA
            </p>
            <p className="flex items-center">
              <p>
                <BsTelephone className="mr-2 text-2xl" />
              </p>
              0103037083
            </p>
            <p className="flex items-center">
              <p>
                <FiMail className="mr-2 text-2xl" />
              </p>
              contact@abdelrahmanm.com
            </p>
          </div>
        </div>
        <div className="w-full mt-6 flex flex-col items-center">
          <img src={footerImg} className="my-4" />
          <p className="text-main-text w-full font-bold text-center mb-5">
            Copyright &copy; Abdelrahman Mohamed All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
