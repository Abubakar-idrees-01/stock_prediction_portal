import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom'
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate()
  
  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    try {
      const { data } = await axios.post("http://127.0.0.1:8000/api/v1/token/", {
        username,
        password,
      });

      // Save tokens
      localStorage.setItem("accessToken", data.access);
      localStorage.setItem("refreshToken", data.refresh);

      setSuccess(true);
      console.log("Tokens saved:", data);
      navigate("/")
    } catch {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="container mt-5">
      <div className="col-md-4 offset-md-4 bg-light p-4 rounded shadow">
        <h3 className="text-center mb-4 text-info">Login</h3>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && <div className="text-danger text-center mb-3">{error}</div>}
          {success && (
            <div className="text-success text-center mb-3">
              ✅ Logged in successfully!
            </div>
          )}

          <button type="submit" className="btn btn-info w-100">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
 