import React from "react";
import { ImStarFull, ImStarHalf } from "react-icons/im";

import "./NewProdItem.scss";

const NewProdItem = ({ imgUrl, category, desc, price, disCount }) => {
  return (
    <div className="new-products-item lg:w-1/ md:w-1/3 sm:w-1/2">
      <img src={imgUrl} />
      <div className="px-4 py-2">
        <p className="text-main text-sm uppercase">{category}</p>
        <p className="description text-main-text font-light my-1">{desc}</p>
        <p className="flex my-3 text-amber-400">
          <ImStarFull />
          <ImStarFull />
          <ImStarFull />
          <ImStarFull />
          <ImStarFull />
        </p>
        <div className="my-1">
          <span className="font-semibold">{parseInt(price).toFixed(2)}$</span>
          <span className=" line-through text-main-text ml-3">
            {parseInt(disCount).toFixed(2)}$
          </span>
        </div>
      </div>
    </div>
  );
};

export default NewProdItem;
