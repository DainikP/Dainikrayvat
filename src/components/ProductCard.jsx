import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="border p-4">
      <img src={product.thumbnail} alt={product.title} className="w-full h-48 object-cover" />
      <h3 className="text-lg font-bold">{product.title}</h3>
      <p className="text-gray-600">${product.price}</p>
      <button
        onClick={handleAddToCart}
        className="bg-blue-500 text-white px-4 py-2 mt-2 rounded"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
