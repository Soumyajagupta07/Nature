import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer>
      <div className="follow">
        <h3>Follow Us</h3>
        <p><img src="Logo/AllLogo.jpg" alt="logo" /><br />
          We also accept:<br /><br />
          <img src="Logo/visaLogo.jpg" alt="visaLogo" /></p>
      </div>
      <div className="support">
        <h3>Support</h3>
        <ul>
          <li>Home</li>
          <li>Products available</li>
          <li>About Us</li>
          <li>Contact us</li>
          <li>Feedback</li>
        </ul>
      </div>
      <div className="account">
        <h3>My Accounts</h3>
        <ul>
          <li>My account</li>
          <li>My orders</li>
          <li>My credit slips</li>
          <li>My addresses</li>
          <li>My personnel information</li>
        </ul>
      </div>
      <div className="useful">
        <h3>Useful Links</h3>
        <ul>
          <li>Specials</li>
          <li>New Products</li>
          <li>Best sellers</li>
          <li>Our store(s)!</li>
          <li>Contact us</li>
          <li>Shipping and Delivery policy</li>
          <li>Privacy Policy</li>
          <li>Frequently Asked Questions</li>
          <li>Terms and Conditions of Use</li>
        </ul>
      </div>
      <div className="copyright">
        <h3>©2017 Nature's Paradise, All rights reserved.</h3>
      </div>
      <div className="address">
        <h3>Written by Nature's Paradise.<br />
          Visit us at: natureparadise.in or at MG Road, Bangalore, KA, India </h3>
      </div>
    </footer>
  );
}

export default Footer;