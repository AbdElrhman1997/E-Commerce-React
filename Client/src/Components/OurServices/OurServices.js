import React from "react";
import { MdOutlineDirectionsBoat, MdOutlineRocketLaunch } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { TiArrowBackOutline } from "react-icons/ti";
import { GiMoneyStack } from "react-icons/gi";

import "./OurServices.scss";

const OurServices = () => {
  return (
    <section className="our-services w-1/2">
      <p className="m-auto text-lg font-semibold">Our Services</p>
      <hr className="mb-5 mt-2 m-auto bg-main-white" />
      <div className="lg:block flex">
        <div className="service lg:flex items-center m-auto">
          <MdOutlineDirectionsBoat className="text-4xl text-main m-auto" />
          <span className="ml-6">
            <p className="text-main-text font-semibold text-sm">
              Worldwide Delivery
            </p>
            <p className="text-main-text text-sm">For Order Over $100</p>
          </span>
        </div>
        <div className="service lg:flex items-center m-auto">
          <MdOutlineRocketLaunch className="text-4xl text-main m-auto" />
          <span className="ml-6">
            <p className="text-main-text font-bold">Worldwide Delivery</p>
            <p className="text-main-text text-sm">For Order Over $100</p>
          </span>
        </div>
        <div className="service lg:flex items-center m-auto">
          <BsTelephone className="text-4xl text-main m-auto" />
          <span className="ml-6">
            <p className="text-main-text font-bold">Worldwide Delivery</p>
            <p className="text-main-text text-sm">For Order Over $100</p>
          </span>
        </div>
        <div className="service lg:flex items-center m-auto">
          <TiArrowBackOutline className="text-4xl text-main m-auto" />
          <span className="ml-6">
            <p className="text-main-text font-bold">Worldwide Delivery</p>
            <p className="text-main-text text-sm">For Order Over $100</p>
          </span>
        </div>
        <div className="service lg:flex items-center m-auto">
          <GiMoneyStack className="text-4xl text-main m-auto" />
          <span className="ml-6">
            <p className="text-main-text font-bold">Worldwide Delivery</p>
            <p className="text-main-text text-sm">For Order Over $100</p>
          </span>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
