import { configureStore } from "@reduxjs/toolkit";
import SideBarReducer from "./SideBarSlice";

const store = configureStore({
  reducer: {
    SideBar: SideBarReducer,
  },
});

export default store;
