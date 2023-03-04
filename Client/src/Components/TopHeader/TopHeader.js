import React from "react";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import "./TopHeader.scss";

function TopHeader() {
  return (
    <header className="sm:block hidden" id="top-header">
      <div className="container mx-auto">
        <div className="icons lg:flex md:flex hidden">
          <FaFacebook className="text-lg mx-2 text-main-text hover:text-main cursor-pointer" />
          <FaLinkedin className="text-lg mx-2 text-main-text hover:text-main cursor-pointer" />
          <FaGithub className="text-lg mx-2 text-main-text hover:text-main cursor-pointer" />
        </div>
        <p className=" text-sm text-main-text">
          FREE SHIPPING THIS WEEK ORDER OVER - $55
        </p>
        <div>
          <select className="text-main-text">
            <option value="">USD$</option>
            <option value="">EUR &euro;</option>
          </select>
          <select className="text-main-text">
            <option value="">English</option>
          </select>
        </div>
      </div>
    </header>
  );
}

export default TopHeader;
