import React from "react";
import "./Navbar.css";
import cart from "../../assets/shopping-cart.png";

const Navbar = () => {
  return (
    <div className="navbar flex justify-around p-5 bg-black text-white">
      <span className="block cursor-pointer">Shop</span>
      <ul className="flex gap-4">
        <li className="cursor-pointer">Home</li>
        <li className="cursor-pointer">Women</li>
        <li className="cursor-pointer">Kids</li>
      </ul>
      <div className="login-cart flex items-center gap-3">
        <button className="cursor-pointer rounded-4xl bg-white px-4 py-2 text-black">
          Login
        </button>
        <img className="cursor-pointer" src={cart} alt="" />
        <span className="cart-count">0</span>
      </div>
    </div>
  );
};

export default Navbar;
