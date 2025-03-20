import React from 'react';

const Product = ({ image, name, link }) => (
  <div className="fruitbonsai">
    <a className="bonsaiBox" href={link}>
      <img src={image} alt={`${name} bonsai`} />
      <div className="box">
        <h3>{name} Bonsai</h3>
      </div>
    </a>
  </div>
);

export default Product;