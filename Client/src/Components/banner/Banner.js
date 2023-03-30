import React from "react";
import bannerImg1 from "../../Assets/Imgs/banner-1.jpg";
import bannerImg2 from "../../Assets/Imgs/banner-2.jpg";
import bannerImg3 from "../../Assets/Imgs/banner-3.jpg";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./Banner.scss";

function Banner() {
  return (
    <section class="banner px-8 mt-8 lg:mt-0">
      <OwlCarousel
        className="owl-carousel owl-theme owl-loaded"
        margin={20}
        items={1}
      >
        <div className="banner-item">
          <img src={bannerImg2} className=" lg:h-96 h-full" />
          <div className="banner-content">
            <h1 class="text-main text-3xl">Trending Accessories</h1>
            <p class=" leading-tight font-bold lg:w-2/3 md:w-2/5 w-2/3 lg:my-4 text-5xl">
              MODERN SUNGLASSES
            </p>
            <p class="leading-normal text-xl">
              starting at $ <span>15</span>.00
            </p>
            <a
              href="#"
              class=" inline-block bg-main text-white no-underline hover:bg-blue-800 lg:mt-2 p-2 rounded"
            >
              SHOP NOW
            </a>
          </div>
        </div>
        <div className="banner-item">
          <img src={bannerImg1} className=" lg:h-96 h-full" />
          <div className="banner-content">
            <h1 class="text-main text-3xl">Trending Item</h1>
            <p class=" leading-tight font-bold lg:w-2/3 md:w-2/5 w-2/3 lg:my-4 text-5xl">
              WOMEN'S LATEST FASHION SALE
            </p>
            <p class="leading-normal text-xl">
              starting at $ <span>20</span>.00
            </p>
            <a
              className=" inline-block bg-main text-white no-underline hover:bg-blue-800 lg:mt-2 p-2 rounded"
              href="#"
            >
              SHOP NOW
            </a>
          </div>
        </div>
        <div className="banner-item">
          <img src={bannerImg3} className=" lg:h-96 h-full" />
          <div className="banner-content">
            <h1 class="text-main text-3xl">Sale Offer</h1>
            <p class=" leading-tight font-bold lg:w-2/3 md:w-2/5 w-2/3 lg:my-4 text-5xl">
              NEW FASHION SUMMER SALE
            </p>
            <p class="leading-normal text-xl">
              starting at $ <span>29</span>.99
            </p>
            <a
              href="#"
              class=" inline-block bg-main text-white no-underline hover:bg-blue-800 lg:mt-2 p-2 rounded"
            >
              SHOP NOW
            </a>
          </div>
        </div>
      </OwlCarousel>
      {/* <div class="absolute px-10 inset-0 h-auto z-10">
        <img src={bannerImg} alt="" class="banner-img" />
      </div> */}
    </section>
  );
}

export default Banner;
