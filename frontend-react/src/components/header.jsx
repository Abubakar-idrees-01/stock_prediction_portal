import React, { useContext } from "react";   // <-- added useContext
import Button from "./button";
import { Link , useNavigate } from "react-router-dom";     // <-- removed useNavigate (not used)
import { AuthContext } from "../AuthProvider";

const Header = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const usenavigate=useNavigate();

  return (
    <>
      <nav className="navbar container pt-3 pb-3 align-items-start">
        <Link className="navbar-brand text-light" to="/">
          Stock Prediction Portal
        </Link>
        <div>
          {isLoggedIn ? (
            <>
              <button
                className="btn btn-danger"
                onClick={() => {
                  localStorage.removeItem("accessToken");
                  localStorage.removeItem("refreshToken");
                  localStorage.removeItem("username");
                  setIsLoggedIn(false);
                  usenavigate("/login")
                }}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Button
                text="Login"
                url="/login"
                className="btn btn-outline-info"
              />
              &nbsp;
              <Button
                text="Register"
                url="/register"
                className="btn btn-info"
              />
            </>
          )}
        </div>
      </nav>
    </>
  );
};

export default Header;
