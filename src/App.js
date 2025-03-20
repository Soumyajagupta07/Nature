// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Product from './components/Product';
import Menu from './components/Menu';
import Footer from './components/Footer';
import './App.css';
import appleBonsai from './images/Bonsai/Apple1.jpg';
import mangoBonsai from './images/Bonsai/Mango.jpg';
import grapeBonsai from './images/Bonsai/Grapes.jpg';
import orangeBonsai from './images/Bonsai/Orange.jpg';
import bodhiBonsai from './images/Bonsai/Bodhi.jpg';
import azaleaBonsai from './images/Bonsai/Azalea.jpg';
import mandarinCoolieHatBonsai from './images/Bonsai/MandarinCoolieHat.jpg';
import hibiscusBonsai from './images/Bonsai/Hibiscus.jpg';


const App = () => (
  <div className="container">
    <Header />
    <Nav />
    {/* <div className="menu">
      <p>PRODUCT CATEGORIES</p>
      <a className="links" href="/bonsai">Bonsai</a>
      <a className="links" href="#">Flower saplings</a>
      <a className="links" href="#">Fruit saplings</a>
      <a className="links" href="#">Organic manure</a>
      <a className="links" href="#">Gardening tools</a>
      <a className="links" href="#">Vegetable saplings</a>
      <a className="links" href="#">Fruit seeds</a>
      <a className="links" href="#">Vegetable seeds</a>
      <a className="links" href="#">Special Offers</a>
    </div> */}
    <Menu/>
    <div className="productsAvailable">
      <h2>Products Available</h2>
      <h3>Bonsai</h3>
    </div>
    <div className="bonsai">
      <Product image={appleBonsai} name="Apple" link="/appleBonsai" />
      <Product image={mangoBonsai} name="Mango" link="/mangoBonsai" />
      <Product image={grapeBonsai} name="Grape" link="/grapeBonsai" />
      <Product image={orangeBonsai} name="Orange" link="/orangeBonsai" />
      <Product image={bodhiBonsai} name="Bodhi" link="/bodhiBonsai" />
      <Product image={azaleaBonsai} name="Azalea" link="#" />
      <Product image={mandarinCoolieHatBonsai} name="MandarinCoolieHat" link="#" />
      <Product image={hibiscusBonsai} name="Hibiscus" link="#" />
    </div>
    <Footer />
  </div>
);

export default App;