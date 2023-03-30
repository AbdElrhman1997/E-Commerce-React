import React, { useEffect } from "react";
import NewProdItem from "../NewProdItem/NewProdItem";
import { products } from "../../Assets/data/products";
import "./NewProducts.scss";

const NewProducts = () => {
  useEffect(() => {}, []);
  return (
    <section className="new-products lg:col-span-9 col-span-12">
      <p className="m-auto text-xl font-semibold">New Products</p>
      <hr className="mb-5 mt-2 m-auto bg-main-white" />
      <div className="new-products-container">
        {products[3].map((product, i) => {
          return <NewProdItem key={i} product={product} />;
        })}
      </div>
    </section>
  );
};

export default NewProducts;
