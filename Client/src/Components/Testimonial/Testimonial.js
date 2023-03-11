import React from "react";
import test from "../../Assets/Imgs/imgFea1.jpg";
import { FaQuoteLeft } from "react-icons/fa";
import "./Testimonial.scss";

const Testimonial = () => {
  return (
    <section className="testimonial w-1/2">
      <p className="m-auto text-lg font-semibold">Testimonial</p>
      <hr className="mb-5 mt-2 m-auto bg-main-white" />
      <div>
        <img src={test} />
        <p className="text-main-text font-bold mb-2">ALAN DOE</p>
        <p>CEO & Founder Invision</p>
        <FaQuoteLeft className=" text-main text-3xl m-auto mt-4 lg:mb-1 mb-4" />
        <p className=" text-main-text">
          Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor dolor sit
          amet.
        </p>
      </div>
    </section>
  );
};

export default Testimonial;
