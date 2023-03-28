import React from "react";
import "./App.css";
import Banner from "./Components/banner/Banner";
import MainHeader from "./Components/MainHeader/MainHeader";
import MainNav from "./Components/MainNav/MainNav";
import TopHeader from "./Components/TopHeader/TopHeader";
import MobileNav from "./Components/MoblieNav/MobileNav";
import Carousel from "./Components/Carousel/Carousel";
import Products from "./Components/Products/Products";
import SummerContainer from "./Components/SummerContainer/SummerContainer";
import Footer from "./Components/Footer/Footer";
import MobileSideBar from "./Components/MobileSideBar/MobileSideBar";
import Overlay from "./Components/Overlay/Overlay";
import { ToastContainer } from "react-toastify";
import MobileHeader from "./Components/MobileHeader/MobileHeader";
function App() {
  return (
    <main>
      <MobileSideBar />
      <MobileHeader />
      <ToastContainer />
      <Overlay />
      <TopHeader />
      <MainHeader />
      <MainNav />
      <Banner />
      <MobileNav />
      <Carousel />
      <Products />
      <SummerContainer />
      <Footer />
    </main>
  );
}

export default App;
