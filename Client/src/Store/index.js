import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./AuthSlice";
import CartReducer from "./CartSlice";
import FavoriteSlice from "./FavoriteSlice";
import HeaderSlice from "./HeaderSlice";
import SideBarReducer from "./SideBarSlice";

const store = configureStore({
  reducer: {
    SideBar: SideBarReducer,
    Cart: CartReducer,
    Favorite: FavoriteSlice,
    Auth: AuthSlice,
    HeaderMobile: HeaderSlice,
  },
});

export default store;
