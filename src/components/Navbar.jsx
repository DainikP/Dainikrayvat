import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const cartCount = useSelector(state =>
    state.cart.items.reduce((count, item) => count + item.quantity, 0)
  );

  return (
    <nav className="p-4 bg-gray-800 text-white flex justify-between">
      <Link to="/home">Home</Link>
      <div>
        <Link to="/checkout" className="relative">
          Cart ({cartCount})
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
