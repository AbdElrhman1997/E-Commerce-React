import React, { useState, useEffect } from "react";
import { BsHeart, BsPerson } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { TfiSearch } from "react-icons/tfi";
import { BiLogIn } from "react-icons/bi";
import { cartCount } from "../../Store/CartSlice";
import logo from "../../Assets/Imgs/logo.svg";

import "./MainHeader.scss";
import { useDispatch, useSelector } from "react-redux";
import { FavoriteCount } from "../../Store/FavoriteSlice";
import { isLoggedIn } from "../../Store/AuthSlice";

const MainHeader = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cartCount());
    dispatch(FavoriteCount());
    dispatch(isLoggedIn());
  }, []);

  const golobalState = useSelector((state) => state);

  return (
    <header className="main-header" id="main-header">
      <div className="container lg:flex-row md:flex-row sm:flex-row flex-col pb-3 lg:pb-0 md:pb-0 sm:pb-0">
        <img src={logo} className="" />
        <div className="input">
          <input
            type="search"
            placeholder="Enter your product name..."
            className=" w-full text-xl text-main-text"
          ></input>
          <TfiSearch className="text-lg text-main-text" />
        </div>
        <div className="icons hidden lg:flex">
          <div
            className="favorite"
            data-favorite={
              golobalState.Auth.isLoggedIn ? golobalState.Favorite.count : 0
            }
          >
            <a href="/favorite">
              <BsHeart />
            </a>
          </div>
          <div
            className="card"
            data-card={
              golobalState.Auth.isLoggedIn ? golobalState.Cart.count : 0
            }
          >
            <a href="/cart">
              <AiOutlineShoppingCart />
            </a>
          </div>
          {golobalState.Auth.isLoggedIn ? (
            <div className="profile">
              <a href="/profile">
                <BsPerson />
              </a>
            </div>
          ) : (
            <div className="log-in" data-card={golobalState.Cart.count}>
              <a href="/login">
                <BiLogIn />
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
