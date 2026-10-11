import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Payment from "./pages/Payment";
import Profile from "./pages/Profile";
import Order from "./pages/Order";

function App() {
  const [currentUser, setCurrentUser] = useState(
    localStorage.getItem("currentUser")
  );

  const [cart, setCart] = useState(() => {
    const user = localStorage.getItem("currentUser");

    if (user) {
      return (
        JSON.parse(
          localStorage.getItem(`cart_${user}`)
        ) || []
      );
    }

    return [];
  });

  const [wishlist, setWishlist] = useState(() => {
    const user = localStorage.getItem("currentUser");

    if (user) {
      return (
        JSON.parse(
          localStorage.getItem(`wishlist_${user}`)
        ) || []
      );
    }

    return [];
  });

  useEffect(() => {
    const handleLogin = () => {
      const user = localStorage.getItem("currentUser");

      setCurrentUser(user);

      if (user) {
        const savedCart =
          JSON.parse(
            localStorage.getItem(`cart_${user}`)
          ) || [];

        const savedWishlist =
          JSON.parse(
            localStorage.getItem(`wishlist_${user}`)
          ) || [];

        setCart(savedCart);
        setWishlist(savedWishlist);
      }
    };

    window.addEventListener(
      "userLogin",
      handleLogin
    );

    return () => {
      window.removeEventListener(
        "userLogin",
        handleLogin
      );
    };
  }, []);

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem(
        `cart_${currentUser}`,
        JSON.stringify(cart)
      );
    }
  }, [cart, currentUser]);

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem(
        `wishlist_${currentUser}`,
        JSON.stringify(wishlist)
      );
    }
  }, [wishlist, currentUser]);

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/products"
          element={
            <Products
              cart={cart}
              setCart={setCart}
              wishlist={wishlist}
              setWishlist={setWishlist}
            />
          }
        />

        <Route
          path="/product-details"
          element={
            <ProductDetails
              cart={cart}
              setCart={setCart}
            />
          }
        />

        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              setCart={setCart}
            />
          }
        />

        <Route
          path="/wishlist"
          element={
            <Wishlist
              wishlist={wishlist}
              setWishlist={setWishlist}
            />
          }
        />

        <Route
          path="/payment"
          element={
            <Payment
              cart={cart}
              setCart={setCart}
            />
          }
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/profile"
          element={<Profile />}
        />

        <Route
          path="/order"
          element={<Order />}
        />

      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;