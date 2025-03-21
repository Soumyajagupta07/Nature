import React from 'react';
import '../styles/cartItem.css';

const CartItem = ({ item }) => {
  return (
    <div className="cartItem">
      <img src={item.image} alt={item.name} className="cartItemImage" />
      <div className="cartItemDetails">
        <h3>{item.name}</h3>
        <p>Quantity: {item.quantity}</p>
        <p>Price: ${item.price}</p>
      </div>
    </div>
  );
};

export default CartItem;