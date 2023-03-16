import React, { useState } from "react";
import imgSide1 from "../../Assets/Imgs/Products/dress.svg";
import imgSide2 from "../../Assets/Imgs/Products/shoes.svg";
import imgSide3 from "../../Assets/Imgs/Products/jewelry.svg";
import imgSide4 from "../../Assets/Imgs/Products/perfume.svg";
import imgSide5 from "../../Assets/Imgs/Products/cosmetics.svg";
import imgSide6 from "../../Assets/Imgs/Products/glasses.svg";
import imgSide7 from "../../Assets/Imgs/Products/bag.svg";
import SideBarItem from "../SideBarItem/SideBarItem";
import "./MobileSideBar.scss";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { toggleSideBar } from "../../Store/SideBarSlice";
import { AiOutlineClose } from "react-icons/ai";
import { IoMdArrowDropleft, IoMdArrowDropdown } from "react-icons/io";
import { TbWorld } from "react-icons/tb";

import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const MobileSideBar = () => {
  const dispatch = useDispatch();
  const globalState = useSelector((state) => state);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isCurnOpen, setIsCurnOpen] = useState(false);

  return (
    <section
      className={`mobile-sideBar lg:hidden ${
        globalState.SideBar.isOpen ? `fade-in` : `fade-out`
      }`}
    >
      <aside className="side-bar">
        <div className="side-head mb-8">
          <div>
            <div className="text-lg text-main font-semibold">Menu</div>
          </div>
          <div
            onClick={() => {
              dispatch(toggleSideBar());
            }}
          >
            <AiOutlineClose className=" cursor-pointer" />
          </div>
        </div>

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
        <div className="lang">
          <div className="catgory-head">
            <div>
              <div className="text-main-text font-semibold">Language</div>
            </div>
            {isLangOpen ? (
              <IoMdArrowDropdown
                className="text-3xl"
                onClick={() => setIsLangOpen(!isLangOpen)}
              />
            ) : (
              <IoMdArrowDropleft
                className="text-3xl"
                onClick={() => setIsLangOpen(!isLangOpen)}
              />
            )}
          </div>
          <ul className={`dropdown ${isLangOpen ? "fadeDown" : "fadeUp"}`}>
            <li>Arabic</li>
            <li>English</li>
          </ul>
        </div>
        <div className="currency">
          <div className="catgory-head">
            <div>
              <div className="text-main-text font-semibold">Currency</div>
            </div>
            {isCurnOpen ? (
              <IoMdArrowDropdown
                className="text-3xl"
                onClick={() => setIsCurnOpen(!isCurnOpen)}
              />
            ) : (
              <IoMdArrowDropleft
                className="text-3xl"
                onClick={() => setIsCurnOpen(!isCurnOpen)}
              />
            )}
          </div>
          <ul className={isCurnOpen ? "dropdown fadeDown" : "dropdown fadeUp"}>
            <li>USD $</li>
            <li>EUR €</li>
          </ul>
        </div>

        <div className="icons">
          <a href="" target="_blank">
            <FaFacebook />
          </a>
          <a
            href="https://www.linkedin.com/in/abdelrhman-mohamed-73215022a/"
            target="_blank"
          >
            <FaLinkedinIn />
          </a>
          <a href="github.com/AbdElrhman1997" target="_blank">
            <FaGithub />
          </a>
          <a href="https://abdelrahmanm.com/" target="_blank">
            <TbWorld />
          </a>
        </div>
      </aside>
    </section>
  );
};

export default MobileSideBar;
