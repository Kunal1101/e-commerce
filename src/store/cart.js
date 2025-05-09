import { createAction, createReducer } from "@reduxjs/toolkit";

// Initial state for the cart
const initialState = {
  cartItems: [], // Array of items in the cart
  cartCount: 0,
};

export const addItem = createAction("ADDITEM");
export const removeItem = createAction("REMOVEITEM");

// Reducer to handle actions related to the cart
const cartReducer = createReducer(initialState, (builder) => {
  builder.addCase(addItem, (state, action) => {
    state.cartItems.push(action.payload);
    state.cartCount += 1;
  });

  builder.addCase(removeItem, (state, action) => {
    state.cartItems.pop(action.payload);
    state.cartCount -= 1;
  });
});

export default cartReducer;
