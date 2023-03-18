import React, { useRef, useState } from "react";
import { ImStarFull, ImStarHalf } from "react-icons/im";
import { BsHeart, BsEye, BsBagPlus } from "react-icons/bs";
import { products } from "../../Assets/data/products";
import Badge from "../Badge/Badge";

import "./NewProdItem.scss";

const NewProdItem = ({
  id,
  imgUrl,
  imgHover,
  category,
  title,
  price,
  disCount,
  badge,
}) => {
  const [prodImg, setProdImg] = useState(imgUrl);
  const img = useRef();
  const [product, setProduct] = useState(products[0][1]);
  const addToCart = () => {
    localStorage.setItem("productDetails", JSON.stringify([products[0][0]]));

    if (localStorage) {
      const cartProducts = JSON.parse(localStorage.getItem("productDetails"));
      cartProducts.push(product);
      localStorage.setItem("productDetails", JSON.stringify(cartProducts));
      console.log(cartProducts);
    } else {
      localStorage.setItem("productDetails", JSON.stringify([products[0][0]]));
    }
  };
  const changeImage = () => {
    setProdImg(imgHover);
    img.current.style = "transform:scale(110%);";
    // img.current.style = "transform:scale(110%);";
  };
  const backImg = () => {
    setProdImg(imgUrl);
    img.current.style = "transform:scale(100%);";
  };

  return (
    <div
      className="new-products-item lg:w-1/ md:w-1/3 sm:w-1/2"
      onMouseEnter={changeImage}
      onMouseLeave={backImg}
    >
      {badge ? <Badge /> : null}
      <a href={`productdetails/${id}`}>
        <img src={prodImg} ref={img} />
      </a>
      <div className="px-4 py-2">
        <p className="text-main text-xs uppercase">{category}</p>
        <p className="description text-main-text font-light my-1">{title}</p>
        <p className="flex my-3 text-amber-400">
          <ImStarFull />
          <ImStarFull />
          <ImStarFull />
          <ImStarFull />
          <ImStarHalf />
        </p>
        <div className="my-1">
          <span className="font-semibold">{parseInt(price).toFixed(2)}$</span>
          <span className=" line-through text-main-text ml-3">
            {parseInt(disCount).toFixed(2)}$
          </span>
        </div>
        <div className="showcase-action">
          <button className="heart">
            <BsHeart />
          </button>
          <button className="eye">
            <a href={`productdetails/${id}`}>
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
