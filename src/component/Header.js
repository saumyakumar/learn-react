import { headerLogo } from "../utils/constant.js";
import { useState } from "react";
import Button from "./Button.jsx";
import { Link } from "react-router-dom";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="header" id="header">
      <div className="logo_container">
        <img src={headerLogo} alt="logo" className="logo" />
      </div>
      <div className="navigations">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <Button
          className="login-btn"
          text={isLoggedIn ? "Login" : "Logout"}
          handleClick={() => setIsLoggedIn(!isLoggedIn)}
        />
      </div>
    </div>
  );
};

export default Header;
