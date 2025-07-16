import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function OrderTracking() {
  const guestId = localStorage.getItem('guest_id');
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (guestId) {
      axios.get(`http://localhost:8000/api/orders/?guest_id=${guestId}`)
        .then(res => setOrders(res.data));
    }
  }, [guestId]);

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Your Orders</h2>
      {orders.length === 0 ? <p>No orders found.</p> : (
        <ul>
          {orders.map(order => (
            <li key={order.id}>
              <strong>Status:</strong> {order.status} <br/>
              <small>{order.created_at}</small>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}