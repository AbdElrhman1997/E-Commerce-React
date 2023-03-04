import React from "react";
import "./MainNav.scss";

const MainNav = () => {
  return (
    <nav className="main-nav lg:block hidden">
      <ul>
        <li className="">Home</li>
        <li>CATEGORIES</li>
        <li>MEN'S</li>
        <li>WOMEN'S</li>
        <li>JEWELRY</li>
        <li>PERFUME</li>
        <li>BLOG</li>
        <li>HOT OFFERS</li>
      </ul>
    </nav>
  );
};

export default MainNav;
