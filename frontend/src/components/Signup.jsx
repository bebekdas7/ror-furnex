import React, { useState } from "react";
import "../style/signup.css";
import toast from "react-hot-toast";
import axios from "axios";

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirm, setPasswordConfirm] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password != password_confirm) {
      toast.error("Password do not match");
      setTimeout(() => {
        window.location.href = "/signup";
      }, 1500);
    } else {
      try {
        const response = await axios.post(
          "http://localhost:3000/api/v1/users",
          {
            user: {
              name,
              email,
              password,
            },
          }
        );
        toast.success("Signup successfull");
        console.log(response);
        sessionStorage.setItem("userId", response.data.id);
        setTimeout(() => {
          window.location.href = "/";
        }, 1500);
      } catch (error) {
        toast.error(error.response.data.errors);
        console.log(error);
        window.location.reload;
      }
    }
  };

  return (
    <div className="signup-form-container">
      <h2 className="mons">Sign up</h2>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="email">Name</label>
          <input
            type="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoComplete="name"
            required
          />
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            required
          />
        </div>
        <div className="field">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="new-password"
            required
          />
        </div>
        <div className="field">
          <label htmlFor="passwordConfirmation">Password Confirmation</label>
          <input
            type="password"
            name="passwordConfirmation"
            value={password_confirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
            autoComplete="new-password"
            required
          />
        </div>
        <div className="actions">
          <button type="submit" className="btn btn-primary">
            Sign up
          </button>
        </div>
      </form>
      <div className="devise-links">
        <a href="/login">Already have an account? Log in</a>
      </div>
    </div>
  );
};

export default App;
