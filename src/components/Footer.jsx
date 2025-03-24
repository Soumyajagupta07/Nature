

import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/footer.css';
import AllLogo from '../images/Logo/AllLogo.jpg';
import visaLogo from '../images/Logo/visaLogo.jpg';

const footerData = [
  {
    title: 'Follow Us',
    content: (
      <>
        <img src={AllLogo} alt="logo" /><br />
        We also accept:<br /><br />
        <img src={visaLogo} alt="visaLogo" />
      </>
    ),
  },
  {
    title: 'Support',
    links: [
      { name: 'Home', path: '/' },
      { name: 'Products available', path: '/products' },
      { name: 'About Us', path: '/about' },
      { name: 'Contact us', path: '/contact' },
      { name: 'Feedback', path: '/feedback' },
    ],
  },
  {
    title: 'My Accounts',
    links: [
      { name: 'My account', path: '/account' },
      { name: 'My orders', path: '/orders' },
      { name: 'My credit slips', path: '/credit-slips' },
      { name: 'My addresses', path: '/addresses' },
      { name: 'My personnel information', path: '/personal-info' },
    ],
  },
  {
    title: 'Useful Links',
    links: [
      { name: 'Specials', path: '/specials' },
      { name: 'New Products', path: '/new-products' },
      { name: 'Best sellers', path: '/best-sellers' },
      { name: 'Our store(s)!', path: '/stores' },
      { name: 'Contact us', path: '/contact' },
      { name: 'Shipping and Delivery policy', path: '/shipping-policy' },
      { name: 'Privacy Policy', path: '/privacy-policy' },
      { name: 'Frequently Asked Questions', path: '/faq' },
      { name: 'Terms and Conditions of Use', path: '/terms' },
    ],
  },
];

function Footer() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <footer>
      <div className="followSupportAccountLinks">
        {footerData.map((section, index) => (
          <div className="section" key={index}>
            <h3>{section.title}</h3>
            {section.content ? (
              <p>{section.content}</p>
            ) : (
              <ul>
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex} onClick={() => handleNavigation(link.path)}>
                    {link.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
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