
import { useEffect, useState } from "react";
import "../styles/order.css";

function Orders() {
  const currentUser = localStorage.getItem("currentUser");
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (!currentUser) {
      setOrders([]);
      return;
    }

    const savedOrders =
      JSON.parse(
        localStorage.getItem(`orders_${currentUser}`)
      ) || [];

    setOrders(savedOrders);
  }, [currentUser]);

  if (!currentUser) {
    return (
      <div className="orders-page">
        <div className="orders-card">
          <h2>Please Login</h2>
          <p>Please login to view your orders.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="orders-page">
      <div className="orders-container">
        <h1>✨ Velora — My Orders 📦</h1>

        {orders.length === 0 ? (
          <div className="no-orders">
            <h2>No Orders Yet</h2>
            <p>
              Your purchased products will appear here.
            </p>
          </div>
        ) : (
          orders.map((order, index) => {
            const items = order.items || order.products || [];

            return (
              <div
                className="order-card"
                key={order.id || index}
              >
                <div className="order-header">
                  <strong>
                    Order #{index + 1}
                  </strong>

                  <span>
                    {order.date || "Order placed"}
                  </span>
                </div>

                {items.map((item, itemIndex) => (
                  <div
                    className="order-item"
                    key={item.id || itemIndex}
                  >
                    <img
                      src={
                        item.thumbnail ||
                        item.image ||
                        item.images?.[0]
                      }
                      alt={item.title || item.name}
                    />

                    <div>
                      <h3>
                        {item.title || item.name}
                      </h3>

                      <p>
                        Quantity: {item.quantity || 1}
                      </p>

                      <p>
                        Price: ₹{item.price || 0}
                      </p>
                    </div>
                  </div>
                ))}

                <div className="order-total">
                  Total: ₹
                  {(order.total ??
                    items.reduce(
                      (sum, item) =>
                        sum +
                        (item.price || 0) *
                          (item.quantity || 1),
                      0
                    )
                  ).toFixed(2)}
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default Orders;
