import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  // Access cartItems from the Redux store
  const cartItems = useSelector((state) => state.cartItems); // Ensure correct path

  if (!cartItems || cartItems.length === 0) {
    return <p>No items in the cart.</p>; // Fallback message if cart is empty or undefined
  }
  console.log(cartItems);

  return (
    <div>
      {cartItems.map((item) => (
        <span key={item.id}>{item.title}</span>
      ))}
    </div>
  );
};

export default Cart;
