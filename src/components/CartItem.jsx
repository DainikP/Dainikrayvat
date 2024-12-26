import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart, updateCartQuantity } from '../redux/cart/cartActions';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeFromCart(item.id));
  };

  const handleQuantityChange = (quantity) => {
    if (quantity > 0) {
      dispatch(updateCartQuantity(item.id, quantity));
    }
  };

  return (
    <div className="flex items-center justify-between p-4 border rounded">
      <div className="flex items-center">
        <img
          src={item.thumbnail}
          alt={item.title}
          className="w-16 h-16 object-cover rounded mr-4"
        />
        <div>
          <h3 className="font-bold">{item.title}</h3>
          <p>${item.price.toFixed(2)}</p>
        </div>
      </div>
      <div className="flex items-center">
        <button
          className="px-2 py-1 bg-gray-300 rounded"
          onClick={() => handleQuantityChange(item.quantity - 1)}
        >
          -
        </button>
        <span className="mx-2">{item.quantity}</span>
        <button
          className="px-2 py-1 bg-gray-300 rounded"
          onClick={() => handleQuantityChange(item.quantity + 1)}
        >
          +
        </button>
        <button
          className="ml-4 px-2 py-1 bg-red-500 text-white rounded"
          onClick={handleRemove}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
