import React, { PropTypes } from 'react';
import CartItem from '../CartItem';
import './style.scss';

const BasketList = ({ catalog, actions }) => {
  const cartItems = catalog.map((item) => {
    return <CartItem key={item.id} item={item} actionText='Remove from cart' action={actions.removeFromCart} />;
  });
  return (
    <div className='basket-list'>
      {cartItems}
    </div>
  );
};

BasketList.propTypes = {
  catalog: PropTypes.array.isRequired,
  actions: PropTypes.shape({
    removeFromCart: PropTypes.func.isRequired
  })
};

export default BasketList;