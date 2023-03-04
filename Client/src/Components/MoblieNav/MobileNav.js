import React from "react";
import { BsHeart, BsGrid } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { RxTextAlignJustify } from "react-icons/rx";
import { SlHome } from "react-icons/sl";

import "./MobileNav.scss";

const MobileNav = () => {
  return (
    <div className="mobile-nav container lg:hidden flex">
      <div>
        <RxTextAlignJustify title="Grid" />
      </div>
      <div>
        <SlHome />
      </div>
      <div>
        <BsHeart />
      </div>
      <div>
        <AiOutlineShoppingCart />
      </div>
      <div>
        <BsGrid />
      </div>
    </div>
  );
};

export default MobileNav;
