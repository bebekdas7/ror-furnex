import React, { useState } from "react";
import "../style/login.css";
import axios from "axios";
import toast from "react-hot-toast";

const Login = ({}) => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      user: {
        email,
        password,
      },
    };
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/login",
        data
      );
      toast.success("Login successful");
      console.log(response.data.data);
      sessionStorage.setItem("userId", response.data.data.id);
      setTimeout(() => {
        window.location.href = "/";
      }, 1500);
    } catch (error) {
      // toast.error(error.response.data.data.error);
      console.error("Login error:", error);
      window.location.reload;
    }
  };
  return (
    <div>
      <div className="login-form-container">
        <h2 className="mons">Log in</h2>
        <form onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="email">Email</label>
            <br />
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoFocus
              required
            />
          </div>

          <div className="field">
            <label htmlFor="password">Password</label>
            <br />
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              autoComplete="current-password"
              required
            />
          </div>

          <div className="actions">
            <input type="submit" value="Log in" />
          </div>
        </form>
        <div className="devise-links">
          <a href="/signup">New to our website? Signup</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
