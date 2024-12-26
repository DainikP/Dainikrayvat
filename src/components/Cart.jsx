import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from './CartItem';
import { clearCart } from '../redux/cart/cartActions';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  if (cartItems.length === 0) {
    return <div className="container mx-auto p-4">Your cart is empty!</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      <div className="space-y-4">
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <div className="mt-4 p-4 bg-gray-100 rounded">
        <h2 className="text-xl font-bold">Total: ${totalPrice.toFixed(2)}</h2>
        <button
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        <button className="mt-4 ml-4 px-4 py-2 bg-blue-500 text-white rounded">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
