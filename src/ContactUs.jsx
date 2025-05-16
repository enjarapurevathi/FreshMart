import React, { useState } from "react";
import './Page.css';

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert("Your message has been sent!");
  };

  return (
    <div className="page">
      {/* Contact Us Header */}
      <div className="card">
        <h1>Contact Us 📨</h1>
        <p>
          We would love to hear from you! If you have any questions, feedback, or inquiries,
          please reach out to us. Our team is here to assist you with anything you need.
        </p>
      </div>

      {/* Contact Info Section */}
      <div className="card contact-info">
        <h2>Contact Information 📍</h2>
        <p><strong>Email 📧:</strong> support@freshmart.com</p>
        <p><strong>Phone 📞:</strong> +1 (123) 456-7890</p>
        <p><strong>Address 🏠:</strong> 123 FreshMart Street, Freshville, FV 12345</p>
      </div>

      {/* Contact Form */}
      <div className="card contact-form">
        <h2>Get in Touch ✍️</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Enter Name 🧑‍💼</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              placeholder="Enter your name" 
              value={formData.name} 
              onChange={handleChange} 
              required 
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Enter Email Address 📧</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              placeholder="Enter your email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Enter Message ✉️</label>
            <textarea 
              id="message" 
              name="message" 
              placeholder="Enter your message" 
              value={formData.message} 
              onChange={handleChange} 
              required 
            />
          </div>

          <button type="submit" className="submit-btn">Send Message 💬</button>
        </form>
        <p>
          By contacting us you agree to the <a href="/terms">Terms and Conditions 📜</a> and <a href="/privacy-policy">Privacy Policy 🔒</a>.
        </p>
      </div>

      {/* Investor Relations Section */}
      <div className="card investor-relations">
        <h2>Investors/Shareholders 📈</h2>
        <p><strong>Abhishek Agarwal</strong> - Vice President, Investor Relations</p>
        <p>Email: <a href="mailto:ir@freshmart.com">ir@freshmart.com 📧</a></p>
        <p><strong>Registrar and Share Transfer Agent 📝</strong></p>
        <p>Link Intime India Private Limited</p>
        <p>Email: <a href="https://www.linkintime.co.in/" target="_blank" rel="noopener noreferrer">https://www.linkintime.co.in/ 🌐</a></p>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 FreshMart Ltd. All rights reserved. 🌱</p>
      </footer>
    </div>
  );
}

export default ContactUs;
