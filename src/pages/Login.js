import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/Login.css";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const user = JSON.parse(
      localStorage.getItem("user")
    );

    if (!user) {
      alert("Please register first");
      navigate("/register");
      return;
    }

    if (
      email === user.email &&
      password === user.password
    ) {
      localStorage.setItem("isLogin", "true");

      localStorage.setItem(
        "currentUser",
        email
      );

      alert("Login Successful");

      navigate("/");
    } else {
      alert("Invalid Email or Password");
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">

        <h2>Login</h2>

        <form onSubmit={handleLogin}>

          <div className="input-group">
            <label>Email</label>

            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>

            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              minLength="8"
              title="Password must be at least 8 characters"
              required
            />
          </div>

          <button
            type="submit"
            className="login-btn"
          >
            Login
          </button>

          <p className="register-text">
            Don't have an account?

            <Link to="/register">
              {" "}Register
            </Link>
          </p>

        </form>

      </div>
    </div>
  );
}

export default Login;