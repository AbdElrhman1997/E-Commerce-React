import { createSlice } from "@reduxjs/toolkit";

const initialState = { count: 0, items: [] };

const FavoriteSlice = createSlice({
  name: "Favorite",
  initialState,
  reducers: {
    FavoriteCount: (state, action) => {
      const FavoriteItems = JSON.parse(localStorage.getItem("FavoritesItem"));
      if (FavoriteItems && FavoriteItems.length) {
        state.count = JSON.parse(localStorage.getItem("FavoritesItem")).length;
      }
    },
    getFavoriteItems: (state, action) => {
      state.items = JSON.parse(localStorage.getItem("FavoritesItem"));
    },
  },
});

export const { FavoriteCount, getFavoriteItems } = FavoriteSlice.actions;
export default FavoriteSlice.reducer;
