import React from "react";
import OurServices from "../OurServices/OurServices";
import SummerCollection from "../SummerCollection/SummerCollection";
import Testimonial from "../Testimonial/Testimonial";

const SummerContainer = () => {
  return (
    <section className="summer-container container lg:flex justify-around">
      <Testimonial />
      <SummerCollection />
      <OurServices />
    </section>
  );
};

export default SummerContainer;
