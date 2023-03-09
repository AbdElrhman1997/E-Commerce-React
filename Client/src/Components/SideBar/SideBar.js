import React from "react";
import imgSide1 from "../../Assets/Imgs/Products/dress.svg";
import imgSide2 from "../../Assets/Imgs/Products/shoes.svg";
import imgSide3 from "../../Assets/Imgs/Products/jewelry.svg";
import imgSide4 from "../../Assets/Imgs/Products/perfume.svg";
import imgSide5 from "../../Assets/Imgs/Products/cosmetics.svg";
import imgSide6 from "../../Assets/Imgs/Products/glasses.svg";
import imgSide7 from "../../Assets/Imgs/Products/bag.svg";
import SideBarItem from "../SideBarItem/SideBarItem";
import BestSellers from "../BestSellers/BestSellers";
import "./SideBar.scss";

const SideBar = () => {
  return (
    <section className="side">
      <aside className="side-bar">
        <p className="text-lg font-semibold">CATEGORY</p>
        <SideBarItem
          title="Clothes"
          imgUrl={imgSide1}
          content={[
            { product: "Shirt", count: "300" },
            { product: "Shorts & Jeans", count: "60" },
            { product: "Jacket & Jeans", count: "50" },
            { product: "Dress & Frock", count: "87" },
          ]}
        />
        <SideBarItem
          title="Footwear"
          imgUrl={imgSide2}
          content={[
            { product: "Sports", count: "45" },
            { product: "Formal", count: "75" },
            { product: "Casual", count: "35" },
            { product: "Safety Shoes", count: "26" },
          ]}
        />
        <SideBarItem
          title="jewelry"
          imgUrl={imgSide3}
          content={[
            { product: "Earrings", count: "46" },
            { product: "Couple Rings", count: "73" },
            { product: "Necklace", count: "50" },
          ]}
        />
        <SideBarItem
          title="Perfume"
          imgUrl={imgSide4}
          content={[
            { product: "Clothes Perfume", count: "12" },
            { product: "Deodorant", count: "60" },
            { product: "Jacket", count: "50" },
            { product: "Dress & Frock", count: "87" },
          ]}
        />
        <SideBarItem
          title="Cosmetics"
          imgUrl={imgSide5}
          content={[
            { product: "Shampoo", count: "30" },
            { product: "Sunscreen", count: "60" },
            { product: "Body Wash", count: "50" },
            { product: "Makeup Kit", count: "23" },
          ]}
        />
        <SideBarItem
          title="Glasses"
          imgUrl={imgSide6}
          content={[
            { product: "Sunglasses", count: "50" },
            { product: "Lenses", count: "37" },
          ]}
        />
        <SideBarItem
          title="Bags"
          imgUrl={imgSide7}
          content={[
            { product: "Shopping Bag", count: "62" },
            { product: "Gym Backpack", count: "85" },
            { product: "Purse", count: "50" },
            { product: "Wallet", count: "30" },
          ]}
        />
      </aside>
      <BestSellers />
    </section>
  );
};

export default SideBar;
