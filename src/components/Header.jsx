import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import '../styles/header.css';
import TreeBigLogo from '../images/Logo/logoTreeBig.jpg';

function Header() {
  return (
    <div className="header">
      <img src={TreeBigLogo} alt="Tree logo" />
      <h2>Nature's Paradise<br />
        <span>Make your Home a Greener Place !!</span></h2>
      <p className='cartlogin'>
        <Link to="/login">Login</Link>
        <Link to="/Cart">
        <FontAwesomeIcon icon={faShoppingCart} aria-hidden="true" /> </Link>
      </p>
      {/* <i class="fa fa-shopping-cart" aria-hidden="true"></i> */}
      
    </div>
  );
}

export default Header;