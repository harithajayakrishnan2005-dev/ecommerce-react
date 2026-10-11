
import { useNavigate } from "react-router-dom";
import "../styles/Cart.css";

function Cart({ cart, setCart }) {
  const navigate = useNavigate();

  const totalItems = cart.length;

  const removeCart = (id) => {
    setCart(
      cart.filter((item) => item.id !== id)
    );
  };

  const totalPrice = cart.reduce(
    (total, item) => total + item.price,
    0
  );

  return (
    <div className="cart-container">
      <h1>
        ✨ Velora — My Cart ({totalItems} Products)
      </h1>

      {cart.length === 0 ? (
        <h3 className="empty-cart">
          Your Cart is Empty 🛒
        </h3>
      ) : (
        <>
          <div className="cart-grid">
            {cart.map((item) => (
              <div
                className="cart-card"
                key={item.id}
              >
                <img
                  src={item.image || item.thumbnail}
                  alt={item.title}
                />

                <h4>{item.title}</h4>

                <p>₹ {item.price}</p>

                <div className="delivery">
                  🚚 Free Delivery
                </div>

                <button
                  className="remove-btn"
                  onClick={() => removeCart(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h2>
              Total Price: ₹ {totalPrice.toFixed(2)}
            </h2>

            <button
              className="checkout-btn"
              onClick={() => navigate("/payment")}
            >
              Proceed To Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
