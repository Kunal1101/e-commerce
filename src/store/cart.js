import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
  cartCount: 0,
};

export const addItem = createAction("ADDITEM");

const cartReducer = createReducer(initialState, (builder) => {
  builder.addCase(addItem, (state) => {
    state.cartCount += 1;
  });
});

export default cartReducer;
