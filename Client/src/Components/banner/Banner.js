import React, { Fragment } from "react";
import bannerImg from "../../Assets/Imgs/banner-1.jpg";
import "./Banner.scss";

function Banner() {
  return (
    <section class="banner px-8 mt-8 lg:mt-0">
      <div class="z-20 lg:px-16 md:px-10 sm:px-7">
        <h1 class="text-main">Trending Item</h1>
        <p class=" leading-tight font-bold lg:w-1/3 md:w-2/5 my-4">
          WOMEN'S LATEST FASHION SALE
        </p>
        <p class="leading-normal">
          starting at $ <span>20</span>.00
        </p>
        <a
          href="#"
          class="inline-block bg-main text-white no-underline hover:bg-blue-800 mt-4 p-2 rounded"
        >
          SHOP NOW
        </a>
      </div>
      {/* <div class="absolute px-10 inset-0 h-auto z-10">
        <img src={bannerImg} alt="" class="banner-img" />
      </div> */}
    </section>
  );
}

export default Banner;
