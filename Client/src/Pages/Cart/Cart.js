import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import CartItem from "../../Components/CartItem/CartItem";
import { getCartItems, totalPrice } from "../../Store/CartSlice";
import "./Cart.scss";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const dispatch = useDispatch();
  const globalState = useSelector((state) => state);
  useEffect(() => {
    setCartItems(JSON.parse(localStorage.getItem("CartItem")));
    dispatch(getCartItems());
    dispatch(totalPrice());
  }, []);

  return (
    <div>
      {/* <!-- component --> */}

      <ToastContainer />

      <div class="flex items-center justify-center py-8">
        <button class="py-2 px-10 rounded bg-indigo-600 hover:bg-indigo-700 text-white">
          Open Modal
        </button>
      </div>
      <div
        class="w-full h-full bg-black dark:bg-gray-900 bg-opacity-90 top-0 overflow-y-auto overflow-x-hidden fixed sticky-0"
        id="chec-div"
      >
        <div
          class="w-full absolute z-10 right-0 h-full overflow-x-hidden transform translate-x-0 transition ease-in-out duration-700"
          id="checkout"
        >
          <div
            class="flex items-end lg:flex-row flex-col justify-end"
            id="cart"
          >
            <div
              class="lg:w-1/2 md:w-8/12 w-full lg:px-8 lg:pt-3 md:px-6 px-4 md:py-8 py-4 bg-white dark:bg-gray-800 overflow-y-auto overflow-x-hidden lg:h-screen h-auto"
              id="scroll"
            >
              <div
                class="flex items-center text-gray-500 dark:text-white cursor-pointer hover:text-main"
                onClick={() => {
                  window.history.back();
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-chevron-left"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <polyline points="15 6 9 12 15 18" />
                </svg>
                <p class="text-sm pl-2 leading-none dark:hover:text-gray-200">
                  Back
                </p>
              </div>
              <p class="lg:text-4xl text-3xl font-black leading-10 text-gray-800 dark:text-white pt-3">
                Bag
              </p>
              {globalState.Auth.isLoggedIn ? (
                globalState.Cart.items.map((product) => {
                  return <CartItem product={product} />;
                })
              ) : (
                <div className="text-center font-semibold text-2xl flex justify-center items-center h-96 my-8">
                  <p>There is No Products</p>
                </div>
              )}
            </div>
            <div class="lg:w-96 md:w-8/12 w-full bg-gray-100 dark:bg-gray-900 h-full">
              <div class="flex flex-col lg:h-screen h-auto lg:px-8 md:px-7 px-4 lg:py-20 md:py-10 py-6 justify-between overflow-y-auto">
                <div>
                  <p class="lg:text-4xl text-3xl font-semibold leading-9 text-blacks dark:text-white">
                    Summary
                  </p>
                  <div class="flex items-center justify-between pt-16">
                    <p class="text-base leading-none text-gray-800 dark:text-white">
                      Subtotal
                    </p>
                    <p class="text-base leading-none text-gray-800 dark:text-white">
                      {globalState.Cart.totalPrice.toFixed(2)}$
                    </p>
                  </div>
                  <div class="flex items-center justify-between pt-5">
                    <p class="text-base leading-none text-gray-800 dark:text-white">
                      Shipping
                    </p>
                    <p class="text-base leading-none text-gray-800 dark:text-white">
                      30.00$
                    </p>
                  </div>
                  <div class="flex items-center justify-between pt-5">
                    <p class="text-base leading-none text-gray-800 dark:text-white">
                      Tax
                    </p>
                    <p class="text-base leading-none text-gray-800 dark:text-white">
                      0.00$
                    </p>
                  </div>
                </div>
                <div>
                  <div class="flex items-center pb-6 justify-between lg:pt-5 pt-20">
                    <p class="text-2xl leading-normal text-gray-800 dark:text-white">
                      Total
                    </p>
                    <p class="text-2xl font-bold leading-normal text-right text-gray-800 dark:text-white">
                      {30 + globalState.Cart.totalPrice}.00$
                    </p>
                  </div>
                  <button
                    onClick={() => {}}
                    class="text-base leading-none w-full py-5 font-bold bg-main border-main border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white hover:bg-main-hover dark:hover:bg-gray-700"
                  >
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
