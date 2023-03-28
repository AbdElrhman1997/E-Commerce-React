import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { toggleHeaderMob } from "../../Store/HeaderSlice";
import { toggleSideBar } from "../../Store/SideBarSlice";
import "./Overlay.scss";

const Overlay = () => {
  const dispatch = useDispatch();
  const globalState = useSelector((state) => state);

  return (
    <section
      className={`overlay lg:hidden ${
        globalState.SideBar.isOpen || globalState.HeaderMobile.isOpen
          ? `active`
          : `non-active`
      }`}
      onClick={() => {
        if (globalState.SideBar.isOpen) {
          dispatch(toggleSideBar());
        } else if (globalState.HeaderMobile.isOpen) {
          dispatch(toggleHeaderMob());
        }
      }}
    ></section>
  );
};

export default Overlay;
