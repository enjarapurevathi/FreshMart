import React, { useState } from 'react';
import './Milk.css';
import { useDispatch, useSelector } from 'react-redux';
import { AddToCart } from './Store';

function Milk() {
  const dispatch = useDispatch();

  // Correctly access milkProducts from the Redux store
  const milkProducts = useSelector((state) => state.products.milkProducts) || [];

  const [currentPage, setCurrentPage] = useState(1);
  const [selectedRanges, setSelectedRanges] = useState([]);
  const itemsPerPage = 8; // 8 items per page

  // Price Ranges
  const priceRanges = [
    { value: 'Rs1 to Rs50', min: 1, max: 50 },
    { value: 'Rs51 to Rs100', min: 51, max: 100 },
    { value: 'Rs101 to Rs200', min: 101, max: 200 },
    { value: 'Rs201 to Rs500', min: 201, max: 500 },
    { value: 'More than 500', min: 501, max: Infinity }
  ];

  const handleCheckboxChange = (value) => {
    if (selectedRanges.includes(value)) {
      setSelectedRanges(selectedRanges.filter((r) => r !== value));
    } else {
      setSelectedRanges([...selectedRanges, value]);
    }
    setCurrentPage(1);
  };

  const activeRanges = priceRanges.filter((range) => selectedRanges.includes(range.value));
  const filteredProducts =
    selectedRanges.length === 0
      ? milkProducts
      : milkProducts.filter((product) =>
          activeRanges.some((range) => product.price >= range.min && product.price <= range.max)
        );

  // Pagination calculations
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);

  // Add to cart handler
  const handleAddToCart = (product) => {
    dispatch(AddToCart(product));
  };

  return (
    <div className="milk-container">
      <h1 className="milk-title">Milk Items</h1>
      <p className="milk-description">Fresh and healthy milk for you!</p>

      <div className="milk-content">
        {/* Sidebar for Price Filters */}
        <div className="milk-sidebar">
          <h3>Filter by Price</h3>
          <div className="milk-price-filters">
            {priceRanges.map((range) => (
              <div key={range.value} className={`milk-price-card ${selectedRanges.includes(range.value) ? 'selected' : ''}`}>
                <input
                  type="checkbox"
                  onChange={() => handleCheckboxChange(range.value)}
                  checked={selectedRanges.includes(range.value)}
                />
                {range.value}
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

        {/* Product List */}
        <div className="milk-products-container">
          {currentItems.length === 0 ? (
            <p>No products found in selected price range.</p>
          ) : (
            currentItems.map((product) => (
              <div key={product.id} className="milk-product-card">
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-img"
                  onError={(e) => {
                    e.target.src = '/images/default.jpg';
                  }}
                />
                <h2 className="product-title">{product.name}</h2>
                <p className="product-price">Price: ₹{product.price}</p>
                <p className="product-description">{product.description}</p>
                <button className="add-to-cart-btn" onClick={() => handleAddToCart(product)}>
                  Add to Cart
                </button>
              </div>
            ))
          )}
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

export default Milk;
