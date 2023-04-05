import React, { useState } from "react";
import "./MainNav.scss";

const MainNav = () => {
  const [isHover, setIsHover] = useState(false);
  return (
    <nav className="main-nav lg:block hidden">
      <ul className="nav-list">
        <li className="list-item">
          <p>
            <a href="/">Home</a>
          </p>
        </li>
        <li className="list-item">
          <p>CATEGORIES</p>
          <div className="hover-ctg text-main-text">
            <ul>
              <li>
                <a href="/categories/Clothes/Men">Men'S</a>
              </li>
              <li>
                <a href="/categories/Clothes/Women">Women'S</a>
              </li>
            </ul>
          </div>
        </li>
        <li className="list-item">
          <p>Men'S</p>
          <div className="hover-ctg text-main-text">
            <ul className="">
              <li>
                <a href="/categories/Clothes/Men">Clothes</a>
              </li>
              <li>
                <a href="/categories/Watches/Smart">Watches</a>
              </li>
              <li>
                <a href="/categories/Footwear/Formal">Footwear</a>
              </li>
              <li>
                <a href="/categories/Clothes/Belt">Belt</a>
              </li>
            </ul>
          </div>
        </li>
        <li className="list-item">
          <p>Women'S</p>
          <div className="hover-ctg text-main-text">
            <ul>
              <li>
                <a href="/categories/Clothes/Women">Clothes</a>
              </li>
              <li>
                <a href="/categories/Jewellery/Earrings">Earrings</a>
              </li>
              <li>
                <a href="/categories/Jewellery/Couple Rings">Couple Rings</a>
              </li>
              <li>
                <a href="/categories/Jewellery/Necklace">Necklace</a>
              </li>
            </ul>
          </div>
        </li>
        <li className="list-item">
          <p>Accessories</p>
          <div className="hover-ctg text-main-text">
            <ul>
              <li>
                <a href="/categories/Jewellery">Jewellery</a>
              </li>
              <li>
                <a href="/categories/Watches">Watches</a>
              </li>
              <li>
                <a href="/categories/Clothes/Belt">Belts</a>
              </li>
              <li>
                <a href="/categories/Clothes/Hat">Hats</a>
              </li>
            </ul>
          </div>
        </li>
        <li className="list-item">
          <p>Perfume</p>
          <div className="hover-ctg text-main-text">
            <ul>
              <li>
                <a href="/categories/Perfume/Titan">Titan</a>
              </li>
            </ul>
          </div>
        </li>
        <li className="list-item">
          <p>Hot Offers</p>
          <div className="hover-ctg text-main-text">
            <ul>
              <li>
                <a href="/categories/Cosmetics/Shampoo">Shampoo</a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default MainNav;
