import React from "react";
import imgSide1 from "../../Assets/Imgs/Products/dress.svg";
import imgSide2 from "../../Assets/Imgs/Products/shoes.svg";
import imgSide3 from "../../Assets/Imgs/Products/jewelry.svg";
import imgSide4 from "../../Assets/Imgs/Products/perfume.svg";
import imgSide5 from "../../Assets/Imgs/Products/cosmetics.svg";
import imgSide6 from "../../Assets/Imgs/Products/glasses.svg";
import imgSide7 from "../../Assets/Imgs/Products/smart-watch-cartoon_78370-592.avif";

import SideBarItem from "../SideBarItem/SideBarItem";
import BestSellers from "../BestSellers/BestSellers";
import "./SideBar.scss";

const SideBar = ({ bestSeller }) => {
  const SideBarItems = [
    {
      title: "Clothes",
      imgUrl: imgSide1,
      content: [
        { product: "Men'S", count: "6", Url: "/categories/Clothes/Men" },
        { product: "Women'S", count: "2", Url: "/categories/Clothes/Women" },
        { product: "Belt", count: "1", Url: "/categories/Clothes/Belt" },
        { product: "Hat", count: "1", Url: "/categories/Clothes/Hat" },
      ],
    },
    {
      title: "Footwear",
      imgUrl: imgSide2,
      content: [
        { product: "Sports", count: "3", Url: "/categories/Footwear/Sports" },
        { product: "Formal", count: "3", Url: "/categories/Footwear/Formal" },
        { product: "Casual", count: "3", Url: "/categories/Footwear/Casual" },
      ],
    },
    {
      title: "Jewellery",
      imgUrl: imgSide3,
      content: [
        {
          product: "Earrings",
          count: "1",
          Url: "/categories/Jewellery/Earrings",
        },
        {
          product: "Couple Rings",
          count: "1",
          Url: "/categories/Jewellery/Couple Rings",
        },
        {
          product: "Necklace",
          count: "1",
          Url: "/categories/Jewellery/Necklace",
        },
      ],
    },
    {
      title: "Perfume",
      imgUrl: imgSide4,
      content: [
        { product: "Titan", count: "1", Url: "/categories/Perfume/Titan" },
      ],
    },
    {
      title: "Cosmetics",
      imgUrl: imgSide5,
      content: [
        {
          product: "Shampoo",
          count: "1",
          Url: "/categories/Cosmetics/Shampoo",
        },
      ],
    },
    {
      title: "Glasses",
      imgUrl: imgSide6,
      content: [
        {
          product: "SunGlasses",
          count: "1",
          Url: "/categories/Glasses/SunGlasses",
        },
      ],
    },
    {
      title: "Watches",
      imgUrl: imgSide7,
      content: [
        { product: "Smart", count: "1", Url: "/categories/Watches/Smart" },
        { product: "Pocket", count: "1", Url: "/categories/Watches/Pocket" },
      ],
    },
  ];

  return (
    <section className="side">
      <aside className="side-bar">
        <p className="text-lg font-semibold">CATEGORY</p>
        {SideBarItems.map((item, i) => {
          return (
            <SideBarItem
              key={i}
              title={item.title}
              imgUrl={item.imgUrl}
              content={item.content}
            />
          );
        })}
      </aside>
      {bestSeller ? <BestSellers /> : null}
    </section>
  );
};

export default SideBar;
