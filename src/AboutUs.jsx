import React from "react";
import './AboutUs.css';

function AboutUs() {
  return (
    <div className="page">
      {/* About FreshMart Section */}
      <div className="card about-section">
        <h1>About FreshMart 🌱</h1>
        <p>
          We’re a modern grocery store built on old-school values: quality, trust,
          and service. Started in 2020, FreshMart helps thousands of customers
          enjoy fresh and affordable food, every single day.
        </p>
      </div>

      {/* Location Section */}
      <div className="card location-section">
        <h2>Our Location 📍</h2>
        <p>
          FreshMart is headquartered in the heart of the city with locations
          spread across multiple regions to ensure timely and fresh deliveries.
        </p>
        <p>
          <strong>Headquarters:</strong> 123 FreshMart St., Hyderabad, SR Nagar
        </p>
        <p>
          Our stores are located in several cities, bringing FreshMart closer to
          your doorstep every day.
        </p>

        {/* Embedded Google Map */}
        <div className="map-container">
          <iframe
            title="FreshMart Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.623869447137!2d78.44675841443463!3d17.40174208401491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb933af8e4931f%3A0x7b3a9255f22e7d6a!2sSR%20Nagar%2C%20Hyderabad%2C%20Telangana%2C%20India!5e0!3m2!1sen!2sus!4v1625392288454!5m2!1sen!2sus"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Company Information Section */}
      <div className="card company-info-section">
        <h2>Company Information 🏢</h2>
        <p>
          FreshMart is a privately owned company that believes in making grocery
          shopping more convenient, affordable, and enjoyable for everyone.
        </p>
        <p>
          <strong>Founded:</strong> 2025
        </p>
        <p>
          <strong>CEO:</strong> Easwar
        </p>
        <p>
          We are committed to sustainable sourcing, minimizing waste, and supporting local
          farmers and businesses to ensure the freshest produce for our customers.
        </p>
      </div>

      {/* Partnerships Section */}
      <div className="card partnerships-section">
        <h2>Our Partnerships 🤝</h2>
        <p>
          FreshMart collaborates with local farms, trusted suppliers, and international brands to
          bring the best products to your table. Our partnerships focus on quality, sustainability, and
          innovation in the grocery industry.
        </p>
        <p>
          We work with several leading brands like XYZ Farms, Organic Earth, and more, ensuring only the
          best reaches our customers.
        </p>
      </div>

      {/* Customer Testimonials Section */}
      <div className="card testimonials-section">
        <h2>What Our Customers Say 💬</h2>
        <p>
          "FreshMart has been a game changer for our family! The quality of the produce and the
          variety of products is unmatched. We love the convenience of getting everything we need
          delivered right to our door!" - Sarah L.
        </p>
        <p>
          "I trust FreshMart to always deliver fresh and affordable items. Their customer service
          is top-notch, and they always go the extra mile." - Mark T.
        </p>
        <p>
          Join the thousands of happy customers who trust FreshMart every day!
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
