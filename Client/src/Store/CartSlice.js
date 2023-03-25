import { createSlice } from "@reduxjs/toolkit";

const initialState = { count: 0, totalPrice: 0, items: [] };

const CartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    cartCount: (state, action) => {
      state.count = JSON.parse(localStorage.getItem("CartItem")).length;
    },
    getCartItems: (state, action) => {
      state.items = JSON.parse(localStorage.getItem("CartItem"));
    },
    totalPrice: (state, action) => {
      const cartItems = JSON.parse(localStorage.getItem("CartItem")) || [];
      let totalPrice = 0;
      cartItems.map((product) => {
        return (totalPrice += +product.price);
      });
      state.totalPrice = totalPrice;
    },
  },
});

export const { cartCount, totalPrice, getCartItems } = CartSlice.actions;
export default CartSlice.reducer;
