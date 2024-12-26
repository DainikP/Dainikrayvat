import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart } from '../redux/cartSlice';

const Checkout = () => {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">Checkout</h2>
      <div>
        {cartItems.map(item => (
          <div key={item.id} className="flex justify-between items-center border-b py-2">
            <div>
              <h3 className="text-lg">{item.title}</h3>
              <p>${item.price} x {item.quantity}</p>
            </div>
            <button
              onClick={() => dispatch(removeFromCart(item))}
              className="text-red-500"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-bold">Total: ${totalPrice.toFixed(2)}</h3>
        <button
          onClick={() => dispatch(clearCart())}
          className="bg-green-500 text-white px-4 py-2 mt-2 rounded"
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default Checkout;
