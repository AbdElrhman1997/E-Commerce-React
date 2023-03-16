import { createSlice } from "@reduxjs/toolkit";

const initialState = { isOpen: false };

const SideBarSlice = createSlice({
  name: "SideBar",
  initialState,
  reducers: {
    toggleSideBar: (state, action) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { toggleSideBar } = SideBarSlice.actions;
export default SideBarSlice.reducer;
