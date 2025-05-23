import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import './Signing.css';

function Signing() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    // Get registered users from localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Check for valid user
    const validUser = users.find(
      (user) =>
        user.username.trim().toLowerCase() === data.username.trim().toLowerCase() &&
        user.password === data.password
    );

    if (validUser) {
      alert("Login Successful");
      localStorage.setItem("loggedInUser", JSON.stringify(validUser));
      navigate('/Veg'); // Redirect to Veg page
    } else {
      setError("username", {
        type: "manual",
        message: "Invalid username or password"
      });
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
              {...register('username', { required: "Username is required" })}
            />
            {errors.username && <p className="error-message">{errors.username.message}</p>}
          </div>

          <div className="input-group">
            <input
              type="password"
              placeholder="Password"
              {...register('password', { required: "Password is required" })}
            />
            {errors.password && <p className="error-message">{errors.password.message}</p>}
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
