import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/categories">Categories</Link>
      <Link to="/order">Place Order</Link>
      <Link to="/track">Track Order</Link>
    </nav>
  );
}