import React from "react";
import OurServices from "../OurServices/OurServices";
import SummerCollection from "../SummerCollection/SummerCollection";
import Testimonial from "../Testimonial/Testimonial";
import "./SummerContainer.scss";

const SummerContainer = () => {
  return (
    <section className="summer-container container lg:flex justify-around mx-auto w-fit">
      <Testimonial />
      <SummerCollection />
      <OurServices />
    </section>
  );
};

export default SummerContainer;
