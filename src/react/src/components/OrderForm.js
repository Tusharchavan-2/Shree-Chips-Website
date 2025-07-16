import React, { useState } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

export default function OrderForm() {
  const [form, setForm] = useState({
    customer_name: '', phone: '', address: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const guestId = localStorage.getItem('guest_id') || uuidv4();
  localStorage.setItem('guest_id', guestId);

  const submitOrder = () => {
    const order = {
      ...form,
      guest_id: guestId,
      items: [], // Can extend with actual cart
    };

    axios.post('http://localhost:8000/api/orders/', order)
      .then(() => setSubmitted(true));
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Place Your Order</h2>
      <input type="text" placeholder="Name" onChange={e => setForm({...form, customer_name: e.target.value})} />
      <input type="text" placeholder="Phone" onChange={e => setForm({...form, phone: e.target.value})} />
      <textarea placeholder="Address" onChange={e => setForm({...form, address: e.target.value})}></textarea>
      <button onClick={submitOrder}>Submit</button>
      {submitted && <p>Order placed successfully!</p>}
    </div>
  );
}