import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./Store/index";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import Cart from "./Pages/Cart/Cart";
import Favorites from "./Pages/Favorites/Favorites";
import { ToastContainer } from "react-toastify";
import Profile from "./Pages/Profile/Profile";
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";

const routes = createBrowserRouter([
  {
    index: true,
    element: <App />,
  },
  {
    path: "productdetails/:id",
    element: <ProductDetails />,
  },
  {
    path: "cart",
    element: <Cart />,
  },
  {
    path: "/favorite",
    element: <Favorites />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={routes}>
      <App />
    </RouterProvider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
