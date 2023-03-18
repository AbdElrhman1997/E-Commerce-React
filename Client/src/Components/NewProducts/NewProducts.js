import React from "react";
import NewProdItem from "../NewProdItem/NewProdItem";
import img1 from "../../Assets/Imgs/Products/jacket-3.jpg";
import imgHover1 from "../../Assets/Imgs/Products/jacket-2.jpg";
import img2 from "../../Assets/Imgs/Products/shirt-1.jpg";
import imgHover2 from "../../Assets/Imgs/Products/shirt-2.jpg";
import img3 from "../../Assets/Imgs/Products/jacket-5.jpg";
import imgHover3 from "../../Assets/Imgs/Products/jacket-4.jpg";
import img4 from "../../Assets/Imgs/Products/clothes-3.jpg";
import imgHover4 from "../../Assets/Imgs/Products/dress-1.jpg";
import img5 from "../../Assets/Imgs/Products/shoes-1.jpg";
import imgHover5 from "../../Assets/Imgs/Products/shoes-2.jpg";
import img6 from "../../Assets/Imgs/Products/watch-3.jpg";
import imgHover6 from "../../Assets/Imgs/Products/watch-2.jpg";
import img7 from "../../Assets/Imgs/Products/watch-1.jpg";
import imgHover7 from "../../Assets/Imgs/Products/watch-4.jpg";
import img8 from "../../Assets/Imgs/Products/party-wear-1.jpg";
import imgHover8 from "../../Assets/Imgs/Products/shoes-4.jpg";
import img9 from "../../Assets/Imgs/Products/jacket-1.jpg";
import imgHover9 from "../../Assets/Imgs/Products/jacket-6.jpg";
import img10 from "../../Assets/Imgs/Products/shoes-5.jpg";
import imgHover10 from "../../Assets/Imgs/Products/shoes-6.jpg";
import img11 from "../../Assets/Imgs/Products/shoes-7.jpg";
import imgHover11 from "../../Assets/Imgs/Products/shoes-8.jpg";
import img12 from "../../Assets/Imgs/Products/shorts-1.jpg";
import imgHover12 from "../../Assets/Imgs/Products/shorts-2.jpg";

import "./NewProducts.scss";
import { products } from "../../Assets/data/products";

const NewProducts = () => {
  return (
    <section className="new-products lg:col-span-9 col-span-12">
      <p className="m-auto text-xl font-semibold">New Products</p>
      <hr className="mb-5 mt-2 m-auto bg-main-white" />
      <div className="new-products-container">
        {products[3].map((product, i) => {
          return (
            <NewProdItem
              key={i}
              id={product.id}
              imgUrl={product.imgUrl}
              imgHover={product.imgHover}
              category={product.category}
              title={product.title}
              price={product.price}
              disCount={product.disCount}
              badge={product.badge}
            />
          );
        })}
      </div>
    </section>
  );
};

export default NewProducts;
