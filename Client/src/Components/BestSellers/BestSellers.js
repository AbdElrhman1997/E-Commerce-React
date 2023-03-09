import React from "react";
import img1 from "../../Assets/Imgs/Products/1.jpg";
import img2 from "../../Assets/Imgs/Products/2.jpg";
import img3 from "../../Assets/Imgs/Products/3.jpg";
import img4 from "../../Assets/Imgs/Products/4.jpg";
import { ImStarFull, ImStarHalf } from "react-icons/im";
import "./BestSellers.scss";

const BestSellers = () => {
  return (
    <section className="best-sellers mt-6">
      <p className="text-md tracking-wider uppercase mb-4 font-semibold">
        Best Sellers
      </p>
      <div className="flex my-4">
        <img src={img1} className="mr-4" />
        <div>
          <p>Baby Fabric Shoes</p>
          <p className="flex my-2 text-amber-400">
            <ImStarFull />
            <ImStarFull />
            <ImStarFull />
            <ImStarFull />
            <ImStarFull />
          </p>
          <div>
            <span className=" line-through text-main-text">$50.00</span>
            <span className="font-semibold ml-3">$35.00</span>
          </div>
        </div>
      </div>
      <div className="flex my-4">
        <img src={img2} className="mr-4" />
        <div>
          <p>Men's Hoodies T-Shirt</p>
          <p className="flex my-2 text-amber-400">
            <ImStarFull />
            <ImStarFull />
            <ImStarFull />
            <ImStarFull />
            <ImStarHalf />
          </p>
          <div>
            <span className=" line-through text-main-text">$30.00</span>
            <span className="font-semibold ml-3">$20.00</span>
          </div>
        </div>
      </div>
      <div className="flex my-4">
        <img src={img3} className="mr-4" />
        <div>
          <p>Girls T-Shirt</p>
          <p className="flex my-2 text-amber-400">
            <ImStarFull />
            <ImStarFull />
            <ImStarFull />
            <ImStarFull />
            <ImStarHalf />
          </p>
          <div>
            <span className=" line-through text-main-text">$20.00</span>
            <span className="font-semibold ml-3">$15.00</span>
          </div>
        </div>
      </div>
      <div className="flex my-4">
        <img src={img4} className="mr-4" />
        <div>
          <p>Woolen Hat For Men</p>
          <p className="flex my-2 text-amber-400">
            <ImStarFull />
            <ImStarFull />
            <ImStarFull />
            <ImStarFull />
            <ImStarFull />
          </p>
          <div>
            <span className=" line-through text-main-text">$15.00</span>
            <span className="font-semibold ml-3">$12.00</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
