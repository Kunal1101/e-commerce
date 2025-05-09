import { createAction, createReducer } from "@reduxjs/toolkit";

// Initial state for the cart
const initialState = {
  cartItems: [], // Array of items in the cart
  cartCount: 0,
};

export const addItem = createAction("ADDITEM");

// Reducer to handle actions related to the cart
const cartReducer = createReducer(initialState, (builder) => {
  builder.addCase(addItem, (state, action) => {
    state.cartItems.push(action.payload);
    state.cartCount += 1;
  });
});

export default cartReducer;
