import { createSlice } from "@reduxjs/toolkit";

const initialState = { isLoggedIn: false };

const AuthSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    isLoggedIn: (state, action) => {
      const user = JSON.parse(localStorage.getItem("user"));
      if (user) {
        state.isLoggedIn = true;
      } else {
        state.isLoggedIn = false;
      }
      console.log(user);
    },
  },
});

export const { isLoggedIn } = AuthSlice.actions;
export default AuthSlice.reducer;
