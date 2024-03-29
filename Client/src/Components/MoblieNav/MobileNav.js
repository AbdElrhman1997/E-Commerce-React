import React, { Fragment, useEffect, useState } from "react";
import { BsHeart, BsGrid } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { RxTextAlignJustify } from "react-icons/rx";
import { SlHome } from "react-icons/sl";
import { toggleSideBar } from "../../Store/SideBarSlice";
import "./MobileNav.scss";
import { useDispatch, useSelector } from "react-redux";
import { toggleHeaderMob } from "../../Store/HeaderSlice";
import Overlay from "../Overlay/Overlay";
import MobileSideBar from "../MobileSideBar/MobileSideBar";
import MobileHeader from "../MobileHeader/MobileHeader";

const MobileNav = () => {
  const dispatch = useDispatch();
  const golobalState = useSelector((state) => state);

  return (
    <Fragment>
      <div className="mobile-nav lg:hidden flex">
        <div>
          <a>
            <RxTextAlignJustify
              onClick={() => {
                dispatch(toggleHeaderMob());
              }}
              title="Grid"
            />
          </a>
        </div>
        <div>
          <a href="/">
            <SlHome />
          </a>
        </div>
        <div className="favorite" data-favorite={golobalState.Favorite.count}>
          <a href="/favorite">
            <BsHeart />
          </a>
        </div>
        <div className="card" data-card={golobalState.Cart.count}>
          <a href="/cart">
            <AiOutlineShoppingCart />
          </a>
        </div>

        <div>
          <a>
            <BsGrid
              onClick={() => {
                dispatch(toggleSideBar());
              }}
            />
          </a>
        </div>
      </div>
      <Overlay />
      <MobileSideBar />
      <MobileHeader />
    </Fragment>
  );
};

export default MobileNav;
