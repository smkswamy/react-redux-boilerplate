import React, { PropTypes } from 'react';
import './style.scss';

const CartItem = ({ item, actionText, action, className }) => {
  const { name, price, imageURL, currency } = item;
  return (
    <div className={`cart-item ${className}`}>
      <img className='cart-item-image' src={imageURL}/>
      <div className='cart-item-name'>{name}</div>
      <div className='cart-item-price'>{currency}{price}</div>
      <div className='cart-item-action'>
        <button className='cart-item-action-button' onClick={(event) => action(item)} >{actionText}</button>
      </div>
    </div>

  );
};

CartItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    imageURL: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired
  }),
  actionText: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired
};

export default CartItem;