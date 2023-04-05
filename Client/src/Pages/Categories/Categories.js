import React, { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import MainHeader from "../../Components/MainHeader/MainHeader";
import MainNav from "../../Components/MainNav/MainNav";
import SideBar from "../../Components/SideBar/SideBar";
import TopHeader from "../../Components/TopHeader/TopHeader";
import MobileNav from "../../Components/MoblieNav/MobileNav";
import MobileSideBar from "../../Components/MobileSideBar/MobileSideBar";
import MobileHeader from "../../Components/MobileHeader/MobileHeader";
import Footer from "../../Components/Footer/Footer";
import Overlay from "../../Components/Overlay/Overlay";
import { products } from "../../Assets/data/products";
import "./Categories.scss";
import { ToastContainer } from "react-toastify";
import Carousel from "../../Components/Carousel/Carousel";
const Categories = () => {
  const { ctg, supCtg } = useParams();
  const [catProducts, setCatProducts] = useState([]);
  useEffect(() => {
    if (ctg && supCtg) {
      const catPrd = products.map((p) =>
        p.filter((prd) => {
          return prd.category === ctg && prd.supCtg === supCtg;
        })
      );
      setCatProducts(catPrd);
    } else if (ctg) {
      const catPrd = products.map((p) =>
        p.filter((prd) => {
          return prd.category === ctg;
        })
      );
      setCatProducts(catPrd);
    }
  }, []);
  return (
    <section className="categories">
      <ToastContainer />
      <TopHeader />
      <MainHeader />
      <MainNav />
      <Carousel />
      <MobileNav />
      <MobileSideBar />
      <MobileHeader />
      <Overlay />
      <div className="grid grid-cols-12">
        <div className="side-container lg:col-span-3 lg:block hidden mb-36">
          <SideBar bestSeller={false} />
        </div>
        <section className="new-products lg:col-span-9 col-span-12">
          <div className="new-products-container">
            {catProducts &&
              catProducts.map((group, i) => {
                return (
                  group &&
                  group.map((product, i) => {
                    return <Outlet context={[product]} />;
                  })
                );
              })}
          </div>
        </section>
      </div>
      <Footer />
    </section>
  );
};

export default Categories;
