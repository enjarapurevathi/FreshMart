import React, { useState } from 'react';
import './Nonveg.css';
import { useDispatch, useSelector } from 'react-redux';
import { AddToCart } from './Store';
import StarRating from './Starrating'; // Import the StarRating component

function Nonveg() {
  const nonvegProducts = useSelector((state) => state.products.Nonveg);
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPrice, setSelectedPrice] = useState(1000);  // Default slider value
  const itemsPerPage = 8;

  // Handle price change via slider
  const handlePriceChange = (e) => {
    setSelectedPrice(e.target.value);
    setCurrentPage(1);  // Reset to first page when price range changes
  };

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // Filter products based on the selected price range
  const filteredProducts = nonvegProducts.filter((product) => product.price <= selectedPrice);
  const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const handleAddToCart = (product) => {
    dispatch(AddToCart(product));
  };

  return (
    <div className="card-center">
      <h1 className="nonveg-title">Non-Veg Items</h1>

      {/* Price Slider */}
      <div className="price-slider-container">
        <label htmlFor="price-slider" className="price-slider-label">Price: ₹1 to ₹1000</label>
        <input
          type="range"
          id="price-slider"
          min="1"
          max="1000"
          value={selectedPrice}
          onChange={handlePriceChange}
          className="price-range-slider"
        />
        <p className="price-slider-value">₹{selectedPrice}</p>
      </div>

      {/* Product List - Horizontal Scroll */}
      <div className="nonveg-items">
        {currentItems.length === 0 ? (
          <p>No products found under ₹{selectedPrice}.</p>
        ) : (
          currentItems.map((product) => (
            <div key={product.id} className="nonveg-item">
              <img
                 src={product.image}
                  alt={product.name}
                   className="nonveg-img"
                      onError={(e) => { e.target.src = '/path/to/fallback-image.jpg'; }}  // Fallback image
                  />

              <p className="nonveg-item-name">{product.name}</p>

              {/* Star Rating Component */}
              <StarRating rating={product.rating} /> {/* Display stars here */}

              <p className="nonveg-item-price">₹{product.price}</p>
              <button
                className="add-cart-button"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          ))
        )}
      </div>

      {/* Pagination Controls */}
      <div className="pagination-controls">
        <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
          Prev
        </button>

        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={currentPage === index + 1 ? 'active' : ''}
          >
            {index + 1}
          </button>
        ))}

        <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Nonveg;
