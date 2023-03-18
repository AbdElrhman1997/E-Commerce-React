import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./Store/index";
import "./index.scss";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import Cart from "./Pages/Cart/Cart";

function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown-menu">
      <button className="dropdown-menu__button" onClick={toggleMenu}>
        Menu
      </button>
      <div className={`dropdown-menu__content ${isOpen ? "open" : ""}`}>
        <ul className="dropdown-menu__list">
          <li className="dropdown-menu__item">Item 1</li>
          <li className="dropdown-menu__item">Item 2</li>
          <li className="dropdown-menu__item">Item 3</li>
        </ul>
      </div>
    </div>
  );
}

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
    path: "/profile",
    element: <DropdownMenu />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={routes}>
        <App />
      </RouterProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
