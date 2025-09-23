import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider";

const Header = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("username");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <nav className="d-flex justify-content-between align-items-center px-4 py-3 bg-dark shadow-sm">
      {/* Website Name / Brand */}
      <Link
        to="/"
        className="fw-bold text-info text-decoration-none"
        style={{
          fontSize: "1.8rem",
          letterSpacing: "1px",
          fontFamily: "Segoe UI, sans-serif",
        }}
      >
        📊 Stock Prediction <span className="text-light">Portal</span>
      </Link>

      {/* Buttons */}
      <div>
        {isLoggedIn ? (
          <button
            className="btn btn-danger fw-semibold px-4 py-2 rounded-3 shadow-sm"
            onClick={handleLogout}
          >
            Logout
          </button>
        ) : (
          <>
            <Link
              to="/login"
              className="btn btn-outline-info fw-semibold px-4 py-2 rounded-3 shadow-sm me-2"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="btn btn-info fw-semibold text-white px-4 py-2 rounded-3 shadow-sm"
            >
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Header;
