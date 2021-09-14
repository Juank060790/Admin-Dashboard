import React from "react";
import "./login.css";

function LoginPage() {
  return (
    <div className="email-password-container">
      <div className="email-password-div ">
        <p className="sign" align="center">
          Sign in
        </p>
        <form className="form1">
          <div className="email-password-field">
            <input
              className="user-name "
              type="text"
              align="center"
              placeholder="Username"
            />
          </div>
          <div className="email-password-field">
            <input
              className="pass"
              type="password"
              align="center"
              placeholder="Password"
            />
          </div>
          <btn className="submit" align="center">
            Sign in
          </btn>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
