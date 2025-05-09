import React from "react";
import "./Navbar.css";
import cart from "../../assets/shopping-cart.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cartCount = useSelector((state) => state.cartCount);

  return (
    <div className="navbar flex justify-around p-5 bg-black text-white items-center">
      <Link to="/" className="block cursor-pointer">
        Shop
      </Link>
      <div className="flex gap-4">
        <Link className="nav-items" to="/">
          Home
        </Link>
        <Link className="nav-items" to="/mens">
          Mens
        </Link>
        <Link className="nav-items" to="/womens">
          Womens
        </Link>
        <Link className="nav-items" to="/kids">
          Kids
        </Link>
      </div>
      <div className="login-cart flex items-center gap-3 relative">
        <Link
          to="/login"
          className="cursor-pointer rounded-4xl bg-white px-8 py-2 text-black"
        >
          Login
        </Link>
        <Link to="/cart">
          <img className="cursor-pointer pr-3" src={cart} alt="" />
          <span className="cart-count absolute top-0 right-0 text-red-600">
            {cartCount}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
