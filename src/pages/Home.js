
import { Link } from "react-router-dom";
import { useState } from "react";
import "../styles/Home.css";

function Home() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setMessage("Please enter your email address.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setMessage("Please enter a valid email address.");
      return;
    }

    const subscribers =
      JSON.parse(localStorage.getItem("subscribers")) || [];

    const newEmail = email.trim().toLowerCase();

    if (subscribers.includes(newEmail)) {
      setMessage("This email is already subscribed.");
      return;
    }

    subscribers.push(newEmail);

    localStorage.setItem(
      "subscribers",
      JSON.stringify(subscribers)
    );

    setMessage("🎉 Successfully subscribed!");
    setEmail("");
  };

  return (
    <div>
      <section className="hero">
        <div className="hero-content">
          <span className="hero-tag">
            ✨ Velora — New Collection 2026
          </span>

          <h1>
            Everything You Need,
            <br />
            All in One Place
          </h1>

          <p>
            Shop Beauty, Fragrances, Groceries,
            Furniture, Smartphones and Laptops.
          </p>

          <Link to="/products" className="shop-btn">
            Shop Now
          </Link>
        </div>
      </section>

      <section className="categories">
        <h2>Shop By Category</h2>

        <div className="category-container">
          <Link
            to="/products"
            state={{ category: "beauty" }}
            className="category-card"
          >
            💄
            <h3>Beauty</h3>
          </Link>

          <Link
            to="/products"
            state={{ category: "fragrances" }}
            className="category-card"
          >
            🌸
            <h3>Fragrances</h3>
          </Link>

          <Link
            to="/products"
            state={{ category: "groceries" }}
            className="category-card"
          >
            🛒
            <h3>Groceries</h3>
          </Link>

          <Link
            to="/products"
            state={{ category: "furniture" }}
            className="category-card"
          >
            🪑
            <h3>Furniture</h3>
          </Link>

          <Link
            to="/products"
            state={{ category: "smartphones" }}
            className="category-card"
          >
            📱
            <h3>Smartphones</h3>
          </Link>

          <Link
            to="/products"
            state={{ category: "laptops" }}
            className="category-card"
          >
            💻
            <h3>Laptops</h3>
          </Link>
        </div>
      </section>

      <section className="offer">
        <h2>🔥 Today's Offer</h2>
        <p>Flat 50% OFF on Selected Products</p>

        <Link to="/products" className="offer-btn">
          Grab Deal
        </Link>
      </section>

      <section className="features">
        <h2>Why Choose Us?</h2>

        <div className="feature-container">
          <div className="feature-card">
            <div className="feature-icon">🚚</div>
            <h3>Fast Delivery</h3>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🔒</div>
            <h3>Secure Payment</h3>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🎧</div>
            <h3>24/7 Support</h3>
          </div>

          <div className="feature-card">
            <div className="feature-icon">↩️</div>
            <h3>Easy Returns</h3>
          </div>
        </div>
      </section>

      <section className="newsletter">
        <h2>Subscribe Now</h2>

        <p>
          Get the latest offers directly to your inbox.
        </p>

        <form
          className="newsletter-box"
          onSubmit={handleSubscribe}
        >
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setMessage("");
            }}
          />

          <button type="submit">
            Subscribe
          </button>
        </form>

        {message && (
          <p className="subscribe-message">
            {message}
          </p>
        )}
      </section>
    </div>
  );
}

export default Home;
