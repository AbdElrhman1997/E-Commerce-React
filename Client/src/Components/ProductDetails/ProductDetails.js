import React, { useState, useEffect } from "react";
import test from "../../Assets/Imgs/Products/jacket-1.jpg";

import { FaArrowLeft } from "react-icons/fa";
import "./ProductDetails.scss";
import { useParams } from "react-router-dom";
import { products } from "../../Assets/data/products";

const ProductDetails = () => {
  const handleBackButtonClick = () => {
    window.history.back();
  };

  const [count, setCount] = useState(0);
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    products.map((p) =>
      p.map((prd) => {
        if (prd.id === +id) {
          setProduct(prd);
        }
      })
    );
    console.log(product.desc);
  }, [product]);

  function addProduct() {
    setCount(count + 1);
  }

  function subtractProduct() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  // function convertToEnglishNumerals(str) {
  //   return str.replace(/[٠١٢٣٤٥٦٧٨٩]/g, function (c) {
  //     return c.charCodeAt(0) - 1632;
  //   });
  // }

  // function handleCountChange(event) {
  //   const value = convertToEnglishNumerals(event.target.value);
  //   setCount(parseInt(value) || 0);
  // }
  return (
    <section class="prd-details text-gray-700 body-font overflow-hidden bg-white">
      <div class="container px-5 py-6 mx-auto">
        <button
          className="prd-details-btn bg-main text-white font-bold py-2 px-4 rounded mb-6"
          onClick={handleBackButtonClick}
        >
          <FaArrowLeft />
        </button>
        <div class="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt="ecommerce"
            class="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
            src={product.imgUrl}
          />
          <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">
              {product.title}
            </h1>
            <div class="flex mb-4">
              <span class="flex items-center">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 text-amber-400"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 text-amber-400"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 text-amber-400"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 text-amber-400"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 text-amber-400"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <span class="text-gray-600 ml-3">5 Reviews</span>
              </span>
            </div>
            <p class="prd-desc leading-relaxed my-6">{product.desc}</p>

            <div class="flex justify-between">
              <div class="title-font font-medium text-2xl text-gray-900">
                {product.price}$
              </div>

              <div className="flex items-center justify-center">
                <button
                  className="prd-details-btn px-2 py-1 bg-main rounded-l-lg text-white"
                  onClick={subtractProduct}
                >
                  -
                </button>
                <input
                  type="number"
                  id="product-count"
                  className="w-12 m-auto text-center bg-gray-50 h-4/5"
                  // onChange={handleCountChange}
                  value={count.toLocaleString("en-US")}
                  readOnly
                />
                <button
                  className="prd-details-btn px-2 py-1 bg-main rounded-r-lg text-white"
                  onClick={addProduct}
                >
                  +
                </button>
              </div>
              <button class="rounded-full w-10 h-10 bg-main p-0 border-0 inline-flex items-center justify-center text-white ml-4">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;

{
  /* <button class="text-white bg-main border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">
                Add To Cart
              </button> */
}
