import React, { useState, useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { cartCount } from "../../Store/CartSlice";
import { useDispatch, useSelector } from "react-redux";
import { products } from "../../Assets/data/products";
import { ToastError, ToastInfo, ToastSuccess } from "../Toast/Toast";
import { isLoggedIn } from "../../Store/AuthSlice";
import { FavoriteCount } from "../../Store/FavoriteSlice";
import { ToastContainer } from "react-toastify";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

import "./ProductDetails.scss";

const ProductDetails = () => {
  const handleBackButtonClick = () => {
    window.history.back();
  };
  const [count, setCount] = useState(0);
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const dispatch = useDispatch();
  const isLogged = useSelector((state) => state.Auth.isLoggedIn);

  useEffect(() => {
    products.map((p) =>
      p.map((prd) => {
        if (prd.id === +id) {
          setProduct(prd);
        }
      })
    );
    dispatch(isLoggedIn());
    // check price condition
  }, [product]);

  function addProduct() {
    setCount(count + 1);
  }

  function subtractProduct() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

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

  return (
    <section class="prd-details text-gray-700 body-font overflow-hidden bg-white">
      <ToastContainer />
      <div class="container px-5 py-6 mx-auto">
        <button
          className="prd-details-btn bg-main text-white font-bold py-2 px-4 rounded mb-6"
          onClick={handleBackButtonClick}
        >
          <FaArrowLeft />
        </button>
        <div class="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt="ecommerce"
            class="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
            src={product.imgUrl}
          />
          <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">
              {product.title}
            </h1>
            <div class="flex mb-4">
              <span class="flex items-center">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 text-amber-400"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 text-amber-400"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 text-amber-400"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 text-amber-400"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 text-amber-400"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <span class="text-gray-600 ml-3">5 Reviews</span>
              </span>
            </div>
            <p class=" font-semibold">{product.category}</p>

            <p class="prd-desc leading-relaxed my-1">{product.desc}</p>

            <div class="flex justify-between items-center">
              <div class="title-font font-medium text-2xl text-gray-900">
                {parseInt(product.price).toFixed(2)}$
              </div>
              <button
                onClick={() => {
                  addToCart();
                }}
                class="text-base leading-none p-5 font-bold bg-main border-main border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white  hover:bg-main-hover dark:hover:bg-gray-700"
              >
                Add To Cart
              </button>
              {/* <div className="flex items-center justify-center">
                <button
                  className="prd-details-btn px-2 py-1 bg-main rounded-l-lg text-white"
                  onClick={subtractProduct}
                >
                  -
                </button>
                <input
                  type="number"
                  id="product-count"
                  className="w-12 m-auto text-center bg-gray-50 h-4/5"
                  // onChange={handleCountChange}
                  value={count.toLocaleString("en-US")}
                  readOnly
                />
                <button
                  className="prd-details-btn px-2 py-1 bg-main rounded-r-lg text-white"
                  onClick={addProduct}
                >
                  +
                </button>
              </div> */}
              <button
                onClick={addToFavorites}
                class="fav-icon-btn rounded-full w-10 h-10 p-0 border-0 inline-flex items-center justify-center text-white ml-4"
              >
                <AiFillHeart className="fav-icon" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
