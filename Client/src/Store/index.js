import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./CartSlice";
import FavoriteSlice from "./FavoriteSlice";
import SideBarReducer from "./SideBarSlice";

const store = configureStore({
  reducer: {
    SideBar: SideBarReducer,
    Cart: CartReducer,
    Favorite: FavoriteSlice,
  },
});

export default store;
