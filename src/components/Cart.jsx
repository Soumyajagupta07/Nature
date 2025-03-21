import React from 'react';
import CartItem from './CartItem';
import '../styles/cart.css';

const Cart = ({ cartItems }) => {
  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item, index) => (
          <CartItem key={index} item={item} />
        ))
      )}
    </div>
  );
};

export default Cart;