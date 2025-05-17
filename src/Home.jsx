import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import './Home.css';

const quickCategories = [
  { title: 'Vegetables', image: '/images/veglogo.jpg', link: '/veg' },
  { title: 'Non-Veg', image: '/images/nonveglogo.jpg', link: '/nonveg' },
  { title: 'Milk Products', image: '/images/milklogo.jpg', link: '/milk' },
  { title: 'Chocolates', image: '/images/chocolatelogo.jpg', link: '/chocolates' },
];

const foodItems = [
  { name: 'Chocolate', img: '/images/chocolates.jpg' },
  { name: 'milk', img: '/images/wholemilk.jpg' },
  { name: 'Cakes', img: '/images/chocolate.jpg' },
  { name: 'Yougurt', img: '/images/pinaryogurt.jpg' },
];

const Home = () => {
  return (
    <div className="home-page">

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            🛒 Welcome to <span className="highlight">FreshMart</span>
          </h1>
          <p className="hero-description">
            Fresh groceries, premium meats, dairy & more. Fast delivery. Great prices. Loved by families!
          </p>
          <div className="search-bar">
            <input
              type="text"
              className="search-input"
              placeholder="Search for vegetables, meat, milk..."
            />
            <button className="search-button">
              <FaSearch />
            </button>
          </div>
          <a href="#menu" className="cta-button">Start Shopping ↓</a>
        </div>
      </section>

      {/* Quick Categories (Circle Cards) */}
      <section className="quick-categories-section container">
        <div className="quick-categories">
          {quickCategories.map((item, index) => (
            <Link to={item.link} className="category-circle" key={index}>
              <img src={item.image} alt={item.title} />
              <span>{item.title}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Our Menu */}
      <section className="menu-section container" id="menu">
        <h2 className="section-title">Our Menu</h2>
        <div className="menu-grid">
          {quickCategories.map((item, index) => (
            <Link to={item.link} key={index} className="menu-card">
              <img src={item.image} alt={item.title} className="menu-image" />
              <div className="menu-details">
                <h3 className="menu-title">{item.title}</h3>
                <p className="menu-description">
                  {item.title === 'Vegetables' && 'Farm-fresh and organic.'}
                  {item.title === 'Non-Veg' && 'Meat and seafood, fresh and clean.'}
                  {item.title === 'Milk Products' && 'Curd, milk, butter & more.'}
                  {item.title === 'Chocolates' && 'Sweet delights for your mood.'}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Special Food Items */}
      <section className="food-items-marquee container">
        <h2>Special Food Items</h2>
        <div className="marquee-container">
          <div className="marquee-content">
            {foodItems.map((item, index) => (
              <div className="marquee-item" key={index}>
                <img src={item.img} alt={item.name} />
                <p>{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-us container">
        <h2>Why Choose FreshMart?</h2>
        <ul>
          <li>🛍️ Curated Categories for Easy Shopping</li>
          <li>🚚 Lightning-Fast Home Delivery</li>
          <li>💳 Easy & Secure Payments</li>
          <li>📦 Reliable Quality Products</li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>© 2025 FreshMart. All rights reserved.</p>
          <p>Your smart choice for quick grocery delivery.</p>
        </div>
      </footer>

    </div>
  );
};

export default Home;
