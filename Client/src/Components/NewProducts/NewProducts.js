import React from "react";
import NewProdItem from "../NewProdItem/NewProdItem";
import img1 from "../../Assets/Imgs/Products/jacket-3.jpg";
import img2 from "../../Assets/Imgs/Products/shirt-1.jpg";
import img3 from "../../Assets/Imgs/Products/jacket-5.jpg";
import img4 from "../../Assets/Imgs/Products/clothes-3.jpg";
import img5 from "../../Assets/Imgs/Products/shoes-1.jpg";
import img6 from "../../Assets/Imgs/Products/watch-3.jpg";
import img7 from "../../Assets/Imgs/Products/watch-1.jpg";
import img8 from "../../Assets/Imgs/Products/party-wear-1.jpg";
import img9 from "../../Assets/Imgs/Products/jacket-1.jpg";
import img10 from "../../Assets/Imgs/Products/shoes-5.jpg";
import img11 from "../../Assets/Imgs/Products/shoes-7.jpg";
import img12 from "../../Assets/Imgs/Products/shorts-1.jpg";

import "./NewProducts.scss";

const NewProducts = () => {
  return (
    <section className="new-products lg:col-span-9 col-span-12">
      <p className="m-auto text-xl font-semibold">New Products</p>
      <hr className="mb-5 mt-2 m-auto" />
      <div className="new-products-container">
        <NewProdItem
          imgUrl={img1}
          category="JACKET"
          desc="Mens Winter Leathers Jackets"
          price="50"
          disCount="75"
        />
        <NewProdItem
          imgUrl={img2}
          category="JACKET"
          desc="Mens Winter Leathers Jackets"
          price="50"
          disCount="30"
        />
        <NewProdItem
          imgUrl={img3}
          category="JACKET"
          desc="Mens Winter Leathers Jackets"
          price="50"
          disCount="30"
        />
        <NewProdItem
          imgUrl={img4}
          category="JACKET"
          desc="Mens Winter Leathers Jackets"
          price="50"
          disCount="30"
        />
        <NewProdItem
          imgUrl={img5}
          category="JACKET"
          desc="Mens Winter Leathers Jackets"
          price="50"
          disCount="30"
        />
        <NewProdItem
          imgUrl={img6}
          category="JACKET"
          desc="Mens Winter Leathers Jackets"
          price="50"
          disCount="30"
        />
        <NewProdItem
          imgUrl={img7}
          category="JACKET"
          desc="Mens Winter Leathers Jackets"
          price="50"
          disCount="30"
        />
        <NewProdItem
          imgUrl={img8}
          category="JACKET"
          desc="Mens Winter Leathers Jackets"
          price="50"
          disCount="30"
        />
        <NewProdItem
          imgUrl={img9}
          category="JACKET"
          desc="Mens Winter Leathers Jackets"
          price="50"
          disCount="30"
        />
        <NewProdItem
          imgUrl={img10}
          category="JACKET"
          desc="Mens Winter Leathers Jackets"
          price="50"
          disCount="30"
        />
        <NewProdItem
          imgUrl={img11}
          category="JACKET"
          desc="Mens Winter Leathers Jackets"
          price="50"
          disCount="30"
        />
        <NewProdItem
          imgUrl={img12}
          category="JACKET"
          desc="Mens Winter Leathers Jackets"
          price="50"
          disCount="30"
        />
      </div>
    </section>
  );
};

export default NewProducts;
