import React, { useState } from 'react';
import { useSelector } from 'react-redux';

function Orders() {
  const orderDetailsList = useSelector(globalState => globalState.orders);
  const [expandedOrderId, setExpandedOrderId] = useState(null);

  const handleToggle = (orderId) => {
    setExpandedOrderId(prevOrderId => (prevOrderId === orderId ? null : orderId));
  };

  const orderListItems = orderDetailsList.map((purchase, index) => (
    <li key={index} className="order-entry" style={{ marginBottom: '20px', padding: '10px', borderBottom: '1px solid #ccc' }}>
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

      {expandedOrderId === purchase.orderId && (
        <div className="order-details" style={{ marginTop: '10px', padding: '10px', border: '1px solid #ddd', backgroundColor: '#f9f9f9' }}>
          <h4>Order Details</h4>
          <ul>
            {purchase.items.map((item, itemIndex) => (
              <li key={itemIndex} style={{ display: 'flex', gap: '15px', marginBottom: '10px' }}>
                <img 
                  src={item.imageUrl} 
                  alt={item.name} 
                  style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '8px' }} 
                />
                <div>
                  <p><strong>Item:</strong> {item.name}</p>
                  <p><strong>Quantity:</strong> {item.quantity}</p>
                  <p><strong>Price:</strong> ₹{parseFloat(item.price).toFixed(2)}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  ));

  return (
    <div className="orders-container" style={{ padding: '20px' }}>
      <h2 style={{ color: 'blue' }}>Order History</h2>
      {orderDetailsList.length === 0 ? (
        <p>No orders have been placed yet.</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>{orderListItems}</ul>
      )}
    </div>
  );
}

export default Orders;
