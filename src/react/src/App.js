import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Products from './components/Products';
import Categories from './components/Categories';
import OrderForm from './components/OrderForm';
import OrderTracking from './components/OrderTracking';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/order" element={<OrderForm />} />
        <Route path="/track" element={<OrderTracking />} />
      </Routes>
    </Router>
  );
}

export default App;
