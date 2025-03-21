import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/nav.css';

function Nav() {
  return (
    <div className="nav">
      <nav>
        <ul>
          <li><Link to="/">HOME</Link></li>
          <li>
            <div className="dropdown">
              <Link to="/products"><button className="dropbtn">PRODUCTS</button></Link>
              <div className="dropdown-content">
                <Link to="/bonsai">Bonsai</Link>
                <Link to="#">Flower saplings</Link>
                <Link to="#">Fruit saplings</Link>
                <Link to="#">Organic manure</Link>
                <Link to="#">Gardening tools</Link>
                <Link to="#">Vegetable saplings</Link>
                <Link to="#">Fruit seeds</Link>
                <Link to="#">Vegetable seeds</Link>
                <Link to="#">Special Offers</Link>
              </div>
            </div>
          </li>
          <li><Link to="/about">ABOUT US</Link></li>
          <li><Link to="/contact">CONTACT US</Link></li>
          <li><Link to="/feedback">FEEDBACK</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;

// import React from 'react';
// import { Link } from 'react-router-dom';
// import '../styles/nav.css';

// const Nav = () => {
//   return (
//     <nav>
//       <ul>
//         <li><Link to="/">HOME</Link></li>
//         <li><Link to="/products">PRODUCTS</Link></li>
//         <li><Link to="/about">ABOUT US</Link></li>
//         <li><Link to="/contact">CONTACT US</Link></li>
//         <li><Link to="/feedback">FEEDBACK</Link></li>
//       </ul>
//     </nav>
//   );
// };

// export default Nav;