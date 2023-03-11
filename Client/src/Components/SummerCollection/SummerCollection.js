import React from "react";
import test from "../../Assets/Imgs/SummerCollection.jpg";
import "./SummerCollection.scss";

const SummerCollection = () => {
  return (
    <section className="summer-collection w-1/2">
      <div className="banner-summer">
        <div>
          <p className="text-sm">25% Discount</p>
          <p className="text-lg">Summer collection</p>
          <p>Starting @ $10</p>
          <button>Shop now</button>
        </div>
        <img src={test} />
      </div>
    </section>
  );
};

export default SummerCollection;
