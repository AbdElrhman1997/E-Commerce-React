import { createSlice } from "@reduxjs/toolkit";

const initialState = { isOpen: false };

const HeaderSlice = createSlice({
  name: "HeaderMobile",
  initialState,
  reducers: {
    toggleHeaderMob: (state, action) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { toggleHeaderMob } = HeaderSlice.actions;
export default HeaderSlice.reducer;
