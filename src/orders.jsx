import React, { useState } from 'react';
import { useSelector } from 'react-redux';

function Orders() {
  const orderDetailsList = useSelector(globalState => globalState.orders);

  // New state to track which order is expanded
  const [expandedOrderId, setExpandedOrderId] = useState(null);

  const handleToggle = (orderId) => {
    setExpandedOrderId(prevOrderId => (prevOrderId === orderId ? null : orderId));
  };

  // Prepare order list items outside return
  const orderListItems = orderDetailsList.map((purchase, index) => (
    <li key={index} className="order-entry">
      {/* Clickable Order ID */}
      <p>
        <strong>Order ID:</strong>{' '}
        <span 
          style={{ color: 'blue', cursor: 'pointer', textDecoration: 'underline' }} 
          onClick={() => handleToggle(purchase.orderId)}
        >
          {purchase.orderId}
        </span>
      </p>
      <p><strong>Date:</strong> {purchase.date}</p>
      <p><strong>Items:</strong> {purchase.items.length} items</p>
      <p><strong>Total Amount:</strong> ₹{parseFloat(purchase.finalprice).toFixed(2)}</p>

      {/* Toggle section */}
      {expandedOrderId === purchase.orderId && (
        <div className="order-details" style={{ marginTop: '10px', padding: '10px', border: '1px solid #ddd' }}>
          <h4>Order Details</h4>
          <ul>
            {purchase.items.map((item, itemIndex) => (
              <li key={itemIndex} style={{ marginBottom: '10px' }}>
                <img src={item.imageUrl} alt={item.name} style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
                <p><strong>Item:</strong> {item.name}</p>
                <p><strong>Quantity:</strong> {item.quantity}</p>
                <p><strong>Price:</strong> ₹{parseFloat(item.price).toFixed(2)}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  ));

  return (
    <div className="orders-container">
      <h2>Order History</h2>
      {orderDetailsList.length === 0 ? (
        <p>No orders have been placed yet.</p>
      ) : (
        <ul>{orderListItems}</ul>
      )}
    </div>
  );
}

export default Orders;
