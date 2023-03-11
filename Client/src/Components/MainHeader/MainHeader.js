import React from "react";
import { BsHeart, BsPerson } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { TfiSearch } from "react-icons/tfi";
import logo from "../../Assets/Imgs/logo.svg";

import "./MainHeader.scss";

const MainHeader = () => {
  return (
    <header className="main-header" id="main-header">
      <div className="container lg:flex-row md:flex-row sm:flex-row flex-col pb-3 lg:pb-0 md:pb-0 sm:pb-0">
        <img src={logo} className="" />
        <div className="input">
          <input
            type="search"
            placeholder="Enter your product name..."
            className=" w-full text-xl"
          ></input>
          <TfiSearch className="text-lg text-gray-700" />
        </div>
        <div className="icons hidden lg:flex">
          <BsPerson />
          <BsHeart />
          <AiOutlineShoppingCart />
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
