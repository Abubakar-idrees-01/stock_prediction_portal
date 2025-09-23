import React, { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

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
    <div className="container vh-100 d-flex align-items-center justify-content-center bg-dark">
      <div className="row justify-content-center w-100 animate__animated animate__fadeInUp">
        <div className="col-md-6 p-5 rounded shadow-lg bg-light border-start border-4 border-info">
          <h3 className="text-center mb-4 fw-bold text-info">🔐 Login</h3>

          {error && (
            <div className="alert alert-danger text-center animate__animated animate__fadeIn">
              {error}
            </div>
          )}

          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <input
                type="text"
                className="form-control border-0 rounded-3 shadow-sm"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsernameInput(e.target.value)}
                required
              />
            </div>

            <div className="mb-4">
              <input
                type="password"
                className="form-control border-0 rounded-3 shadow-sm"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {loading ? (
              <button
                type="submit"
                className="btn btn-info w-100 py-2 fw-bold rounded-3 shadow-sm animate__animated animate__pulse animate__infinite"
                disabled
              >
                <FontAwesomeIcon icon={faSpinner} spin className="me-2" /> Logging in...
              </button>
            ) : (
              <button
                type="submit"
                className="btn btn-info w-100 py-2 fw-bold text-white rounded-3 shadow-sm animate__animated animate__fadeIn"
              >
                Login
              </button>
            )}
          </form>

          <p
            className="text-center text-muted mt-4"
            style={{ fontSize: "0.9rem" }}
          >
            Don’t have an account?{" "}
            <a href="/register" className="text-info fw-semibold">
              Register
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
