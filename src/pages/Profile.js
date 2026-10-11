import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Profile.css";

function Profile() {
  const navigate = useNavigate();

  const currentUser = localStorage.getItem("currentUser");

  const [name, setName] = useState(
    currentUser
      ? localStorage.getItem(`name_${currentUser}`) || ""
      : ""
  );

  const [phone, setPhone] = useState(
    currentUser
      ? localStorage.getItem(`phone_${currentUser}`) || ""
      : ""
  );

  const [address, setAddress] = useState(
    currentUser
      ? localStorage.getItem(`address_${currentUser}`) || ""
      : ""
  );

  const [isEditing, setIsEditing] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();

    localStorage.setItem(`name_${currentUser}`, name);
    localStorage.setItem(`phone_${currentUser}`, phone);
    localStorage.setItem(`address_${currentUser}`, address);

    alert("Profile updated successfully!");

    setIsEditing(false);
  };

  if (!currentUser) {
    return (
      <div className="profile-page">
        <div className="profile-card">
          <div className="profile-avatar">👤</div>

          <h2>Please Login</h2>

          <p>Please login to view your profile.</p>

          <button
            className="login-profile-btn"
            onClick={() => navigate("/login")}
          >
            Go to Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="profile-page">
      <div className="profile-card">

        <div className="profile-avatar">
          👤
        </div>

        <h2>My Profile</h2>

        <p className="profile-email">
          {currentUser}
        </p>

        {!isEditing ? (
          <>
            <div className="profile-info">
              <label>Full Name</label>
              <p>{name || "Not added"}</p>

              <label>Email</label>
              <p>{currentUser}</p>

              <label>Phone Number</label>
              <p>{phone || "Not added"}</p>

              <label>Address</label>
              <p>{address || "Not added"}</p>
            </div>

            <button
              className="save-profile-btn"
              onClick={() => setIsEditing(true)}
            >
              Edit Profile
            </button>
          </>
        ) : (
          <form onSubmit={handleSave}>

            <label>Full Name</label>

            <input
              type="text"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <label>Email</label>

            <input
              type="email"
              value={currentUser}
              disabled
            />

            <label>Phone Number</label>

            <input
              type="tel"
              placeholder="Enter phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />

            <label>Address</label>

            <textarea
              placeholder="Enter your address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />

            <button
              type="submit"
              className="save-profile-btn"
            >
              Save Profile
            </button>

          </form>
        )}

        <div className="profile-links">

          <button onClick={() => navigate("/order")}>
            📦 My Orders
          </button>

          <button onClick={() => navigate("/wishlist")}>
            ❤️ Wishlist
          </button>

          <button onClick={() => navigate("/cart")}>
            🛒 My Cart
          </button>

        </div>

      </div>
    </div>
  );
}

export default Profile;