import React from 'react';
import './Nav.css';

function Nav() {
  return (
    <div className="nav">
      <nav>
        <ul>
          <li><a href="index.html">HOME</a></li>
          <li>
            <div className="dropdown">
              <a href="products.html"><button className="dropbtn">PRODUCTS</button></a>
              <div className="dropdown-content">
                <a href="bonsai.html">Bonsai</a>
                <a href="#">Flower saplings</a>
                <a href="#">Fruit saplings</a>
                <a href="#">Organic manure</a>
                <a href="#">Gardening tools</a>
                <a href="#">Vegetable saplings</a>
                <a href="#">Fruit seeds</a>
                <a href="#">Vegetable seeds</a>
                <a href="#">Special Offers</a>
              </div>
            </div>
          </li>
          <li><a href="#">ABOUT US</a></li>
          <li><a href="#">CONTACT US</a></li>
          <li><a href="#">FEEDBACK</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
