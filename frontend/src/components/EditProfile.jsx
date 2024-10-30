import React, { useState, useEffect } from "react";
import "../style/editprofile.css";
import axios from "axios";
import toast from "react-hot-toast";

const EditProfile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errorMessages, setErrorMessages] = useState([]);
  const [pendingConfirmation, setPendingConfirmation] = useState(null);
  const user_id = sessionStorage.getItem("userId");

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/v1/users/${user_id}`
        );
        const userData = response.data;
        setName(userData.name);
        setEmail(userData.email);
        setPendingConfirmation(userData.pending_confirmation);
      } catch (error) {
        console.log("Failed to fetch user details:", error);
        setErrorMessages(["Failed to fetch user details"]);
      }
    };

    if (user_id) {
      fetchUserDetails();
    }
  }, [user_id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== passwordConfirmation) {
      toast.error("Passwords don't match");
      return;
    }

    try {
      await axios.put(`http://localhost:3000/api/v1/users/${user_id}`, {
        name,
        email,
        password,
      });
      toast.success("Profile updated successfully");
      setTimeout(() => {
        window.location.href = "/";
      }, 1500);
    } catch (error) {
      console.log("Failed to update profile:", error);
      setErrorMessages(["Failed to update profile"]);
    }
  };

  const handleDeleteAccount = () => {
    if (window.confirm("Are you sure you want to delete your account?")) {
      try {
        axios.delete(`http://localhost:3000/api/v1/users/${user_id}`);
        toast.success("Account deleted successfully");
        setTimeout(() => {
          window.location.href = "/";
        }, 1500);
      } catch (error) {
        console.log("Failed to delete account:", error);
        setErrorMessages(["Failed to delete account"]);
      }
    }
  };

  return (
    <div className="edit-form-container">
      <h2>Edit Account</h2>

      <div className="error-messages">
        {errorMessages.map((error, index) => (
          <div key={index}>{error}</div>
        ))}
      </div>

      <form onSubmit={handleSubmit}>
        <div className="field">
          <label>Name</label>
          <br />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoFocus
            autoComplete="name"
          />
        </div>
        <div className="field">
          <label>Email</label>
          <br />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
          />
        </div>

        {pendingConfirmation && (
          <div className="pending-confirmation">
            Currently waiting confirmation for: {pendingConfirmation}
          </div>
        )}

        <div className="field">
          <label>Password</label>
          <br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="new-password"
          />
        </div>

        <div className="field">
          <label>Password Confirmation</label>
          <br />
          <input
            type="password"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            autoComplete="new-password"
          />
        </div>

        <div className="actions">
          <input type="submit" value="Update" />
        </div>
      </form>

      <div className="cancel-account">
        <div>
          Unhappy?{" "}
          <button onClick={handleDeleteAccount}>Delete my account</button>
        </div>
      </div>

      <a href="javascript:history.back()" className="back-link">
        Back
      </a>
    </div>
  );
};

export default EditProfile;
