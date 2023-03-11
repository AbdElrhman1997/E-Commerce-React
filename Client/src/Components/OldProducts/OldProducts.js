import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import { products } from "../../Assets/data/products";
import SwiperCore, { Keyboard, Mousewheel } from "swiper/core";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Scrollbar, A11y, EffectFade, Grid } from "swiper";

import "./OldProducts.scss";

const OldProducts = () => {
  const swiper = useSwiper();
  SwiperCore.use([Keyboard, Mousewheel]);

  return (
    <section className="old-products grid grid-cols-9">
      <div className="lg:col-span-3 md:col-span-4 sm:col-span-9 col-span-9">
        <p className="w-4/5 m-auto text-xl font-semibold">New Arrivals</p>
        <hr className="mb-5 mt-2 w-4/5 m-auto bg-main-white" />
        <Swiper
          className="Swiper text-center"
          modules={[Navigation, Scrollbar, A11y, EffectFade, Grid]}
          spaceBetween={40}
          slidesPerView={1}
          grid={{
            rows: 4,
            fill: "row",
          }}
          keyboard={true}
          mousewheel={true}
          scrollbar={{ draggable: false }}
          grabCursor={false}
          speed={200}
          navigation={true}
        >
          <button onClick={() => swiper.slidePrev()}></button>
          {products[0].group1.map((product, i) => {
            return (
              <SwiperSlide key={i}>
                <ProductCard
                  imgUrl={product.imgUrl}
                  title={product.title}
                  category={product.category}
                  price={product.price}
                  disPrice={product.disPrice}
                />
              </SwiperSlide>
            );
          })}
          <button onClick={() => swiper.slideNext()}></button>
        </Swiper>
      </div>
      <div className="lg:col-span-3 md:col-span-4 sm:col-span-9 col-span-9">
        <p className="w-4/5 m-auto text-xl font-semibold">Trending</p>
        <hr className="mb-5 mt-2 w-4/5 m-auto bg-main-white" />
        <Swiper
          className="Swiper text-center"
          modules={[Navigation, Scrollbar, A11y, EffectFade, Grid]}
          spaceBetween={40}
          slidesPerView={1}
          grid={{
            rows: 4,
            fill: "row",
          }}
          keyboard={true}
          mousewheel={true}
          scrollbar={{ draggable: true }}
          grabCursor={false}
          speed={200}
          navigation={true}
        >
          <button onClick={() => swiper.slidePrev()}></button>
          {products[1].group2.map((product, i) => {
            return (
              <SwiperSlide key={i}>
                <ProductCard
                  imgUrl={product.imgUrl}
                  title={product.title}
                  category={product.category}
                  price={product.price}
                  disPrice={product.disPrice}
                />
              </SwiperSlide>
            );
          })}
          <button onClick={() => swiper.slideNext()}></button>
        </Swiper>
      </div>
      <div className="lg:col-span-3 md:col-span-4 sm:col-span-9 col-span-9">
        <p className="w-4/5 m-auto text-xl font-semibold ">Top Rated</p>
        <hr className="mb-5 mt-2 w-4/5 m-auto bg-main-white" />
        <Swiper
          className="Swiper text-center"
          modules={[Navigation, Scrollbar, A11y, EffectFade, Grid]}
          spaceBetween={40}
          slidesPerView={1}
          grid={{
            rows: 4,
            fill: "row",
          }}
          keyboard={true}
          mousewheel={true}
          scrollbar={{ draggable: true }}
          grabCursor={false}
          speed={200}
          navigation={true}
        >
          <button onClick={() => swiper.slidePrev()}></button>
          {products[2].group3.map((product, i) => {
            return (
              <SwiperSlide key={i}>
                <ProductCard
                  imgUrl={product.imgUrl}
                  title={product.title}
                  category={product.category}
                  price={product.price}
                  disPrice={product.disPrice}
                />
              </SwiperSlide>
            );
          })}
          <button onClick={() => swiper.slideNext()}></button>
        </Swiper>
      </div>
    </section>
  );
};

export default OldProducts;
