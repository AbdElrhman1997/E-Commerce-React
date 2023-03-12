import React from "react";
import test from "../../Assets/Imgs/SummerCollection.jpg";
import "./SummerCollection.scss";

const SummerCollection = () => {
  return (
    <section className="summer-collection w-1/2">
      <div className="banner-summer">
        <div className="lg:p-8 p-3">
          <p className="text-sm lg:py-1 lg:text-lg lg:w-3/5 p-1">
            25% Discount
          </p>
          <p className="lg:text-2xl text-lg">Summer collection</p>
          <p className="text-sm lg:mb-5 mb-2">Starting @ $10</p>
          <button className="lg:p-2 p-1">Shop now</button>
        </div>
        <img src={test} />
      </div>
    </section>
  );
};

export default SummerCollection;
