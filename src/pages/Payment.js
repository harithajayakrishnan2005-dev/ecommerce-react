import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/payment.css";

function Payment({ cart = [], setCart }) {
    const navigate = useNavigate();
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [payment, setPayment] = useState("");
    const [orderPlaced, setOrderPlaced] = useState(false);

    const currentUser = localStorage.getItem("currentUser");

    const placeOrder = () => {
        if (!address || !phone || !payment) {
            alert("Please fill all details");
            return;
        }

        if (!currentUser) {
            alert("Please login first");
            navigate("/login");
            return;
        }

        if (cart.length === 0) {
            alert("Your cart is empty");
            return;
        }

        const oldOrders =
            JSON.parse(
                localStorage.getItem(`orders_${currentUser}`)
            ) || [];

        const total = cart.reduce(
            (sum, item) =>
                sum + Number(item.price || 0),
            0
        );

        const newOrder = {
            id: Date.now(),
            date: new Date().toLocaleDateString(),
            items: cart,
            total: total,
            address: address,
            phone: phone,
            payment: payment
        };

        const updatedOrders = [
            ...oldOrders,
            newOrder
        ];

        localStorage.setItem(
            `orders_${currentUser}`,
            JSON.stringify(updatedOrders)
        );

        if (setCart) {
            setCart([]);
        }

        setOrderPlaced(true);
    };

    if (orderPlaced){
        return (
            <div className="order-success-page">
                <div className="success-card">

                    <div className="success-icon">
                        ✓
                    </div>

                    <h2>
                        Order Placed Successfully!
                    </h2>

                    <p>
                        Thank you for shopping with us.
                    </p>

                    <p>
                        Your order will be delivered soon.
                    </p>

                    <button
                        className="continue-btn"
                        onClick={() => navigate("/order")}
                    >
                        View My Orders
                    </button>

                    <button
                        className="continue-btn"
                        onClick={() => navigate("/products")}
                    >
                        Continue Shopping
                    </button>

                </div>
            </div>
        );
    }

    return (
        <div className="container mt-5">
            <div className="payment-box">

                <h2>Delivery Details</h2>

                <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="Enter Address"
                    value={address}
                    onChange={(e) =>
                        setAddress(e.target.value)
                    }
                />

                <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="Enter Phone Number"
                    value={phone}
                    onChange={(e) =>
                        setPhone(e.target.value)
                    }
                />

                <h4>Select Payment Method</h4>

                <label>
                    <input
                        type="radio"
                        name="payment"
                        value="Cash on Delivery"
                        onChange={(e) =>
                            setPayment(e.target.value)
                        }
                    />
                    Cash on Delivery
                </label>

                <br />

                <label>
                    <input
                        type="radio"
                        name="payment"
                        value="UPI"
                        onChange={(e) =>
                            setPayment(e.target.value)
                        }
                    />
                    UPI Payment
                </label>

                <br />

                <label>
                    <input
                        type="radio"
                        name="payment"
                        value="Card"
                        onChange={(e) =>
                            setPayment(e.target.value)
                        }
                    />
                    Credit / Debit Card
                </label>

                <br />

                <label>
                    <input
                        type="radio"
                        name="payment"
                        value="Net Banking"
                        onChange={(e) =>
                            setPayment(e.target.value)
                        }
                    />
                    Net Banking
                </label>

                <button
                    className="btn btn-success mt-4 w-100"
                    onClick={placeOrder}
                >
                    Place Order
                </button>

            </div>
        </div>
    );
}

export default Payment;