import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import "../styles/styles.css";



const Login = () => {
  return (
    <div className="login-container">
      {/* Section gauche - Logo */}
      <div className="login-left">
        <h1>HOTEL MANAGEMENT SYSTEM</h1>
      </div>

      {/* Section droite - Formulaire */}
      <div className="login-right">
      <img src={require("../assets/logo.png")} alt="PMS Logo" className="login-logo" />
        <h2> Login</h2>
        
        <div className="input-group">
          <FontAwesomeIcon icon={faUser} className="input-icon" />
          <input type="text" placeholder="PCHotel3005" />
        </div>
        
        <div className="input-group">
          <FontAwesomeIcon icon={faLock} className="input-icon" />
          <input type="password" placeholder="••••••••••" />
        </div>

        <a href="#" className="forgot-password">Forgot Password?</a>

        <button className="login-btn">LOGIN</button>
      </div>
    </div>
  );
};

export default Login;
