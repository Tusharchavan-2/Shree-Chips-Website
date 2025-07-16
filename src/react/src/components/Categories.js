import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/categories/')
      .then(res => setCategories(res.data));
  }, []);

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Product Categories</h2>
      <ul>
        {categories.map(cat => (
          <li key={cat.id}>{cat.name}</li>
        ))}
      </ul>
    </div>
  );
}