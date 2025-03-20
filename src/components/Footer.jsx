import React from 'react';
import '../styles/footer.css';
import AllLogo from '../images/Logo/AllLogo.jpg';
import visaLogo from '../images/Logo/visaLogo.jpg'

function Footer() {
  return (
    <footer>
      <div className="followSupportAccountLinks">
        <div className="section">
          <h3>Follow Us</h3>
          <p><img src={AllLogo} alt="logo" /><br />
            We also accept:<br /><br />
            <img src={visaLogo} alt="visaLogo" /></p>
        </div>
        <div className="section">
          <h3>Support</h3>
          <ul>
            <li>Home</li>
            <li>Products available</li>
            <li>About Us</li>
            <li>Contact us</li>
            <li>Feedback</li>
          </ul>
        </div>
        <div className="section">
          <h3>My Accounts</h3>
          <ul>
            <li>My account</li>
            <li>My orders</li>
            <li>My credit slips</li>
            <li>My addresses</li>
            <li>My personnel information</li>
          </ul>
        </div>
        <div className="section">
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