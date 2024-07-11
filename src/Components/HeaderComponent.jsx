import React from "react";
import { Link } from "react-router-dom";
import './Header.css'; // Make sure to create this CSS file for styling

const HeaderComponent = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src="/path/to/logo.png" alt="Flipkart Logo" /> {/* Update the path to your logo */}
        </Link>
      </div>

      <div className="searchbar">
        <input
          type="text"
          id="searchbar"
          placeholder="Search for Products, Brands and More"
        />
      </div>

      <div className="login">
        <Link className="login-link" to="/login">
          Login
        </Link>
      </div>

      <div className="cart">
        <Link to="/cart">
          <img src="/path/to/cart-icon.png" alt="Cart Icon" /> {/* Update the path to your cart icon */}
        </Link>
      </div>
    </header>
  );
};

export default HeaderComponent;
