import React from 'react';

const Product = ({ image, name, link }) => (
  <div>
            <div className="productsAvailable">
              <h2>Products Available</h2>
              <h3>Bonsai</h3>
            </div>
            <div className="bonsai">
              {Product.map((product, index) => (
                <Product key={index} image={product.image} name={product.name} link={product.link} />
              ))}
            </div>
          </div>
)
//   <div className="fruitbonsai">
//     <a className="bonsaiBox" href={link}>
//       <img src={image} alt={`${name} bonsai`} />
//       <div className="box">
//         <h3>{name} Bonsai</h3>
//       </div>
//     </a>
//   </div>
// );


export default Product;
