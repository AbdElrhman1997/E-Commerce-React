import { createSlice } from "@reduxjs/toolkit";

const initialState = { isLoggedIn: false };

const AuthSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    isLoggedIn: (state, action) => {
      const user = JSON.parse(localStorage.getItem("user"));
      if (user && user.token) {
        state.isLoggedIn = true;
      } else {
        state.isLoggedIn = false;
      }
    },
  },
});

export const { isLoggedIn } = AuthSlice.actions;
export default AuthSlice.reducer;
