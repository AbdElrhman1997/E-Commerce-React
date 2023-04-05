import React from "react";
import { ImStarFull } from "react-icons/im";
import "./BestSellers.scss";
import { products } from "../../Assets/data/products";

const BestSellers = () => {
  // useEffect(() => {

  // }, []);
  return (
    <section className="best-sellers mt-6">
      <p className="text-md tracking-wider uppercase mb-4 font-semibold">
        Best Sellers
      </p>
      {products[5] &&
        products[5].map((product, i) => {
          return (
            <div className="flex my-4" key={i}>
              <a href={`/productdetails/${product.id}`}>
                <img src={product.imgUrl} className="mr-4 cursor-pointer" />
              </a>
              <div>
                <p className="text-main-text cursor-pointer hover:text-black font-semibold">
                  <a href={`/productdetails/${product.id}`}>{product.title}</a>
                </p>
                <p className="flex my-2 text-amber-400">
                  <ImStarFull />
                  <ImStarFull />
                  <ImStarFull />
                  <ImStarFull />
                  <ImStarFull />
                </p>
                <div>
                  <span className=" line-through text-main-text">
                    ${parseInt(product.disCount).toFixed(2)}
                  </span>
                  <span className="font-semibold ml-3">
                    ${parseInt(product.price).toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
    </section>
  );
};

export default BestSellers;
