import React from "react";
import CarouselItem from "../CarouselItem/CarouselItem";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import SwiperCore, { Keyboard, Mousewheel } from "swiper/core";
import ctgItem1 from "../../Assets/Imgs/Carousel1.svg";
import ctgItem2 from "../../Assets/Imgs/Carousel2.svg";
import ctgItem3 from "../../Assets/Imgs/Carousel3.svg";
import ctgItem4 from "../../Assets/Imgs/Carousel4.svg";
import ctgItem5 from "../../Assets/Imgs/Carousel5.svg";
import ctgItem6 from "../../Assets/Imgs/Carousel6.svg";
import ctgItem7 from "../../Assets/Imgs/Carousel7.svg";
import ctgItem8 from "../../Assets/Imgs/Carousel8.svg";

import { Navigation, Scrollbar, A11y, EffectFade, Grid } from "swiper";

import "swiper/scss";
import "swiper/css/bundle";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/scrollbar";
import "swiper/scss/grid";
import "./Carousel.scss";

const Carousel = () => {
  const swiper = useSwiper();
  SwiperCore.use([Keyboard, Mousewheel]);
  const slides = [
    { imgUrl: ctgItem1, title: "DRESS & FROCK", count: 53 },
    { imgUrl: ctgItem2, title: "WINTER WEAR", count: 58 },
    { imgUrl: ctgItem3, title: "GLASSES & LENS", count: 68 },
    { imgUrl: ctgItem4, title: "SHORTS & JEANS", count: 74 },
    { imgUrl: ctgItem5, title: "T-SHIRTS", count: 29 },
    { imgUrl: ctgItem6, title: "JACKET", count: 35 },
    { imgUrl: ctgItem7, title: "WATCH", count: 20 },
    { imgUrl: ctgItem8, title: "HAT & CAPS", count: 15 },
  ];

  //   const handleMouseWheel=( function (e) {
  //     if (e.deltaY>0) {
  //         owl.trigger('next.owl');
  //     } else {
  //         owl.trigger('prev.owl');
  //     }
  //     e.preventDefault();
  // });
  document.body.addEventListener("keydown", (event) => {
    const owl = document.querySelector(".owl-theme");
    console.log(event.keyCode);
    if (event.key === 37) {
      owl.trigger("prev.owl.carousel");
    } else if (event.key === 39) {
      owl.trigger("next.owl.carousel", [300]);
    }
  });

  return (
    <section
      className="category container"
      onMouseEnter={() => {
        console.log("first");
      }}
    >
      <Swiper
        // install Swiper modules
        className="Swiper text-center"
        modules={[Navigation, Scrollbar, A11y, EffectFade, Grid]}
        breakpoints={{
          // when window width is >= 640px
          640: {
            width: 540,
            slidesPerView: 1,
          },
          // when window width is >= 768px

          768: {
            width: 768,
            slidesPerView: 2,
          },

          1024: {
            width: 1024,
            slidesPerView: 3,
          },
        }}
        spaceBetween={40}
        keyboard={true}
        mousewheel={true}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        grabCursor={false}
        speed={200}
        navigation={true}
        // onMouseEnter={() => {
        //   this.scrollbar.hide = false;
        // }}
      >
        <button onClick={() => swiper.slidePrev()}></button>
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <CarouselItem
              imgUrl={slide.imgUrl}
              title={slide.title}
              count={slide.count}
            />
          </SwiperSlide>
        ))}
        <button onClick={() => swiper.slideNext()}></button>
      </Swiper>
    </section>
  );
};

export default Carousel;
