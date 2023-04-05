import React from "react";
import { products } from "../../Assets/data/products";
import test from "../../Assets/Imgs/SummerCollection.jpg";
import "./SummerCollection.scss";

const SummerCollection = () => {
  const product = products[5][0] || {};
  return (
    <section className="summer-collection p-4">
      <div className="banner-summer">
        <div className="lg:p-8 p-3">
          <p className="text-sm lg:py-1 lg:text-lg lg:w-3/5 p-1">
            25% Discount
          </p>
          <p className="lg:text-2xl text-lg">{product.title}</p>
          <p className="text-sm lg:mb-5 mb-2">Starting @ ${product.price}</p>
          <button className="lg:p-2 p-1">
            <a href={`/productdetails/${product.id}`}>Shop now</a>
          </button>
        </div>
        <img src={test} />
      </div>
    </section>
  );
};

export default SummerCollection;
