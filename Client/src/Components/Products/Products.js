import React from "react";
import SideBar from "../SideBar/SideBar";
import NewProducts from "../NewProducts/NewProducts";

import "./Products.scss";
import OldProducts from "../OldProducts/OldProducts";
import DealOfDay from "../DealOfDay/DealOfDay";

const Products = () => {
  return (
    <section className="products container">
      <div className="grid grid-cols-12">
        <div className="side-container lg:col-span-3 lg:block hidden">
          <SideBar />
        </div>
        <div className="product-minmal lg:col-span-9 col-span-12 grid grid-cols-9">
          <div className="col-span-12">
            <OldProducts />
          </div>
          <div className="col-span-12">
            <DealOfDay />
          </div>
          <div className="col-span-12">
            <NewProducts />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;

// breakpoints={{
//   640: {
//     width: 540,
//     slidesPerView: 1,
//   },

//   768: {
//     width: 768,
//     slidesPerView: 1,
//   },

//   1024: {
//     width: 1024,
//     slidesPerView: 1,
//   },
// }}

{
  /* <div className=" ">
          {products.map((product) => {
            return (
              <ProductCard
                imgUrl={product.imgUrl}
                title={product.title}
                category={product.category}
                price={product.price}
                disPrice={product.disPrice}
              />
            );
          })}
        </div> */
}
