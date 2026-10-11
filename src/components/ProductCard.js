
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import "../styles/ProductCard.css";

function ProductCard({
  product,
  cart,
  setCart,
  wishlist,
  setWishlist
}) {
  const navigate = useNavigate();

  const isLogin =
    localStorage.getItem("isLogin") === "true";

  const currentUser =
    localStorage.getItem("currentUser");

  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const exist = wishlist.find(
      (item) => item.id === product.id
    );

    setLiked(!!exist);
  }, [wishlist, product.id]);

  const addToCart = () => {
    if (!isLogin) {
      alert("Please login first");
      navigate("/login");
      return;
    }

    const alreadyAdded = cart.find(
      (item) => item.id === product.id
    );

    if (alreadyAdded) {
      alert("Product already in Cart");
      return;
    }

    const newItem = {
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.thumbnail
    };

    setCart([...cart, newItem]);

    alert("Added to Cart");
  };

  const handleWishlist = () => {
    if (!isLogin) {
      alert("Please login first");
      navigate("/login");
      return;
    }

    const alreadyAdded = wishlist.find(
      (item) => item.id === product.id
    );

    if (alreadyAdded) {
      const updatedWishlist = wishlist.filter(
        (item) => item.id !== product.id
      );

      setWishlist(updatedWishlist);

      if (currentUser) {
        localStorage.setItem(
          `wishlist_${currentUser}`,
          JSON.stringify(updatedWishlist)
        );
      }

      setLiked(false);
      return;
    }

    const newItem = {
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.thumbnail
    };

    const updatedWishlist = [
      ...wishlist,
      newItem
    ];

    setWishlist(updatedWishlist);

    if (currentUser) {
      localStorage.setItem(
        `wishlist_${currentUser}`,
        JSON.stringify(updatedWishlist)
      );
    }

    setLiked(true);
  };

  return (
    <div className="product-card">
      <div className="image-section">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="product-image"
        />

        <button
          className="wishlist-btn"
          onClick={handleWishlist}
          title="Add to Wishlist"
        >
          <FaHeart
            className={
              liked ? "heart red" : "heart"
            }
          />
        </button>
      </div>

      <div className="card-content">
        <h5>
          {product.title.slice(0, 30)}
        </h5>

        <h6>
          ₹ {product.price}
        </h6>

        <button
          className="cart-btn"
          onClick={addToCart}
        >
          <FaShoppingCart />
          {" "}Add Cart
        </button>

        <Link
          to="/product-details"
          state={{ product }}
          className="details-btn"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
