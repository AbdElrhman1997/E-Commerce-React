import React from "react";
import ReactDOM from "react-dom/client";
import { Provider, useSelector } from "react-redux";
import store from "./Store/index";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import Cart from "./Pages/Cart/Cart";
import Favorites from "./Pages/Favorites/Favorites";
import Profile from "./Pages/Profile/Profile";
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";
import "./index.css";
import Categories from "./Pages/Categories/Categories";
import NewProdItem from "./Components/NewProdItem/NewProdItem";
import DealOfDay from "./Components/DealOfDay/DealOfDay";
import CtgProduct from "./Components/CtgProduct/CtgProduct";

// const globalState = useSelector((state) => state);
// const routesNotLogged = createBrowserRouter([
//   {
//     index: true,
//     element: <App />,
//   },
//   {
//     path: "/productdetails/:id",
//     element: <ProductDetails />,
//   },
//   {
//     path: "/cart",
//     element: <Cart />,
//   },
//   {
//     path: "/favorite",
//     element: <Favorites />,
//   },
//   {
//     path: "/register",
//     element: <Register />,
//   },
//   {
//     path: "/login",
//     element: <Login />,
//   },
//   {
//     path: "/categories/",
//     element: <Categories />,
//     children: [
//       {
//         path: ":ctg/:supCtg",
//         element: <CtgProduct />,
//       },
//       {
//         path: ":ctg",
//         element: <CtgProduct />,
//       },
//     ],
//   },
// ]);
const routesLogged = createBrowserRouter([
  {
    index: true,
    element: <App />,
  },
  {
    path: "/productdetails/:id",
    element: <ProductDetails />,
  },
  {
    path: "/cart",
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
  {
    path: "/categories/",
    element: <Categories />,
    children: [
      {
        path: ":ctg/:supCtg",
        element: <CtgProduct />,
      },
      {
        path: ":ctg",
        element: <CtgProduct />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={routesLogged}>
      <App />
    </RouterProvider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
