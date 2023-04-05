import React, { useEffect, useState } from "react";
import imgSide1 from "../../Assets/Imgs/Products/dress.svg";
import imgSide2 from "../../Assets/Imgs/Products/shoes.svg";
import imgSide3 from "../../Assets/Imgs/Products/jewelry.svg";
import imgSide4 from "../../Assets/Imgs/Products/perfume.svg";
import imgSide5 from "../../Assets/Imgs/Products/cosmetics.svg";
import imgSide6 from "../../Assets/Imgs/Products/glasses.svg";
import imgSide7 from "../../Assets/Imgs/Products/bag.svg";
import SideBarItem from "../SideBarItem/SideBarItem";
import "./MobileHeader.scss";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { toggleSideBar } from "../../Store/SideBarSlice";
import { AiOutlineClose } from "react-icons/ai";
import { IoMdArrowDropleft, IoMdArrowDropdown } from "react-icons/io";
import { TbWorld } from "react-icons/tb";
import { toggleHeaderMob } from "../../Store/HeaderSlice";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { isLoggedIn } from "../../Store/AuthSlice";
import { BsPerson } from "react-icons/bs";
import { BiLogIn } from "react-icons/bi";

const MobileHeader = () => {
  const dispatch = useDispatch();
  const globalState = useSelector((state) => state);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isCurnOpen, setIsCurnOpen] = useState(false);
  const golobalState = useSelector((state) => state);
  useEffect(() => {
    dispatch(isLoggedIn());
  }, []);

  const SideBarItems = [
    {
      title: "Home",
      content: [],
    },
    {
      title: "Men'S",
      content: [
        { product: "Clothes", count: "6", Url: "/categories/Clothes/Men" },
        { product: "Watches", count: "1", Url: "/categories/Watches/Smart" },
        { product: "Footwear", count: "3", Url: "/categories/Footwear/Formal" },
        { product: "Belt", count: "1", Url: "/categories/Clothes/Belt" },
      ],
    },
    {
      title: "Women'S",
      content: [
        {
          product: "Clothes",
          count: "4",
          Url: "/categories/Clothes/Women",
        },
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
      title: "Accessories",
      content: [
        { product: "Jewellery", count: "1", Url: "/categories/Jewellery" },
        { product: "Watches", count: "1", Url: "/categories/Watches" },
        { product: "Belts", count: "1", Url: "/categories/Clothes/Belt" },
        { product: "Hats", count: "1", Url: "/categories/Clothes/Hats" },
      ],
    },
    {
      title: "Perfume",
      content: [
        {
          product: "Titan",
          count: "1",
          Url: "/categories/Perfume/Titan",
        },
      ],
    },
    {
      title: "Hot Offers",
      content: [
        {
          product: "Shampoo",
          count: "1",
          Url: "/categories/Cosmetics/Shampoo",
        },
      ],
    },
  ];

  return (
    <section
      className={`mobile-sideBar lg:hidden ${
        globalState.HeaderMobile.isOpen ? `fade-in` : `fade-out`
      }`}
    >
      <aside className="side-bar">
        <div className="side-head mb-8">
          <div>
            <div className="text-lg text-main font-semibold">Menu</div>
          </div>
          <div
            onClick={() => {
              dispatch(toggleHeaderMob());
            }}
          >
            <AiOutlineClose className=" cursor-pointer" />
          </div>
        </div>
        {SideBarItems.map((item, i) => {
          return (
            <SideBarItem key={i} title={item.title} content={item.content} />
          );
        })}

        <button className="btn-side font-bold py-2 px-4 rounded mt-20 ">
          {golobalState.Auth.isLoggedIn ? (
            <div className="profile">
              <a href="/profile">
                <p>Profile</p>
                <BsPerson className="text-xl mx-2" />
              </a>
            </div>
          ) : (
            <div className="log-in" data-card={golobalState.Cart.count}>
              <a href="/login">
                <p>Sign In</p>
                <BiLogIn className="text-xl mx-2" />
              </a>
            </div>
          )}
        </button>
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

export default MobileHeader;

{
  /* <div className="lang">
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
        </div> */
}
{
  /* <div className="currency">
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
        </div> */
}
