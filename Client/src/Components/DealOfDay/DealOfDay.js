import React from "react";
import img1 from "../../Assets/Imgs/Products/shampoo.jpg";

import { ImStarFull, ImStarHalf } from "react-icons/im";

import "./DealOfDay.scss";

const DealOfDay = () => {
  return (
    <section className="deal-of-day grid grid-cols-9">
      <p className="text-xl font-semibold col-span-9 text-left">
        Deal Of The Day
      </p>
      <hr className="mb-5 mt-2 bg-main-white col-span-9" />
      <div className="deal-item lg:flex col-span-9">
        <img src={img1} className="lg:w-1/2 w-full" />
        <div className="deal-content">
          <div className="flex my-3 text-amber-400">
            <ImStarFull />
            <ImStarFull />
            <ImStarFull />
            <ImStarFull />
            <ImStarFull />
          </div>
          <p className=" font-bold">SHAMPOO, CONDITIONER & FACEWASH PACKS</p>
          <p className=" text-main-text font-light">
            Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor dolor sit
            amet consectetur Lorem ipsum dolor
          </p>
          <div className="my-3">
            <span className="font-bold text-main text-2xl">$150.00</span>
            <span className=" line-through text-main-text text-2xl ml-3 ">
              $200.00
            </span>
          </div>
          <a
            href="#"
            class=" inline-block uppercase bg-main text-white no-underline hover:bg-blue-800 lg:mt-2 p-2 rounded"
          >
            Add to cart
          </a>
          <div className="flex justify-between text-sm mt-4 mb-2">
            <p>
              ALREADY SOLD: <span className="font-bold text-sm">20</span>
            </p>
            <p>
              AVAILABLE: <span className="font-bold text-sm">40</span>
            </p>
          </div>
          <div className="out-bar">
            <div className="inner-bar"></div>
          </div>
          <p className="font-semibold mt-4">HURRY UP! OFFER ENDS IN:</p>
          <div className="deal-date flex">
            <div className="days">
              <p>23</p>
              <p>Days</p>
            </div>
            <div className="hours">
              <p>10</p>
              <p>Hours</p>
            </div>
            <div className="minutes">
              <p>40</p>
              <p>Min</p>
            </div>
            <div className="seconds">
              <p>33</p>
              <p>Sec</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DealOfDay;
