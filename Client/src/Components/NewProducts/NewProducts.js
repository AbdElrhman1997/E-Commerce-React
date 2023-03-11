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

const NewProducts = () => {
  return (
    <section className="new-products lg:col-span-9 col-span-12">
      <p className="m-auto text-xl font-semibold">New Products</p>
      <hr className="mb-5 mt-2 m-auto bg-main-white" />
      <div className="new-products-container">
        <NewProdItem
          imgUrl={img1}
          imgHover={imgHover1}
          category="JACKET"
          desc="Mens Winter Leathers Jackets"
          price="50"
          disCount="75"
          badge={false}
        />
        <NewProdItem
          imgUrl={img2}
          imgHover={imgHover2}
          category="JACKET"
          desc="Mens Winter Leathers Jackets"
          price="50"
          disCount="30"
          badge={false}
        />
        <NewProdItem
          imgUrl={img3}
          imgHover={imgHover3}
          category="JACKET"
          desc="Mens Winter Leathers Jackets"
          price="50"
          disCount="30"
          badge={false}
        />
        <NewProdItem
          imgUrl={img4}
          imgHover={imgHover4}
          category="JACKET"
          desc="Mens Winter Leathers Jackets"
          price="50"
          disCount="30"
          badge={true}
        />
        <NewProdItem
          imgUrl={img5}
          imgHover={imgHover5}
          category="JACKET"
          desc="Mens Winter Leathers Jackets"
          price="50"
          disCount="30"
          badge={false}
        />
        <NewProdItem
          imgUrl={img6}
          imgHover={imgHover6}
          category="JACKET"
          desc="Mens Winter Leathers Jackets"
          price="50"
          disCount="30"
          badge={false}
        />
        <NewProdItem
          imgUrl={img7}
          imgHover={imgHover7}
          category="JACKET"
          desc="Mens Winter Leathers Jackets"
          price="50"
          disCount="30"
          badge={true}
        />
        <NewProdItem
          imgUrl={img8}
          imgHover={imgHover8}
          category="JACKET"
          desc="Mens Winter Leathers Jackets"
          price="50"
          disCount="30"
          badge={false}
        />
        <NewProdItem
          imgUrl={img9}
          imgHover={imgHover9}
          category="JACKET"
          desc="Mens Winter Leathers Jackets"
          price="50"
          disCount="30"
          badge={false}
        />
        <NewProdItem
          imgUrl={img10}
          imgHover={imgHover10}
          category="JACKET"
          desc="Mens Winter Leathers Jackets"
          price="50"
          disCount="30"
          badge={true}
        />
        <NewProdItem
          imgUrl={img11}
          imgHover={imgHover11}
          category="JACKET"
          desc="Mens Winter Leathers Jackets"
          price="50"
          disCount="30"
          badge={false}
        />
        <NewProdItem
          imgUrl={img12}
          imgHover={imgHover12}
          category="JACKET"
          desc="Mens Winter Leathers Jackets"
          price="50"
          disCount="30"
          badge={false}
        />
      </div>
    </section>
  );
};

export default NewProducts;
