import React, { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider";

const Login = () => {
  const [username, setUsernameInput] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { setIsLoggedIn, setUsername } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const { data } = await axios.post("http://127.0.0.1:8000/api/v1/token/", {
        username,
        password,
      });

      // Save tokens
      localStorage.setItem("accessToken", data.access);
      localStorage.setItem("refreshToken", data.refresh);

      // Save login state + username in context + localStorage
      setIsLoggedIn(true);
      setUsername(username);

      navigate("/");
    } catch (err) {
      setError("❌ Invalid username or password. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-dark">
      <div className="col-md-4 bg-light p-5 rounded-4 shadow-lg">
        <h2 className="text-info text-center mb-4 fw-bold" style={{ fontFamily: "Segoe UI, sans-serif" }}>
          🔐 Login
        </h2>

        {error && <div className="alert alert-danger text-center">{error}</div>}

        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="text-dark form-label fw-semibold">Username</label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsernameInput(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="text-dark form-label fw-semibold">Password</label>
            <input
              type="password"
              className="form-control form-control-lg"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-info w-100 btn-lg fw-bold"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="text-center text-muted mt-4" style={{ fontSize: "0.9rem" }}>
          Don’t have an account? <a href="/register" className="text-info fw-semibold">Register</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
