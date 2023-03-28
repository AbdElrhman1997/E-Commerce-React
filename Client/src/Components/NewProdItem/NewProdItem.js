import React, { useCallback, useEffect, useRef, useState } from "react";
import { ImStarFull, ImStarHalf } from "react-icons/im";
import { BsHeart, BsEye, BsBagPlus } from "react-icons/bs";
import { products } from "../../Assets/data/products";
import Badge from "../Badge/Badge";

import "./NewProdItem.scss";
import { useDispatch, useSelector } from "react-redux";
import { cartCount } from "../../Store/CartSlice";
import { FavoriteCount } from "../../Store/FavoriteSlice";
import { ToastError, ToastInfo, ToastSuccess } from "../Toast/Toast";
import { isLoggedIn } from "../../Store/AuthSlice";

const NewProdItem = ({ product }) => {
  const [prodImg, setProdImg] = useState(product.imgUrl);
  const img = useRef();
  const dispatch = useDispatch();
  const isLogged = useSelector((state) => state.Auth.isLoggedIn);
  useEffect(() => {
    dispatch(isLoggedIn());
  });
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

  const addToFavorites = () => {
    if (isLogged) {
      const FavoritesItems =
        JSON.parse(localStorage.getItem("FavoritesItem")) || [];
      const productIndex = FavoritesItems.findIndex((item) => {
        return item.id == product.id;
      });
      if (FavoritesItems.length) {
        if (productIndex >= 0) {
          console.log("this item already added to Favorites");
        } else {
          const newFavoritesItems = [...FavoritesItems, product];
          localStorage.setItem(
            "FavoritesItem",
            JSON.stringify(newFavoritesItems)
          );
        }
      } else {
        const newFavoritesItems = [product];
        localStorage.setItem(
          "FavoritesItem",
          JSON.stringify(newFavoritesItems)
        );
      }
    } else {
      ToastError("You must be Log in to add to Favorites");
    }
    dispatch(FavoriteCount());
  };

  const changeImage = () => {
    setProdImg(product.imgHover);
    img.current.style = "transform:scale(110%);";
  };

  const backImg = () => {
    setProdImg(product.imgUrl);
    img.current.style = "transform:scale(100%);";
  };

  return (
    <div
      className="new-products-item lg:w-1/ md:w-1/3 sm:w-1/2"
      onMouseEnter={changeImage}
      onMouseLeave={backImg}
    >
      {product.badge ? <Badge /> : null}
      <a href={`productdetails/${product.id}`}>
        <img src={prodImg} ref={img} />
      </a>
      <div className="px-4 py-2">
        <p className="text-main text-xs uppercase">{product.category}</p>
        <p className="description text-main-text font-light my-1">
          {product.title}
        </p>
        <p className="flex my-3 text-amber-400">
          <ImStarFull />
          <ImStarFull />
          <ImStarFull />
          <ImStarFull />
          <ImStarHalf />
        </p>
        <div className="my-1">
          <span className="font-semibold">
            {parseInt(product.price).toFixed(2)}$
          </span>
          <span className=" line-through text-main-text ml-3">
            {parseInt(product.disCount).toFixed(2)}$
          </span>
        </div>
        <div className="showcase-action">
          <button className="heart" onClick={addToFavorites}>
            <BsHeart />
          </button>
          <button className="eye">
            <a href={`productdetails/${product.id}`}>
              <BsEye />
            </a>
          </button>
          <button className="add" onClick={addToCart}>
            <BsBagPlus />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewProdItem;
