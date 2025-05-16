import React, { useState } from 'react';
import './Veg.css';
import { useSelector, useDispatch } from 'react-redux';
import { AddToCart } from './Store';
import "react-toastify/dist/ReactToastify.css";

import { toast, ToastContainer } from 'react-toastify';

function Veg() {
  const vegProducts = useSelector((globalstate) => globalstate.products.Veg);
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const [selectedRanges, setSelectedRanges] = useState([]);
  const itemsPerPage = 8;
  

  const priceRanges = [
    { value: 'Rs1 to Rs50', min: 1, max: 50 },
    { value: 'Rs51 to Rs100', min: 51, max: 100 },
    { value: 'Rs101 to Rs200', min: 101, max: 200 },
    { value: 'Rs201 to Rs500', min: 201, max: 500 },
    { value: 'morethan 500', min: 501, max: Infinity }
  ];

  const handleCheckboxChange = (value) => {
    if (selectedRanges.includes(value)) {
      const updated = selectedRanges.filter((r) => r !== value);
      setSelectedRanges(updated);
    } else {
      const updated = [...selectedRanges, value];
      setSelectedRanges(updated);
    }
    setCurrentPage(1);
  };

  const activeRanges = priceRanges.filter((range) => selectedRanges.includes(range.value));
  const filteredProducts =
    selectedRanges.length === 0
      ? vegProducts
      : vegProducts.filter((product) =>
          activeRanges.some(
            (range) => product.price >= range.min && product.price <= range.max
          )
        );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  //const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);
  const currentItems = filteredProducts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const handleAddToCart = (product) => {
  dispatch(AddToCart(product));
  toast.success(`${product.name} added to cart! 🛒`);
  };

  
  return (
    <div className="veg-container">
      <h1 className="veg-title">Veg Items Here</h1>

      <div className="veg-content">
        {/* Left Sidebar - Filters */}
        <div className="veg-sidebar">
          <h3>Filter by Price</h3>
          {priceRanges.map((range) => (
  <label key={range.value} className="veg-filter">
    <input
      type="checkbox"
      onChange={() => handleCheckboxChange(range.value)}
      checked={selectedRanges.includes(range.value)}
    />
    {range.value}
  </label>
))}

{/* Clear All Button */}
<button className="clear-filters-button" onClick={() => {
  setSelectedRanges([]);
  setCurrentPage(1);
}}>
  Clear All Filters
</button>

        </div>

        {/* Right Side - Products */}
        <div className="veg-items-container">
          {currentItems.length === 0 ? (
            <p>No products found in selected price range.</p>
          ) : (
            currentItems.map((product) => (
              <div key={product.id} className="veg-item">
                <img
                  src={product.image}
                  alt={product.name}
                  className="veg-img"
                  onError={(e) => {
                    e.target.src = '/images/default.jpg';
                  }}
                />
                <p className="veg-item-name">{product.name}</p>
                <p className="veg-item-price">₹{product.price}</p>
                <button className="add-cart-button" onClick={() => handleAddToCart(product)}>
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
            style={{
              margin: '0 5px',
              fontWeight: currentPage === index + 1 ? 'bold' : 'normal',
            }}
          >
            {index + 1}
          </button>
        ))}

        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
      <div>
        <ToastContainer position="bottom-center" autoClose={2000} />
      </div>
    </div>
  );
}

export default Veg;
