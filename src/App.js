import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Menu from './components/Menu';
import MainPic from './components/MainPic';
import Contact from './components/Contact';
import Feedback from './components/Feedback';
import Footer from './components/Footer';
import Product from './components/Product';
import About from './components/About';
import LoginPage from './components/login'; 
import Home from './components/Home'; 
import Cart from './components/Cart';
import appleBonsai from './images/Bonsai/Apple1.jpg';
import mangoBonsai from './images/Bonsai/Mango.jpg';
import grapeBonsai from './images/Bonsai/Grapes.jpg';
import orangeBonsai from './images/Bonsai/Orange.jpg';
import bodhiBonsai from './images/Bonsai/Bodhi.jpg';
import azaleaBonsai from './images/Bonsai/Azalea.jpg';
import mandarinCoolieHatBonsai from './images/Bonsai/MandarinCoolieHat.jpg';
import hibiscusBonsai from './images/Bonsai/Hibiscus.jpg';

const products = [
  { image: appleBonsai, name: "Apple", link: "/appleBonsai" },
  { image: mangoBonsai, name: "Mango", link: "/mangoBonsai" },
  { image: grapeBonsai, name: "Grape", link: "/grapeBonsai" },
  { image: orangeBonsai, name: "Orange", link: "/orangeBonsai" },
  { image: bodhiBonsai, name: "Bodhi", link: "/bodhiBonsai" },
  { image: azaleaBonsai, name: "Azalea", link: "#" },
  { image: mandarinCoolieHatBonsai, name: "MandarinCoolieHat", link: "#" },
  { image: hibiscusBonsai, name: "Hibiscus", link: "#" },
];

const routes = [
  { path: "/appleBonsai", element: <Product name="Apple Bonsai" image={appleBonsai} /> },
  { path: "/mangoBonsai", element: <Product name="Mango Bonsai" image={mangoBonsai} /> },
  { path: "/grapeBonsai", element: <Product name="Grape Bonsai" image={grapeBonsai} /> },
  { path: "/orangeBonsai", element: <Product name="Orange Bonsai" image={orangeBonsai} /> },
  { path: "/bodhiBonsai", element: <Product name="Bodhi Bonsai" image={bodhiBonsai} /> },
];

const App = () => {
  
    const [cartItems, setCartItems] = useState(products);
  return(
  <Router>
    <div className="container">
      <Header />
      <Nav />
      <Menu />
      <MainPic />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/product" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} />} />
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
      <Footer />
    </div>
  </Router>
  )
};

export default App;