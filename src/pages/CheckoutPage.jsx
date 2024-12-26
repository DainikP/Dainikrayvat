import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/cartSlice';

const CheckoutPage = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      {cart.items.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <div>
          {cart.items.map(item => (
            <div key={item.id} className="flex justify-between items-center p-4 border-b">
              <div>
                <h2 className="text-lg font-bold">{item.title}</h2>
                <p>Quantity: {item.quantity}</p>
                <p>Price: ${item.totalPrice.toFixed(2)}</p>
              </div>
              <button
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                onClick={() => handleRemove(item.id)}
              >
                Remove
              </button>
            </div>
          ))}
          <div className="mt-4 text-right">
            <h2 className="text-xl font-bold">Total: ${cart.totalPrice.toFixed(2)}</h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;
