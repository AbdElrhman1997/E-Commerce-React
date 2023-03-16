import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { toggleSideBar } from "../../Store/SideBarSlice";
import "./Overlay.scss";

const Overlay = () => {
  const dispatch = useDispatch();
  const globalState = useSelector((state) => state);

  return (
    <section
      className={`overlay lg:hidden ${
        globalState.SideBar.isOpen ? `active` : `non-active`
      }`}
      onClick={() => {
        dispatch(toggleSideBar());
      }}
    ></section>
  );
};

export default Overlay;
