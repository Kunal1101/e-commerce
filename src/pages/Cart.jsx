import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../store/cart";
import EmptyCart from "../components/EmptyCart";

const Cart = () => {
  // Access cartItems from the Redux store
  const cartItems = useSelector((state) => state.cartItems); // Ensure correct path
  const dispatch = useDispatch();

  // If cart is empty
  if (!cartItems || cartItems.length === 0) {
    return <EmptyCart />;
  }

  const removeFromCart = (item) => {
    dispatch(removeItem(item));
  };

  const updateQuantity = (id, newQuantity) => {
    setCart(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // const calculateTotal = () => {
  //   return cartItems
  //     .reduce((total, item) => total + item.price * item.quantity, 0)
  //     .toFixed(2);
  // };

  return (
    <div>
      <div className="container mx-auto max-w-full p-8 bg-gray-100">
        <h2 className="text-3xl font-bold mb-6">Shopping Cart</h2>
        <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-lg">
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th className="py-2 px-4 text-left">Product</th>
              <th className="py-2 px-4 text-left">Price</th>
              <th className="py-2 px-4 text-left">Quantity</th>
              <th className="py-2 px-4 text-left">Total</th>
              <th className="py-2 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id} className="border-b border-gray-200">
                <td className="py-3 px-4">
                  <div className="flex items-center">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 object-cover mr-4"
                    />
                    <span>{item.title}</span>
                  </div>
                </td>
                <td className="py-3 px-4">${item.price.toFixed(2)}</td>
                <td className="py-3 px-4">
                  <span>{item.quantity}</span>
                </td>
                <td className="py-3 px-4">
                  ${(item.price * item.quantity).toFixed(2)}
                </td>
                <td className="py-3 px-4">
                  <button
                    onClick={() => removeFromCart(item)}
                    className="bg-red-500 text-white cursor-pointer px-4 py-2 rounded-md hover:bg-red-600"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-6 flex justify-between items-center">
          {/* <h3 className="text-xl font-semibold">Total: ${calculateTotal()}</h3> */}
          <button className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
