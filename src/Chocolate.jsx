import React, { useState } from 'react';
import './Chocolate.css';
import { useDispatch, useSelector } from 'react-redux';
import { AddToCart } from './Store';
import StarRating from './Starrating'; // Import the star component

function Chocolate() {
  const dispatch = useDispatch();
  const chocolateItems = useSelector((state) => state.products.chocolateItems) || [];

  const [currentPage, setCurrentPage] = useState(1);
  const [selectedRanges, setSelectedRanges] = useState([]);
  const itemsPerPage = 8;  // Adjust this to 8 items per page for better pagination with 4 items per row

  // Price Ranges
  const priceRanges = [
    { value: 'Rs1 to Rs50', min: 1, max: 50 },
    { value: 'Rs51 to Rs100', min: 51, max: 100 },
    { value: 'Rs101 to Rs200', min: 101, max: 200 },
    { value: 'Rs201 to Rs500', min: 201, max: 500 },
    { value: 'More than 500', min: 501, max: Infinity }
  ];

  // Handle price range filter selection
  const handleCheckboxChange = (value) => {
    if (selectedRanges.includes(value)) {
      setSelectedRanges(selectedRanges.filter((r) => r !== value));
    } else {
      setSelectedRanges([...selectedRanges, value]);
    }
    setCurrentPage(1);
  };

  const activeRanges = priceRanges.filter((range) => selectedRanges.includes(range.value));
  const filteredItems =
    selectedRanges.length === 0
      ? chocolateItems
      : chocolateItems.filter((item) =>
          activeRanges.some((range) => item.price >= range.min && item.price <= range.max)
        );

  // Pagination Calculations
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  // Mapping chocolate items for rendering
  const chocolateList = currentItems.map((item) => (
    <div className="chocolate-card" key={item.id}>
      <img src={item.image} alt={item.name} className="chocolate-img" />
      <p className="chocolate-description">{item.name}</p>
      <StarRating rating={item.rating} /> {/* ⭐ Show star rating here */}
      <p className="chocolate-price">Price: ₹{item.price}</p>
      <button 
        className="add-to-cart-bn"
        onClick={() => dispatch(AddToCart(item))}
      >
        Add to Cart
      </button>
    </div>
  ));

  return (
    <div className="chocolate-container">
      <h1 className="chocolate-title">Chocolate Items</h1>
      <p className="chocolate-description">Delicious and creamy chocolates for you!</p>

      <div className="chocolate-content">
        {/* Price Range Card */}
        <div className="chocolate-price-card-container">
          <h3>Filter by Price</h3>
          <div className="chocolate-price-filters">
            {priceRanges.map((range) => (
              <div key={range.value} className={`chocolate-price-card ${selectedRanges.includes(range.value) ? 'selected' : ''}`}>
                <input
                  type="checkbox"
                  onChange={() => handleCheckboxChange(range.value)}
                  checked={selectedRanges.includes(range.value)}
                />
                <span>{range.value}</span>
              </div>
            ))}
          </div>
          <button
            className="clear-filters-button"
            onClick={() => {
              setSelectedRanges([]);
              setCurrentPage(1);
            }}
          >
            Clear Filters
          </button>
        </div>

        {/* Chocolate Items Parent Card */}
        <div className="chocolate-items-card">
          <div className="chocolate-items">
            {chocolateList.length === 0 ? (
              <p>No products found in selected price range.</p>
            ) : (
              chocolateList
            )}
          </div>
        </div>
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

export default Chocolate;
