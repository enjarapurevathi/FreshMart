import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import './Signing.css';

function Signing() {
  const { register, handleSubmit, setError } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    // Get all registered users from localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Check if user exists and password matches
    const validUser = users.find(
      (user) => user.username === data.username && user.password === data.password
    );

    if (validUser) {
      alert("Login Successful");
      // You can optionally save logged-in user info separately
      localStorage.setItem("loggedInUser", JSON.stringify(validUser));
      navigate('/Veg'); // Redirect after login
    } else {
      // Show error if credentials are invalid
      setError("username", { type: "manual", message: "Invalid username or password" });
    }
  };

  return (
    <div className="signing-container">
      <div className="signing-box">
        <h2 className="signing-title">User Sign In</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="input-group">
            <input
              type="text"
              placeholder="Username"
              {...register('username', { required: true })}
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              placeholder="Password"
              {...register('password', { required: true })}
            />
          </div>
          <button type="submit" className="sign-in-btn">Sign In</button>
        </form>
        <p className="signup-link">
          Don't have an account? <a href="/Signup">Sign Up</a>
        </p>
      </div>
    </div>
  );
}

export default Signing;