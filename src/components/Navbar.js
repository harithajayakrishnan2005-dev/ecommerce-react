import React from "react";

import { Link, useNavigate } from "react-router-dom";

import {
  FaHeart,
  FaShoppingCart,
  FaUser
} from "react-icons/fa";

import "../styles/Navbar.css";

function Navbar() {
  const navigate = useNavigate();

  const isLogin =
    localStorage.getItem("isLogin") === "true";

  const logout = () => {
    localStorage.removeItem("isLogin");
    localStorage.removeItem("currentUser");

    alert("Logout Successful");

    navigate("/login");

    window.location.reload();
    //Reloads the entire page.
  };

  
  const handleProfile = () => {
    if (isLogin) {
      navigate("/profile");
    } else {
      navigate("/login");
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

      <div className="container">

        <Link
          className="navbar-brand"
          to="/"
        >
          🛍️ E-Commerce
        </Link>


        <ul className="navbar-nav ms-auto d-flex flex-row align-items-center">

          
          <li className="nav-item">
            <Link
              className="nav-link"
              to="/"
            >
              Home
            </Link>
          </li>


          
          <li className="nav-item">
            <Link
              className="nav-link"
              to="/products"
            >
              Products
            </Link>
          </li>


          
          <li className="nav-item">
            <Link
              className="nav-link"
              to="/about"
            >
              About
            </Link>
          </li>


         
          <li className="nav-item">
            <Link
              className="nav-link"
              to="/contact"
            >
              Contact
            </Link>
          </li>


          
          <li className="nav-item">
            <Link
              className="nav-link"
              to="/wishlist"
              title="Wishlist"
            >
              <FaHeart />
            </Link>
          </li>


      
          <li className="nav-item">
            <Link
              className="nav-link"
              to="/cart"
              title="Cart"
            >
              <FaShoppingCart />
            </Link>
          </li>


          <li className="nav-item">
            <button
              className="profile-nav-btn"
              onClick={handleProfile}
              title="Profile"
            >
              <FaUser />
            </button>
          </li>


       
          {isLogin && (
            <li className="nav-item ms-2">
              <button
                className="logout-btn"
                onClick={logout}
              >
                Logout
              </button>
            </li>
          )}

        </ul>

      </div>

    </nav>
  );
}

export default Navbar;