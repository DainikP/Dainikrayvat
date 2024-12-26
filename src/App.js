import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Home from './pages/Home';
import CheckoutPage from './pages/CheckoutPage';
import './App.css';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/checkout" element={<CheckoutPage />} />
    </Routes>
  </Router>
);

export default App;