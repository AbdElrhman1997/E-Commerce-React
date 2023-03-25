import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { TbTrash } from "react-icons/tb";
import { useDispatch } from "react-redux";
import { cartCount } from "../../Store/CartSlice";
import { getFavoriteItems } from "../../Store/FavoriteSlice";
import { ToastInfo, ToastSuccess } from "../Toast/Toast";
import "./FavoriteItem.scss";

const FavoriteItem = ({ product }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    const cartItems = JSON.parse(localStorage.getItem("FavoritesItem")) || [];
    const newCartItems = cartItems.filter((item) => item.id !== product.id);
    localStorage.setItem("FavoritesItem", JSON.stringify(newCartItems));
    dispatch(getFavoriteItems());
    ToastSuccess("The product has been removed successfully");
  };

  const addToCart = () => {
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
  };
  return (
    <div class="favorite-item bg-white rounded-lg shadow-md p-6">
      <img src={product.imgUrl} alt="Product Image" class="rounded-lg mb-4" />
      <h2 class="text-lg font-medium text-gray-900 mb-2 h-20">
        {product.title}
      </h2>
      <p class="favorite-desc text-gray-700 mb-4 h-12">{product.desc}</p>
      <div className="flex justify-around">
        <button
          class="bg-main hover:bg-main-hover text-xl text-white font-semibold py-1 px-4 rounded-full"
          onClick={handleDelete}
        >
          <TbTrash />
        </button>
        <button
          class="bg-main hover:bg-main-hover text-xl text-white font-semibold py-2 px-4 rounded-full"
          onClick={addToCart}
        >
          <AiOutlineShoppingCart />
        </button>
      </div>
    </div>
  );
};

export default FavoriteItem;
