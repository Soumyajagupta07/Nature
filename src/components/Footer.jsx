import React from 'react';
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
    links: ['Home', 'Products available', 'About Us', 'Contact us', 'Feedback'],
  },
  {
    title: 'My Accounts',
    links: ['My account', 'My orders', 'My credit slips', 'My addresses', 'My personnel information'],
  },
  {
    title: 'Useful Links',
    links: ['Specials', 'New Products', 'Best sellers', 'Our store(s)!', 'Contact us', 'Shipping and Delivery policy', 'Privacy Policy', 'Frequently Asked Questions', 'Terms and Conditions of Use'],
  },
];

function Footer() {
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
                  <li key={linkIndex}>{link}</li>
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