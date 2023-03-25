import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import FavoriteItem from "../../Components/FavoriteItem/FavoriteItem";
import { getFavoriteItems } from "../../Store/FavoriteSlice";
import "./Favorites.scss";

const Favorites = () => {
  const [favoriteItems, setFavoriteItems] = useState([]);
  const dispatch = useDispatch();
  const FavoriteStates = useSelector((state) => state.Favorite);
  useEffect(() => {
    setFavoriteItems(JSON.parse(localStorage.getItem("FavoritesItem")));
    dispatch(getFavoriteItems());
  }, []);

  return (
    <section className="favorites">
      <ToastContainer />
      <div class="min-h-screen p-4">
        <div class="max-w-7xl mx-auto py-12 sm:px-6 lg:px-8">
          <div
            class="flex items-center text-gray-500 dark:text-white cursor-pointer hover:text-main mb-8"
            onClick={() => {
              window.history.back();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-chevron-left"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <polyline points="15 6 9 12 15 18" />
            </svg>
            <p class="text-lg pl-2 leading-none dark:hover:text-gray-200">
              Back
            </p>
          </div>
          <h1 class="text-3xl font-bold text-gray-900 mb-6">
            Your Favorite Products
          </h1>
          {!FavoriteStates.length ? (
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {FavoriteStates.items.map((product) => {
                return <FavoriteItem product={product} />;
              })}
            </div>
          ) : (
            <div className="text-center font-semibold text-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              There No Favorites
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Favorites;
