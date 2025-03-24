import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import Contact from './components/Contact';
import Feedback from './components/Feedback';
import Footer from './components/Footer';
import Cart from './components/Cart';
import Product from './components/Product';
import Home from './components/Home';
import About from './components/About';
import LoginPage from './components/login';
import ShippingPolicy from './components/ShippingPolicy';
import PrivacyPolicy from './components/PrivacyPolicy';
import FAQ from './components/FAQ';
import Terms from './components/Terms';
import Specials from './components/Specials';
import NewProducts from './components/NewProducts';
import BestSellers from './components/BestSeller';
import Stores from './components/Stores';
import appleBonsai from './images/Bonsai/Apple1.jpg';
import mangoBonsai from './images/Bonsai/Mango.jpg';
import grapeBonsai from './images/Bonsai/Grapes.jpg';
import orangeBonsai from './images/Bonsai/Orange.jpg';
import bodhiBonsai from './images/Bonsai/Bodhi.jpg';
import azaleaBonsai from './images/Bonsai/Azalea.jpg';
import mandarinCoolieHatBonsai from './images/Bonsai/MandarinCoolieHat.jpg';
import hibiscusBonsai from './images/Bonsai/Hibiscus.jpg';
import './styles/style.css';
import './styles/footerCompo.css';

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

const App = () => (
  <Router>
    <div className="container">
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        {/* <Route path="/product" element={<Product />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/shipping-policy" element={<ShippingPolicy />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/specials" element={<Specials />} />
        <Route path="/new-products" element={<NewProducts />} />
        <Route path="/best-sellers" element={<BestSellers />} />
        <Route path="/stores" element={<Stores />} />
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
      <Footer />
    </div>
  </Router>
);

export default App;