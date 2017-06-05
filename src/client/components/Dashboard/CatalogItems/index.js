import React, { PropTypes } from 'react';
import CartItem from '../CartItem';
import './style.scss';

const CatalogItems = ({ catalog, actions }) => {
  const cartItems = catalog.map((item) => {
    return <CartItem className='cart-item-highlight' key = {item.id} item = {item} actionText = 'Add to cart' action = {actions.addToCart}/>;
  });
  return (
    <div className='catalog-items'>
       {cartItems}
       <div className="clear"></div>
    </div>
  );
};

CatalogItems.propTypes = {
  catalog : PropTypes.array.isRequired,
  actions : PropTypes.shape({
    addToCart : PropTypes.func.isRequired
  })
};

export default CatalogItems;