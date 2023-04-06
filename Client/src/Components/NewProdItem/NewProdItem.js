import React, { useCallback, useEffect, useRef, useState } from "react";
import { ImStarFull, ImStarHalf } from "react-icons/im";
import { BsHeart, BsEye, BsBagPlus } from "react-icons/bs";
import { products } from "../../Assets/data/products";
import { useDispatch, useSelector } from "react-redux";
import { cartCount, getCartItems, totalPrice } from "../../Store/CartSlice";
import { FavoriteCount } from "../../Store/FavoriteSlice";
import { ToastError, ToastInfo, ToastSuccess } from "../Toast/Toast";
import { isLoggedIn } from "../../Store/AuthSlice";
import Badge from "../Badge/Badge";
import "./NewProdItem.scss";

const NewProdItem = ({ product }) => {
  const [prodImg, setProdImg] = useState(product.imgUrl);
  const [isInCart, setIsInCart] = useState(false);
  const [isInFavorites, setIsInFavorites] = useState(false);
  const cartIcon = useRef();
  const favIcon = useRef();
  const img = useRef();
  const dispatch = useDispatch();
  const isLogged = useSelector((state) => state.Auth.isLoggedIn);
  useEffect(() => {
    dispatch(isLoggedIn());
    if (isLogged) {
      if (localStorage.CartItem) {
        JSON.parse(localStorage.CartItem).filter((item) => {
          if (item.id == product.id) {
            setIsInCart(true);
          }
        });
        JSON.parse(localStorage.FavoritesItem).filter((item) => {
          if (item.id == product.id) {
            setIsInFavorites(true);
          }
        });
      }
    }
  }, [isLogged]);
  const addToCart = () => {
    if (isLogged) {
      if (!isInCart) {
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
        JSON.parse(localStorage.CartItem).filter((item) => {
          if (item.id == product.id) {
            setIsInCart(true);
          }
        });
      } else {
        const cartItems = JSON.parse(localStorage.getItem("CartItem")) || [];
        const newCartItems = cartItems.filter((item) => item.id !== product.id);
        localStorage.setItem("CartItem", JSON.stringify(newCartItems));
        ToastSuccess("The product has been removed successfully");
        cartIcon.current.classList.remove("active");
        dispatch(cartCount());
      }
      dispatch(cartCount());
    } else {
      ToastError("You must be Log in to add products");
    }
  };

  const addToFavorites = () => {
    if (isLogged) {
      if (!isInFavorites) {
        const FavoritesItems =
          JSON.parse(localStorage.getItem("FavoritesItem")) || [];
        const productIndex = FavoritesItems.findIndex((item) => {
          return item.id == product.id;
        });
        if (FavoritesItems.length) {
          if (productIndex >= 0) {
            ToastInfo("this item already added");
          } else {
            const newFavoritesItems = [...FavoritesItems, product];
            localStorage.setItem(
              "FavoritesItem",
              JSON.stringify(newFavoritesItems)
            );
            ToastSuccess(
              "The product has been added to Favorites successfully"
            );
          }
        } else {
          const newFavoritesItems = [product];
          localStorage.setItem(
            "FavoritesItem",
            JSON.stringify(newFavoritesItems)
          );
          ToastSuccess("The product has been added to Favorites successfully");
        }
        JSON.parse(localStorage.FavoritesItem).filter((item) => {
          if (item.id == product.id) {
            setIsInFavorites(true);
          }
        });
      } else {
        const FavoritesItem =
          JSON.parse(localStorage.getItem("FavoritesItem")) || [];
        const newFavoritesItem = FavoritesItem.filter(
          (item) => item.id !== product.id
        );
        localStorage.setItem("FavoritesItem", JSON.stringify(newFavoritesItem));
        ToastSuccess("The product has been removed successfully");
        favIcon.current.classList.remove("active");
        dispatch(FavoriteCount());
      }
      dispatch(FavoriteCount());
    } else {
      ToastError("You must be Log in to add to Favorites");
    }
  };

  const changeImage = () => {
    if (product.imgHover) {
      setProdImg(product.imgHover);
    }
    img.current.style = "transform:scale(110%);";
  };

  const backImg = () => {
    setProdImg(product.imgUrl);
    img.current.style = "transform:scale(100%);";
  };

  return (
    <div
      className="new-products-item lg:w-72 md:w-1/3 sm:w-1/2 mx-1"
      onMouseEnter={changeImage}
      onMouseLeave={backImg}
    >
      {product.badge ? <Badge /> : null}
      <a href={`/productdetails/${product.id}`}>
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
          <button
            className={`heart ${isInFavorites ? `active` : ``}`}
            onClick={addToFavorites}
            ref={favIcon}
          >
            <BsHeart />
          </button>
          <button className="eye">
            <a href={`/productdetails/${product.id}`}>
              <BsEye />
            </a>
          </button>
          <button
            className={`add ${isInCart ? `active` : ``}`}
            onClick={addToCart}
            ref={cartIcon}
          >
            <BsBagPlus />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewProdItem;
