import React from 'react';
import '../styles/header.css';
import TreeBigLogo from '../images/Logo/logoTreeBig.jpg'

function Header() {
  return (
    <div className="header">
      <img src={TreeBigLogo} alt="Tree logo" />
      <h2>Nature's Paradise<br />
        <span>Make your Home a Greener Place !!</span></h2>
      <p><a href="login.html">Login</a></p>
    </div>
  );
}

export default Header;