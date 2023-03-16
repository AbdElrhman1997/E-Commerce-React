import React from "react";
import { BsHeart, BsGrid } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { RxTextAlignJustify } from "react-icons/rx";
import { SlHome } from "react-icons/sl";
import { toggleSideBar } from "../../Store/SideBarSlice";
import "./MobileNav.scss";
import { useDispatch } from "react-redux";

const MobileNav = () => {
  const dispatch = useDispatch();

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
      <div className="favorite" data-favorite="3">
        <BsHeart />
      </div>
      <div className="card" data-card="0">
        <AiOutlineShoppingCart />
      </div>
      <div>
        <BsGrid />
      </div>
    </div>
  );
};

export default MobileNav;
