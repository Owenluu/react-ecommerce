import React from "react";
import './featured-product.styles.scss';

const FeaturedProduct=(product) => {
  const {title, imageURL, price} = product;

  return (
    <dive className='featured-product'>
      <div className='featured-image'>
        <img src={imageURL} alt='product'/>

      </div>
      <div className='name-price'>
        <h3>{title}</h3>
        <p>${price}</p>
        <button className='button is-black nomad-btn'>ADD TO CART</button>
      </div>
    </dive>
  );
}

export default FeaturedProduct; 