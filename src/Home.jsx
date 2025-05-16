import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home-wrapper">

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>FreshMart: Convenience Delivered</h1>
          <p>Get your favorite groceries and meals delivered lightning fast!</p>
          {/* Updated Link to /Veg */}
          <Link to="/Veg" className="btn hero-btn">Start Shopping</Link>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section card container">
        <h2>About FreshMart</h2>
        <p>
          FreshMart is your go-to platform for daily essentials, fresh food, and groceries.
          Experience instant commerce with top-notch delivery and quality service.
        </p>
      </section>

      {/* Category Section */}
      <section className="categories-section card container">
        <h2>Shop by Category</h2>
        <div className="category-grid">
          <Link to="/Veg" className="category-card">
            <img src="/images/veglogo.jpg" alt="Fresh Vegetables" />
            <p>Fresh Vegetables</p>
          </Link>
          <Link to="/NonVeg" className="category-card">
            <img src="/images/nonveglogo.jpg" alt="Non-Veg Items" />
            <p>Non-Veg Items</p>
          </Link>
          <Link to="/Milk" className="category-card">
            <img src="/images/milklogo.jpg" alt="Milk Products" />
            <p>Milk Products</p>
          </Link>
          <Link to="/Chocolate" className="category-card">
            <img src="/images/chocolatelogo.jpg" alt="Chocolates" />
            <p>Chocolate Delights</p>
          </Link>
        </div>
      </section>

      {/* Careers Section */}
      <section className="careers-section card container">
        <h2>Join Our Team</h2>
        <p>Help shape the future of quick commerce. FreshMart is hiring passionate people!</p>
        <Link to="/Careers" className="btn explore-btn">Explore Careers</Link>
      </section>

      {/* Footer Section */}
      <footer className="footer container">
        <div className="footer-columns">
          <div>
            <h4>Company</h4>
            <ul>
              <li><Link to="/AboutUs">About Us</Link></li>
              <li><Link to="/Careers">Careers</Link></li>
              <li><Link to="/Team">Team</Link></li>
            </ul>
          </div>
          <div>
            <h4>Legal</h4>
            <ul>
              <li><Link to="/Terms">Terms</Link></li>
              <li><Link to="/Privacy">Privacy</Link></li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <p>Email: support@freshmart.com</p>
          </div>
        </div>
        <p className="footer-bottom">© 2025 FreshMart Ltd. All rights reserved.</p>
      </footer>

    </div>
  );
}

export default Home;
