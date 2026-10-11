import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/Register.css";

function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const user = {
      name,
      contact,
      email,
      password,
    };

    localStorage.setItem("user", JSON.stringify(user));

    alert("Registration Successful");

    navigate("/login");
  };

  return (
    <div className="register-page">
      <div className="register-card">

        <h2>Create Account</h2>

        <form onSubmit={handleSubmit}>

          <div className="input-group">
            <label>Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              pattern="[A-Z][a-zA-Z ]*"
              title="First letter must be capital"
              required
            />
          </div>

          <div className="input-group">
            <label>Mobile Number</label>
            <input
              type="tel"
              placeholder="Enter mobile number"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              pattern="[0-9]{10}"
              title="Enter exactly 10 digits"
              required
            />
          </div>

          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Minimum 8 characters"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              minLength="8"
              title="Password must contain at least 8 characters"
              required
            />
          </div>

          <div className="input-group">
            <label>Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              minLength="8"
              required
            />
          </div>

          <button type="submit" className="register-btn">
            Register
          </button>

          <p className="login-text">
            Already have an account?
            <Link to="/login"> Login</Link>
          </p>

        </form>

      </div>
    </div>
  );
}

export default Register;