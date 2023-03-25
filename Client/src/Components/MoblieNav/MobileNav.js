import React, { useEffect, useState } from "react";
import { BsHeart, BsGrid } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { RxTextAlignJustify } from "react-icons/rx";
import { SlHome } from "react-icons/sl";
import { toggleSideBar } from "../../Store/SideBarSlice";
import "./MobileNav.scss";
import { useDispatch, useSelector } from "react-redux";

const MobileNav = () => {
  const dispatch = useDispatch();
  const golobalState = useSelector((state) => state);

  return (
    <div className="mobile-nav lg:hidden flex">
      <div
        onClick={() => {
          dispatch(toggleSideBar());
        }}
      >
        <RxTextAlignJustify title="Grid" />
      </div>
      <div>
        <SlHome />
      </div>
      <div className="favorite" data-favorite={golobalState.Favorite.count}>
        <a href="favorite">
          <BsHeart />
        </a>
      </div>
      <div className="card" data-card={golobalState.Cart.count}>
        <a href="cart">
          <AiOutlineShoppingCart />
        </a>
      </div>
      <div>
        <BsGrid />
      </div>
    </div>
  );
};

export default MobileNav;
