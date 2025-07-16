import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/products/')
      .then(res => setProducts(res.data));
  }, []);

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Our Products</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {products.map(product => (
          <div key={product.id} className="card">
            <img src={`http://localhost:8000${product.image}`} alt={product.name} style={{ width: '100px' }} />
            <h4>{product.name}</h4>
            <p>₹{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}