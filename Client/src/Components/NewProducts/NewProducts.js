import React, { useEffect } from "react";
import NewProdItem from "../NewProdItem/NewProdItem";
import { products } from "../../Assets/data/products";
import "./NewProducts.scss";

const NewProducts = () => {
  return (
    <section className="new-products lg:col-span-9 col-span-12">
      <p className="m-auto text-xl font-semibold">New Products</p>
      <hr className="mb-5 mt-2 m-auto bg-main-white" />
      <div className="new-products-container">
        {products[0].map((product, i) => {
          if (i >= 4) {
            return <NewProdItem key={i} product={product} />;
          }
        })}
        {products[1].map((product, i) => {
          if (i >= 4) {
            return <NewProdItem key={i} product={product} />;
          }
        })}
        {products[2].map((product, i) => {
          if (i >= 4) {
            return <NewProdItem key={i} product={product} />;
          }
        })}
      </div>
    </section>
  );
};

export default NewProducts;
