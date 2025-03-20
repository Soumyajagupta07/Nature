import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className="header">
      <img src="../images/Logo/logoTreeBig.jpg" alt="Tree logo" />
      <h2>Nature's Paradise<br />
        <span>Make your Home a Greener Place !!</span></h2>
      <p><a href="login.html">Login</a></p>
    </div>
  );
}

export default Header;