import React from "react";
import "./App.scss";
import Banner from "./Components/banner/Banner";
import MainHeader from "./Components/MainHeader/MainHeader";
import MainNav from "./Components/MainNav/MainNav";
import TopHeader from "./Components/TopHeader/TopHeader";
import MobileNav from "./Components/MoblieNav/MobileNav";
import Carousel from "./Components/Carousel/Carousel";
import CarouselItem from "./Components/CarouselItem/CarouselItem";
function App() {
  return (
    <main>
      <TopHeader />
      <MainHeader />
      <MainNav />
      <Banner />
      <MobileNav />
      <Carousel />
    </main>
  );
}

export default App;
