import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  cartCount: 0,
};

export const addItem = createAction("cart/addItem");
export const removeItem = createAction("cart/removeItem");
export const updateItemQuantity = createAction("cart/updateQuantity");

const cartReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addItem, (state, action) => {
      const item = action.payload;
      const existingItem = state.cartItems.find((i) => i.id === item.id);

      // If item is already added it will increase the count else add new product
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({ ...item, quantity: 1 });
      }

      state.cartCount += 1;
    })

    .addCase(removeItem, (state, action) => {
      const item = action.payload;
      const existingItem = state.cartItems.find((i) => i.id === item.id);

      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
          state.cartCount -= 1;
        } else {
          // If only 1 left, remove the item completely
          state.cartItems = state.cartItems.filter((i) => i.id !== item.id);
          state.cartCount -= 1;
        }
      }
    })

    .addCase(updateItemQuantity, (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.cartItems.find((i) => i.id === id);
      if (item) {
        // Update global count based on change in quantity
        const diff = quantity - item.quantity;
        item.quantity = quantity;
        state.cartCount += diff;
      }
    });
});

export default cartReducer;
