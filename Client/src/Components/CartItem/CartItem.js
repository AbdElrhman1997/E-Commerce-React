import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCartItems, totalPrice } from "../../Store/CartSlice";
import { FavoriteCount } from "../../Store/FavoriteSlice";
import "./CartItem.scss";
import { ToastError, ToastInfo, ToastSuccess } from "../Toast/Toast";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CartItem = ({ product }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(totalPrice());
  }, []);

  const handleDelete = () => {
    const cartItems = JSON.parse(localStorage.getItem("CartItem")) || [];
    const newCartItems = cartItems.filter((item) => item.id !== product.id);
    localStorage.setItem("CartItem", JSON.stringify(newCartItems));
    dispatch(getCartItems());
    dispatch(totalPrice());
    ToastSuccess("The product has been removed successfully");
  };
  const addToFavorites = () => {
    const FavoritesItems =
      JSON.parse(localStorage.getItem("FavoritesItem")) || [];
    const productIndex = FavoritesItems.findIndex((item) => {
      return item.id == product.id;
    });

    if (FavoritesItems.length) {
      if (productIndex >= 0) {
        ToastInfo("this item already added to Favorites");
      } else {
        const newFavoritesItems = [...FavoritesItems, product];
        localStorage.setItem(
          "FavoritesItem",
          JSON.stringify(newFavoritesItems)
        );
        ToastSuccess("The product has been added successfully");
      }
    } else {
      const newFavoritesItems = [product];
      localStorage.setItem("FavoritesItem", JSON.stringify(newFavoritesItems));
      ToastSuccess("The product has been added successfully");
    }
    dispatch(FavoriteCount());
  };

  return (
    <div class="md:flex items-strech py-8 md:py-10 lg:py-8 border-t border-gray-50">
      <div class="md:w-4/12 2xl:w-1/4 w-full">
        <img
          src={product.imgUrl}
          alt="Black Leather Bag"
          class="h-full object-center object-cover md:block hidden"
        />
        <img
          src={product.imgUrl}
          alt="Black Leather Bag"
          class="md:hidden w-full h-full object-center object-cover"
        />
      </div>
      <div class="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">
        <p class="text-base font-semibold leading-none text-gray-800 dark:text-white">
          {product.title}
        </p>
        <div class="flex items-center justify-between w-full pt-1">
          <p class="text-sm leading-3 font-bold text-main dark:text-white md:pt-0 pt-4">
            {product.category}
          </p>
          <select
            aria-label="Select quantity"
            class="py-2 px-1 border border-gray-200 mr-6 focus:outline-none dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white"
          >
            <option>01</option>
            <option>02</option>
            <option>03</option>
          </select>
        </div>
        <p class="text-xs leading-3 text-gray-600 dark:text-white py-4">
          Color: Black
        </p>
        <p class="w-96 text-xs leading-3 text-gray-600 dark:text-white">
          Composition: 100% calf leather
        </p>
        <div class="flex items-center justify-between pt-5">
          <div class="flex itemms-center">
            <p
              class="text-xs leading-3 underline text-gray-800 dark:text-white hover:text-main cursor-pointer"
              onClick={() => {
                addToFavorites();
              }}
            >
              Add to favorites
            </p>
            <p
              onClick={() => {
                handleDelete();
              }}
              class="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer hover:text-main"
            >
              Remove
            </p>
          </div>
          <p class="text-base font-black leading-none text-gray-800 dark:text-white">
            {parseInt(product.price).toFixed(2)}$
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
