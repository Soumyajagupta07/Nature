import React from 'react';
import { useNavigate } from 'react-router-dom';
import CartItem from './CartItem';
import '../styles/cart.css';

const Cart = ({ cartItems = [] }) => {
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate('/checkout');
  };

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item, index) => (
            <CartItem key={index} item={item} />
          ))}
          <button onClick={handleCheckout}>Proceed to Checkout</button>
        </>
      )}
    </div>
  );
};

export default Cart;