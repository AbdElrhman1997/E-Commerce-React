import React from "react";
import test from "../../Assets/Imgs/Products/clothes-1.jpg";
import "./ProductCard.scss";

const ProductCard = ({
  id,
  imgUrl,
  title,
  category,
  price,
  disCount,
  supCtg,
}) => {
  return (
    <div className="product-card container">
      <div className="product-img">
        <a href={`productdetails/${id}`}>
          <img src={imgUrl} />
        </a>
      </div>
      <div className="product-content">
        <a href={`productdetails/${id}`}>
          <p>{title}</p>
        </a>
        <div className=" text-main-text" href="#">
          {supCtg}
        </div>
        <div className=" text-main" href="#">
          {price}$ <span>{disCount}$</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
