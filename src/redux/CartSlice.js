import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem('cart')) ?? [];


const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      state.push(action.payload);
    },
    deleteFromCart(state, action) {
      return state.filter((item) => item.id !== action.payload.id);
      // Optionally update localStorage here if needed
    },
    deleteAllCart(state) {
     localStorage.removeItem('cart')
     return [];
    }
  },
});

export const { addToCart, deleteFromCart,deleteAllCart } = CartSlice.actions;

export default CartSlice.reducer;
