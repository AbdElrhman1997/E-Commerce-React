import React, { useEffect, useState } from "react";
import { ImStarFull, ImStarHalf } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import { products } from "../../Assets/data/products";
import { cartCount } from "../../Store/CartSlice";
import { ToastError, ToastInfo, ToastSuccess } from "../Toast/Toast";
import "./DealOfDay.scss";
import { ToastContainer } from "react-toastify";

const DealOfDay = () => {
  const product = products[1][2] || {};
  const dispatch = useDispatch();
  const isLogged = useSelector((state) => state.Auth.isLoggedIn);
  useEffect(() => {}, []);
  const addToCart = () => {
    if (isLogged) {
      const cartItems = JSON.parse(localStorage.getItem("CartItem")) || [];
      const productIndex = cartItems.findIndex((item) => {
        return item.id === product.id;
      });
      if (cartItems.length) {
        if (productIndex >= 0) {
          ToastInfo("this item already added");
        } else {
          const newCartItems = [...cartItems, product];
          localStorage.setItem("CartItem", JSON.stringify(newCartItems));
          ToastSuccess("The product has been added successfully");
        }
      } else {
        const newCartItems = [product];
        localStorage.setItem("CartItem", JSON.stringify(newCartItems));
        ToastSuccess("The product has been added successfully");
      }
      dispatch(cartCount());
    } else {
      ToastError("You must be Log in to add products");
    }
  };

  return (
    <section className="deal-of-day grid grid-cols-9">
      <ToastContainer />
      <p className="text-xl font-semibold col-span-9 text-left">
        Deal Of The Day
      </p>
      <hr className="mb-5 mt-2 bg-main-white col-span-9" />
      <div className="deal-item lg:flex col-span-9">
        <img
          src={product.imgUrl}
          className="lg:w-1/2 w-full"
          onClick={() => {
            window.location.pathname = `productdetails/${product.id}`;
          }}
        />
        <div className="deal-content">
          <div className="flex my-3 text-amber-400">
            <ImStarFull />
            <ImStarFull />
            <ImStarFull />
            <ImStarFull />
            <ImStarFull />
          </div>
          <p className=" font-bold">
            <a href={`productdetails/${product.id}`} className="prd-title">
              {product.title}
            </a>
          </p>
          <p className=" text-main-text font-light">{product.desc}</p>
          <div className="my-3">
            <span className="font-bold text-main text-2xl">
              ${parseInt(product.price).toFixed(2)}
            </span>
            <span className=" line-through text-main-text text-2xl ml-3 ">
              ${parseInt(product.disCount).toFixed(2)}
            </span>
          </div>
          <a
            className=" cursor-pointer inline-block uppercase bg-main text-white no-underline hover:bg-main-hover lg:mt-2 p-2 rounded"
            onClick={addToCart}
          >
            Add to cart
          </a>
          <div className="flex justify-between text-sm mt-4 mb-2">
            <p>
              ALREADY SOLD: <span className="font-bold text-sm">20</span>
            </p>
            <p>
              AVAILABLE: <span className="font-bold text-sm">40</span>
            </p>
          </div>
          <div className="out-bar">
            <div className="inner-bar"></div>
          </div>
          <p className="font-semibold mt-4">HURRY UP! OFFER ENDS IN:</p>
          <div className="deal-date flex">
            <div className="days">
              <p>23</p>
              <p>Days</p>
            </div>
            <div className="hours">
              <p>10</p>
              <p>Hours</p>
            </div>
            <div className="minutes">
              <p>40</p>
              <p>Min</p>
            </div>
            <div className="seconds">
              <p>33</p>
              <p>Sec</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DealOfDay;
