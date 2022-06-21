import React, { useContext } from "react";
import { isIncart } from '../../helpers';
import { CartContext } from '../../context/cart-context'
import { withRouter } from 'react-router-dom';
import './featured-product.styles.scss';

const FeaturedProduct=(props) => {
  const { title, imageUrl, price, history, id, description } = props;
  const product = { title, imageUrl, price, id, description };
  const { addProduct, cartItems } = useContext(CartContext);

  return (
    <div className='featured-product'>
      <div className='featured-image' onClick={() => history.push(`/product/${id}`)}>
        <img src={imageUrl} alt='product'/>
      </div>
      <div className='name-price'>
        <h3>{title}</h3>
        <p>${price}</p>
        {
          !isIncart(product, cartItems) &&
          <button 
            className='button is-black nomad-btn'
            onClick={()=> addProduct(product)}>
              ADD TO CART</button>
        }
        {
          isIncart(product, cartItems) &&
          <button 
          className='button is-white nomad-btn'
          id='btn-white-outline'
          onClick={()=> {}}>
            ADD MORE</button>
        }
      </div>
    </div>
  );
}

export default withRouter(FeaturedProduct); 