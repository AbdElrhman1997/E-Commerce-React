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
        <p className="text-main font-bold mt-2">BRAND DIRECTORY</p>
        <p className="text-main-text my-4 leading-8">
          <span className="font-bold mr-3 ">FASHION :</span> T-Shirt | Shirts |
          Shorts & Jeans | Jacket | Dress & Frock | Innerwear | Hosiery
        </p>
        <p className="text-main-text my-4 leading-8">
          <span className="font-bold mr-3">FOOTWEAR :</span>
          Sport | Formal | Boots | Casual | Cowboy Shoes | Safety Shoes | Party
          Wear Shoes | Branded | Firstcopy | Long Shoes
        </p>
        <p className="text-main-text my-4 leading-8">
          <span className="font-bold mr-3">JEWELLERY :</span>
          Necklace | Earrings | Couple Rings | Pendants | Crystal | Bangles |
          Bracelets | Nosepin | Chain | Earrings | Couple Rings
        </p>
        <p className="text-main-text mt-4 mb-10 leading-8">
          <span className="font-bold mr-3">COSMETICS :</span> Shampoo Bodywash |
          Facewash | Makeup Kit | Liner | Lipstick | Prefume | Body Soap | Scrub
          | Hair Gel | Hair Colors | Hair Dye | Sunscreen Skin Loson | Liner |
          Lipstick
        </p>

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
