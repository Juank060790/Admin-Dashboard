import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import { loginUser } from "../../redux/actions/auth.actions";
import "./login.css";

function LoginPage() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // eslint-disable-next-line
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  // const loading = props.loading;

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formData;
    dispatch(loginUser(email, password));
  };

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  } else {
    return (
      <div className="email-password-container">
        <div className="email-password-div ">
          <p className="sign" align="center">
            Sign in
          </p>
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="email-password-field">
              <input
                className="user-name"
                type="text"
                align="center"
                placeholder="Username"
                onChange={handleChange}
                value={formData.email}
                name="email"
                required
              />
            </div>
            <div className="email-password-field">
              <input
                className="pass"
                type="password"
                align="center"
                placeholder="Password"
                onChange={handleChange}
                value={formData.password}
                name="password"
              />
            </div>
            <input
              type="submit"
              className="submit"
              align="center"
              value="Enter"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default LoginPage;
