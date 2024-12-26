import React from 'react';
import { useSelector } from 'react-redux';

const CheckoutPage = () => {
  const cartItems = useSelector((state) => state.cart.items);

  // Safely calculate total price
  const totalPrice = cartItems.reduce((total, item) => {
    const itemPrice = item?.price || 0; // Default to 0 if price is undefined
    const itemQuantity = item?.quantity || 1; // Default to 1 if quantity is undefined
    return total + itemPrice * itemQuantity;
  }, 0);

  if (cartItems.length === 0) {
    return <div className="container mx-auto p-4">Your cart is empty!</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      <div className="space-y-4">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between p-4 border rounded"
          >
            <div className="flex items-center">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-16 h-16 object-cover rounded mr-4"
              />
              <div>
                <h3 className="font-bold">{item.title}</h3>
                <p>${item?.price?.toFixed(2)}</p>
              </div>
            </div>
            <div>
              <p>Quantity: {item?.quantity || 1}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 p-4 bg-gray-100 rounded">
        <h2 className="text-xl font-bold">Total: ${totalPrice.toFixed(2)}</h2>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
          Place Order
        </button>
      </div>
    </div>
  );
};

export default CheckoutPage;
