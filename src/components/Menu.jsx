import React from 'react';
import '../styles/menu.css';

function Menu() {
  return (
    <div className="menu">
      <p>PRODUCT CATEGORIES</p>
      <a className="links" href="bonsai.html">Bonsai</a>
      <a className="links" href="#">Flower saplings</a>
      <a className="links" href="#">Fruit saplings</a>
      <a className="links" href="#">Organic manure</a>
      <a className="links" href="#">Gardening tools</a>
      <a className="links" href="#">Vegetable saplings</a>
      <a className="links" href="#">Fruit seeds</a>
      <a className="links" href="#">Vegetable seeds</a>
      <a className="links" href="#">Special Offers</a>
    </div>
  );
}

export default Menu;