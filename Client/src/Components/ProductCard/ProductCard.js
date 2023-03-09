import React from "react";
import test from "../../Assets/Imgs/Products/clothes-1.jpg";
import "./ProductCard.scss";

const ProductCard = ({ imgUrl, title, category, price, disPrice }) => {
  return (
    <div className="product-card container">
      <div className="product-img">
        <img src={imgUrl} />
      </div>
      <div className="product-content">
        <p>{title}</p>
        <div className=" text-main-text" href="#">
          {category}
        </div>
        <div className=" text-main" href="#">
          {price}$ <span>{disPrice}$</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
